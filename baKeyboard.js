var sID = "";
document.addEventListener("focus", function(event) {
        var el = event.target;
        sID = el.id;
    },
    true
);

document.getElementById("copyButton").addEventListener("click", function() {
    copyToClipboard(document.getElementById("baID"));
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

function copyToClipboard(elem) {
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch (e) {
        succeed = false;
    }
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        target.textContent = "";
    }
    return succeed;
}

function isAltGr(evt) {
    return ((evt.ctrlKey || evt.metaKey) && evt.altKey);
}

function isAltGrShift(evt) {
    return ((evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey);
}

$('#baID').on('keydown', function(e) {
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
