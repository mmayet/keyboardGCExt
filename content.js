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
        if (request.letter == "X") {
        	getNextKey(objField);
        }
		else {
        	insertAtCursor(objField, request.letter);
    	}
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

function getNextKey(objField) {
	var toPrint;
    console.log("In getNextKey 1");
    $(document).on('keydown', function(e) {
        console.log("In getNextKey 2");
        var evtobj = window.event ? event : e
        
        /*switch (evtobj.keyCode) {
        	case 65:
        		toPrint = "ā";
        		break;
    		case 90:
    			toPrint = "ẓ";
    			break;
			default:
				toPrint = "";
        }*/
        if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 222) {
        	console.log("'");
	    	toPrint = "ʿ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.shiftKey && evtobj.keyCode == 222) {
	    	console.log("'");
	    	toPrint = "ʾ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 65) {
	    	console.log("no shift");
	    	toPrint = "ā";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.shiftKey && evtobj.keyCode == 65) {
	    	console.log("shift");
	    	toPrint = "Ā";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 68) {
	    	toPrint = "ḍ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.shiftKey && evtobj.keyCode == 68) {
	    	toPrint = "Ḍ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 72) {
	    	toPrint = "ḥ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.shiftKey && evtobj.keyCode == 72) {
	    	toPrint = "Ḥ";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 73) {
	    	toPrint = "ī";
	    }
	    else if (evtobj.ctrlKey && evtobj.altKey && evtobj.shiftKey && evtobj.keyCode == 73) {
	    	toPrint = "Ī";
	    }
	    else {
	    	toPrint = "";
	    }
        console.log(toPrint);
        //insertAtCursor(objField, toPrint);
        insertTextAtCursor(toPrint);

    });
    console.log("out");
}

function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode( document.createTextNode(text) );
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}