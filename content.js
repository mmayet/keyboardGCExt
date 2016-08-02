var sID = "";
document.addEventListener("mousedown", function(event) {
        var el = event.target;
        sID = el.id;
    },
    true
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //console.log(sender.tab ? "From Script:" + sender.tab.url : "From Extension");
        var objField = document.getElementById(sID);
        insertAtCursor(objField, request.letter);
        getNextKey();
    });

function insertAtCursor(sField, sValue) {
    if (sField.selectionStart || sField.selectionStart == '0') {
        var nStart = sField.selectionStart;
        var nEnd = sField.selectionEnd;

        sField.value = sField.value.substring(0, nStart) + sValue + sField.value.substring(nEnd, sField.value.length);
        sField.selectionStart = nStart + sValue.length;
        sField.selectionEnd = nStart + sValue.length;
    } else {
        sField.value += sValue;
    }
}

function getNextKey() {
    console.log("In getNextKey 1");
    $(document).on("keypress", function(e) {
        console.log("In getNextKey 2");
        var evtobj = window.event ? event : e
        if(evtobj.keyCode == 65) {
            sendToPrint("ĀAAA");
        }
    });
}