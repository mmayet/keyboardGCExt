chrome.commands.onCommand.addListener(function(command) {
    switch (command) {
        case "A":
            sendToPrint("Ā");
            getNextKey();
            break;
        case "I":
            sendToPrint("Ī");
            break;
        case "U":
            sendToPrint("Ū");
            break;
        case "i":
            sendToPrint("ī");
            break;
        case "u":
            sendToPrint("ū");
    }
});

function sendToPrint(letter) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { letter: letter });
    });
}
