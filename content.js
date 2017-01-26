var sID = "";
document.addEventListener("focus", function(event) {
        var el = event.target;
        sID = el.id;
    },
    true
);
document.addEventListener("keydown", function(event) {
        var el = event.target;
        sID = el.id;
    },
    true
);
document.addEventListener("click", function(event) {
        var el = event.target;
        sID = el.id;
    },
    true
);

InboxSDK.load('2', 'sdk_ArabicTypist_1dc39f543b').then(function(sdk) {
    sdk.Compose.registerComposeViewHandler(function(composeView) {
        
        // Character Changing Button
        composeView.addButton({
            title: "Click me to 'Arabize' your last letter.",
            iconUrl: 'https://mmayet.github.io/ArabicTypist/images/ic_keyboard_black_48px.svg',
            //iconUrl: 'icons/128_black_keyboard.png',
            onClick: function(event) {
                var allText = event.composeView.getTextContent();
                letter = allText.slice(-1);
                restOfText = allText.slice(0, -1);

                switch (letter) {
                    case "'":
                        event.composeView.insertTextIntoBodyAtCursor("ʿ");
                        break;
                    case "`":
                        event.composeView.insertTextIntoBodyAtCursor("ʾ");
                        break;
                    case '"': //edited to take " without \, so as to not effect character input
                        event.composeView.insertTextIntoBodyAtCursor("ʾ");
                        break;
                    case "-":
                        event.composeView.insertTextIntoBodyAtCursor("—");
                        break;
                    case "a":
                        event.composeView.insertTextIntoBodyAtCursor("ā");
                        break;
                    case "A":
                        event.composeView.insertTextIntoBodyAtCursor("Ā");
                        break;
                    case "i":
                        event.composeView.insertTextIntoBodyAtCursor("ī");
                        break;
                    case "I":
                        event.composeView.insertTextIntoBodyAtCursor("Ī");
                        break;
                    case "u":
                        event.composeView.insertTextIntoBodyAtCursor("ū");
                        break;
                    case "U":
                        event.composeView.insertTextIntoBodyAtCursor("Ū");
                        break;
                    case "d":
                        event.composeView.insertTextIntoBodyAtCursor("ḍ");
                        break;
                    case "D":
                        event.composeView.insertTextIntoBodyAtCursor("Ḍ");
                        break;
                    case "h":
                        event.composeView.insertTextIntoBodyAtCursor("ḥ");
                        break;
                    case "H":
                        event.composeView.insertTextIntoBodyAtCursor("Ḥ");
                        break;
                    case "s":
                        event.composeView.insertTextIntoBodyAtCursor("ṣ");
                        break;
                    case "S":
                        event.composeView.insertTextIntoBodyAtCursor("Ṣ");
                        break;
                    case "t":
                        event.composeView.insertTextIntoBodyAtCursor("ṭ");
                        break;
                    case "T":
                        event.composeView.insertTextIntoBodyAtCursor("Ṭ");
                        break;
                    case "z":
                        event.composeView.insertTextIntoBodyAtCursor("ẓ");
                        break;
                    case "Z":
                        event.composeView.insertTextIntoBodyAtCursor("Ẓ");
                        break;
                    case "b":
                        event.composeView.insertTextIntoBodyAtCursor("﷽");
                        break;
                    case "c":
                        event.composeView.insertTextIntoBodyAtCursor("(Rḍ)");
                        break;
                    case "g":
                        event.composeView.insertTextIntoBodyAtCursor("ﷻ");
                        break;
                    case "p":
                        event.composeView.insertTextIntoBodyAtCursor("(ع)");
                        break;
                    case "r":
                        event.composeView.insertTextIntoBodyAtCursor("ﷺ");
                        break;
                    default:
                        event.composeView.insertTextIntoBodyAtCursor("");
                }
            },
        });

    });

});


chrome.runtime.onMessage.addListener(
    function(request, sender, senderRequest) {
        /*var crt = document.getElementById(sID);   if (request.letter == "X")  getNextKey(crt);*/
    });

function insertAtCursor(crt, sValue) {
    if (crt.selectionStart || crt.selectionStart == '0') {
        var nStart = crt.selectionStart;
        var nEnd = crt.selectionEnd;

        crt.value = crt.value.substring(0, nStart) + sValue + crt.value.substring(nEnd, crt.value.length);
        crt.selectionStart = nStart + sValue.length;
        crt.selectionEnd = nStart + sValue.length;
    } else {
        crt.value += sValue;
    }
}

function isAltGr(evt) {
    return ((evt.ctrlKey || evt.metaKey) && evt.altKey);
}

function isAltGrShift(evt) {
    return ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey);
}

$(document).on('keydown', function(e) {
    //e.preventDefault();
    var crt = document.getElementById(sID);
    var evt = window.event ? event : e

    if      (isAltGrShift(evt) && evt.keyCode == 222       /*'*/                       ) {  insertAtCursor(crt, "ʾ");      }
    else if (isAltGr(evt)      && evt.keyCode == 222       /*'*/                       ) {  insertAtCursor(crt, "ʿ");      }
    else if (isAltGrShift(evt) && evt.keyCode == 65        /*'A'*/                     ) {  insertAtCursor(crt, "Ā");      }
    else if (isAltGr(evt)      && evt.keyCode == 65        /*'a'*/                     ) {  insertAtCursor(crt, "ā");      }
    else if (isAltGrShift(evt) && evt.keyCode == 68        /*'D'*/                     ) {  insertAtCursor(crt, "Ḍ");      }
    else if (isAltGr(evt)      && evt.keyCode == 68        /*'d'*/                     ) {  insertAtCursor(crt, "ḍ");      }
    else if (isAltGrShift(evt) && evt.keyCode == 72        /*'H'*/                     ) {  insertAtCursor(crt, "Ḥ");      }
    else if (isAltGr(evt)      && evt.keyCode == 72        /*'h'*/                     ) {  insertAtCursor(crt, "ḥ");      }
    else if (isAltGrShift(evt) && evt.keyCode == 73        /*'I'*/                     ) {  insertAtCursor(crt, "Ī");      }
    else if (isAltGr(evt)      && evt.keyCode == 73        /*'i'*/                     ) {  insertAtCursor(crt, "ī");      }
    else if (isAltGrShift(evt) && evt.keyCode == 83        /*'S'*/                     ) {  insertAtCursor(crt, "Ṣ");      }
    else if (isAltGr(evt)      && evt.keyCode == 83        /*'s'*/                     ) {  insertAtCursor(crt, "ṣ");      }
    else if (isAltGrShift(evt) && evt.keyCode == 85        /*'U'*/                     ) {  insertAtCursor(crt, "Ū");      }
    else if (isAltGr(evt)      && evt.keyCode == 85        /*'u'*/                     ) {  insertAtCursor(crt, "ū");      }
    else if (isAltGrShift(evt) && evt.keyCode == 90        /*'Z'*/                     ) {  insertAtCursor(crt, "Ẓ");      }
    else if (isAltGr(evt)      && evt.keyCode == 90        /*'z'*/                     ) {  insertAtCursor(crt, "ẓ");      }
    else if (isAltGr(evt)      && evt.code    == "Minus"   /*'-' for em dash*/         ) {  insertAtCursor(crt, "—");      }
    else if (isAltGr(evt)      && evt.keyCode == 65        /*'b' for B-ism-Allāh*/     ) {  insertAtCursor(crt, "﷽");      }
    else if (isAltGr(evt)      && evt.keyCode == 67        /*'C' for Companion (Rḍ)*/  ) {  insertAtCursor(crt, "(Rḍ)");   }
    else if (isAltGr(evt)      && evt.keyCode == 71        /*'g' for God ﷻ*/           ) {  insertAtCursor(crt, "ﷻ");      }
    else if (isAltGr(evt)      && evt.keyCode == 80        /*'p' for Prophet (ع)*/     ) {  insertAtCursor(crt, "(ع)");    }
    else if (isAltGrShift(evt) && evt.keyCode == 82        /*'R'*/                     ) {  insertAtCursor(crt, "💚");      }
    else if (isAltGr(evt)      && evt.keyCode == 82        /*'r' for Rasūl ﷺ*/         ) {  insertAtCursor(crt, "ﷺ");      }
});
