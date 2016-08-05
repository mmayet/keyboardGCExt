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
    } catch(e) {
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
    var objField = document.getElementById(sID);
    var evt = window.event ? event : e

    if      ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 222 /*'*/ )      {   insertAtCursor(objField, "ʾ");   }
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 222 /*'*/ )                      {   insertAtCursor(objField, "ʿ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 65 /*'A'*/ )     {   insertAtCursor(objField, "Ā");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'a'*/ )                     {   insertAtCursor(objField, "ā");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 68 /*'D'*/ )     {   insertAtCursor(objField, "Ḍ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 68 /*'d'*/ )                     {   insertAtCursor(objField, "ḍ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 72 /*'H'*/ )     {   insertAtCursor(objField, "Ḥ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 72 /*'h'*/ )                     {   insertAtCursor(objField, "ḥ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 73 /*'I'*/ )     {   insertAtCursor(objField, "Ī");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 73 /*'i'*/ )                     {   insertAtCursor(objField, "ī");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 83 /*'S'*/ )     {   insertAtCursor(objField, "Ṣ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 83 /*'s'*/ )                     {   insertAtCursor(objField, "ṣ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 85 /*'U'*/ )     {   insertAtCursor(objField, "Ū");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 85 /*'u'*/ )                     {   insertAtCursor(objField, "ū");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.shiftKey && evt.keyCode == 90 /*'Z'*/ )     {   insertAtCursor(objField, "Ẓ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 90 /*'z'*/ )                     {   insertAtCursor(objField, "ẓ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 65 /*'b' for B-ism-Allāh*/ )     {   insertAtCursor(objField, "﷽");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 67 /*'C' for Companion (Rḍ)*/ )  {   insertAtCursor(objField, "(Rḍ)");} 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 71 /*'g' for God ﷻ*/ )           {   insertAtCursor(objField, "ﷻ");   } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 80 /*'p' for Prophet (ع)*/ )     {   insertAtCursor(objField, "(ع)"); } 
    else if ( (evt.ctrlKey || evt.metaKey) && evt.altKey && evt.keyCode == 82 /*'r' for Rasūl ﷺ*/ )         {   insertAtCursor(objField, "ﷺ");   }
});