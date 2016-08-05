chrome.commands.onCommand.addListener(function(command) {   if (command == "X") startKeyboard("X"); });

function startKeyboard(letter) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { letter: letter });
    });
}
