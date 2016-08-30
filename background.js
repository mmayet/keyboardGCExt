chrome.commands.onCommand.addListener(function(command) {	/*if (command == "_execute_browser_action")	startKeyboard("X");*/	});

function startKeyboard(letter) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { letter: letter });
    });
}

function launch() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 620, height: 500 }
  });
}
chrome.app.runtime.onLaunched.addListener(launch);