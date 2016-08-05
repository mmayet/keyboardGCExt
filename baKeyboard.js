var sID = "";
document.addEventListener("mousedown", function(event) {
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

$('#baID').on('keydown', function(e) {
    var crt = document.getElementById(sID);
    var evt = window.event ? event : e

    if      ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 222 /*'*/ )      {   insertAtCursor(crt, "ʾ");   }
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 222 /*'*/ )                      {   insertAtCursor(crt, "ʿ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 65 /*'A'*/ )     {   insertAtCursor(crt, "Ā");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'a'*/ )                     {   insertAtCursor(crt, "ā");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 68 /*'D'*/ )     {   insertAtCursor(crt, "Ḍ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 68 /*'d'*/ )                     {   insertAtCursor(crt, "ḍ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 72 /*'H'*/ )     {   insertAtCursor(crt, "Ḥ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 72 /*'h'*/ )                     {   insertAtCursor(crt, "ḥ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 73 /*'I'*/ )     {   insertAtCursor(crt, "Ī");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 73 /*'i'*/ )                     {   insertAtCursor(crt, "ī");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 83 /*'S'*/ )     {   insertAtCursor(crt, "Ṣ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 83 /*'s'*/ )                     {   insertAtCursor(crt, "ṣ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 85 /*'U'*/ )     {   insertAtCursor(crt, "Ū");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 85 /*'u'*/ )                     {   insertAtCursor(crt, "ū");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 90 /*'Z'*/ )     {   insertAtCursor(crt, "Ẓ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 90 /*'z'*/ )                     {   insertAtCursor(crt, "ẓ");   }
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 45 /*'-' for em dash*/ )         {   insertAtCursor(crt, "—");   }
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'b' for B-ism-Allāh*/ )     {   insertAtCursor(crt, "﷽");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 67 /*'C' for Companion (Rḍ)*/ )  {   insertAtCursor(crt, "(Rḍ)");} 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 71 /*'g' for God ﷻ*/ )           {   insertAtCursor(crt, "ﷻ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 80 /*'p' for Prophet (ع)*/ )     {   insertAtCursor(crt, "(ع)");  } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 82 /*'r' for Rasūl ﷺ*/ )         {   insertAtCursor(crt, "ﷺ");   }
});
