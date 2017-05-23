/////////////////////////////////////     defect_comment_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /defect_comment_content.js
//
// Description: Main content script for defect pages.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('defect_comment_content.js initializing.');

var dComBoxWidth;
var dComBoxHeight;

logTrace('defect_comment_content.js collecting settings.');

var requestVars = JSON.stringify(['dComBoxWidth','dComBoxHeight']);
getVars(requestVars,init_defect_comment_content);

function init_defect_comment_content() {
	// Set text box size
    $("textarea[name='j_id0:formId:pageBlockId:j_id30:j_id31']").css(
        {
            "width": dComBoxWidth, 
            "height": dComBoxHeight
        }
    ); 
	logTrace('defect_comment_content.js Finished.');
}