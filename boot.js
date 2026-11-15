/* Browser bootstrap for a local decoded Cocos Creator 2.4 native build.
 * Native ads/analytics and remote downloads are blocked by the page CSP.
 * Original code is not changed here. */
(() => {
  const status = document.getElementById('status');
  const debug = new URLSearchParams(location.search).get('debug') === '1';
  status.hidden = !debug;
  const messages = [];
  const log = console.log.bind(console);
  const error = console.error.bind(console);
  function report(message) {
    messages.push(String(message));
    if (messages.length > 100) messages.shift();
    status.textContent = messages.slice(-12).join('\n');
    if (debug) log('[runtime]', message);
  }
  function startupFailed(reason) {
    report(reason?.stack || String(reason));
    if (!window.runtimeTest?.ready) window.dispatchEvent(new CustomEvent('blockblast-startup-error'));
  }
  console.error = (...args) => {
    error(...args);
    report(args.map(value => value?.stack || String(value)).join(' '));
  };
  window.addEventListener('error', event => report(event.error?.stack || event.message));
  window.addEventListener('unhandledrejection', event => report(event.reason?.stack || event.reason));
  function script(url) {
    return new Promise((resolve, reject) => {
      const element = document.createElement('script');
      element.src = url; element.onload = resolve;
      element.onerror = () => reject(new Error('Script unavailable: ' + url));
      document.head.appendChild(element);
    });
  }
  window.runtimeTest = { report, script, messages };
  if (debug) script('qa.js').catch(report);
  if (!window.cc) {
    startupFailed('The browser engine could not be loaded.');
    return;
  }
  report('Web engine: Cocos ' + cc.ENGINE_VERSION);
  const settings = window._CCSettings;
  if (!settings || !window.boot) {
    startupFailed('The required startup files could not be loaded.');
    return;
  }
  settings.platform = 'web-mobile';
  settings.orientation = 'portrait';
  settings.remoteBundles = [];
  settings.server = '';
  settings.debug = debug;
  // Bundles absent from the APK cannot succeed on a local web server. Return
  // the normal loader error immediately so the game's own fallback can run.
  const available = new Set(window.BLOCK_LOCAL_BUNDLES || []);
  const unavailable = new Set();
  const startupBundles = new Set(['internal', 'resources', 'main']);
  const originalLoadBundle = cc.assetManager.loadBundle;
  cc.assetManager.loadBundle = function(name, options, complete) {
    const atom = window.BlockMiniAdapter?.bundle(name, typeof options === 'function' ? undefined : options);
    if (atom) return originalLoadBundle.call(this, atom.url, atom.options, typeof options === 'function' ? options : complete);
    const bundleName = String(name).replace(/\/$/, '').split('/').pop();
    if (!available.has(bundleName)) {
      unavailable.add(bundleName);
      if (startupBundles.has(bundleName)) startupFailed('Required bundle unavailable: ' + bundleName);
      const callback = typeof options === 'function' ? options : complete;
      setTimeout(() => callback?.(new Error('Bundle not included in APK: ' + bundleName), null), 0);
      return;
    }
    // Local names also replace the CDN URL in the original resource loader.
    const callback = typeof options === 'function' ? options : complete;
    const bundleOptions = typeof options === 'function' ? undefined : options;
    return originalLoadBundle.call(this, bundleName, bundleOptions, (error, bundle) => {
      if (error && startupBundles.has(bundleName)) startupFailed(error);
      if (!error && bundleName === 'mainTraits' && !debug) {
        // This Android build exposes its A/B bucket and browser test UID via
        // a diagnostic component. Keep those labels in developer mode only.
        const Display = window.__require('GameInfoDisplay').default;
        Display.prototype.render = function() { this.node.opacity = 0; };
      }
      callback?.(error, bundle);
    });
  };
  // A mobile connection can briefly drop a request. Retry known local assets,
  // while the allowlist above still rejects absent optional bundles at once.
  cc.assetManager.downloader.maxRetryCount = 2;
  cc.assetManager.downloader.retryInterval = 1000;
  cc.assetManager.presets.remote.maxRetryCount = 2;
  const originalLoadScript = cc.assetManager.loadScript;
  cc.assetManager.loadScript = function(urls, options, complete) {
    const callback = typeof options === 'function' ? options : complete;
    const scriptOptions = typeof options === 'function' ? undefined : options;
    return originalLoadScript.call(this, urls, scriptOptions, (error, ...result) => {
      if (error) startupFailed(error);
      callback?.(error, ...result);
    });
  };
  window.runtimeTest.unavailableBundles = unavailable;
  const unavailableResources = new Set();
  window.runtimeTest.unavailableResources = unavailableResources;
  const originalLoadRemote = cc.assetManager.loadRemote;
  cc.assetManager.loadRemote = function(url, options, complete) {
    const atom = window.BlockMiniAdapter?.remote(url);
    if (atom) return originalLoadRemote.call(this, atom, options, complete);
    let parsed;
    try { parsed = new URL(url, location.href); } catch { parsed = null; }
    if (parsed && parsed.origin !== location.origin && !['data:', 'blob:'].includes(parsed.protocol)) {
      if (parsed.hostname === 'bband1.afafb.com' && parsed.pathname.startsWith('/syy_travel_google_game/')) {
        const relativePath = parsed.pathname.slice('/syy_travel_google_game/'.length);
        if (/^[^/]+\/file\/data\/[^/]+\.json$/.test(relativePath) || /^color\/[^/]+\.png$/.test(relativePath)) {
          return originalLoadRemote.call(this, new URL('chapters/' + relativePath, document.baseURI).href, options, complete);
        }
      }
      const remotePath = parsed.pathname.match(/\/remote\/([^/]+)\/(.*)/);
      if (remotePath && available.has(remotePath[1])) {
        return originalLoadRemote.call(this, 'assets/' + remotePath[1] + '/' + remotePath[2], options, complete);
      }
      unavailableResources.add(url);
      const callback = typeof options === 'function' ? options : complete;
      setTimeout(() => callback?.(new Error('Resource not included in local build: ' + parsed.pathname), null), 0);
      return;
    }
    return originalLoadRemote.call(this, url, options, complete);
  };
  const gameRun = cc.game.run;
  cc.game.run = function(...args) {
    const require = window.__require;
    if (require && !cc.sys.isNative) {
      // The Android launch SDK is not a browser service. Feed its ordinary
      // offline event into the shipped trait-server fallback.
      const proxy = require('Multilink_Proxy').Multilink_Proxy;
      const State = require('E_TraitServer_State').E_TraitServer_State;
      const states = require('TraitServerType').ServerState;
      const Exception = require('E_Multilink_Exception').E_Multilink_Exception;
      // The source's browser branch pins internal test-server versions. Use
      // the Android production branch so bundle hashes stay those of the APK.
      require('GameLobbyBundleVersInfo').gameLobbyBundleVersInfo.getBundleVers = async () => ({});
      proxy.prototype.onBmh = function() {
        this.dispatchModuleEvent(new State(states.Ready));
        this.dispatchModuleEvent(new Exception('browser-offline'));
      };
      const UI = require('UI').UI;
      const prefabs = require('PrefabConfig').PrefabConfig;
      UI.addEventListener('open', config => {
        if ([prefabs.ClassMain, prefabs.ClassGame, prefabs.HomePage, prefabs.ChapterMain, prefabs.ChapterGame, prefabs.Board].includes(config)) {
          window.BlockBlastReadiness.request(config.url, config === prefabs.HomePage ? 'home' : 'gameplay');
        }
      });
      // Initial-launch traits can instantiate the gameplay prefab directly,
      // bypassing UI.open. A score label only nominates the gameplay screen;
      // readiness.js also waits for actual board/piece textures.
      const readyPoll = setInterval(() => {
        if (window.runtimeTest.ready) { clearInterval(readyPoll); return; }
        const scene = cc.director.getScene();
        if (scene?.getComponentsInChildren(cc.Label).some(label => label.node.activeInHierarchy && label.node.name === 'currentNum')) {
          window.BlockBlastReadiness.request('gameplay');
          clearInterval(readyPoll);
        }
      }, 100);
      report('Browser adapter: packaged resources and original offline fallback.');
    }
    return gameRun.apply(this, args);
  };
  report('Booting original scene ' + settings.launchScene);
  try { window.boot(); } catch (error) { startupFailed(error); }
})();
