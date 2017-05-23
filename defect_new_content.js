/////////////////////////////////////     defect_new_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /defect_new_content.js
//
// Description: Main content script for defect pages.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('defect_new_content.js initializing.');

// New Defect Page Specific
var newDefDescriptionBoxW;
var newDefDescriptionBoxH;
var newDefCommentBoxW;
var newDefCommentBoxH;

logTrace('defect_new_content.js collecting settings.');

var requestVars = JSON.stringify(["newDefDescriptionBoxW","newDefDescriptionBoxH","newDefCommentBoxW","newDefCommentBoxH"]);
getVars(requestVars,init_new_defect_page);

logTrace('defect_new_content.js finished assigning vars.');

function init_new_defect_page() {
    var caseNumber = $("span[id='j_id0:formId:pageBlockId:j_id30:j_id32']").text();
    $("h2.mainTitle").text("Create Defect for: " + caseNumber);
    $("input[id='j_id0:formId:pageBlockId:j_id30:j_id31']").css({"width": newDefDescriptionBoxW});
    $("textarea[name='j_id0:formId:pageBlockId:j_id30:j_id33']").css({"width": newDefDescriptionBoxW, "height": newDefDescriptionBoxH});
    $("textarea[name='j_id0:formId:pageBlockId:j_id30:j_id34']").css({"width": newDefCommentBoxW, "height": newDefCommentBoxH});

    $("div.pbSubsection th.labelCol.vfLabelColTextWrap.first:eq( 1 )").remove();
    $("div.pbSubsection td.dataCol.first:eq( 1 )").remove();

    $("<tr/>").attr({'id': 'commentMover'}).appendTo("table.detailList tbody");
    $("div.pbSubsection th.labelCol.vfLabelColTextWrap.last:eq( 1 )").appendTo("#commentMover");
    $("div.pbSubsection td.dataCol.last:eq( 1 )").appendTo("#commentMover");
	
	
	logTrace('defect_new_content.js finished.');
}