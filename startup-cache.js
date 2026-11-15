/* Transport-only startup cache. Original modules and JSON are unchanged.
 * Missing/changed versions keep using the game's normal loose-file loader. */
(() => {
  'use strict';
  const link = document.querySelector('link[data-startup-pack]');
  const downloader = window.cc?.assetManager?.downloader;
  if (!link || !downloader?._downloaders?.bundle || !downloader._downloaders['.json']) return;
  const base = new URL('.', document.baseURI);
  let packUrl;
  try { packUrl = new URL(link.href, base); } catch { return; }
  if (packUrl.origin !== base.origin || !packUrl.pathname.startsWith(base.pathname)) return;
  const originalBundle = downloader._downloaders.bundle;
  const originalJson = downloader._downloaders['.json'];
  const scripts = new Map();
  const stats = window.BlockBlastStartupCache = { status: 'loading', bundleHits: 0, jsonHits: 0, fallbacks: 0 };
  let timeout;
  const controller = typeof AbortController === 'function' ? new AbortController() : null;
  const deadline = new Promise(resolve => {
    timeout = setTimeout(() => { controller?.abort(); resolve(null); }, 4000);
  });
  const download = fetch(packUrl.href, { mode: 'cors', credentials: 'same-origin', ...(controller ? { signal: controller.signal } : {}) })
    .then(response => response.ok ? response.json() : null).catch(() => null);
  const ready = Promise.race([download, deadline]).then(pack => {
    clearTimeout(timeout);
    const valid = pack?.format === 1 && pack.files && typeof pack.files === 'object' && !Array.isArray(pack.files);
    stats.status = valid ? 'ready' : 'fallback';
    return valid ? pack.files : null;
  });
  function key(value) {
    let url;
    try { url = new URL(value, base); } catch { return null; }
    if (url.origin !== base.origin || url.search || url.hash || !url.pathname.startsWith(base.pathname)) return null;
    const relative = url.pathname.slice(base.pathname.length);
    return /^assets\//.test(relative) ? relative : null;
  }
  const has = (files, name) => name && files && Object.prototype.hasOwnProperty.call(files, name) && typeof files[name] === 'string';
  const bypass = options => options?.force === true || options?.reload === true;
  function fallback(handler, receiver, args) {
    stats.fallbacks++;
    return handler.apply(receiver, args);
  }
  downloader.register('.json', function(url, options, complete) {
    const receiver = this;
    const name = key(url);
    // Every callback is deferred: Cocos increments its concurrency counter only
    // after the download handler returns, even for already available resources.
    ready.then(files => {
      if (!bypass(options) && has(files, name)) {
        let value;
        try { value = JSON.parse(files[name]); } catch { return fallback(originalJson, receiver, [url, options, complete]); }
        stats.jsonHits++;
        complete(null, value);
      } else fallback(originalJson, receiver, [url, options, complete]);
    });
  });
  downloader.register('bundle', function(nameOrUrl, options, complete) {
    const receiver = this;
    const bundleName = cc.path.basename(nameOrUrl);
    let url = nameOrUrl;
    if (!/^(?:\w+:\/\/|\.+\/).+/.test(url)) url = 'assets/' + bundleName;
    const version = options.version || downloader.bundleVers?.[bundleName];
    const suffix = version ? version + '.' : '';
    const configKey = key(url + '/config.' + suffix + 'json');
    const scriptKey = key(url + '/index.' + suffix + 'js');
    ready.then(files => {
      if (bypass(options) || !has(files, configKey) || !has(files, scriptKey)) {
        return fallback(originalBundle, receiver, [nameOrUrl, options, complete]);
      }
      let config;
      try { config = JSON.parse(files[configKey]); }
      catch { return fallback(originalBundle, receiver, [nameOrUrl, options, complete]); }
      config.base = url + '/';
      const scriptUrl = new URL(scriptKey, base).href;
      let execution = scripts.get(scriptUrl);
      if (!execution) {
        execution = Promise.resolve().then(() => {
          // Indirect eval uses the same global scope as a script tag, including
          // the original chained __require loader. Do not execute modules early.
          (0, eval)(files[scriptKey] + '\n//# sourceURL=' + scriptUrl);
        });
        scripts.set(scriptUrl, execution);
      }
      execution.then(() => { stats.bundleHits++; complete(null, config); }, error => complete(error));
    });
  });
})();
