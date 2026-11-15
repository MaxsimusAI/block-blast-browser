/* Reveal the original game only once its visible board and offered pieces have
 * actual textures. UI.open and a score label precede these asynchronous loads. */
(() => {
  const module = name => { try { return window.__require?.(name); } catch { return null; } };
  const component = name => module(name)?.default;
  const visible = node => {
    if (!node || node.activeInHierarchy === false) return false;
    for (let current = node; current; current = current.parent) {
      // Scene inherits Node but Cocos exposes its visual-property getters as
      // unsupported operations. Only rendered nodes affect visibility here.
      if (window.cc?.Scene && current instanceof window.cc.Scene) break;
      if (current.opacity === 0 || current.active === false || current.scaleX === 0 || current.scaleY === 0) return false;
    }
    return true;
  };
  const children = (node, type) => type && node?.getComponentsInChildren ? node.getComponentsInChildren(type) : [];
  function spriteReady(sprite) {
    if (!sprite || sprite.enabled === false || !visible(sprite.node)) return false;
    const frame = sprite.spriteFrame;
    if (!frame) return false;
    const texture = frame.getTexture?.() || frame._texture;
    if (!texture || texture.loaded !== true || !(texture.width > 0 && texture.height > 0)) return false;
    return typeof frame.textureLoaded !== 'function' || frame.textureLoaded();
  }
  function blockReady(block) {
    if (!block || !visible(block.node)) return false;
    if (spriteReady(block.block)) return true;
    // Original skins put their primary Sprite below block.node. The separate
    // shadow Sprite intentionally has no frame in several valid configurations.
    return children(block.block?.node, window.cc?.Sprite).some(spriteReady);
  }
  function countShape(id) {
    let shape = module('BlocksProducerConfig')?.blockPosInfo?.[id - 1];
    if (!shape) shape = module('AbnormalBlockGameInfo')?.abnormalBlockGameInfo?.getBlockListById?.(id);
    if (!Array.isArray(shape)) return null;
    return shape.reduce((sum, row) => sum + row.filter(cell => cell === 1).length, 0);
  }
  function homeVisible() {
    const url = module('PrefabConfig')?.PrefabConfig?.HomePage?.url;
    const home = url && module('UI')?.UI?.uiCache?.[url]?.node;
    return !!home && visible(home);
  }
  function probe(mode = 'gameplay') {
    const cc = window.cc;
    const scene = cc?.director?.getScene();
    const state = { ready: false, reason: 'scene', loaded: 0, total: 0 };
    if (!scene) return state;
    // Only an explicit HomePage open event can take this branch. A saved game
    // that opens its menu must not wait for an inactive gameplay board.
    if (mode === 'home' && homeVisible()) return { ...state, ready: true, reason: 'home' };
    const Block = component('Block');
    const boards = children(scene, component('Board')).filter(board => visible(board.node));
    const producers = children(scene, component('BlocksProducer')).filter(producer => visible(producer.node));
    if (!Block || !boards.length || !producers.length) return { ...state, reason: 'gameplay-components' };
    let initialized = true;
    let complete = true;
    for (const board of boards) {
      const rows = board.state?.boards;
      if (!board.isInit || !Array.isArray(rows) || !rows.length || rows.some(row => !Array.isArray(row))) {
        initialized = false;
        continue;
      }
      const expected = rows.flat().filter(color => color !== -1 && color !== 10).length;
      const blocks = children(board.blocks, Block).filter(block => visible(block.node) && block.state?.color !== -1 && block.state?.color !== 10);
      state.total += expected;
      state.loaded += Math.min(expected, blocks.filter(blockReady).length);
      if (blocks.length < expected || blocks.some(block => !blockReady(block))) complete = false;
    }
    const Item = component('BlocksProducerItem');
    for (const producer of producers) {
      const ids = producer.state?.producerBlocks;
      if (!producer.loaded || !producer.isItemSlotsBuilt || !Array.isArray(ids)) {
        initialized = false;
        continue;
      }
      const items = children(producer.blocksContainer, Item);
      for (let index = 0; index < ids.length; index++) {
        const id = ids[index];
        if (id === -1) continue;
        const expected = countShape(id);
        const item = items.find(candidate => candidate.state?.index === index && candidate.state?.id === id);
        if (expected === null || expected === 0) { initialized = false; continue; }
        state.total += expected;
        if (!item || !visible(item.node)) { complete = false; continue; }
        const cells = (item.caches || []).slice(0, expected);
        const loaded = cells.filter(node => blockReady(node?.getComponent?.(Block))).length;
        state.loaded += loaded;
        if (cells.length !== expected || loaded !== expected) complete = false;
      }
    }
    state.ready = initialized && complete && state.loaded === state.total;
    state.reason = state.ready ? 'playable' : initialized ? 'block-textures' : 'gameplay-data';
    return state;
  }
  let candidate = null;
  let timer = null;
  let scheduled = false;
  let lastProgress = '';
  function check() {
    if (!candidate || window.runtimeTest?.ready) return;
    const state = probe(candidate.mode);
    if (window.runtimeTest) window.runtimeTest.readiness = state;
    const progress = JSON.stringify(state);
    if (progress !== lastProgress) {
      lastProgress = progress;
      window.dispatchEvent(new CustomEvent('blockblast-loading', { detail: { phase: 'blocks', ...state } }));
    }
    if (!state.ready || scheduled) return;
    scheduled = true;
    // Let Cocos submit the newly loaded sprites before fading the cover.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      scheduled = false;
      if (!candidate || window.runtimeTest?.ready || !probe(candidate.mode).ready) return;
      window.runtimeTest.ready = true;
      if (timer !== null) clearInterval(timer);
      timer = null;
      window.dispatchEvent(new CustomEvent('blockblast-ready', { detail: { view: candidate.view } }));
    }));
  }
  function request(view, mode = 'gameplay') {
    if (window.runtimeTest?.ready) return;
    // A nested Board open during HomePage construction must not undo an
    // explicitly opened home screen before its first frame is drawn.
    if (!candidate || mode === 'home' || candidate.mode !== 'home' || !homeVisible()) candidate = { view, mode };
    if (timer === null) timer = setInterval(check, 100);
    check();
  }
  window.BlockBlastReadiness = { request, probe, check };
})();
