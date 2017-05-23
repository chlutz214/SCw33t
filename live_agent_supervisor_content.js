/////////////////////////////////////     live_agent_supervisor_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/05/2017
// Full Path: /live_agent_supervisor_content.js
//
// Description: Auto-select the product & auto-collapse the "Queue Status" section
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('live_agent_supervisor_content.js initializing.');
/* Release Notes:
 * 
 * 1.4 - March 03, 2017
 * - Added to extension. NOT WORKING YETTTTTTTTTTTTTTTT
 * 
 * 1.3 - June 21, 2016
 * - Updated to be more useful to management & multi-product engineers...
 *   - Added ability to select multiple products
 *   - Added ability to filter by a custom list of users
 * - Updated JQuery
 *
 * 1.2 - June 17, 2016
 * - Added statusLevel option, allows users to choose exactly which status they want to see
 * - Depreciated onlyOnline option, included in change above
 *
 * 1.1 - June 15, 2016
 * - Added onlyMyQS option, to allow users to see only their product's Queue status (instead of hiding them all)
 *
 * 1.0
 * - Initial Release
 */
 
// ==UserScript==
// @name        LAS- AutoSelectProduct
// @namespace   lutch01-ca.com
// @author      Christian Lutz
// @description 
// @include     https://ca.my.salesforce.com/liveagent/supervisor.apexp*
// @run-at      document-end
// @version     1.3
// @grant       none
// @require     https://code.jquery.com/jquery-3.0.0.min.js
// @require		http://cawiki.ca.com/download/attachments/715880888/ServiceCloudCaseFunctions.js
// ==/UserScript==

/* For direct access to the Live Agent Supervisor page use the link below:
   https://ca.my.salesforce.com/liveagent/supervisor.apexp?isdtp=nv

   It is possible to PIN this page to the SC Tab bar using the following steps (Figured out by Aaron Armagost):
     1) Click + on the tab bar to create new tab.
     2) Paste the link above into link box & click Go!
     3) Click the down arrow at the very end of the tab bar.
     4) Find the proper tab in the list (they are in the same order as the tab bar) and click the Push Pin button.
     5) The tab will lose its words and just have the blue chat bubble icon, it is now pinned.                                          */

	 // --TODO integrate into getvar...
	 // --TODO find out if this is working... mostly... fix brokens
	 // TODO In settings, option to pin the agent page
/*
// LAS AutoSelect - User Options:
var prodName = ["Privileged Identity Manager"]; // Your product name(s), names as they appear in "Queue Status" list
var onlyMyQS = true;    // Only show "Queue Status" for the prodName above? (Only if collapseQS is false)
var collapseQS = false; // Do you want to auto-collapse "Queue Status"
var statusLevel = 0;    // What level should be default when loaded?
*/
                        /* 0 = Not Offline (Online + Away)
                           1 = Online
                           2 = Away
                           3 = Offline
                           4 = All Statuses (Online + Away + Offline)        */
						   /*
var userFilter = true; // Do you want to add a filter for the users in userList below? (will show up at top of skills dropdown as "--My User Filter--")
                        // Put users you want to filter in the list below (as the name appears in the Agent Status list.
                        // ex: var userList = ["Jack Johnson", "John Jackson"]
var userList = ["Aaron Armagost", "Brian Rehder", "Carlos Solla", "Christian Lutz", "Patrick Thomson", "Shams Ahmed"];
*/

// TODO Fix SfdcApp.LiveAgent.Supervisor call problems......

// Live Agent Supervisor Page Specific
var prodName;
var onlyMyQS;
var collapseQS;
var statusLevel;
var userFilter;
var userList;

var scriptQ = '<script id="LAS_functions" type="text/javascript">function filterQs() {SfdcApp.LiveAgent.Supervisor.filterQueues(); SfdcApp.LiveAgent.Supervisor.filterAgents();}</script>';
$(scriptQ).appendTo('body');

logTrace('live_agent_supervisor_content.js collecting settings.');

var requestVars = JSON.stringify(['prodName','onlyMyQS','collapseQS','statusLevel','userFilter','userList']);
getVars(requestVars,init_live_agent_content);

function init_live_agent_content() {

// DO NOT TOUCH BELOW!
wait4ele($("table.list"),"tr.dataRow",200,50,
function(ele,sel,box) {  // Wait for the page to load fully

    //Add helper scripts to page:
	var jqScript = '<script src="https://code.jquery.com/jquery-3.0.0.min.js" id="LAS_jqScript" type="text/javascript"></script>';
    $(jqScript).appendTo($('body'));
/*
    var scripts = '<script id="LAS_functions" type="text/javascript">';
	
    scripts += 'var statusLevel = ' + statusLevel + ';';
    scripts += 'var userFilter = ' + userFilter + ';';
    scripts += 'var userList = [];';
    scripts += 'var userListStatic = [';
    for (var i = 0; i < userList.length; i++) { scripts += '"' + userList[i] + '", '; }
    scripts += '];';
    scripts += 'function selChanged() { statusLevel = $("select.LA_AgentStatus_Selector").find(":selected").val(); reFilter();}';
    scripts += 'function reListUsers(que) {                                       \
                    if (que != "--My User Filter--") {                            \
                        userList = [];                                            \
                        $("td.nameCell").each(function() {                        \
                            if ($(this).parent().css("display") == "table-row") { \
                                userList.push($(this).text());                    \
                            }                                                     \
                        });                                                       \
                    } else userList = userListStatic;                             \
                 }';
    scripts += 'function resetAll(que, status) {                                                                 \
                    $("select.LA_AgentStatus_Selector #ANY_OPTION").prop("selected", true);                      \
                    $("select.LA_Skill_Selector #ANY_OPTION").prop("selected", true);                            \
                    SfdcApp.LiveAgent.Supervisor.filterQueues(); SfdcApp.LiveAgent.Supervisor.filterAgents();    \
                    $("select.LA_Skill_Selector option:contains(" + que + ")").prop("selected", true);           \
                    SfdcApp.LiveAgent.Supervisor.filterQueues(); SfdcApp.LiveAgent.Supervisor.filterAgents();    \
                    reListUsers(que);                                                                            \
                    $("select.LA_AgentStatus_Selector option[value=\'" + status + "\']").prop("selected", true); \
                    SfdcApp.LiveAgent.Supervisor.filterAgents();                                                 \
                    selChanged();                                                                                \
                }';
    scripts += 'function reFilter() {                                                        \
                    $("#j_id0\\\\:j_id13\\\\:agentPanel tr.dataRow").css("display","none");  \
                    $("td.nameCell").each(function() {                                       \
                        if (jQuery.inArray($(this).text(), userList) != -1) {                \
                            showAgentLAS($(this).parent(), $(this).next().text());           \
                        }                                                                    \
                    });                                                                      \
                }';
    scripts += 'function showAgentLAS(agentRow, status) { \
                    if (statusLevel == "notOffline" && (status == "Available" || status == "Away")) { agentRow.css("display","table-row"); } \
                    else if (statusLevel == "online" && status == "Available") { agentRow.css("display","table-row"); }                      \
                    else if (statusLevel == "away" && status == "Away") { agentRow.css("display","table-row"); }                             \
                    else if (statusLevel == "offline" && status == "Offline") { agentRow.css("display","table-row"); }                       \
                    else if (statusLevel == "ANY") { agentRow.css("display","table-row"); }                                                  \
                }';
    scripts += '</script>';
    $(scripts).appendTo('body');
	*/
	// var scriptQ = '<script id="LAS_functions" type="text/javascript">function filterQs() {SfdcApp.LiveAgent.Supervisor.filterQueues(); SfdcApp.LiveAgent.Supervisor.filterAgents();}</script>';
	// $(scriptQ).appendTo('body');


    if (onlyMyQS)  {                                                    // Hide all other products?
        for (var i = 0; i < $("#j_id0\\:j_id7\\:queuePanel\\:tb tr.dataRow").length; i++) {
            if (jQuery.inArray($("#j_id0\\:j_id7\\:queuePanel\\:tb tr.dataRow:eq(" + i + ") th").text(), prodName) == -1) {
                $("#j_id0\\:j_id7\\:queuePanel\\:tb tr.dataRow:eq(" + i + ")").css('display','none');
            }
        }
    }
    if (collapseQS) { $("a.LA_Expansion_Toggle").first().click(); }         // Close Queue status?
    $("select.LA_Skill_Selector #ANY_OPTION").removeAttr("selected");       // Remove Selected from All Skills
    $("select.LA_AgentStatus_Selector #ANY_OPTION").removeAttr("selected"); // Remove Selected from All Statuses

    $("<option id='notOffline' value='notOffline'>Not Offline</option>").appendTo($("select.LA_AgentStatus_Selector")); // Add "Not Offline" (online + away) option
    if (userFilter) {
        prodName.unshift("--My User Filter--"); // Add custom user filter to beginning of selected products list
        $("<option id='myUFilter' value='myUFilter'>--My User Filter--</option>").prependTo($("select.LA_Skill_Selector")); // Add custom user filter to dropdown list
    }
    $("select.LA_AgentStatus_Selector").attr("onchange", "selChanged();" );    // Set onchange for Skills dropdown to custom function
    $("select.LA_Skill_Selector").attr("onchange", "resetAll($('select.LA_Skill_Selector').find(':selected').text(),$('select.LA_AgentStatus_Selector').find(':selected').val());" ); // Set onchange for status dropdown to custom function
    $("td.LA_Status").bind("DOMSubtreeModified", function() { reFilter(); } ); // Set onchange for table to detect changes in user status

    if      (statusLevel == 4) { resetAll(prodName[0], "ANY"); }        // All
    else if (statusLevel == 3) { resetAll(prodName[0], "offline"); }    // Offline Only
    else if (statusLevel == 2) { resetAll(prodName[0], "away"); }       // Away Only
    else if (statusLevel == 1) { resetAll(prodName[0], "online"); }     // Online Only
    else if (statusLevel == 0) { resetAll(prodName[0], "notOffline"); } // Online + Away


});

logTrace('live_agent_supervisor_content.js finished.');
}
	// var scriptQ = '<script id="LAS_functions" type="text/javascript">function filterQs() {SfdcApp.LiveAgent.Supervisor.filterQueues(); SfdcApp.LiveAgent.Supervisor.filterAgents();}</script>';
	// $(scriptQ).appendTo('body');

function selChanged() { statusLevel = $("select.LA_AgentStatus_Selector").find(":selected").val(); reFilter(); }
function reListUsers(que) {
	if (que != "--My User Filter--") {
		userList = [];
		$("td.nameCell").each(function() {
			if ($(this).parent().css("display") == "table-row") {
				userList.push($(this).text());
			}
		});
	} else { userList = userListStatic; }
}

	
function resetAll(que, status) {
	$("select.LA_AgentStatus_Selector #ANY_OPTION").prop("selected", true);
	$("select.LA_Skill_Selector #ANY_OPTION").prop("selected", true);
	// TODO fix here:
filterQs();
    // document.SfdcApp.LiveAgent.Supervisor.filterQueues(); document.SfdcApp.LiveAgent.Supervisor.filterAgents();
	$("select.LA_Skill_Selector option:contains(" + que + ")").prop("selected", true);
	// document.SfdcApp.LiveAgent.Supervisor.filterQueues(); document.SfdcApp.LiveAgent.Supervisor.filterAgents();
	filterQs();
	reListUsers(que);
	$("select.LA_AgentStatus_Selector option[value=\'" + status + "\']").prop("selected", true);
	// document.SfdcApp.LiveAgent.Supervisor.filterAgents();
	filterQs();
	selChanged();
}
function reFilter() {
	$("#j_id0\\:j_id13\\:agentPanel tr.dataRow").css("display","none");
	$("td.nameCell").each(function() {
		if (jQuery.inArray($(this).text(), userList) != -1) {
			showAgentLAS($(this).parent(), $(this).next().text());
		}                                                                    
	});                                                                      
}

function showAgentLAS(agentRow, status) {
	if (statusLevel == "notOffline" && (status == "Available" || status == "Away")) { agentRow.css("display","table-row"); }
	else if (statusLevel == "online" && status == "Available") { agentRow.css("display","table-row"); }
	else if (statusLevel == "away" && status == "Away") { agentRow.css("display","table-row"); }
	else if (statusLevel == "offline" && status == "Offline") { agentRow.css("display","table-row"); }
	else if (statusLevel == "ANY") { agentRow.css("display","table-row"); }    
}