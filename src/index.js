chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.executeScript({
    file: 'x-ray.js',
  });
});
