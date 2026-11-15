(() => {
  const welcome = document.getElementById('welcome');
  const information = document.getElementById('local-information');
  const key = 'blockblast-browser:v1:welcome-seen';
  const debug = new URLSearchParams(location.search).get('debug') === '1';
  let seen = false;
  let hasOpened = false;
  let startupError = false;
  const launch = document.getElementById('launch-screen');
  const recovery = document.createElement('section');
  recovery.id = 'launch-recovery';
  recovery.hidden = true;
  recovery.setAttribute('role', 'status');
  recovery.setAttribute('aria-live', 'polite');
  const recoveryTitle = document.createElement('h2');
  const recoveryText = document.createElement('p');
  const retry = document.createElement('button');
  retry.type = 'button';
  retry.textContent = 'Попробовать снова';
  retry.addEventListener('click', () => location.reload());
  recovery.append(recoveryTitle, recoveryText, retry);
  launch.append(recovery);
  function showRecovery(failed = false) {
    if (hasOpened) return;
    startupError ||= failed;
    recoveryTitle.textContent = startupError ? 'Не удалось загрузить игру' : 'Игра ещё загружается';
    recoveryText.textContent = startupError
      ? 'Проверьте подключение к интернету и попробуйте снова. Сохранённый прогресс останется в этом браузере.'
      : 'Первый запуск может занять больше времени. Можно подождать или повторить загрузку.';
    recovery.hidden = false;
  }
  // A slow connection is not a failed launch: keep loading and allow a later
  // ready event to dismiss this message without any extra user action.
  const slowLoadTimer = setTimeout(() => showRecovery(), 45000);
  window.addEventListener('blockblast-startup-error', () => showRecovery(true));
  window.addEventListener('error', event => {
    const source = event.target?.tagName === 'SCRIPT' ? event.target.src : event.filename;
    if (!source) return;
    let pathname;
    try { pathname = new URL(source, location.href).pathname; } catch { return; }
    if (/(?:^|\/)(?:cocos2d-web|main|boot|local-bundles|mini-adapter)\.js$|\/src\/settings\.[^/]+\.js$/.test(pathname)) {
      showRecovery(true);
    }
  }, true);
  try { seen = localStorage.getItem(key) === '1'; } catch {}
  function ready() {
    if (hasOpened) return;
    hasOpened = true;
    clearTimeout(slowLoadTimer);
    recovery.hidden = true;
    retry.disabled = true;
    document.body.classList.add('game-ready');
    launch.setAttribute('aria-hidden', 'true');
    if (!seen && !debug) welcome.hidden = false;
  }
  window.addEventListener('blockblast-ready', ready, { once: true });
  const readyCheck = setInterval(() => {
    if (hasOpened) { clearInterval(readyCheck); return; }
    const scene = window.cc?.director?.getScene();
    if (scene?.getComponentsInChildren(cc.Label).some(label => label.node.activeInHierarchy && label.node.name === 'currentNum')) {
      ready();
      clearInterval(readyCheck);
    }
  }, 150);
  window.addEventListener('pointerdown', () => {
    const audio = window.cc?.sys?.__audioSupport?.context;
    if (audio?.state === 'suspended') audio.resume().catch(() => {});
  });
  welcome.querySelector('.welcome-continue').addEventListener('click', () => {
    seen = true;
    try { localStorage.setItem(key, '1'); } catch {}
    welcome.hidden = true;
  });
  for (const button of welcome.querySelectorAll('.terms,.privacy')) button.addEventListener('click', () => information.showModal());
  // Cocos also handles visibility; the facade makes audio behavior explicit.
  document.addEventListener('visibilitychange', () => {
    if (!window.cc?.game) return;
    if (document.hidden) cc.game.pause();
    else cc.game.resume();
  });
})();
