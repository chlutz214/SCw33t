/////////////////////////////////////     scnippets.js     //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /scnippets.js
//
// Description: creates context menu options with 
//
// Notes:
//
// TODO Quick Add on selection context...
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
//logTrace('scnippets.js initializing.');

// scnippets Options
var scnippets;

//logTrace('scnippets.js collecting settings.');
chrome.storage.sync.get(
    {
        // scnippets Options
		'scnippets':  '{"item a":{"short desc a1":"wwww","short desc a2":"aaaaa"},"item b":{"short desc b1":"wwgww","short desc b2":"Launch tibemsadmin on Linux:\\ncd /opt/CA/AccessControlServer/MessageQueue/tibco/ems/5.1/bin\\n./tibemsadmin"}}'//Launch tibemsadmin on Linux:\ncd /opt/CA/AccessControlServer/MessageQueue/tibco/ems/5.1/bin\n./tibemsadmin
    },
    function(items) {
        // logTrace('scnippets.js settings collected, listing:');
        for (var key in items)
        {
            // logTrace("var: " + key + " = " + items[key]);
        }
        // logTrace('scnippets.js assigning vars.');

        // scnippets Options
        scnippets = JSON.parse(items.scnippets);

        // logTrace('scnippets.js finished assigning vars.');

        init_snippets();
        // logTrace('scnippets.js finished.');
    }
);

// init_snippets();

function init_snippets() {
	var contexts = ["page","selection","link","editable","image","video","audio"];
	//scnippets=  ["item 1":["qqq","wwww"],"item 2":["rrr","tttt"]];
	
	var master = chrome.contextMenus.create({"title": "SCnippets", "id": "scnippetsMenu", "contexts":["editable"]});//,"onclick": genericOnClick


	for (var scnippetCat in scnippets) {
		 var parent = chrome.contextMenus.create({"title": scnippetCat, "id": scnippetCat, "parentId": master, "contexts":["editable"]});//,"onclick": genericOnClick
		 // logTrace("SCnippet Category added: " + parent)
		 //alert(scnippetCat[0]);
		 //var id = chrome.contextMenus.create({"title": "scnippetCat, "parentId": parent});
		 	for (var scnippet in scnippets[scnippetCat])  {
				/*if (Array.isArray(scnippets[scnippetCat][scnippet])) {
					alert('isarr');
				} else {
					alert('not an arr');
				}*/
				
				var id = chrome.contextMenus.create({"title":  scnippet, "id": scnippet, "parentId": parent, "contexts":["editable"],"onclick": insertText});//
				// logTrace("SCnippet added: " + parent + " -- " + id)
			}
		
	}
 
}

function insertText(info,tab) {
	var itm = scnippets[info.parentMenuItemId][info.menuItemId];
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		chrome.tabs.sendMessage(tabs[0].id, {action: "insert_scnippet",value: itm}, function(response) {});  
	});
}


// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

/*

Chrome Sample code for context menus:

///////////////////////////////////////////////////////////////////////////////////////////
// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.
var contexts = ["page","selection","link","editable","image","video","audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],"onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}


// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Test parent item"});
var child1 = chrome.contextMenus.create(
  {"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
var child2 = chrome.contextMenus.create(
  {"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);


// Create some radio items.
function radioOnClick(info, tab) {
  console.log("radio item " + info.menuItemId +
              " was clicked (previous checked state was "  +
              info.wasChecked + ")");
}
var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
                                         "onclick":radioOnClick});
var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
                                         "onclick":radioOnClick});
console.log("radio1:" + radio1 + " radio2:" + radio2);


// Create some checkbox items.
function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

}
var checkbox1 = chrome.contextMenus.create(
  {"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
var checkbox2 = chrome.contextMenus.create(
  {"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
console.log("checkbox1:" + checkbox1 + " checkbox2:" + checkbox2);


// Intentionally create an invalid item, to show off error checking in the
// create callback.
console.log("About to try creating an invalid item - an error about " +
            "item 999 should show up");
chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
*/