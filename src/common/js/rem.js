(function (win) {
  const doc = win.document;
  const docEl = doc.documentElement;
  let tid;

  function refreshRem() {
    const { width } = docEl.getBoundingClientRect();
    const rem = width / 6.4; // 将屏幕宽度分成6.4份， 1份为1rem
    docEl.style.fontSize = `${rem}px`;
    // console.log(0.14*rem);
  }

  win.addEventListener(
    'resize',
    () => {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 10);
    },
    false,
  );
  win.addEventListener(
    'pageshow',
    (e) => {
      if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 10);
      }
    },
    false,
  );

  refreshRem();
}(window));
