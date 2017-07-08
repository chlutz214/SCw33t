// templatSC_shared.js

// @include     https://ca.my.salesforce.com/00a/e*
// @include     https://ca--c.na13.visual.force.com/apex/defect*
// @include     https://ca.my.salesforce.com/500a*
// @exclude     https://ca--c.na13.visual.force.com/apex/defectComment*

// TemplateSC
var enableCommentTemplates;
var enableNewDefectTemplate;
var enableEmailTemplates;
var emailGreeting;
var emailSignature;
var ftsSubject;
var ftsDList;
var ftsCC;
var ftsBCC;
var emailTemplates;
var commentTemplates;
var setSendNotification;

var requestVars = ['enableCommentTemplates','enableNewDefectTemplate','enableEmailTemplates','emailGreeting','emailSignature','ftsSubject','ftsDList','ftsCC','ftsBCC','emailTemplates','commentTemplates','setSendNotification'];
getVars(JSON.stringify(requestVars), initTemplateSC);


function initTemplateSC() {


// You can use variables like this for strings you will use in multiple templates:
//
var myGreeting = "Hello <contactFirst>,";
var mySignature = "Thanks, \n" +
                  "Christian Lutz \n" +
                  "Support Engineer \n" +
                  "CA Technologies - North America";
var SFTPLinks = "You may need the following information to manage case attachments using secure FTP:\n" +
                "Server name: supportftp.ca.com Log in using your CA Support Online user ID and password.\n\n" +
                "If sending files to CA then use the following path: \n" +
                "sftp://supportftp.ca.com/<siteID>/<caseNum>/files_from_customer \n\n" +
                "If downloading files from CA then use the following path: \n" +
                "sftp://supportftp.ca.com/<siteID>/<caseNum>/files_from_ca";



// Define Variables for later use:
var buttonLocID, fillBoxID, boxArray=[], limit;
// Default Explanations:
var explanations = {

    currentStatus: "What actions were taken since the last update?\n" +
                   "Summarize last interaction with the customer and work completed – were any recent actions taken?\n" +
                   "Describe troubleshooting steps taken\n" +
                   "Indicate what documentation was collected (such as: traces, logs, dumps) and what was found.",
    nextAction: "Who is taking the action?\n" +
                "What is being done?\n" +
                "Why is this action needed?\n" +
                "When is this action expected?",
    issueDetails: "Provide as much detailed information about the issue as possible.\n" +
                  "Who: is or is not experiencing the issue? All users, a group of users, just one user?\n" +
                  "What: is or is not the customer trying to do, achieve or get answered?\n" +
                  "Where: does or does not the issue occur? Which systems? Are there differences in the systems where the issue occurs vs. where it does not occur?\n" +
                  "When: did this issue first occur? How often does it occur?\n" +
                  "Why: is the issue occurring? Are there any error messages? Can you determine a Root Cause?",
    businessImpact: "What is the commercial loss or service outage impact?  (Now and in the future)\n" +
                    "Who is affected? How are they affected?\n" +
                    "What business processes are being immediately impacted?\n" +
                    "What business processes are at risk of being impacted?\n" +
                    "What future deadlines or project milestones are at risk?\n",
    productImpact: "How is this issue impacting the functionality or usage of the CA product?",
    environmentDetails: "Environment Type: PRODUCTION | PRE-PRODUCTION | DEVELOPMENT | TEST\n" +
                        "Deployment type: Physical, VM, AMI, SaaS, etc...\n" +
                        "Information about the CA Product. Collect system info when possible.\n" +
                        "What fixes have been deployed? Provide the fix numbers if possible.\n" +
                        "Information about end-users workstation & any target servers. (OS & version, version of related applications e.g. Browser, JRE)\n" +
                        "Have there been any recent changes to the customer’s environment? (OS Patches, new software, new hardware)",
    searchResults: "Have you searched for an Existing Solution?\n" + "What were the results?",
    troubleshooting: "Describe the troubleshooting steps already taken. Be as detailed as possible!\n" +
                     "What possible cause was tested?\n" +
                     "What process was done to test if this is actually causing the problem?\n" +
                     "What were the results of the test?\n",
    reproductionSteps: "Provide a detailed explanation on how to reproduce this issue.\n" +
                       "Are any test cases or test environments available?\n" +
                       "-Is there a test case that can be sent to CA?\n" +
                       "-Is there a test environment that CA can access to reproduce and investigate the problem?",
    transferReason: "Provide a reason why you are transferring the issue.",
    attachments: "List of any support documentation or files.\n" +
                 "Include descriptions of the files when possible.\n" +
                 "If attaching log files, include a time-frame where the issue happened if possible.",
    caseLinks: "Include case # and a direct link to the case.",
    clientContactsSensitivity: "Include contact info for the customer contact(s), especially if they are not the main contact assigned to the case.\n" +
                               "Include any special requests or extenuating circumstances that the customer mentioned (ex: Not available these times, use cell # first, call John first then Jane, etc…)",
    managementInvolved: "Is management involved; who? How?",
    nextRegionContacted: "If you have already contacted another engineer from the next FTS region about this; who?",
    engineeringInvolvement: "Is Engineering involved? Who?\n" +
                            "When did they become involved?\n" +
                            "Are they actively working on this?\n" +
                            "Current status on their end.\n" +
                            "Include Defect #",
    labInformation: "Include info for the lab where you reproduced this issue if possible.",
    earlyTransferReason: "If transferring before the end of your shift, why?",
    usefulResources: "Include any resources you used to help resolve the case.\n" +
                     "Examples include: other cases, third-party links, tech docs, reference guides.",
    rootCauseAnalysis: "What was the root cause of this problem?",
    workaround: "Were there any workarounds provided during this case? Explain.",
    resolution: "Was there a permanent resolution to this case? Explain.\n" +
                "If no resolution explain why.",

}; // end explanations

if (window.location.href.indexOf("00a/e") > -1) { // If is Comment Page
    buttonLocID = '#topButtonRow'; // DON'T TOUCH
    fillBoxID = "#CommentBody";    // DON'T TOUCH
    limit = 4000;                  // DON'T TOUCH

    // Build Launcher
    addLauncher("drop"); // DON'T TOUCH

    if (enableCommentTemplates === true) {
        addLauncher("dropHeader", "-- Comment Templates --");


        for (var key in commentTemplates) {
          addLauncher("dropOption", key);
          // alert(commentTemplates[key]);
          boxArray[boxArray.length] = commentTemplates[key];
        }

    } // End if

    if (enableEmailTemplates === true) {
        addLauncher("dropHeader", "-- Email Templates --");
        // For each template in array, add it to the boxArray
        // for (var i = 0; i < emailTemplates.length; i++) {
        for (var key in emailTemplates) {
            addLauncher("dropOptionEmail", key);
              boxArray[boxArray.length] = [
                ["Greeting", 2, emailTemplates[key].greeting, ""],
                ["Body", 10, emailTemplates[key].body, ""],
                ["Signature", 3, emailTemplates[key].signature, ""],
                ["Post-Signature", 4, emailTemplates[key].postSignature, ""],
            ];
        } // End for
    } // End if

    // If possilbe import values for pre-fill tags... DO NOT TOUCH
    var caseNum = $("h2.pageDescription:eq(0)").text().replace("Case", "").replace(/ /g, "");
    var myURL = decodeURIComponent(window.location.href);
    if (myURL.indexOf("&siteID=") > -1) {
        var siteID = myURL.split('&siteID=')[1].split('&')[0];
        if (siteID.length < 7) { for (i = 1; i <= (7 - siteID.length); i++) { siteID = '0' + siteID; } } // Case view doesnt list leading 0's, add them back or
        var contactFullName = myURL.split('&conFullName=')[1].split('&')[0];
        var contactFirstName = myURL.split('&conFirstName=')[1].split('&')[0];
        //alert("&siteID=" + siteID + "\n&conFullName=" + contactFullName + "\n&conFirstName=" + contactFirstName);
    }
} // end comment page


if (enableNewDefectTemplate && window.location.href.indexOf("defect") > -1) { // If is New Defect Page
    var caseNum = $("h2.mainTitle:eq(0)").text().split(": ")[1];
    var fiveHunID = window.location.href.split("eId=")[1].split("&")[0];
    buttonLocID = '#j_id0\\:formId\\:pageBlockId\\:pageBlockButtons';
    fillBoxID = "#j_id0\\:formId\\:pageBlockId\\:j_id30\\:j_id33";
    limit = 32000;

    // Generate Launcher
    addLauncher("button"); // DO NOT TOUCH

    // Template: New Defect
    boxArray[boxArray.length] = [
        ["Issue Details", 6, "", explanations.issueDetails],
        ["Business Impact", 2, "", explanations.businessImpact],
        ["Product Impact", 2, "", explanations.productImpact],
        ["Environment Details", 4, "", explanations.environmentDetails],
        ["Troubleshooting", 6, "", explanations.troubleshooting],
        ["Reproduction Steps", 6, "", explanations.reproductionSteps],
        ["Search Results", 2, "", explanations.searchResults],
        ["SE Transfer Reason", 2, "", explanations.transferReason],
        ["Attachments", 2, "", explanations.attachments],
        ["Case Links", 3, "Case #: " + caseNum + "\nCase Link: https://ca.my.salesforce.com/" + fiveHunID + "?nooverride=1", explanations.caseLinks],
    ];
} // end defect page


if (window.location.href.indexOf("salesforce.com/500a") > -1) { // If is Case Page
    //var caseNum = $(document).find("title").text().split(" ")[1];       // Collect Case #
    var fiveHunAAID = window.location.href.split("/")[3].split("?")[0]; // Collect the full 500 ID
    var fiveHunID = fiveHunAAID.slice(0,-3);                            // Collect the 500 ID

    var loopTime = 200; // Set time between loops (ms)
    var loops = 30;     // Set max loops to avoid overrun
    var lps = 1;        // Starting at loop 1
    var foundIt = 0;    // Haven't found the info we are waiting for.
    var myInterval = setInterval(function() { loop1(); }, loopTime); // Continue running on interval

    function loop1(argss) {
        if (foundIt === 0) { // If foundIt = 0, page is not ready to execute the following code, loop again
            //alert("looping");
            lps += 1;                                                                 // Add to loop counter (to avoid endless loop)
            if (lps >= loops) { clearInterval(myInterval); }                          // If there have been more loops than max, stop trying to loop
            if (document.getElementsByName('newComment').length > 0) { foundIt = 1; } // If 'newComment' button exists... to ensure page is ready
            if (foundIt) {                                                            // If Page is ready execute, otherwise skip and loop again
                // Collect prefills
                var siteID = $("#00Na000000Arhhc_ileinner").text();   // Collect Site ID
                var contactFullName = $("#cas3_ileinner").text();     // Collect Contact Full Name
                var contactFirstName = contactFullName.split(' ')[0]; // Collect Contact First Name

                // Make a new button with the prefills passed in the header
                var newNewComment = '<input value=" New " class="btn" name="newComment-tsc" onclick="navigateToUrl(\'/00a/e?parent_id=' + fiveHunID + '&amp;retURL=%2F' + fiveHunID + '%26isdtp%3Dvw&amp;siteID=' + siteID + '&amp;conFullName=' + contactFullName + '&amp;conFirstName=' + contactFirstName + '\',null,\'newComment\');" title="New Comment" type="button">';
                $(newNewComment).prependTo("#" + fiveHunID + "_RelatedCommentsList td.pbButton");

                // Hide the old button
                $("input[name=newComment]").css('display', 'none');
            } // End foundIt 1
        } // End foundIt 0
    } // End loops
} // End case page

// Create template header tag styling...
//   if you change these change the templateIn function also!
var templateBegin = "###### [";
var templateEnd = "] ######";

//Create structure
$("<div id='templateSC-div' class='tmplOverlay' style='display: none;'></div>").appendTo('body');                                                                                                              // Create hidden div & append
$('<div class="bPageBlock brandSecondaryBrd bEditBlock secondaryPalette" id="tSC-ep" style="position:fixed; width:100%;"><div class="pbHeader" ><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="pbTitle"><h2 class="mainTitle">TemplateSC</h2></td><td class="pbButton" id="templateSC-topButtonRow"></td></tr></tbody></table></div></div>')
    .appendTo('#templateSC-div');                                                                                                                                                                          // Create top bar & append
$("<table class='tmplTBa'><tr><td id='templateSC-templateTitle' class='templateName'>New Defect</td></tr><tr><td>Remaining Characters: </td><td id='templateSC-charCounter'>4000</td></tr></table>").appendTo('#templateSC-div');
$("<table id='templateSC-table' class='tmplTBb'></table>").appendTo('#templateSC-div');                                                                                                                     // Create table to hold form & append
$("<input id='templateSC-saveBtn' value='Save Changes' title='Save Changes' type='button' class='btn'> </input>").click(
  function() {
    templateSave($('#templateSC-launcher option:selected').val());
  }).appendTo('#templateSC-topButtonRow');             // Create apply button & append
$("<input id='templateSC-saveNSend' value='Save & Send' title='Save & Send' type='button' class='btn' style='display: none;'> </input>").click(
  function() {
    templateSave($('#templateSC-launcher option:selected').val(),true);
     $("input[name=save]").click();
   }).appendTo('#templateSC-topButtonRow');             // Create apply button & append
$("<input id='templateSC-discardBtn' value='Discard Changes' title='Discard Changes' type='button' class='btn'> </input>").click(
  function() {
    templateDiscard($('#templateSC-launcher option:selected').val());
  }).appendTo('#templateSC-topButtonRow'); // Create discard button & append
$("<input id='templateSC-sendMail' value='Save & Email' title='Save & Email' type='button' class='btn' style='display: none;'> </input>").click(
  function() {
    templateSave($('#templateSC-launcher option:selected').val(),"true");
  }).appendTo('#templateSC-topButtonRow'); // Create save & email button & append
$("<input id='templateSC-import' value='Import Latest' title='Imports the latest values from previously used templates.' type='button' class='btn' style='display: none;'> </input>").click(
  function() {
    templateImport($('#templateSC-launcher option:selected').val(),"true");
  }).appendTo('#templateSC-topButtonRow'); // Create import button & append
$("#templateSC-launcher").appendTo(buttonLocID);                                                                                                                                                           // Create Launcher button/DropDown & append
//if ($("#templateSC-launcher").is("select")) { $("#templateSC-RElauncher").appendTo(buttonLocID); }                                                                                                         // If dropdown append relauncher
$("#templateSC-RElauncher").appendTo(buttonLocID);
$("<input id='templateSC-clearBtn' value='Clear' title='Clear' type='button' class='btn'> </input>").click(function() { templateClear(0);parseComments(); }).appendTo(buttonLocID);                                        // Create Clear button & append



// functions
function addLauncher(type, args) {

    var tauCont = true; // text area used, continue?
    var numOpts, numOptsD; // define for later use

    // Create launch button & append
    if (type == "button") {
        $("<input id='templateSC-launcher' value='Launch Template' title='Launch Template' type='button' class='btn'> </input>").click(function() {
            $("#templateSC-div").css('display', 'block');
            autoBox(0);
            templateIn(0, fillBoxID);
        }).appendTo('body');
        $("<input id='templateSC-RElauncher' value='Re-Launch Template' title='Re-Launch Template' type='button' class='btn' style='display:none'> </input>").click(function() {
            $("#templateSC-div").css('display', 'block');
            //alert($("#templateSC-launcher option:selected").val());
            templateIn(0, fillBoxID);
        }).appendTo('body');
    }  else if (type == "drop") {// Create launch DropDown & append
        var defaultOption = '<option id="templateSC-launcher-headODef" selected="selected" disabled value="-1">---- Launch a Template ----</option>';
        $("<select id='templateSC-launcher'>" + defaultOption + "</select>").change(function() {
            if (textAreaUsed()) { tauCont = confirm("Are you sure you want to launch template?\nAny text in the textbox will be lost."); }
            if (tauCont) {
                var newVal = $("#templateSC-launcher option:selected").val();
                $("#templateSC-div").css('display', 'block');
                //alert(newVal);
                $("#templateSC-saveBtn").unbind("click").click(function() { templateSave(newVal); });
                $("#templateSC-discardBtn").unbind("click").click(function() { templateDiscard(newVal); });
                autoBox(newVal);
                templateIn(newVal, fillBoxID);
            }
        }).appendTo('body');
        $("<input id='templateSC-RElauncher' value='Re-Launch Template' title='Re-Launch Template' type='button' class='btn' style='display:none'> </input>").click(function() {
            $("#templateSC-div").css('display', 'block');
            //alert($("#templateSC-launcher option:selected").val());
            templateIn($("#templateSC-launcher option:selected").val(), fillBoxID);
        }).appendTo('body');
    } else if (type == "dropOption") {// Create drop down option & append
        numOpts = $("#templateSC-launcher option").length;           // Number of options already existing
        numOptsD = $("#templateSC-launcher option:disabled").length; // Number of options that are disabled (headers)
        $('<option id="templateSC-launcher-o' +  (numOpts - numOptsD ) + '" value="' +  (numOpts - numOptsD ) + '">' + args + '</option>').appendTo($("#templateSC-launcher"));
    }  else if (type == "dropHeader") { // Create dropdown unselectable "header" type
        numOpts = $("#templateSC-launcher option").length;           // Number of options already existing
        numOptsD = $("#templateSC-launcher option:disabled").length; // Number of options that are disabled (headers)
        $('<option id="templateSC-launcher-headO' +  (numOptsD) + '" disabled value="-1"' + '">' + args + '</option>').appendTo($("#templateSC-launcher"));
    } else if (type == "dropOptionEmail") {
        numOpts = $("#templateSC-launcher option").length;           // Number of options already existing
        numOptsD = $("#templateSC-launcher option:disabled").length; // Number of options that are disabled (headers)
        $('<option id="templateSC-launcher-e' +  (numOpts - numOptsD ) + '" value="' +  (numOpts - numOptsD ) + '">' + args + '</option>').appendTo($("#templateSC-launcher"));
    }

} // end addLauncher

function autoBox(arrID) {
    if (window.location.href.indexOf("defect") > -1) { arrID = 0; }
    //$("#templateSC-table").children().each($(this).remove());
    $('#templateSC-table').html("");
    $("#templateSC-import").css('display', 'none');
    //if (arrID.indexOf('e') > -1) {

    //} else {
        for (var i=0; i < boxArray[arrID].length; i++) {
            addBox(boxArray[arrID][i][0], i, boxArray[arrID][i][1], boxArray[arrID][i][2], boxArray[arrID][i][3], arrID);
        } // Add Boxes
        if ($('#templateSC-launcher option:selected').attr('id').indexOf('-e') > -1) { // is email, no import
          $("#templateSC-saveNSend").css('display', 'inline');
        } else {   // not email... enable import
          $("#templateSC-import").css('display', 'inline');
          $("#templateSC-saveNSend").css('display', 'none');
        }
        countChars(arrID);
    //}
} // end autoBox

// Title, Box ID, # of text rows, Text to prefill box with, explanation of what belongs in box
function addBox(boxTitle, idName, rows, preFill, explanation, arrID) {
    if (window.location.href.indexOf("defect") > -1) {
      arrID = 0;
    }
    if (rows > 0) {
        $("<tr class='textBoxRow'><td class='labelClass' id='templateSC-box-" + idName + "-c1'><label for='templateSC-box-" + idName + "'>" + boxTitle + "</label></td><td id='templateSC-box-" + idName + "-c2'>" + "</td></tr>").appendTo("#templateSC-table");
        $("#templateSC-box-" + idName + "-c2")
            .append($('<textarea class="taClass" rows="' + rows + '" type="textbox" id="templateSC-box-' + idName + '"></textarea>')
                    .change(function() { countChars(arrID); })
                    .keydown(function() { countChars(arrID); })
                    .keyup(function() { countChars(arrID); })
                    .click(function() { countChars(arrID); })
                    .mouseup(function() { countChars(arrID); }));
        if (preFill !== undefined) { $("#templateSC-box-" + idName).val(replacePlaceHolds(preFill)); }
        if (explanation !== "") {
            var expBtn = $("<input id='templateSC-exp-" + idName + "' value='*' title='Explanation' type='button' class='btn'> </input>").click(function() { countChars(arrID); alert(explanation); });
            expBtn.appendTo($("#templateSC-box-" + idName + "-c1"));
        }
    }
    else if (rows === 0)
    {
         $("<tr><td class='labelClass' id='templateSC-box-" + idName + "-c1'></td><td class='labelClass' id='templateSC-box-" + idName + "-c2' style='text-align:center;'><label for='templateSC-box-" + idName + "'>========== " + boxTitle + " ==========</label></td></tr>").appendTo("#templateSC-table");
    }
} // end addBox

// Function to make it easy to replace the <placeholder> strings in templates.
function replacePlaceHolds(str) {
    try {
        str = str.replace(/<caseNum>/g, caseNum);
        if (myURL.indexOf("&siteID=") > -1) {
            str = str.replace(/<siteID>/g, siteID)
                     .replace(/<contactFull>/g, toTitleCase(contactFullName))
                     .replace(/<contactFirst>/g, toTitleCase(contactFirstName));
        }
    } catch(e) {}
    return str;
}



function templateIn(arrID, source) { // do placeholders get done here?!
    //if (window.location.href.indexOf("defect") > -1) { arrID = 0; }
    if ($("#templateSC-launcher").is("select")) {
        $('#templateSC-templateTitle').text($('#templateSC-launcher option:selected').text());
        if ($('#templateSC-launcher option:selected').text() == "Follow The Sun") {
            $('#templateSC-sendMail').css('display','inline');
        } else {
          $('#templateSC-sendMail').css('display', 'none');
        }
    }
    else if (window.location.href.indexOf("defect") > -1) {
        arrID = 0;
        $('#templateSC-templateTitle').text("New Defect");
    }
    for (var i = 0; i < boxArray[arrID].length; i++) {//alert("3");
        if (source != fillBoxID && $(source).text().split(templateBegin + boxArray[arrID][i][0] + templateEnd)[1] !== undefined) {//alert("1");
            $("#templateSC-box-" + i).val($(source).text().split(templateBegin + boxArray[arrID][i][0] + templateEnd)[1].split(new RegExp(templateBegin.replace("[","\\[") + '|$', 'g'))[0].trim()); // TemplateBegin mod here
        }
        else if (source == fillBoxID && $(source).val().split(templateBegin + boxArray[arrID][i][0] + templateEnd)[1] !== undefined) {//alert("2");
            $("#templateSC-box-" + i).val($(source).val().split(templateBegin + boxArray[arrID][i][0] + templateEnd)[1].split(new RegExp(templateBegin.replace("[","\\[") + '|$', 'g'))[0].trim()); // TemplateBegin mod here
        }
        else if ( $("#templateSC-box-" + i).val() != replacePlaceHolds(boxArray[arrID][i][2])) { $("#templateSC-box-" + i).val(''); }
    }
    countChars(arrID);
} // End templateIn

function templateSave(arrID, mail) {
    //mail used to identify FTS for non-emial or to identify sendNSave for email
    if (window.location.href.indexOf("defect") > -1) { arrID = 0; }
    if ($('#templateSC-launcher').is("select") && $('#templateSC-launcher option:selected').attr('id').indexOf('-e') > -1) { // is email
        //alert("emailsave");
        var textt = "";
        for (var i = 0; i < boxArray[arrID].length; i++) {  // ...if filled, set with filler                                                                                                                            // for each template component...
            if ($("#templateSC-box-" + i).val() !== "" && boxArray[arrID][i][1] > 0) {
              textt += $("#templateSC-box-" + i).val() + "\n\n";
            }
        }
        $("#templateSC-launcher").css('display', 'none'); // Hide launcher, cannot relaunch emails
        $("#templateSC-div").css('display', 'none'); // Hide template
        $(fillBoxID).val(textt);

        if (setSendNotification | mail) {
            $("#IsPublished").attr('checked', '');                                 // Check Publish
            $("#NotificationSelected").attr('checked', '').removeAttr('disabled'); // Check Send Notification & enable
        }
    } else { // is not email
        var confirmFill = true;
        var notFilled = [];
        for (var i = 0; i < boxArray[arrID].length; i++) {        // for each template component...
            if ($("#templateSC-box-" + i).val() === "" && boxArray[arrID][i][1] > 0) { // ...if filled, set with filler
               notFilled.push(boxArray[arrID][i][0]);
             }
            //else  { textt += templateBegin + boxArray[arrID][i][0] + templateEnd + "\n\nN/A\n\n"; } // ...if not filled, set to N/A
        }
        if (notFilled.length == 1) {
          confirmFill = confirm("The field: " + notFilled + " is not filled in. Would you like to fill it with 'N/A'?");
        } else if (notFilled.length > 0) {
          confirmFill = confirm("The fields: " + notFilled + " are not filled in. Would you like to fill them each with 'N/A'?");
        }
        if (confirmFill) {
            $("#templateSC-div").css('display', 'none'); // Hide template
            var textt = "";
            for (var i = 0; i < boxArray[arrID].length; i++) {                                                                                                                              // for each template component...
                if ($("#templateSC-box-" + i).val() !== "" && boxArray[arrID][i][1] > 0) { // ...if filled, set with filler
                   textt += templateBegin + boxArray[arrID][i][0] + templateEnd + "\n" + $("#templateSC-box-" + i).val() + "\n\n";
                 } else if (boxArray[arrID][i][1] > 0) {
                  textt += templateBegin + boxArray[arrID][i][0] + templateEnd + "\nN/A\n\n";
                }                                                                                     // ...if not filled, set to N/A
            }
            $(fillBoxID).val(textt); // fill the fillBox

            if (textt !== "") { // if using dropdown & there is something to fill
                $("#templateSC-launcher").css('display', 'none');        // Hide launch dropdown
                $("#templateSC-RElauncher").css('display','');           // Display re-launch button
            } else { // else if using dropdown & nothing to fill... reset dropdown to '-- Launch Template --' option.
              $("#templateSC-launcher #templateSC-launcher-headODef").prop("selected", true);
            }

        } //end if confrimFill
        else { }

        if (mail) {

            var mailTo = "mailto:" + ftsDList + "?";
            if (ftsCC !== "") { mailTo += "cc=" + ftsCC + "&"; }
            if (ftsBCC !== "") { mailTo += "bcc=" + ftsBCC + "&"; }
            mailTo += "subject=" + encodeURIComponent(ftsSubject.replace("<caseNum>", caseNum))  + "&body=" + encodeURIComponent(textt);
            window.open(mailTo, "_top");
        }
    }
} // end templateSave

function templateDiscard(arrID) {
    // if no changes ever keep drop, set back to -- Launch Template --
    if ($("#templateSC-launcher").is("select") && $(fillBoxID).val() === "") {
      $("#templateSC-launcher #templateSC-launcher-headODef").prop("selected", true);
    }

    // if initially changed, but no changes this time, hide drop, relaunch "xxx" template button

    $("#templateSC-div").css('display', 'none');
    for (var i = 0; i < boxArray[arrID].length; i++) {
        $("#templateSC-box-" + i).val(boxArray[arrID][i][2]);
    }
} // end templateDiscard

function templateClear(arrID) {
    $(fillBoxID).val("");
    //if ($("#templateSC-launcher").is("select")) {
        $("#templateSC-launcher").css('display', '');
        $("#templateSC-RElauncher").css('display', 'none');
        if ($("#templateSC-launcher").is("select")) {
          $("#templateSC-launcher #templateSC-launcher-headODef").prop("selected", true);
        }
    //}
    //else { $("#templateSC-launcher").val("Launch Template"); }

}

function textAreaUsed() {
    if ($(fillBoxID).val() !== "") { return true; }
    else return false;
}

function countChars(arrID) {
    var numChars = 0;

    // For each text box in the current template
    for (var i = 0; i < boxArray[arrID].length; i++) {
      //alert(boxArray[arrID][1]);
        if (boxArray[arrID][i][1] > 0) {
            //numBoxes +=1;
            numChars += templateBegin.length + templateEnd.length + (5); // Add template beginning, end & enters
            //numChars += boxArray[arrID][i][0].length;;
            //alert(boxArray[arrID][i][0]);
            numChars += boxArray[arrID][i][0].length; // Add template header length
            //alert($("#templateSC-box-" + i).val());
            if ($("#templateSC-box-" + i).val().length > 0) { numChars += $("#templateSC-box-" + i).val().length; } // add length of text
            else  { numChars += 3; } // else add 3 for "N/A"
            numChars += $("#templateSC-box-" + i).val().split("\n").length; // account for enters counting as 2 chars
        }
    }
    var charDif = limit - numChars;
    $('#templateSC-charCounter').text(charDif);
    if (0 < charDif && charDif < 50) { $('#templateSC-charCounter').css("background-color","#ff6"); }
    else if (charDif < 0) { $('#templateSC-charCounter').css({ "background-color": "#f33", "color": "#fff"}); }
    else { $('#templateSC-charCounter').css( "background-color",""); }
}

// Add template to an array of templates
// TODO Can I remove this?
function addTemplate(templateTitle, greeting, body, signature, postSignature) {
  emailTemplates.push([templateTitle, greeting, body, signature, postSignature]);
}

//$('<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>').appendTo('body'); // Script to include JQuery libraries
function templateImport(arrID) {
    if (window.location.href.indexOf("defect") > -1) { arrID = 0; }
    else { arrID = $('#templateSC-launcher option:selected').val(); }
    //templateIn(arrID, "div.bRelatedList.first table.list td.dataCell:eq(0)");
    if ($("div.bRelatedList.first table.list td.dataCell").length > 0) {
        //alert("parsing "+$("div.bRelatedList.first table.list td.dataCell").length);
        for (var i = $("div.bRelatedList.first table.list td.dataCell").length; i >= 0; i--) {
            //alert("A " + i + "/" + boxArray[arrID].length);
            //alert($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text());
            //if ($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text()) {
                // Check if same template, get latest
                // ---how?!?!!?
                // -- first to last? last to first?
                // :: last to first..., scan for ###[xxx]###, overwrite if found on newer
                // :: first to last..., scan for ###[xxx]###, overwrite if found if N/A
                // ????import to fillbox????
                // templateIn(arrID, "div.bRelatedList.first table.list td.dataCell:eq(" + i + ")")
            for (var j = 0; j < boxArray[arrID].length; j++) {
                try { //alert("B " + i + "/" + boxArray[arrID].length);
                    //alert($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text().split(templateBegin + boxArray[arrID][i][0] + templateEnd)[1].split(new RegExp(templateBegin.replace("[","\\[") + '|$', 'g'))[0].trim());
                    //alert($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text());

                    var splitText = $("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text().split(templateBegin + boxArray[arrID][j][0] + templateEnd)[1].split(new RegExp(templateBegin.replace("[","\\[") + '|$', 'g'))[0].trim();
                    //alert(splitText);
                    if (splitText != "N/A" && splitText !== "") {
                        $("#templateSC-box-" + j).val(splitText);
                    }
                    //else {alert("sdsds");}
                     //templateIn(arrID, "div.bRelatedList.first table.list td.dataCell:eq(" + i + ")");
                }
                catch(e) { /*alert(e);*/ }
            }
            //alert($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text());
            //}
        } // end for i
    } // end if
}

function parseComments() {

    //var loopTime = 500, loops = 20, lps = 1;
    //loop1();
    //var myInterval = setInterval(function() { loop1(); }, loopTime);
    //var foundIt = 1;
    //function loop1() {
        //if (foundIt) {
            //lps += 1; //add to loop total
            //if (lps >= loops) { clearInterval(myInterval); }
            //if ($("table.list tr.dataRow").length > 0) { foundIt = 0; } //if >1, the lists have been populated, stop looping
            if ($("div.bRelatedList.first table.list td.dataCell").length > 0) {
                //alert("parsing "+$("div.bRelatedList.first table.list td.dataCell").length);
                for (var i = 0; i < $("div.bRelatedList.first table.list td.dataCell").length; i++) {
                    //alert($("div.bRelatedList.first table.list td.dataCell:eq(" + i + ")").text());
                } // end for i
            } // end if
        //} // end foundit
    //} // end loop1

} // end parseComments


function toTitleCase(str) {
    str = str.toLowerCase();
    //alert(str);
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


}
