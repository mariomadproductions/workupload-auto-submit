// ==UserScript==
// @name        Workupload Auto-Submit
// @namespace   https://github.com/mariomadproductions/workupload-auto-submit
// @match       https://workupload.com/
// @grant       none
// @run-at      document-idle
// @version     1.0.0
// @author      mariomadproductions
// @description Auto-click Workupload's "upload" button when it becomes active
// ==/UserScript==

const uploadBtn = document.getElementById('uploadBtn');
if (uploadBtn) {
  let timer;
  let observer;

  const schedule = () => {
    if (uploadBtn.disabled) return;
    observer?.disconnect();
    timer = setTimeout(() => uploadBtn.click(), 1000);
  };

  observer = new MutationObserver(schedule);
  observer.observe(uploadBtn, {
    attributes: true,
    attributeFilter: ['disabled'],
  });
}