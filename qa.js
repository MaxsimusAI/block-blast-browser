/* Developer-only observations and the same event entry points used by UI.
 * This file is loaded only with ?debug=1. It never sets a score or completes
 * a level. Use a separate browser profile for destructive persistence QA. */
(() => {
  if (new URLSearchParams(location.search).get('debug') !== '1') return;
  const module = name => { try { return window.__require(name); } catch { return null; } };
  const value = (name, key) => module(name)?.[key];
  const read = (object, key) => { try { return object?.[key]; } catch { return null; } };
  const copy = value => value === undefined ? null : JSON.parse(JSON.stringify(value));
  const dispatch = (moduleName, exportName, ...args) => {
    const Event = value(moduleName, exportName);
    if (!Event) throw new Error('Original event not loaded: ' + moduleName);
    value('EventManager', 'EventManager').dispatchModuleEvent(new Event(...args));
  };
  window.runtimeTest.qa = {
    state() {
      const storage = value('Storage', 'storage');
      const game = value('GameInfo', 'gameInfo');
      const score = value('ScoreInfo', 'scoreInfo');
      const guide = value('ClassGuideInfo', 'classGuideInfo');
      const chapter = value('ChapterGameInfo', 'chapterGameInfo');
      const config = value('ChapterConfigInfo', 'chapterConfigInfo');
      const currentScene = cc.director.getScene();
      const keys = ['classScore', 'classHighScore', 'classHighRecordScore', 'classGuideStep', 'classGuideTotalStep', 'isFinishedGuide', 'classRoundNum', 'classGameNum', 'chapterPeriodsIndex', 'chapterNum', 'chapterScore', 'chapterCondition', 'chapterCollectRemainCollectItems'];
      return copy({
        scene: currentScene?.name,
        gameMode: read(game, 'gameMode'),
        gameType: read(game, 'gameType'),
        score: read(score, 'score'),
        highScore: read(score, 'highScore'),
        guide: { step: read(guide, 'step'), total: read(guide, 'totalStep'), showing: read(guide, 'show'), finished: read(guide, 'isFinishedGuide') },
        chapter: { stage: read(chapter, 'stage'), levelIndex: read(chapter, 'chapterNum'), levelsInStage: read(chapter, 'chapterAllNum'), condition: read(chapter, 'chapterCondition'), remote: read(config, 'isRemote') },
        board: read(value('BoardInfo', 'boardInfo'), 'faceBlocks'),
        pieces: read(value('BlocksProducerInfo', 'blocksProducerInfo'), 'producerBlocks'),
        saved: Object.fromEntries(keys.map(key => [key, storage?.getItem(key, null)])),
        labels: currentScene?.getComponentsInChildren(cc.Label).filter(label => label.node.activeInHierarchy).map(label => ({node: label.node.name, text: label.string})),
        unavailableBundles: [...window.runtimeTest.unavailableBundles],
        unavailableResources: [...window.runtimeTest.unavailableResources]
      });
    },
    home() { dispatch('E_Game_BackHome', 'E_Game_BackHome'); },
    classic() { dispatch('E_HomePage_Game', 'E_HomePage_Game', value('GameType', 'GameType').Class); },
    adventure(state) { dispatch('E_HomePage_Game', 'E_HomePage_Game', value('GameType', 'GameType').Chapter, state); },
    levelData(index) {
      const config = value('ChapterConfigInfo', 'chapterConfigInfo');
      if (!Number.isInteger(index) || index < 0) throw new Error('Level index must be a nonnegative integer');
      return copy(config?.chapterDatasCfg?.[index]);
    },
    previewLevel(stage, level) {
      if (location.port !== '4174' || !['127.0.0.1', 'localhost'].includes(location.hostname)) throw new Error('Save fixtures are restricted to the disposable local QA server on port 4174.');
      if (!Number.isInteger(stage) || stage < 1 || stage > 211 || !Number.isInteger(level) || level < 1 || level > 96) throw new Error('Stage 1–211 and level 1–96 required.');
      const snapshotKey = 'blockblast:qa:save-snapshot';
      if (!sessionStorage.getItem(snapshotKey)) sessionStorage.setItem(snapshotKey, JSON.stringify(Object.fromEntries(Object.keys(localStorage).map(key => [key, localStorage.getItem(key)]))));
      cc.game.pause();
      const store = value('Storage', 'storage');
      for (const key of Object.keys(localStorage)) {
        const logical = key.startsWith('block-blast-') ? key.slice('block-blast-'.length) : '';
        if ((logical.startsWith('chapter') && logical !== 'chapterThemeConfig') || logical === 'lastChapterNum') store.remove(logical);
      }
      store.setItem('chapterPeriodsIndex', stage);
      store.setItem('chapterNum', level - 1);
      store.setItem('lastChapterNum', level - 1);
      sessionStorage.setItem('blockblast:qa:pending-level', JSON.stringify({stage, level}));
      location.reload();
    },
    restoreSave() {
      if (location.port !== '4174') throw new Error('Save restore is restricted to QA port 4174.');
      const saved = sessionStorage.getItem('blockblast:qa:save-snapshot');
      if (!saved) throw new Error('No QA save snapshot exists.');
      cc.game.pause();
      const snapshot = JSON.parse(saved);
      localStorage.clear();
      Object.entries(snapshot).forEach(([key, val]) => localStorage.setItem(key, val));
      sessionStorage.removeItem('blockblast:qa:save-snapshot');
      sessionStorage.removeItem('blockblast:qa:pending-level');
      location.reload();
    }
  };
  if (location.port === '4174' && sessionStorage.getItem('blockblast:qa:pending-level')) {
    const pending = JSON.parse(sessionStorage.getItem('blockblast:qa:pending-level'));
    window.runtimeTest.qa.fixtureStatus = { ...pending, state: 'waiting-for-game' };
    const start = () => {
      sessionStorage.removeItem('blockblast:qa:pending-level');
      const UI = value('UI', 'UI');
      const home = value('PrefabConfig', 'PrefabConfig').HomePage;
      const open = config => {
        if (config.url !== home.url) return;
        UI.removeEventListener('open', open);
        window.runtimeTest.qa.fixtureStatus.state = 'entering-original-chapter';
        requestAnimationFrame(() => window.runtimeTest.qa.adventure({isEnterGame: true}));
      };
      UI.addEventListener('open', open);
      window.runtimeTest.qa.fixtureStatus.state = 'opening-home';
      dispatch('E_HomePage_Show', 'E_HomePage_Show');
    };
    if (window.runtimeTest.ready) start();
    else window.addEventListener('blockblast-ready', start, {once: true});
  }
})();
