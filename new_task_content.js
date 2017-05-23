/////////////////////////////////////     new_task_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/04/2017
// Full Path: /new_task_content.js
//
// Description: Main content script for New Task pages.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('new_task_content.js initializing.');

if (window.location.href.indexOf("&deNum=") > -1) // If defect vars have been passed
{
    var deNum = window.location.href.split("&deNum=")[1].split("&")[0];
    var deSev = window.location.href.split("&deSev=")[1].split("&")[0];
    var seType = window.location.href.split("&seType=")[1].split("&")[0];
    if ($(window.parent.document).find("#frameDEF").length > 0) // if in DEF frame
    {
        $("#tsk5").val(deNum); // Set Subject to Defect Number
        //$("#tsk6").text(defSev); // Set Comment
        $('#00Na000000Arhg1 option:eq(' + deSev + ')').prop('selected', true); // Set Severity
        if (seType == "action") // Set as an "SE Action"
        {
            $('#tsk10 option[value="SE Action"]').prop('selected', true);
        }
        else if (seType == "info") // Set as an "SE Action"
        {
            $('#tsk10 option[value="SE Info"]').prop('selected', true);
        }
        $('#tsk12 option[value="In Progress"]').prop('selected', true); // Set status to "In Progress" ??
        $("input[name='IsReminderSet']").click();
        //$("input[value='Save']").click(); // Save Task
    } //END: if frameDEF
} // END: if ctestDe

logTrace('new_task_content.js finished.');