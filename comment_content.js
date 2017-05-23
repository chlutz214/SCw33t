/////////////////////////////////////     comment_content.js     //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /comment_content.js
//
// Description: Main content script for New Comment page.
//
// Notes:
//
// TODO Public Checkbox Options not working right?!
// TODO add > button that expands sideways to display comments. FOLLOWS 50/50 left right  - to pop & SCTab ONLY...
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('comment_content.js initializing.');

// New Comment Page Specific Options
var alwaysPublic;
var alwaysSendEMail;
var alsoCheckEMail;
var commentBoxW;
var commentBoxH;

var requestVars = JSON.stringify(['alwaysPublic','alwaysSendEMail','alsoCheckEMail','commentBoxW','commentBoxH']);
getVars(requestVars,init_comment_content);

/* old settings
logTrace('comment_content.js collecting settings.');
chrome.storage.sync.get(
    {
        // New Comment Page Specific Options
        'alwaysPublic': true,
        'alwaysSendEMail': false,
        'alsoCheckEMail': false,		
        'commentBoxW': '400px',
        'commentBoxH': '350px'
    },
    function(items) {
        logTrace('comment_content.js settings collected, listing:');
        for (var key in items)
        {
            logTrace("var: " + key + " = " + items[key]);
        }
        logTrace('comment_content.js assigning vars.');

        // New Comment Page Specific Options
        alwaysPublic = items.alwaysPublic;
        alwaysSendEMail = items.alwaysSendEMail;
        alsoCheckEMail = items.alsoCheckEMail;
        commentBoxW = items.commentBoxW;
        commentBoxH = items.commentBoxH;

        logTrace('comment_content.js finished assigning vars.');

        init();
        logTrace('comment_content.js finished.');
    }
);


*/







function init_comment_content() {

    //------ID the Bodies------
    $("div.pbSubsection:eq( 0 )").attr('id', 'caseDetailsBody'); // Insert ID for "Case Information" body
    $("div.pbSubsection:eq( 1 )").attr('id', 'newCommentBody');  // Insert ID for "Details" body
    var caseDetailsID = "#head_1_ep, #caseDetailsBody";          // ID for "Case Details"
    var newCommentID = "#head_2_ep, #newCommentBody";            // ID for "Comment Details"
    var caseCommentsID = "#" + $("div.bRelatedList:eq( 0 )").attr('id'); // ID for "Case Comments"
    var bottomButtonsID = "#bottomButtonRow";                    // ID for [Save] [Cancel] [Check Spelling] //from bottom of page
    //------Bodies Successfully Identified------

    $('#CommentBody').css({'width': commentBoxW,'height': commentBoxH}); // Change the default size for the new comment textbox
    if (($(window.parent.document).find("#fiftyFrame").length || $(window.parent.document).find("#framePOP").length) > 0) { // if in 50/50 or POP frame
        // Remove useless pieces for better formatting in 50/50 & POP:
        $("#AppBodyHeader").css('display','none');
        $("#sidebarCell").css('display','none');
        $("div.bRelatedList.first").css('display','none');
        $("#head_1_ep").css('display','none');
        $("div.bPageFooter.noTableFooter").css('display','none');
        $("div.bPageTitle").css('display','none');
        $("body.sfdcBody").css({'background-image': '', 'background-color': '#FFFFFF'}); // Remove blue background
        $("#caseDetailsBody").css('display','none'); // Remove details, they are in the case
        $("div.fewerMore").css('display','none');    // Remove fewer/more button, useless here
    }

    //------BEGIN: Checkbox Code------
    if (alwaysPublic)
    {
        $("#IsPublished").attr('checked', '');
        document.getElementById("NotificationSelected").disabled = false; // Check the Public box, and enables send box
        if (alwaysSendEMail)
        {
            $("#NotificationSelected").attr('checked', '');                   // Check the send box too
        }
    }
    if (alsoCheckEMail === false)
    {
        $("#IsPublished").attr('onclick', 'fixCBs();');  // Assign replacement onclick function
    }

    var script = document.createElement("script"); // Create the script element for the replacement onclick function
    script.type = 'text/javascript';               // Define the script type
    script.innerHTML =           // BEGIN: Add script content
        'function fixCBs() { \n' +
        '    if (document.getElementById("NotificationSelected").disabled) { document.getElementById("NotificationSelected").disabled = false; } \n' +
        '    else if (document.getElementById("NotificationSelected").checked) { \n' +
        '        document.getElementById("NotificationSelected").checked = false; \n' +
        '        document.getElementById("NotificationSelected").disabled = true; \n' +
        '    } \n' +
        '    else if (document.getElementById("NotificationSelected").checked == false) { document.getElementById("NotificationSelected").disabled = true; } \n' +
        '}';                   // END: Add script content
    document.body.appendChild(script);    // Append to webpage for use
    //------END: Checkbox Code------

    // BEGIN: Save & dismiss code
    /*
if (window.location.href.indexOf("&dismiss=1") > -1) // if dismiss was passed
{
    $("<input id='save-dismiss' value='Save & Dismiss' title='Save & Dismiss' type='button' class='btn'></input>")
        .click( function() {
        var fiveHunID = $("#cancelURL").val().replace("/","");
        var caseNum = $(document).find("title").text().split(" ")[2];
        popIt("framePOP", "https://ca--c.na13.visual.force.com/apex/Dismiss_selected_Callbacks?caseId=" + fiveHunID, "Dismiss Callbacks");
        //$("input[value='Cancel']").click();
        $("input[value='Save']").click();
    } ).appendTo("#topButtonRow").clone().appendTo("#bottomButtonRow");
}
*/
    // BEGIN: Save & dismiss code

    // BEGIN: Post comment on email
    var email2Comment = false;
    try {
        email2Comment = getUrlSub(windowLocation,"email2Comment");
    } catch(e) {
        logError("Email2Comment: email2Comment flag not found." +e );
    }

    if (email2Comment) {// TODO needs if statement
        logTrace("Email2Comment: starting");
        // Uncheck Public & Send Notification (we don't want public because custoemrs would see duplicate messages.)
        // - Force un-check 'Public' Checkbox
        document.getElementById("IsPublished").checked = false;
        // - Force un-check 'Send Notification' Checkbox
        document.getElementById("NotificationSelected").checked = false;

        // Disable Send Notification Checkbox (to match standard behavior.)
        document.getElementById("NotificationSelected").checked = false;

        // Get email info from url
        // - Initialize vars with false
        var emailTo = false, emailADD = false, emailCC = false, emailBCC = false, emailSub = false, emailBody = false;
        // Set up variable to hold comment text
        var commentText = commentStart + "\n\n";
        // each item:
        // - If enabled...
        // -- Try re-assigning with a real value
        // -- If not still false, add to the comment text



        //if (includeToInfo) {
        try {
            emailTo = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailTo")));
            if (emailTo !== false) commentText += labelTo + emailTo + "\n";
        } catch(e) {
            logError("Email2Comment: Failed to add emailTo to comment text.");
        }
        try {
            //emailADD = lzw_decode(decodeURI(windowLocation.split("&emailADD=")[1].split("&")[0]));
            emailADD = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailADD")));
            if (emailADD !== false) commentText += labelADD + emailADD + "\n";
        } catch(e) {
            logError("Email2Comment: Failed to add emailADD to comment text.");
        }
        try{
            // emailCC = lzw_decode(decodeURI(windowLocation.split("&emailCC=")[1].split("&")[0]));
            emailCC = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailCC")));
            if (emailCC !== false) commentText += labelCC + emailCC + "\n";
        } catch(e) {
            logError("Email2Comment: Failed to add emailCC to comment text.");
        }
        try {
            // emailBCC = lzw_decode(decodeURI(windowLocation.split("&emailBCC=")[1].split("&")[0]));
            emailBCC = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailBCC")));
            if (emailBCC !== false) commentText += labelBCC + emailBCC + "\n";
        } catch(e) {
            logError("Email2Comment: Failed to add emailBCC to comment text.");
        }

        //}

        //if (includeSubjet) {
        try {
            // emailSub = lzw_decode(decodeURI(windowLocation.split("&emailSub=")[1].split("&")[0]));
            emailSub = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailSub")));
            if (emailSub !== false) commentText += labelSub + emailSub + "\n";
        } catch(e) {
            logError("Email2Comment: Failed to add emailSub to comment text.");
        }
        //}

        //if (includeEmailBody) {
        try  {
            // emailBody = lzw_decode(decodeURI(windowLocation.split("&emailBody=")[1].split("&")[0]));
            emailBody = lzw_decode(decodeURI(getUrlSub(windowLocation,"emailBody")));
            if (emailBody !== false) commentText += labelBody + "\n" + emailBody;
        } catch(e) {
            logError("Email2Comment: Failed to add emailBody to comment text.");
        }
        //}

        // Set text of comment box
        $("#CommentBody").val(commentText);

        // Click Save to submit comment
        //$("input[value='Cancel']").click(); // Click Cancel (for testing)
        $("input[value=' Save ']").click(); // Click Save
    }
    // END: Post Comment On Email


    logTrace('comment_content.js finished.');
}