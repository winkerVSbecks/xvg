const injectedScript = require('!raw-loader!./script.js');

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript({
    code: injectedScript
  })
});
