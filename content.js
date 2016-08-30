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

InboxSDK.load('1', 'sdk_ArabicTypist_1dc39f543b').then(function(sdk) {
    sdk.Compose.registerComposeViewHandler(function(composeView) {
        
        // Character Changing Button
        composeView.addButton({
            title: "Character Changer!",
            iconUrl: 'https://lh5.googleusercontent.com/itq66nh65lfCick8cJ-OPuqZ8OUDTIxjCc25dkc4WUT1JG8XG3z6-eboCu63_uDXSqMnLRdlvQ=s128-h128-e365',
            onClick: function(event) {
                var allText = event.composeView.getTextContent();
                letter = allText.slice(-1);
                restOfText = allText.slice(0, -1);

                switch (letter) {
                    case "'":
                        //event.composeView.setBodyText(restOfText + "ʿ");
                        event.composeView.insertTextIntoBodyAtCursor("ʿ");
                        break;
                    case "`":
                        //event.composeView.setBodyText(restOfText + "ʾ");
                        event.composeView.insertTextIntoBodyAtCursor("ʾ");
                        break;
                    case "-":
                        //event.composeView.setBodyText(restOfText + "—");
                        event.composeView.insertTextIntoBodyAtCursor("—");
                        break;
                    case "a":
                        //event.composeView.setBodyText(restOfText + "ā");
                        event.composeView.insertTextIntoBodyAtCursor("ā");
                        break;
                    case "A":
                        //event.composeView.setBodyText(restOfText + "Ā");
                        event.composeView.insertTextIntoBodyAtCursor("Ā");
                        break;
                    case "i":
                        //event.composeView.setBodyText(restOfText + "ī");
                        event.composeView.insertTextIntoBodyAtCursor("ī");
                        break;
                    case "I":
                        //event.composeView.setBodyText(restOfText + "Ī");
                        event.composeView.insertTextIntoBodyAtCursor("Ī");
                        break;
                    case "u":
                        //event.composeView.setBodyText(restOfText + "ū");
                        event.composeView.insertTextIntoBodyAtCursor("ū");
                        break;
                    case "U":
                        //event.composeView.setBodyText(restOfText + "Ū");
                        event.composeView.insertTextIntoBodyAtCursor("Ū");
                        break;
                    case "d":
                        //event.composeView.setBodyText(restOfText + "ḍ");
                        event.composeView.insertTextIntoBodyAtCursor("ḍ");
                        break;
                    case "D":
                        //event.composeView.setBodyText(restOfText + "Ḍ");
                        event.composeView.insertTextIntoBodyAtCursor("Ḍ");
                        break;
                    case "h":
                        //event.composeView.setBodyText(restOfText + "ḥ");
                        event.composeView.insertTextIntoBodyAtCursor("ḥ");
                        break;
                    case "H":
                        //event.composeView.setBodyText(restOfText + "Ḥ");
                        event.composeView.insertTextIntoBodyAtCursor("Ḥ");
                        break;
                    case "s":
                        //event.composeView.setBodyText(restOfText + "ṣ");
                        event.composeView.insertTextIntoBodyAtCursor("ṣ");
                        break;
                    case "S":
                        //event.composeView.setBodyText(restOfText + "Ṣ");
                        event.composeView.insertTextIntoBodyAtCursor("Ṣ");
                        break;
                    case "t":
                        //event.composeView.setBodyText(restOfText + "ṭ");
                        event.composeView.insertTextIntoBodyAtCursor("ṭ");
                        break;
                    case "T":
                        //event.composeView.setBodyText(restOfText + "Ṭ");
                        event.composeView.insertTextIntoBodyAtCursor("Ṭ");
                        break;
                    case "z":
                        //event.composeView.setBodyText(restOfText + "ẓ");
                        event.composeView.insertTextIntoBodyAtCursor("ẓ");
                        break;
                    case "Z":
                        //event.composeView.setBodyText(restOfText + "Ẓ");
                        event.composeView.insertTextIntoBodyAtCursor("Ẓ");
                        break;
                    case "b":
                        //event.composeView.setBodyText(restOfText + "﷽");
                        event.composeView.insertTextIntoBodyAtCursor("﷽");
                        break;
                    case "c":
                        //event.composeView.setBodyText(restOfText + "(Rḍ)");
                        event.composeView.insertTextIntoBodyAtCursor("(Rḍ)");
                        break;
                    case "g":
                        //event.composeView.setBodyText(restOfText + "ﷻ");
                        event.composeView.insertTextIntoBodyAtCursor("ﷻ");
                        break;
                    case "p":
                        //event.composeView.setBodyText(restOfText + "(ع)");
                        event.composeView.insertTextIntoBodyAtCursor("(ع)");
                        break;
                    case "r":
                        //event.composeView.setBodyText(restOfText + "ﷺ");
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

$(document).on('keydown', function(e) {
    var crt = document.getElementById(sID);
    var evt = window.event ? event : e

    if      ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 222 /*'*/     ) {  insertAtCursor(crt, "ʾ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 222 /*'*/                     ) {  insertAtCursor(crt, "ʿ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 65 /*'A'*/    ) {  insertAtCursor(crt, "Ā");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'a'*/                    ) {  insertAtCursor(crt, "ā");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 68 /*'D'*/    ) {  insertAtCursor(crt, "Ḍ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 68 /*'d'*/                    ) {  insertAtCursor(crt, "ḍ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 72 /*'H'*/    ) {  insertAtCursor(crt, "Ḥ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 72 /*'h'*/                    ) {  insertAtCursor(crt, "ḥ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 73 /*'I'*/    ) {  insertAtCursor(crt, "Ī");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 73 /*'i'*/                    ) {  insertAtCursor(crt, "ī");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 83 /*'S'*/    ) {  insertAtCursor(crt, "Ṣ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 83 /*'s'*/                    ) {  insertAtCursor(crt, "ṣ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 85 /*'U'*/    ) {  insertAtCursor(crt, "Ū");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 85 /*'u'*/                    ) {  insertAtCursor(crt, "ū");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 90 /*'Z'*/    ) {  insertAtCursor(crt, "Ẓ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 90 /*'z'*/                    ) {  insertAtCursor(crt, "ẓ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.code == "Minus" /*'-' for em dash*/      ) {  insertAtCursor(crt, "—");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'b' for B-ism-Allāh*/    ) {  insertAtCursor(crt, "﷽");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 67 /*'C' for Companion (Rḍ)*/ ) {  insertAtCursor(crt, "(Rḍ)");   }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 71 /*'g' for God ﷻ*/          ) {  insertAtCursor(crt, "ﷻ");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 80 /*'p' for Prophet (ع)*/    ) {  insertAtCursor(crt, "(ع)");    }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 82 /*'R'*/    ) {  insertAtCursor(crt, "💚");      }
    else if ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 82        /*'r' for Rasūl ﷺ*/ ) {  insertAtCursor(crt, "ﷺ");      }
});
