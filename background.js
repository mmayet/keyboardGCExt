chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
        case "A":
            sendToPrint("Ā");
            break;
        case "I":
            sendToPrint("Ī");
            break;
        case "U":
            sendToPrint("Ū");
            break;
        case "X":
            sendToPrint("X");
    }
});

function sendToPrint(letter) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { letter: letter });
    });
}
