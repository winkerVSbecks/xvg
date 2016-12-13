chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    file: 'injection-script.js',
  });
});
