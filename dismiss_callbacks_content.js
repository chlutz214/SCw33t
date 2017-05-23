/////////////////////////////////////     dismiss_callbacks_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/05/2017
// Full Path: /dismiss_callbacks_content.js
//
// Description: Auto-select the product & auto-collapse the "Queue Status" section
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Find the Dismiss button
// Find the Cancel button as well.
// FIXME: This would break if your page language is not English!
var dismissButton = $('input.btn[value="Dismiss"]');
//var cancelButton =  $('input.btn[value="Cancel"]');
	
// Wait for the last row of the list table.  Then do stuff. :P
wait4ele($("table.list"),"tr.last",200,50,function(ele,sel,box) {
	// ele,sel,box are no-ops here.  We don't use 'em.

	// If there are callbacks, dismiss them, otherwise cancel.
	$(dismissButton).click();
	logInfo("dimiss clicked");

});
