// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);
    if (command === "A") {
        console.log("Ā");
    }
    switch (command) {
        case "A":
            console.log("Ā");
            print("Ā");
            break;
        case "I":
            console.log("Ī");
            print("Ī");
            break;
        case "U":
            console.log("Ū");
            print("Ū");
    }
});

function print(newChar) {
	$(document.activeElement).insertAtCaret(newChar);
	console.log(document.activeElement);
}

$.fn.extend({
    insertAtCaret: function(myValue) {
        return this.each(function(i) {
            if (document.selection) {
                //For browsers like Internet Explorer
                this.focus();
                var sel = document.selection.createRange();
                sel.text = myValue;
                this.focus();
            } else if (this.selectionStart || this.selectionStart == '0') {
                //For browsers like Firefox and Webkit based
                var startPos = this.selectionStart;
                var endPos = this.selectionEnd;
                var scrollTop = this.scrollTop;
                this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
                this.focus();
                this.selectionStart = startPos + myValue.length;
                this.selectionEnd = startPos + myValue.length;
                this.scrollTop = scrollTop;
            } else {
                this.value += myValue;
                this.focus();
            }
        });
    }
});
