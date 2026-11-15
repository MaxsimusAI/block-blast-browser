/* Local resource routing for the original Atom-engine mini games.
 * The Android bundle payloads contain ordinary Creator 2 JavaScript/assets.
 * Gameplay, world creation, download completion and progress remain original. */
(() => {
  'use strict';
  const remoteRoot = '/syy_travel_google_game/atomEngine/';
  const localBundles = new URL('atom-bundles/', document.baseURI).href;
  const localResources = new URL('atom-remote/', document.baseURI).href;

  function atomPath(value) {
    let url;
    try { url = new URL(String(value), location.href); } catch { return null; }
    if (url.hostname !== 'bband1.afafb.com' || !url.pathname.startsWith(remoteRoot)) return null;
    const relative = url.pathname.slice(remoteRoot.length);
    // Resolve both original Android and browser paths to the same verified
    // Android resource snapshot; the public CDN has no web-desktop build.
    let match = relative.match(/^creator2\/([A-Za-z0-9_]+)\/(?:android|web-desktop)\/?(.*)$/);
    if (match) return {
      kind: 'bundle', name: match[1],
      tail: match[2], url: localBundles + match[1] + (match[2] ? '/' + match[2] : '')
    };
    match = relative.match(/^remote\/([A-Za-z0-9_]+)\/(.+)$/);
    if (match) return {
      kind: 'resource', name: match[1], tail: match[2],
      url: localResources + match[1] + '/' + match[2]
    };
    return null;
  }

  window.BlockMiniAdapter = Object.freeze({
    // Call before boot.js's generic bundle allowlist. Returning null means
    // this request belongs to the ordinary game loader.
    bundle(name, options) {
      const mapped = atomPath(name);
      if (!mapped || mapped.kind !== 'bundle' || mapped.tail) return null;
      const localOptions = { ...(options || {}), bundleName: mapped.name };
      // Browser uses the decoded loose files, not the native HSPKG cache.
      delete localOptions.hspkg;
      delete localOptions.hspkgUrl;
      // Creator 2's bundle downloader treats a root-relative path as a bundle
      // name; use a same-origin absolute URL so it preserves this directory.
      return { name: mapped.name, url: new URL(mapped.url, location.href).href, options: localOptions };
    },
    // Call before boot.js's generic external URL rejection.
    remote(url) { return atomPath(url)?.url || null; },
    paths: Object.freeze({ bundles: localBundles, resources: localResources })
  });
})();
