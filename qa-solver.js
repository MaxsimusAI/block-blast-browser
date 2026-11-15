/* Disposable local QA only. Plays through original touch handlers; never writes
 * board, score, progression, producer pieces, completion flags, or save data. */
(() => {
  if (location.port !== '4174' || !['localhost', '127.0.0.1'].includes(location.hostname) || new URLSearchParams(location.search).get('debug') !== '1') return;
  const R = name => window.__require(name);
  const qa = window.runtimeTest.qa;
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const clone = value => JSON.parse(JSON.stringify(value));
  const shape = id => {
    const matrix = R('BlocksProducerConfig').blockPosInfo[id - 1];
    if (!matrix) throw Error('Unsupported shape id ' + id);
    const cells = [];
    matrix.forEach((row, y) => row.forEach((v, x) => { if (v === 1) cells.push([y, x]); }));
    return {id, cells, height: matrix.length, width: Math.max(...matrix.map(r => r.length))};
  };
  const occupancy = board => board.map(row => row.reduce((bits, n, x) => bits | (n >= 0 ? 1 << x : 0), 0));
  function simulate(rows, piece, row, col) {
    const next = rows.slice();
    for (const [dy, dx] of piece.cells) {
      const y = row + dy, x = col + dx;
      if (y < 0 || y > 7 || x < 0 || x > 7 || (rows[y] & (1 << x))) return null;
      next[y] |= 1 << x;
    }
    const clearRows = [], clearCols = [];
    for (let y = 0; y < 8; y++) if (next[y] === 255) clearRows.push(y);
    for (let x = 0; x < 8; x++) if (next.every(r => r & (1 << x))) clearCols.push(x);
    for (const y of clearRows) next[y] = 0;
    for (const x of clearCols) for (let y = 0; y < 8; y++) next[y] &= ~(1 << x);
    return {rows: next, lines: clearRows.length + clearCols.length, clear: next.every(v => !v)};
  }
  const popcount = value => { let n = 0; for (; value; value &= value - 1) n++; return n; };
  function heuristic(rows) {
    let used = 0, progress = 0, isolated = 0, freeSquares = 0;
    for (let y = 0; y < 8; y++) { const n = popcount(rows[y]); used += n; progress += n * n; }
    for (let x = 0; x < 8; x++) { let n = 0; for (let y = 0; y < 8; y++) if (rows[y] & (1 << x)) n++; progress += n * n; }
    for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) {
      if (!(rows[y] & (1 << x))) {
        let open = 0;
        for (const [dy, dx] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) { const yy = y + dy, xx = x + dx; if (yy >= 0 && yy < 8 && xx >= 0 && xx < 8 && !(rows[yy] & (1 << xx))) open++; }
        if (!open) isolated++;
      }
      if (y < 6 && x < 6 && !((rows[y] | rows[y + 1] | rows[y + 2]) & (7 << x))) freeSquares++;
    }
    return progress * 0.12 - used * 2 - isolated * 15 + freeSquares * 1.2;
  }
  function suggest(state = qa.state(), beamWidth = 90) {
    const pieces = state.pieces.map((id, slot) => id < 0 ? null : {...shape(id), slot}).filter(Boolean);
    if (!pieces.length) return null;
    let beam = [{rows: occupancy(state.board), used: 0, value: 0, sequence: []}], best = null;
    for (let depth = 0; depth < pieces.length; depth++) {
      const next = [];
      for (const node of beam) for (let i = 0; i < pieces.length; i++) {
        if (node.used & (1 << i)) continue;
        const piece = pieces[i];
        for (let row = 0; row <= 8 - piece.height; row++) for (let col = 0; col <= 8 - piece.width; col++) {
          const sim = simulate(node.rows, piece, row, col); if (!sim) continue;
          const value = node.value + sim.lines * 300 + (sim.clear ? 600 : 0) + piece.cells.length;
          next.push({rows: sim.rows, used: node.used | (1 << i), value, rank: value + heuristic(sim.rows), sequence: [...node.sequence, {slot: piece.slot, id: piece.id, row, col, predictedLines: sim.lines}]});
        }
      }
      if (!next.length) break;
      next.sort((a, b) => b.rank - a.rank);
      beam = next.slice(0, beamWidth); best = beam[0];
    }
    return best ? {move: best.sequence[0], sequence: best.sequence, evaluation: best.rank} : null;
  }
  function eventAt(point) {
    const get = () => cc.v2(point.x, point.y);
    return {getLocation: get, getLocationX: () => point.x, getLocationY: () => point.y, getID: () => 0, touch: {getLocation: get, getID: () => 0}, stopPropagation() {}, stopPropagationImmediate() {}, preventDefault() {}};
  }
  function controller() {
    return cc.director.getScene().getComponentsInChildren(R('BlocksProducerTouch').default).find(x => x.enabledInHierarchy && x.node.activeInHierarchy);
  }
  function previewCells(touch) {
    return Object.entries(touch._showShaders || {}).flatMap(([r, cols]) => Object.keys(cols).map(c => `${r},${c}`)).sort();
  }
  let running = false, stopRequested = false;
  async function place(move, settleMs = 400) {
    const before = qa.state(), id = before.pieces[move.slot], piece = shape(id);
    if (id !== move.id) throw Error(`Piece changed before placement: slot ${move.slot}: ${id} != ${move.id}`);
    if (!simulate(occupancy(before.board), piece, move.row, move.col)) throw Error('Refusing illegal placement');
    const touch = controller(); if (!touch) throw Error('No active original BlocksProducerTouch');
    const producer = touch.blocksProducerContainer.getComponentInChildren(R('BlocksProducer').default);
    const node = producer.node.getChildByName('blocksContainer').children.find(n => n.opacity && n.activeInHierarchy && n.getComponent(R('BlocksProducerItem').default)?.state.index === move.slot);
    if (!node) throw Error('No active producer node for slot ' + move.slot);
    const rect = node.getBoundingBoxToWorld(), point = cc.v2(rect.x + rect.width / 2, rect.y + rect.height / 2);
    touch.onTouchStart(eventAt(point));
    if (touch._selectItem !== node) throw Error('Original touch start did not select requested piece');
    await sleep(40);
    touch.onTouchMove(eventAt(point));
    const first = node.getComponent(R('BlocksProducerItem').default).caches.find(n => n && cc.isValid(n) && n.opacity);
    if (!first) throw Error('Selected shape has no visible cells');
    const [dy, dx] = piece.cells[0];
    const renderer = R('BoardRendererInfo').boardRendererInfo;
    const target = renderer.blocks[move.row + dy][move.col + dx];
    if (!target) throw Error('No target board cell');
    const expected = piece.cells.map(([r, c]) => `${move.row + r},${move.col + c}`).sort();
    let preview = [];
    for (let attempt = 0; attempt < 8; attempt++) {
      const targetWorld = target.convertToWorldSpaceAR(cc.Vec2.ZERO), currentWorld = first.convertToWorldSpaceAR(cc.Vec2.ZERO);
      const dest = node.parent.convertToNodeSpaceAR(targetWorld), current = node.parent.convertToNodeSpaceAR(currentWorld);
      const ratio = touch.state.ratioValue ?? 1.5;
      point.x += (dest.x - current.x) / touch.getRatioValue(ratio, 'X');
      point.y += (dest.y - current.y) / touch.getRatioValue(ratio, 'Y');
      touch.onTouchMove(eventAt(point));
      preview = previewCells(touch);
      if (touch._canSnap && JSON.stringify(preview) === JSON.stringify(expected)) break;
      await sleep(20);
    }
    if (!touch._canSnap || JSON.stringify(preview) !== JSON.stringify(expected)) {
      touch.backBlocks();
      touch.beforeOnTouchEnd(eventAt(point));
      throw Error('Original touch preview rejected target: ' + JSON.stringify({move, expected, preview, canSnap: touch._canSnap}));
    }
    touch.beforeOnTouchEnd(eventAt(point));
    await sleep(settleMs);
    const after = qa.state();
    if (JSON.stringify(after.board) === JSON.stringify(before.board) && after.score === before.score) throw Error('Touch end made no observable game change');
    const entry = {move: clone(move), preview, beforeScore: before.score, afterScore: after.score, beforeLevel: before.chapter.levelIndex, afterLevel: after.chapter.levelIndex};
    window.runtimeTest.qa.solver.history.push(entry);
    return entry;
  }
  async function run({goal, maxMoves = 80, settleMs = 500} = {}) {
    if (running) throw Error('QA solver is already running');
    running = true; stopRequested = false;
    const start = qa.state();
    try {
      for (let i = 0; i < maxMoves && !stopRequested; i++) {
        const state = qa.state();
        if ((goal !== undefined && state.score >= goal) || state.chapter.levelIndex !== start.chapter.levelIndex) { await sleep(900); return {reason: 'original-game-goal-reached', moves: i, state: qa.state()}; }
        const next = suggest(state);
        if (!next) { await sleep(600); const retry = suggest(); if (!retry) return {reason: 'no-legal-move', moves: i, state: qa.state()}; await place(retry.move, settleMs); }
        else await place(next.move, settleMs);
      }
      return {reason: stopRequested ? 'stopped' : 'move-budget', state: qa.state()};
    } finally { running = false; }
  }
  qa.solver = {shape, suggest, place, run, stop() { stopRequested = true; }, history: [], get running() { return running; }};
})();
