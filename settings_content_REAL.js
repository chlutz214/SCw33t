/////////////////////////////////////       settings_content.js     //////////////////////////////////////
//
// VeRsIoN: 0.1
// Last updated: 03/04/2017
// Full Path: settings_content.js
//
// Description: Holds main Settings page content.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('settings_content.js initializing.');

// Include sample values inside boxes!!
// sample data on/off
// feature: add your own button

// ALERT: This case has been <a>reviewed</a>

// adv opt - = Advanced TweakSC Setting, default of off or false
// adv opt + = Advanced TweakSC Setting, default of on or true
// adv opt * = ?
// MAKE CUSTOM BOXES EXPANDABLE!!!! + and - to be 75%x75% (by default, adv opt)
// Built in web browser... with tabs... keeps case notes easier? button to add source... shrink size website % on box shrink (adv opt-)
// shrink pop for super small ones (relate KB/COntent, associate defect)... custom pop size on popable links added...

//  add settings gear to top right of bar along with details-feed

// longterm future: extract feed into custom box.

//    options... Sample Fills: Real Case Fill (Make sure show more works), empty, small sample, max capacity
//               sw: use square monitor style
//    Allow to collapse/uncollapse individually (outputs like that in settings)- collapse all button

   /* OBJECT SAMPLES:
    // makeSwitch("switchID", "body"); // create sample switch
    // makeButton("btn1","Test","alert('test');","body"); // create sample Button
    // makeTextarea("ta1", "body", "Test");
    // makeTextbox("tb1", "body", "Test");
    // makePWbox("pw1", "body");

    // makeSelect("sel1", "body");
    //   addSelOpt("opt1", "Test", "sel1", "L", false);
    //   addSelOpt("opt2", "Test", "sel1", "L", false);
    //   addSelOpt("opt3", "Test", "sel1", "L", false);
    //   addSelOpt("opt4", "F", "sel1", "F", false);
    //   addSelOpt("opt5", "3", "sel1", 3, false);


    //clearById('body', "genSettingsTable");

    makeTabBox("tabbox1");
    addTab("tabbox1","arrangementTab","Arrangement", "not much here");
    addTab("tabbox1","colorTab","Color Options PaintSC?", "still not much here");
    addTab("tabbox1","genSettingsTab","General Settings", "still not much here");
    addTab("tabbox1","alertBoxTab","Alert Box Options", "s.till not much here");
    addTab("tabbox1","advSettingsTab","Advanced Settings", "s.till not much here");
    addTab("tabbox1","templateSCTab","TemplateSC", "s.till not much here");
    //openTab(event, 'tab1');

    currSel = makeSelect("arrangeBar-CellSelect", "topBar");//?????????
       addSelOpt("placeHolder", "--No Cells found--", currSel, "L", false);
       addSelOpt("opt2", "First", currSel, "F", false);
       addSelOpt("opt3", "Test", currSel, "#", false);
       addSelOpt("opt4", "Last", currSel, "L", false);

    */ // End OBJECT SAMPLES

	var fiveHunAAID = window.location.href.split("/")[3].split("?")[0]; // Collect the full 500 ID
	var fiveHunID = fiveHunAAID.slice(0,-3);                            // Collect the 500 ID

// Main loader (loaded by clicking SC Settings Button)
function init_settings() {

	logTrace('settings init called.');

	window.onbeforeunload = function(e) {
		// TODO add if statement to check for unsaved settings
		if (changedOpts()) {
		  var dialogText = 'Dialog text here';
		  e.returnValue = dialogText;
		  return dialogText;
		}
	}

	logTrace('onbefore added');

    // All related boxes use the same empty filler:
    var emptyFill = '<table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th scope="col" class="noRowsHeader">No records to display</th></tr></tbody></table>';
    // Add sample & Empty fills to current box:
    var pBodies = document.getElementsByClassName("pbBody");
    for (var i = 0; i < pBodies.length; i++) {
        var sampleKey = pBodies[i].id.split('_')[1];
        pBodies[i].innerHTML = '<div class="smallFill">' + sampleFills["small_" + sampleKey] + '</div><div class="fullFill">' + sampleFills["full_" + sampleKey] + sampleFills["showMore"] +'</div><div class="emptyFill">' + emptyFill + '</div><div class="realFill">' + pBodies[i].innerHTML + '</div>';
    }

	/////////////////////////////////////
	// When clearing body we lose the current info, move it to head while we clear body...
	var linkBar = document.getElementsByClassName("efdRLHover")[0];
	var buttonBar = document.getElementById("topButtonRow").parentNode.parentNode.parentNode.parentNode;
	document.head.appendChild(linkBar);
	document.head.appendChild(buttonBar);

	var relBoxes = document.body.getElementsByClassName("bRelatedList");
	var numRelBoxes = relBoxes.length;
	for (var i = numRelBoxes-1; i > -1; i--) {
		var a = document.head.appendChild(relBoxes[i]);
		logDebug(a.id + " :: " + i + " :: " + relBoxes[i]);
	}

    var infoBoxes = document.body.getElementsByClassName("pbSubsection");
    var infoBoxHeads = document.body.getElementsByClassName("pbSubheader");
    var numInfoBoxes = infoBoxHeads.length;

    for (var i = numInfoBoxes-1; i > -1; i--) {
        var headId = infoBoxHeads[i].id;
        //console.log(i +'/' + numInfoBoxes);
        makeDiv("holdDiv_" + headId,'head');
        //document.head.appendChild('<div id="holdDiv_' + infoBoxHeads[i] + '"></div>');
        //console.log(headId);
        var a = document.getElementById('holdDiv_' + headId).appendChild(infoBoxHeads[i]);
        var b = document.getElementById('holdDiv_' + headId).appendChild(infoBoxes[i]);
        //insertArrangeSideBarItem("emails", "Emails");
				logDebug(a + " :: " + headId + " :: " + i + " :: " + infoBoxes[i]);
    }
	/////////////////////////////////////


	// Clear Body
	clearByTagName('body');

	// Clear Head?
	//clearByTagName('head');

	// Insert CSS scripts defined in: cssCollection
	//insertCSS();

	// Insert other scripts & similar:
	insertTag("head", "title", "", "ArrangeSC Settings Generator");
	insertTag("head", "script", "text/javascript", tabBoxScript);
	//insertTag("head", "script", "text/javascript", chrome.extension.getURL("setHelper.js"));
	//insertCssTagSrc("/settings.css");
	//insertTag("head", "script", "text/javascript", deleteArrangeCellScript);
	//insertTag("head", "script", "text/javascript", parentNodeScript);
	//insertTag("head", "script", "text/javascript", selectSelectedScript);
	//insertTag("head", "script", "text/javascript", hideShowListButtonScript);
	//var resizeBtnScript = "";

	//insertTag("head", "script", "text/javascript", resizeBtnScript);




    // Make tab box & top bar
    makeTabBox("tabbox1");
    // makeTopBar('body');

    // Add Tabs
    addTab("tabbox1","arrangementTab","Arrange<b>SC</b>", ""); // <b>ARRANGE</b><span style='font-size:12px'>sc</span>
		makeTopBar('arrangementTab');
		addTab("tabbox1","genSettingsTab","Tweak<b>SC</b>", "");
    addTab("tabbox1","paintTab","Paint<b>SC</b>", "");
    // addTab("tabbox1","alertBoxTab","Alert<b>SC</b>", "");
	 	addTab("tabbox1","templateSCTab","Template<b>SC</b>", "");
		// addTab("tabbox1","snippetsSCTab","<b>SC</b>nippets", "");

    // addTab("tabbox1","advSettingsTab","Advanced <b>SC</b>w33tness", "");

    addTab("tabbox1","aboutTab","About", "");
		$('#aboutTab').html(
			"<h3>Welcome to SCw33t.</h3>"+
			"<p>SCw33t is a browser extension developed to customize & add functionality to Service Cloud.</p>"+
			"<p>This is currently BETA software, so not everything is going to always work right. Feel free to contact me if you run into any problems. -Christian Lutz (<a href='mailto://lutch01@ca.com'>lutch01@ca.com</a>)</p>"+
			"<br />"+
			"<h4>Some features borrowed from &/or inspired by: </h4>" +
			"<ul>" +
			"<li>Sean Kaim (Convenience Buttons)</li>"+
			"<li>Charles Nack & (ServiceCloudBorders)</li>"+
			"</li></li>"+
			"</li></li>"+
			"</li></li>"+
			"</ul>"
		);

    // Add Close Button
    append('<li><a href="#" id="closeSettings-li" class="tablinks" onclick="window.location.reload();">X</a></li>',"tabbox1");

    //Add Save Button (TEMPORARY!!!!!!!!??)
    append('<li><a href="#" id="saveASC" class="tablinks">Save</a></li>',"tabbox1");
    document.getElementById('saveASC').addEventListener('click', saveOut, false);

	append('<li><a href="#" id="clearCloud" class="tablinks">Reset Defaults</a></li>',"tabbox1");
    document.getElementById('clearCloud').addEventListener('click', clearSettings, false);

    // Add hidden Div & helper buttons
    makeDiv("hiddenDiv", "body");
    document.getElementById("hiddenDiv").style.display = "none";
    makeButton("deleteCellBtn","delCell","","hiddenDiv",removeArrangeCell);
    makeButton("deleteRowBtn","delCell","","hiddenDiv",removeArrangeRow);

    makeButton("addArrangeRow","+Row","","topBar",addArrangeRow);
    makeButton("clearAllArrangeBoxes","Clear All Boxes","","topBar",returnAllArrangeBoxesToSidebar);
    makeButton("resetArrange","Reset","","topBar",resetArrangementTable);

    var currSel = makeSelect("arrangeBar-RowSelect", "topBar");
    //addSelOpt(optID, optName, selID, pos, value, selected, enabled)
       addSelOpt("placeHolder", "--No Rows found--", currSel, "F", true, "disabled");
       addSelOpt("opt2", "First", currSel, "L", "1");
       addSelOpt("opt3", "Test", currSel, "L", "2");
       addSelOpt("opt4", "Last", currSel, "L", "3");
    makeButton("addCell","+Cell","","topBar",addArrangeCell);//addArragneRow();
    //makeButton("btn2","+Cell","alert('test');","topBar");

    // var currSel2 = makeSelect("arrangeBar-fillSelect", "topBar");
    //    addSelOpt("arrangeBar-fillSelect-real", "Real Case", currSel2, "L", "realFill");
    //    addSelOpt("arrangeBar-fillSelect-small", "Sample Fill - Small", currSel2, "L", "smallFill");
    //    addSelOpt("arrangeBar-fillSelect-full", "Sample Fill - Full", currSel2, "L", "fullFill");
    //    addSelOpt("arrangeBar-fillSelect-empty", "Empty", currSel2, "L", "emptyFill");
    //    document.getElementById(currSel2).outerHTML = document.getElementById(currSel2).outerHTML.replace(currSel2+'">', currSel2+'" onclick="switchArrangeBoxFill()">');

    //console.log("s");
    //try { console.log(makeIframe("testframe", "body", "http://www.youtube.com", "")); } catch(e){alert("failedframe " + e);}

    // create switch for changing between square & standard
    // makeSwitch("arrangeBar-fillSwitch", "topBar", "Fill Switch:");
    // document.getElementById('arrangeBar-fillSwitch').outerHTML = document.getElementById('arrangeBar-fillSwitch').outerHTML.replace('arrangeBar-fillSwitch'+'">', 'arrangeBar-fillSwitch'+'" onclick="if (this.checked == true) {  } if (this.checked == false) { }">');

	// create switch for changing between square & standard
	// makeSwitch("arrangeBar-collapsedSwitch", "topBar", "Collapsed All:");
	// document.getElementById('arrangeBar-collapsedSwitch').outerHTML = document.getElementById('arrangeBar-collapsedSwitch').outerHTML.replace('arrangeBar-collapsedSwitch'+'">', 'arrangeBar-collapsedSwitch'+'" onclick="var toClick; if (this.checked == true) { toClick = document.getElementsByClassName(\'showListButton\'); } else if (this.checked == false) { var toClick = document.getElementsByClassName(\'hideListButton\'); } console.log(\'toclick length: \' + toClick.length); for (var i = toClick.length-1; i >= 0; i--) { console.log(\'clicking \' + i + \' - \'+ toClick[i].id);toClick[i].click(); }">');



	// makeListBox({id:'listbox1',targetId:'genSettingsTab'});//,targetId:'genSettingsTab'


	// insertRowX("genSettingsTable", "M", "1");
	// insertRowX("genSettingsTable", "L", "2");
	// insertRowX("genSettingsTable", "L", "3");
    // insertRowX("genSettingsTable", "L", "4");
    // insertRowX("genSettingsTable", "L", "5");
    // insertRowX("genSettingsTable", 3, "new3");
    // insertRowX("genSettingsTable", 6, "new6");

    // insertColX("genSettingsTable", 1, "L", $("#switch_enableBack2Top"));
    // insertColX("genSettingsTable", 1, "F", "F");
    // insertColX("genSettingsTable", 1, 3, "#");

	// insertColX("genSettingsTable", 2);
	// insertColX("genSettingsTable", 2);
	// insertColX("geemailTemplatesnSettingsTable", 2);


	var currOptTable;

	// Global
	currOptTable = addTable("globalSettingsTable", "genSettingsTab","Global");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'boostTextSize',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'removePullDownBar',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	// makeOption({varId:'forceIframe',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// case page
	currOptTable = addTable("genSettingsTable", "genSettingsTab","Case Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'enableBack2Top',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});//labelText: '',
	makeOption({varId:'convertBytesSFTP',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'squareMonitor',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'showRedundantButtons',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'showHelpButtons',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'hIndex',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'cDisabledObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'hDisabledObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'cCollapsedObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'hCollapsedObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'cOpenObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'hOpenObjects',targetId:currOptTable, type: 'textArea', displayStyle:'tableRow'});

	// makeOption({varId:'hoverLinkColor',targetId:'genSettingsTable', type: 'select', displayStyle:'tableRow', selectOptions: '[ {"value": "#FFFFFF", "title":"#FFFFFF"},{"value": "#FFFFFA", "title":"#FFFFFA"}]'});

	// Top Bar
	currOptTable = addTable("topBarSettingsTable", "genSettingsTab","Top Bar");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'lockTopBar',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'disableHoverLinks',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'removeHoverLinks',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enableCaseRefreshButton',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enableCaseLinkButton',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'removeDisplayProcessFlow',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// 50/50 & POP!
	currOptTable = addTable("popSettingsTable", "genSettingsTab","POP!, 50/50 & SCab Buttons");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'enablePOP',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enable5050',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enableSCTab',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'fiftyPageOnLeft',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'popUpEmails',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'popUpWidth',targetId:currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'popUpHeight',targetId:currOptTable, type: 'textBox', displayStyle:'tableRow'});

	// Convenience Buttons
	currOptTable = addTable("convenienceButtonsSettingsTable", "genSettingsTab","Convenience Buttons");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'enableConvenience',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'createLocalDirs',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'openLocalButton',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// Comment Page
	currOptTable = addTable("commentPageSettingsTable", "genSettingsTab","Comment Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'alwaysPublic',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'alwaysSendEMail',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'alsoCheckEMail',targetId:currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// Email Page
	currOptTable = addTable("emailPageSettingsTable", "genSettingsTab","Email Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'forceCAEmail',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'disableOriginalSendButtons',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'includeToInfo',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'includeSubjet',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'includeEmailBody',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// New Defect Page
	currOptTable = addTable("newDefectPageSettingsTable", "genSettingsTab","New Defect Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'newDefDescriptionBoxW',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'newDefDescriptionBoxH',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'newDefCommentBoxW',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'newDefCommentBoxH',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});

	// New Defect Comment Page
	currOptTable = addTable("newDefectCommentPageSettingsTable", "genSettingsTab","Defect New Comment Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'dComBoxWidth',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'dComBoxHeight',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});

	// Live Agent Supervisor Page
	currOptTable = addTable("liveAgentSupervisorPageSettingsTable", "genSettingsTab"," Live Agent Supervisor Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'onlyMyQS',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'prodName',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'collapseQS',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'statusLevel',targetId: currOptTable, type: 'select', displayStyle:'tableRow',
							selectOptions: '[ {"value": "0", "title":"Not Offline"},{"value": "1", "title":"Online"},'
													+ '{"value": "2", "title":"Away"},{"value": "3", "title":"Offline"},'
													+ '{"value": "4", "title":"ANY"}]' });

	// Team Info
	currOptTable = addTable("teamSettingsTable", "genSettingsTab","Team Info");
	document.getElementById(currOptTable).className = 'pbSubsection';
	// makeOption({varId:'myself',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow', stringify: true});
	// makeOption({varId:'myTeam',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow', stringify: true});
	// makeOption({varId:'myself',targetId: currOptTable, type: 'listTable', displayStyle:'tableRow', stringify: true});
	makeOption({varId:'myTeam',targetId: currOptTable, type: 'listTable', displayStyle:'tableRow', stringify: true, ltSchema: {'name':'textBox','alias':'textBox','color':'colorZ'}});
	// makeOption({varId:'collapseQS',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// Peek It
	currOptTable = addTable("peekItSettingsTable", "genSettingsTab","Peek It");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'highlightPeeks',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'peekHighlightColor',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	makeOption({varId:'peekDelay',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'peekItHeight',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'peekItWidth',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'peekSftpTypes',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});

	// Case Review Page
	currOptTable = addTable("caseReviewPageSettingsTable", "genSettingsTab","Case Review Page");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'caseRevTestMode',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'caseRevCC',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'caseRevBCC',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'caseRevSubject',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'caseRevBody',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'defaultAssType',targetId: currOptTable, type: 'select', displayStyle:'tableRow',
							selectOptions: '[ {"value": "", "title":"--None--"},{"value": "Self", "title":"Self"},'
													+ '{"value": "Peer", "title":"Peer"},{"value": "Manager", "title":"Manager"} ]' });
	makeOption({varId:'caseRevDefaultToAssisted',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});

	// currOptTable = addTable("paintTable", "paintTab","PaintSC");
	// makeOption({varId:'myTheme.body_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.body_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.body_text_modified_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.body_link_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.body_link_hover_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.body_label_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});

	// currOptTable = addTable("paintAlertTable", "paintTab","AlertSC");
	// makeOption({varId:'myTheme.alert_background_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.alert_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.alert_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.warning_background_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.warning_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.warning_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.percentBarColor',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});

	// currOptTable = addTable("paintTopBarTable", "paintTab","Top Bar");
	// makeOption({varId:'myTheme.tb_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.tb_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.tb_link_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.tb_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});

	// currOptTable = addTable("paintBoxesTable", "paintTab","SC Boxes");
	// makeOption({varId:'myTheme.box_h_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.box_h_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.box_h_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.box_body_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.box_body_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.cell_label_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.cell_data_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});

	// currOptTable = addTable("paintRowsTable", "paintTab","Rows");
	// makeOption({varId:'myTheme.row_color_even',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.row_color_odd',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.row_color_highlight',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});

	// currOptTable = addTable("paintButtonsTable", "paintTab","Buttons");
	// makeOption({varId:'myTheme.btn_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.btn_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.btn_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});

	// currOptTable = addTable("paintTextFieldsTable", "paintTab","Text Fields (Editables)");
	// makeOption({varId:'myTheme.txtfield_text_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.txtfield_bg_color',targetId: currOptTable, type: 'color', displayStyle:'tableRow'});
	// makeOption({varId:'myTheme.txtfield_border_style',targetId: currOptTable, type: 'style', displayStyle:'tableRow'});

		$('<select id="style_picker"></select>').appendTo('#paintTab');
		for (key in themes) {
			// alert(key);
			var optTemp = '<option id="style_' + key + '" value="' + key + '">' + key + '</option>';
			append(optTemp,'style_picker');
			if (key == myTheme) {
				$('#style_' + key).prop("selected","true");
			}

		}

		document.getElementById('style_picker').addEventListener('change',
			function() {
				var selTheme = $("#style_picker").find(":selected").val();
				for (key in themes[selTheme]) {
					$('#option_' + key).val(themes[selTheme][key]);
					triggerChange('option_' + key);
				}
			}
		);



	// Console
	currOptTable = addTable("paintTable", "paintTab","PaintSC");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'body_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'body_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'body_text_modified_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'body_link_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'body_link_hover_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'body_label_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintAlertTable", "paintTab","AlertSC");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'alert_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'alert_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'alert_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'warning_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'warning_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'warning_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'success_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'success_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'success_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'percent_bar_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'percent_bar_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintConsoleTable", "paintTab","SC Console");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'console_top_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'console_bottom_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'console_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_alt_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_tab_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tabstrip_tab_alt_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintTopBarTable", "paintTab","Top Bar");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'tb_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tb_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tb_link_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'tb_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintBoxesTable", "paintTab","SC Boxes");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'box_h_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'box_h_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'box_h_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'box_body_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'box_body_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'cell_label_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'cell_data_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintRowsTable", "paintTab","Tables");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'table_header_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'table_header_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'table_header_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'row_color_even',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'row_color_odd',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'row_color_highlight',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintButtonsTable", "paintTab","Buttons");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'btn_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'btn_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'btn_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'btn_alt_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'btn_alt_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'btn_alt_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	currOptTable = addTable("paintTextFieldsTable", "paintTab","Text Fields (Editables)");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'txtfield_text_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'txtfield_bg_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'txtfield_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});
	makeOption({varId:'txtfield_alt_border_color',targetId: currOptTable, type: 'colorZ', displayStyle:'tableRow'});

	//TemplateSC
	currOptTable = addTable("templateSCTable", "templateSCTab","TemplateSC");
	document.getElementById(currOptTable).className = 'pbSubsection';
	makeOption({varId:'enableCommentTemplates',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enableNewDefectTemplate',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'enableEmailTemplates',targetId: currOptTable, type: 'toggle', displayStyle:'tableRow'});
	makeOption({varId:'emailGreeting',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'emailSignature',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow'});
	makeOption({varId:'ftsSubject',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'ftsDList',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'ftsCC',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'ftsBCC',targetId: currOptTable, type: 'textBox', displayStyle:'tableRow'});
	makeOption({varId:'emailTemplates',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow', stringify: true});
	makeOption({varId:'commentTemplates',targetId: currOptTable, type: 'textArea', displayStyle:'tableRow', stringify: true});
	// makeOption({varId:'emailTemplates',targetId: currOptTable, type: 'listTable', displayStyle:'tableRow', stringify: true, ltSchema: {'greeting':'textBox','body':'textBox','signature':'textBox','postSignature':'textBox'}});




	//------------------------------------
	// Setup ArrangeSC Tab
	// insertTag("head", "script", "text/javascript", htmlDemoScript);
	//insertTag("head", "style", "text/css", htmlDemoCSS);
	//console.log('making div');
	var aD = makeDiv("arrangementDiv", "arrangementTab");
	//console.log('adding rows');
	var ep = makeDiv("ep", aD);
	document.getElementById("ep").className = "bPageBlock brandSecondaryBrd bDetailBlock secondaryPalette";
	//addClass(ep, "bPageBlock brandSecondaryBrd bDetailBlock secondaryPalette")
	//'<div class="bPageBlock brandSecondaryBrd bDetailBlock secondaryPalette" id="ep">';



	///////////////////////////
	// Setup Side Bar
	makeArrangeSideBar();

	// Add boxes we saved earlier
	// Add Info boxes to side bar
	infoBoxHeads = document.head.getElementsByClassName("pbSubheader");

	infoBoxes =  document.head.getElementsByClassName("pbSubsection");
	numInfoBoxes = infoBoxHeads.length;
	logDebug(numInfoBoxes);
	for (var i = numInfoBoxes-1; i > -1; i--) {
		try {
			var headId = infoBoxHeads[i].id;
			var imgEl = document.getElementById("img_" + headId.split("_")[1]);
			var imgTitle = imgEl.title.split(' - ');
			//console.log("a " + imgTitle[1]);
			//console.log("b " + imgTitle[0]);
			if (imgTitle[0] == "Show Section") { console.log("b " + imgEl.click()); }
			insertArrangeSideBarItem(headId, imgTitle[1], infoBoxHeads[i].outerHTML + infoBoxes[i].outerHTML);
			logDebug("Added infoBox to side bar: " + i + ' of ' + numInfoBoxes);
		} catch(e) {
			logDebug("Failed to add infoBox to side bar: " + i + ' of ' + numInfoBoxes);
		}
	}

	// Add Related List boxes to side bar
	relBoxes = document.head.getElementsByClassName("bRelatedList");
	numRelBoxes = relBoxes.length;
	for (var i = numRelBoxes-1; i > -1; i--) {
		try {
			insertArrangeSideBarItem(relBoxes[i].id, document.getElementById(relBoxes[i].id + "_title").textContent, relBoxes[i].outerHTML);
			logDebug("Added relBox to side bar: " + i + ' of ' + numRelBoxes);
		} catch(e){
			logDebug("Failed to add relBox to side bar: " + i + ' of ' + numRelBoxes);
		}
	}

	// default cIndex:
	//'[[[],[]],[[],["50%","caseInfo"],["50%","altContact","advInfo","alertBox"]],[[],["60%","details"],["40%","openActs","defects","caseTeam"]],[[],["60%","caseComments"],["40%","kbArts","relContent","sftpAttachments","attachments","emails","relCases"]],[[],["33%","component"],["33%","prodDetails"],["34%","auditHistory"]]]',

	/*
	delete me later

	'[ cindex
	[[],[]] cindex[0]
	,[cindex[1]
	[],["50%","caseInfo"],["50%","altContact","advInfo","alertBox"]
	] l:3
	,[[],["60%","details"],["40%","openActs","defects","caseTeam"]]
	,[[],["60%","caseComments"],["40%","kbArts","relContent","sftpAttachments","attachments","emails","relCases"]],
	[[],["33%","component"],["33%","prodDetails"],["34%","auditHistory"]] l:3
	]',

	MovableDiv ex id: SBI-MD-head_01Ba000000ETFv0_ep

	*/
	getTopBar();

	var arrRows = cIndex.length -1;
	logTrace("Adding " + arrRows + " Arrangement Rows.");

	for (var i = 1; i <= arrRows; i++) {
		addArrangeRow();
		logTrace('cindex len: ' + cIndex.length);
		logTrace('cindex[' + i + '] len: ' + cIndex[i].length);

		for (var cell = 1; cell < cIndex[i].length; cell++) {
			logTrace("cIndex[i] " + cIndex[i])
			logTrace("cIndex[i][cell] " + cIndex[i][cell])

			var thisCell;
			// First cell is auro-created by add row function, don't add it just find it
			if (cell == 1) {
				// console.log("arrangementTable-" + i + "-0-0");
				thisCell = "arrangementTable-" + i + "-0-0";
			} else {
				thisCell = addArrangeCell(i);
			}
			for (var box = 1; box < cIndex[i][cell].length; box++) {
			// for (var box in cIndex[i][cell]) {
				// console.log('cindex ' + cell + ' len: ' + cIndex[cell].length);
				// console.log(cIndex[i][cell][box]);
				// console.log("box #SBI-MD-" + theBoxes[cIndex[i][cell][box]+'ID'][0].replace("#",'').split(',')[0]);
				//var thisBoxID = "SBI-MD-" + theBoxes[cIndex[i][cell][box]+'ID'][0].replace("#",'').split(',')[0];
				console.log('cIndex[i][cell][box]: ' + cIndex[i][cell][box]);
				console.log('theBoxes2[cIndex[i][cell][box]: ' + theBoxes2[cIndex[i][cell][box]].id);
				var thisBox = $("#SBI-MD-" +theCase.fiveHunID +  theBoxes2[cIndex[i][cell][box]].id);
				var thisBoxID;
				if (theBoxes2[cIndex[i][cell][box]].type == 'rel') {
					thisBoxID = "SBI-MD-" + theBoxes2[cIndex[i][cell][box]].id;
				} else {
					thisBoxID = "SBI-MD-" + theBoxes2[cIndex[i][cell][box]].head;
				}
				// document.getElementById(thisCell).appendChild(thisBox);
				console.log('cell: ' + document.getElementById(thisCell).id);
				console.log('boxid: ' + thisBoxID);
				console.log('box: ' + document.getElementById(thisBoxID).id);
				document.getElementById(thisCell).appendChild(document.getElementById(thisBoxID));
				document.getElementById(thisBoxID.replace("MD","SBI")).style.display = "none"; //was block
				document.getElementById(thisBoxID.replace("MD","SBD")).style.display = "block";  // was none
				document.getElementById(thisBoxID.replace("MD","MDCTB")).style.display = "block"; // was none
				logTrace(thisBoxID + " added to " + thisCell);
			}

		}

		// set row widths... needs to be done after cells are added bc they auto-set on add...
		// for (var cell = 0; cell < cIndex[i].length-1; cell++) {
		for (var cell = (cIndex[i].length-2); cell >= 0; cell--) {
			console.log(cell);
			logTrace("arrangementTable-" + i + "-0-" + cell + "-wB == " + cIndex[i][cell+1][0]);
			var wb =document.getElementById("arrangementTable-" + i + "-0-" + cell + "-wB");
			wb.value = cIndex[i][cell+1][0];
			wb.parentElement.parentElement.width = cIndex[i][cell+1][0];
			// document.getElementById("arrangementTable-" + i + "-0-" + cell + "-wB-btn").click();
			// $("#arrangementTable-" + i + "-0-" + cell + "-wB-btn").click();
		}
	}


	//currSel2.click(); //.selectedIndex = "0";
	document.getElementById("arrangementTab-li").click();
}


/*--Ideas--

Create template of box.
--add to page, hidden

Create list to hold box names,
--Div, 200x400, with name, stacked in original order
--onHover = light grey
--on hold = light grey
----50% opacity
--on drag (past list boundries?) =
----switch holding div insides to template
----leave empty space in list


Inside Table,
--onHover = light grey
----Buttons top right: Move up, Move Down, Return to list (Move to next Column, Move to next Row?)
--on hold = dark grey
--on drag past list boundries? =
----switch holding div insides to template
----Open up space
----light up empty space in list
----let go - Drop to original sopt

*/

// workspace

function resizeCell(cellID, width) {  document.getElementById(cellID).width = width; }


function getTopBar() {
    var linkBar = document.head.getElementsByClassName("efdRLHover")[0];
    linkBar.id = "topBHoverLinks";
    var buttonBar = document.head.getElementsByClassName("pbHeader")[0];
    buttonBar.id = "topBButtons";
    addArrangeRow("topB");
    document.getElementById("arrangementTable-0-0-0").appendChild(linkBar);
    document.getElementById("arrangementTable-0-0-0").appendChild(buttonBar);
}

function toggleSaveButton() {
	// alert(changedOpts());
	if (changedOpts()) {
		// document.getElementById("saveASC").className = "tablinks warningCell";
		document.getElementById("saveASC").style.setProperty("background-color","var(--alert_background_color)","important");
		document.getElementById("saveASC").style.setProperty("color","var(--alert_text_color)","important");
		document.getElementById("saveASC").style.setProperty("border","var(--alert_border_style)","important");
		document.getElementById("saveASC").style.setProperty("font-weight","bold","important");
		return true;
	} else {
		// document.getElementById("saveASC").className = "tablinks";
		document.getElementById("saveASC").style.setProperty("background-color","initial");
		document.getElementById("saveASC").style.setProperty("color","");
		document.getElementById("saveASC").style.setProperty("border","");
		document.getElementById("saveASC").style.setProperty("font-weight","normal");
		return false;
	}
}

function changedOpts(returnArg) {

	var options = document.getElementsByClassName("optChangedSpan");
	// var options = $("span.optChangedSpan");
	// var changed = $("span.optChanged");
	var changed = document.getElementsByClassName("optChanged");
	// var changed = document.getElementsByClassName("optChanged");
	// var notChanged = $("span.optNotChanged");
	var currCIndex = exportArrangement("c");
	var numChanged = changed.length;
	var indexChanged = false;

	if (currCIndex != JSON.stringify(window["cIndex"])) {
		numChanged++;
		indexChanged = true;
	}

	if (returnArg == 'changedCount') {
		return numChanged;
	} else if (returnArg == 'changedEles') {
		return changed;
	} else if (returnArg == 'indexChanged') {
		return indexChanged;
	} else if (returnArg == 'cIndex') {
		return currCIndex;
	} else if (numChanged > 0) {
		return true;
	} else {
		return false;
	}

}


function saveOut() {
	// TODO add support for listboxes...

	// var options = $("span.optChangedSpan");

	// var changed = document.getElementById("optChanged");
	// var notChanged = $("span.optNotChanged");
	// var currCIndex = exportArrangement("c");


	 // alert(currCIndex + '\n\n\n' + window["cIndex"]);
	 // alert(currCIndex + '\n\n\n' + JSON.stringify(window["cIndex"]));
	//  console.log(currCIndex + '\n\n\n' + JSON.stringify(window["cIndex"]));
	//  if (currCIndex  == JSON.stringify(window["cIndex"])) {alert('same'); }

	//logTrace('currCIndex: ' + JSON.parse(currCIndex) + '  ---  cIndex:'+JSON.stringify(cIndex));
	// if (JSON.parse(currCIndex) == JSON.stringify(cIndex)){
	// 	logTrace('same');
	// } else {
	// 	logTrace('changed');
	// }


	// if (changed.length > 0  || currCIndex != JSON.stringify(window["cIndex"])) {
	if (changedOpts()) {
		//save
		var changed = $("span.optChanged");
		var saveArgs = {};
		// saveArgs[args.varId] = myOption.checked;

		$("span.optChanged").each(
			function() {
				var option = this.id.replace("option_changed_","")
				var optionItem = document.getElementById('option_' + option);

				var optType = optionItem.type;

				if ($( "#option_" + option + "_color" ).length) {
					optType = 'style';
				}

				//alert(type);
				var setting;
				switch(optType) {
					case 'checkbox':
						setting = optionItem.checked;
						break;

					// case 'select':
						// setting = optionItem.value;
						// break;

					case 'style':
						var optionItemC = document.getElementById('option_' + option + '_color');
						setting = optionItem.value + ' ' + optionItemC.value;
						break;

					// case 'ss':
						// break;

					default:
						setting = optionItem.value;
						break;

				}
				saveArgs[option] = setting;
				logTrace("Changed option found: " + option + ", setting: " + setting);
			}
		);

		//  if (currCIndex != JSON.stringify(window["cIndex"])) {
		if (changedOpts('indexChanged')) {
			 logDebug("cIndex is being changed.");
			 saveArgs["cIndex"] = changedOpts("cIndex");
		}

		setVars(saveArgs);
		changed.each( function() { this.className = "optChangedSpan optNotChanged"} );

	} else {
		alert("Nothing to save...");
	}

	toggleSaveButton();

	//exportArrangement("h"); // not implemented yet
	// alert(exportTopBarOptions());
}

function exportArrangement(type) {

    var rows = document.getElementsByClassName("arrange");
    var numRows = rows.length;
    //var cellDefs;// = '[[[],[]],[[],';

    // var setupParams = 'var ' + type + 'Rows = ' + numRows + ';' + ' \n' +
    // 'var ' + type + 'Index = new Array( ' + type + 'Rows + 1);' + ' \n' +
    // 'for (var i = 0; i < ( ' + type + 'Rows + 1); i++) {  ' + type + 'Index[i] = [[],[]]; }';


    /*
    cIndex[a][b] = [%,b,bn]
    for (var i = 1; i < numRows; i++) {
    	var thisRow = document.getElementById('arrangementTable-' + i + '-0');
    	// loop through cells to get boxes inside
    	for (var j = 0; j < thisRow.children.length; j++) {
    		var thisCell = document.getElementById(thisRow.id + '-' + j);
    		var cellDef = cIndex[i][j+1] = [thisCell.width;

    	}
    }*/

    // var xRows = numRows;
    // var xIndex = new Array(xRows + 1);
    // for (var i = 0; i < (xRows + 1); i++) {
        // xIndex[i] = [ [], [] ];
    // };

    //loop through rows to get to cells
	var rowDefs = '[[[],[]],';
    for (var i = 1; i < numRows; i++) {
        var thisRow = document.getElementById('arrangementTable-' + i + '-0');
		var rowDef = '[[],';
        // loop through cells to get boxes inside
		var cellDefs = '';
        for (var j = 0; j < thisRow.children.length; j++) {
            var thisCell = document.getElementById(thisRow.id + '-' + j);
            var cellDef = '["' + thisCell.width + '",'; // = type + 'Index[' + (i) + '][' + (j+1) + '] = ["' + thisCell.width + '",'; // add start of line

            // loop through boxes in cell to create definition

            if (thisCell.children.length == 1) {
                cellDef += '"empty",'; // if no boxes in cell add empty
            } else {
                for (var h = 1; h < thisCell.children.length; h++) {
                    var boxTitle = $('#' + thisCell.children[h].id.replace('SBI-MD-', 'SBI-SBI-')).text();
                    // console.log(boxTitle);
                    // cellDef += '"' + boxTitle + '",';
					if (h != thisCell.children.length -1) {
						cellDef += '"' + boxTitle + '",';
					} else {
						cellDef += '"' + boxTitle + '"';
					}
                }
            } // else add cell info
            // cellDef += "],"; // + ' \n'; // add end of line
			//alert(cellDef);

			if (j != thisRow.children.length -1) {
				cellDef += "],";
			} else {
				cellDef += "]";
			}

			cellDefs += cellDef;
        }
		if (i != numRows -1) {
			rowDef += cellDefs + '],';
		} else {
			rowDef += cellDefs + ']';
		}
		rowDefs += rowDef;//
    }

    return rowDefs + ']';
    // return xIndex;
}


function exportArrangementBACKUP(type) {

    var rows = document.getElementsByClassName("arrange");
    var numRows = rows.length;
    var cellDefs = '[[[],[]],[[],';

    // var setupParams = 'var ' + type + 'Rows = ' + numRows + ';' + ' \n' +
    // 'var ' + type + 'Index = new Array( ' + type + 'Rows + 1);' + ' \n' +
    // 'for (var i = 0; i < ( ' + type + 'Rows + 1); i++) {  ' + type + 'Index[i] = [[],[]]; }';


    /*
    cIndex[a][b] = [%,b,bn]
    for (var i = 1; i < numRows; i++) {
    	var thisRow = document.getElementById('arrangementTable-' + i + '-0');
    	// loop through cells to get boxes inside
    	for (var j = 0; j < thisRow.children.length; j++) {
    		var thisCell = document.getElementById(thisRow.id + '-' + j);
    		var cellDef = cIndex[i][j+1] = [thisCell.width;

    	}
    }*/

    var xRows = numRows;
    var xIndex = new Array(xRows + 1);
    for (var i = 0; i < (xRows + 1); i++) {
        xIndex[i] = [ [], [] ];
    };

    //loop through rows to get to cells
    for (var i = 1; i < numRows; i++) {
        var thisRow = document.getElementById('arrangementTable-' + i + '-0');
        // loop through cells to get boxes inside
        for (var j = 0; j < thisRow.children.length; j++) {
            var thisCell = document.getElementById(thisRow.id + '-' + j);
            var cellDef = '[' + thisCell.width + '",'; // = type + 'Index[' + (i) + '][' + (j+1) + '] = ["' + thisCell.width + '",'; // add start of line
            var xdef = '["' + thisCell.width + '", ';

            // loop through boxes in cell to create definition
            if (thisCell.children.length == 1) {
                cellDef += '"empty",'; // if no boxes in cell add empty
            } else {
                for (var h = 1; h < thisCell.children.length; h++) {
                    var boxTitle = $('#' + thisCell.children[h].id.replace('SBI-MD-', 'SBI-SBI-')).text();
                    console.log(boxTitle);
                    cellDef += '"' + boxTitle + '",';
                    xdef += '"' + boxTitle + '",';
                }
            } // else add cell info
            cellDef += "],"; // + ' \n'; // add end of line
            xdef = xdef.substring(0, xdef.length - 1);
            xdef += "]";
            cellDefs += cellDef;
            // alert(xdef);
            xIndex[i][j + 1] = JSON.parse(xdef);
			console.log('xindex: ' + xIndex);
        }
    }
    return cellDefs + ']';
}

// this is useless now??
function exportTopBarOptions() {

	var out = '    // Top Bar\n';
	var topBar = document.getElementById('arrangementTable-0-0-0-toolbar');
	//alert(topBar.children);
	var inputs = topBar.getElementsByTagName('input');
	//alert(topBar.children[i].id);
	for (var i = 0; i < inputs.length; i++) {
		//var thisOne = topBar.children[i];
		//alert(inputs[i].id);
		if (inputs[i].type == "checkbox") { out += inputs[i].id + ": " + inputs[i].checked + ",\n"; }
	}
	//var children = [].slice.call(topBar.children.forEach(function() { if (this.type == "checkbox") { alert(this.id); } });

	return out;
}








/*
//not working!
var infoBoxCSSFix =
'body .bDetailBlock .bPageBlock .pbBody .pbSubheader, body.FindSimilarOppsSearchUi .bPageBlock .pbBody .pbSubheader { \n' +
'     background-color: transparent;     \n' +
'}                                       \n' +
'body .sfxConsole .sfxStyle .bPageBlock .pbSubheader { \n' +
'     border: none;                      \n' +
'     background: none;                  \n' +
'}                                       \n' +
'body .bPageBlock .pbBody .pbSubheader { \n' +
'    border-width: 2px 0 0;              \n' +
'    border-style: solid;                \n' +
'    color: #27282e;                     \n' +
'    padding: 4px 3px;                   \n' +
'}                                         ';
*/


var sampleFills =  {

    // Show more (used for all fulls)
    showMore: '<div class="pShowMore"><a href="">Show more »</a>&nbsp;|&nbsp;<a href="">Go to list&nbsp;»</a></div>',

    // Emails
    small_RelatedEmailMessageList:
        '<table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Status</th><th scope="col" class=" cellCol2 zen-deemphasize">&nbsp;</th><th scope="col" class=" cellCol3 zen-deemphasize">Subject</th><th scope="col" class=" cellCol4 zen-deemphasize">Email Address</th><th scope="col" class=" cellCol5 zen-deemphasize">Message Date</th></tr> \n' +
        '<tr class="dataRow even first" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd last" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '</tbody></table>',

    full_RelatedEmailMessageList:
        '<table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Status</th><th scope="col" class=" cellCol2 zen-deemphasize">&nbsp;</th><th scope="col" class=" cellCol3 zen-deemphasize">Subject</th><th scope="col" class=" cellCol4 zen-deemphasize">Email Address</th><th scope="col" class=" cellCol5 zen-deemphasize">Message Date</th></tr> \n' +
        '<tr class="dataRow even first" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '<tr class="dataRow even last" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue ...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr> \n' +
        '</tbody></table>',
};





function resetArrangementTable() {
	document.getElementById('clearAllArrangeBoxes').click();
	$("table.arrange").each(
		function() {
			if (this.id != "arrangementTable-0") {
				console.log('removing: ' + this.id);
				$(this).remove();
			}
		}
	);
	// refillArrangeSelect();
	// document.getElementById('arrangeBar-RowSelect').innerHTML = '';
	document.getElementById('addArrangeRow').click();

}

function makeIframe(frameID, appendToID, href, params) { // Make an IFrame
    var iframe = document.createElement('iframe');
    iframe.id = frameID;

    //iframe.style.display = "none";
    document.body.appendChild(iframe);
    iframe.src = encodeURI(href);
    //console.log('iframing');
    //var frameTemplate = '<iframe id="' + frameID + '" src="' + href + '">' + '</iframe>';// ' + params + '
    //append(frameTemplate, appendToID);
    return frameID;
    //return document.getElementById(frameID);
}






function switchArrangeBoxFill() {
    console.log("fireing");
    var fillSelect = document.getElementById("arrangeBar-fillSelect");
    console.log("fillSelect " + fillSelect);
    // Get Value of selected option
    var value = fillSelect.options[fillSelect.selectedIndex].value;
    console.log("val " + value);
    console.log("col " + document.getElementsByClassName("realFill"));
    // Set all to display none
    var fillOptions = fillSelect.options;
    for (var i =0; i < fillOptions.length; i++) {
        console.log("i " + i);
        var fillersInClass = document.getElementsByClassName(fillOptions[i].value);
        if (fillOptions[i].value != value) {
         console.log("#j " + fillersInClass.length );

            for (var j =0; j < fillersInClass.length; j++) { console.log("j " + j); try { fillersInClass[j].style.display = "none"; }catch(e){ console.log("jf ");} }
        } else if (fillOptions[i].value == value) {
         console.log("#h " + fillersInClass.length );
            for (var h =0; h < fillersInClass.length; h++) { console.log("h " + fillersInClass[h].style.display); try { fillersInClass[h].style.display = "block";  }catch(e){ console.log("HF");}}
        }  else console.log("other");
    }
}




function makeArrangeSideBar() { // make side bar for ArrangeSC
    var sideBarTemplate = '<div class="sideBar" id="sideBar"></div>';/*ondrop="drop(event)" ondragover="allowDrop(event);"*/
    append(sideBarTemplate, "arrangementTab");

		addDrop("sideBar");
		addAllowDrop("sideBar");
		// document.getElementById("sideBar").addEventListener("drop", function(event) { drop(event); });
		// document.getElementById("sideBar").addEventListener("dragover", function(event) { allowDrop(event); });
}
//--------------------------------------
//--sub functions
    function insertArrangeSideBarItem(boxID, label, content) {
				logTrace('Inserting Arrange Side Bar Item: ' + boxID);
        var sideBarItemTemplate =
            '<div class="movableDiv" draggable="true"  style="" id="SBI-MD-' + boxID + '"> \n' + //ondragstart="drag(event)"
            '  <div class="movableDivCover" draggable="true" style="" id="SBI-MDC-' + boxID + '">&nbsp;</div> \n' + // ondragstart="drag(event)"
            '  <div class="movableDivCoverToolbar" style="display:none;" id="SBI-MDCTB-' + boxID + '">&nbsp;</div> \n' +
            '  <div class="sideBarItem" style="" id="SBI-SBI-' + boxID + '"><span class="sbSpan">'+label+'</span></div> \n' +
            '  <div class="sideBarDemo" style="display:none;" id="SBI-SBD-' + boxID + '">' + content + '</div> \n' +
            '</div>';
        append(sideBarItemTemplate, "sideBar");
				addDrag('SBI-MD-' + boxID);
				addDrag('SBI-MDC-' + boxID);

				// document.getElementById("movableDiv").addEventListener("dragstart", function(event) { drag(event); });
				// document.getElementById("movableDivCover").addEventListener("dragstart", function(event) { drag(event); });

        //---------------------------------------------------------------------------------
        // Insert buttons to move the movableDiv around? --Not fully set up--
        // not sure if I want to use this...

        // Add table & rows for move buttons
        var workingID = 'SBI-MDCTB-' + boxID;

        //makeButton('SBI-TBB-' + boxID +'-cellReturn',"Return","alert('aaa');returnArrangeBoxToSidebar(findParentNodeByClass(this, 'movableDiv'));", workingID);
				makeButton('SBI-TBB-' + boxID +'-cellReturn',"Return","", workingID, cellReturn);

        //makeButton('SBI-TBB-' + boxID +'-cellUp',"^","alert('aaa');var par = findParentNodeByClass(this, 'movableDiv'); var sib = par.previousSibling; if (sib.className !== 'arrangeTD-toolbar') {console.log('^');insertAfter(sib,par);} else { alert('Cannot move further up.'); }", workingID);
        // makeButton('SBI-TBB-' + boxID +'-cellLeft',"<","var par = findParentNodeByClass(this, 'movableDiv'); var newCell = findParentNodeByClass(this, 'arrangeTD').previousSibling; if (newCell !== null) { console.log('<');newCell.appendChild(par); } else { alert('Cannot move further left.'); }", workingID);
        // makeButton('SBI-TBB-' + boxID +'-cellRight',">","var par = findParentNodeByClass(this, 'movableDiv'); var newCell = findParentNodeByClass(this, 'arrangeTD').nextSibling; if (newCell !== null) { console.log('>');newCell.appendChild(par); } else { alert('Cannot move further right.'); }", workingID);
        // makeButton('SBI-TBB-' + boxID +'-cellDown',"v","var par = findParentNodeByClass(this, 'movableDiv'); var sib = par.nextSibling; if (sib !== null) { console.log('v');insertAfter(par,sib); } else { alert('Cannot move further down.'); }", workingID);
        makeButton('SBI-TBB-' + boxID +'-cellUp',"^","", workingID, pushCellUp);
        makeButton('SBI-TBB-' + boxID +'-cellLeft',"<","", workingID, pushCellLeft);
        makeButton('SBI-TBB-' + boxID +'-cellRight',">","", workingID, pushCellRight);
        makeButton('SBI-TBB-' + boxID +'-cellDown',"v","", workingID, pushCellDown);

		    currSw = makeSwitch('SBI-TBB-' + boxID +'-collapsed', workingID, "", "Collapse this box on page load?");
				document.getElementById(currSw).className = "cCollapsed";
				document.getElementById(currSw).addEventListener("click", function(){
    			// alert($("#"+ boxID + " img:eq(0)").attr('id'));
					$("#"+ boxID + " img:eq(0)").click();
				});
        // old celled style?
        //var workingID = 'SBI-TBT-' + boxID;

        //addTable(workingID, 'SBI-MDCTB-' + boxID);
        //insertRowX(workingID);
        //insertRowX(workingID);

        // Add move buttons & blank spacer cells
          // Row 1
        //makeButton('SBI-TBB-' + boxID +'-cellUp',"ret","returnArrangeBoxToSidebar(findParentNodeByClass(this, 'movableDiv'));",insertColX(workingID, 0,1,'', "33%"));
        //makeButton('SBI-TBB-' + boxID +'-cellUp',"^","var par = findParentNodeByClass(this, 'movableDiv'); var sib = par.previousSibling; if (sib.className !== 'arrangeTD-toolbar') {console.log('^');insertAfter(sib,par);} else { alert('Cannot move further up.'); }",insertColX(workingID, 0,2,'', "34%"));
        //insertColX(workingID, 0, 3,'', "33%");
          // Row2
        //makeButton('SBI-TBB-' + boxID +'-cellLeft',"<","var par = findParentNodeByClass(this, 'movableDiv'); var newCell = findParentNodeByClass(this, 'arrangeTD').previousSibling; if (newCell !== null) { console.log('<');newCell.appendChild(par); } else { alert('Cannot move further left.'); }",insertColX(workingID, 1,1,'', "33%"));
        //makeButton('SBI-TBB-' + boxID +'-cellDown',"v","var par = findParentNodeByClass(this, 'movableDiv'); var sib = par.nextSibling; if (sib !== null) { console.log('v');insertAfter(par,sib); } else { alert('Cannot move further down.'); }",insertColX(workingID, 1,2,'', "33%"));
        //makeButton('SBI-TBB-' + boxID +'-cellRight',">","var par = findParentNodeByClass(this, 'movableDiv'); var newCell = findParentNodeByClass(this, 'arrangeTD').nextSibling; if (newCell !== null) { console.log('>');newCell.appendChild(par); } else { alert('Cannot move further right.'); }",insertColX(workingID, 1,3,'', "33%"));
        //---------------------------------------------------------------------------------
    }
//--------------------------------------



function refillArrangeSelect() {
	// Setup vars for later use
	var arrSelect = document.getElementById("arrangeBar-RowSelect");
	var arrRowNum = document.getElementsByClassName("arrange").length;

	// If rowSelect not filled correctly: refill it
	if (arrSelect.children.length != arrRowNum) {
		clearById("arrangeBar-RowSelect");                                       // Clear currently present options
		for (var i = 1; i < arrRowNum; i++) {                                    // for each row...
			addSelOpt("rowSelect-opt" + i, "Row" + (i), arrSelect.id, "L", i); // Add option for row
		}
	}
}


function addArrangeCell(rowNum, cellNum, topB) {
	// Check for a rowNum, if not passed explicitly: use the number from row select
	if (/^([0-9]*)$/.test(rowNum) === false) {
		rowNum = document.getElementById('arrangeBar-RowSelect').value;
	}
	logDebug("Adding cell to row: " + rowNum);

    // Check for a cellNum, if not passed explicitly:???
    //if (/^([0-9]*)$/.test(cellNum) === false) { cellNum = document.getElementsByClassName("arrange").length; }

    // Setup vars for later use
    var arrangeTable = document.getElementById("arrangementTable-" + rowNum);
    var arrangeRow = document.getElementById("arrangementTable-" + rowNum + "-0");
    var calcW;
//console.log(arrangeRow.children.length +" :: " +arrangeRow);

    // Add the cell (if there are less than 5 already)
    // Consider changing this limit?
    if (arrangeRow.children.length == 5) { alert("Cell not Added: This row is full (5 cells)"); return ''; }
    var newCell;
    newCell = insertColX(arrangeTable.id, 0, cellNum, "", calcW); //uncomment below later
    //if (numCells != 2) { newCell = insertColX(arrangeTable.id, 0, cellNum, "", calcW); }
    //else { newCell = insertColX(arrangeTable.id, 0, cellNum, "", "34%"); }

    // Add drag tags (the hard way...)
    // document.getElementById(newCell).outerHTML = document.getElementById(newCell).outerHTML.replace('">', '" ondrop="drop(event)" ondragover="allowDrop(event);">');
		// document.getElementById(newCell).addEventListener("drop", function(event) { drop(event); });
		// document.getElementById(newCell).addEventListener("dragover", function(event) { allowDrop(event); });
		addDrop(newCell);
		addAllowDrop(newCell);

    // Add cell toolbar
    var cellToolB = makeDiv(newCell + "-toolbar", newCell);
    addClass(document.getElementById(cellToolB), "arrangeTD-toolbar");

    if (topB === true) {
    //     // Lock Top Bar
    //     var currSw = makeSwitch("lockTopBar", cellToolB, "Lock Top Bar:", "Locks the top bar. Applies to: Case Page, Case Review Page");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'arrangementTable-0-0-0\').style.position = \'fixed\'; } if (this.checked == false) {document.getElementById(\'arrangementTable-0-0-0\').style.position = \'relative\'; }">');
    //     if (lockTopBar) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //     // Disable Hover Links
    //     currSw = makeSwitch("disableHoverLinks", cellToolB, "Disable Hover Links:", "Disable the hover functionality of the top links.");
    //     if (disableHoverLinks) { document.getElementById(currSw).checked = true; } // match current setting...
    //     //document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'arrangementTable-0-0-0\').style.position = \'fixed\'; } if (this.checked == false) {document.getElementById(\'arrangementTable-0-0-0\').style.position = \'relative\'; }">');
		//
    //     // Remove Hover Links
    //     currSw = makeSwitch("removeHoverLinks", cellToolB, "Remove Hover Links:", "Completely remove the top links.");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'topBHoverLinks\').style.display = \'none\'; } if (this.checked == false) { document.getElementById(\'topBHoverLinks\').style.display = \'\'; }">');
    //     if (removeHoverLinks) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //   // /*
	  // //LENGTHS BELOW MESSED UP... fixed... probably
		//
	  // // Enable Case Page Refresh Button
    //     if (document.getElementById("case_refresh")) append('<input id="case_refresh" href="javascript:void(0)" class="refreshListButton btn" onclick="window.location.reload();" display="inline" title="Refresh" type="button" style="display: none; background-image: url(\'/img/support/servicedesk/serviceDeskListReskin-sprite.png\') !important; background-repeat: no-repeat !important; background-position: 4px -257px !important; vertical-align: middle !important; margin: 5px 5px 5px 5px; height: 27px; width: 29px;">', "topButtonRow");
    //     currSw = makeSwitch("enableCaseRefreshButton", cellToolB, "Enable Case Refresh Button:", "Adds a refresh button for the case page. Only refreshes the current case page, nothing else.");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'case_refresh\').style.display = \'\'; } if (this.checked == false) { document.getElementById(\'case_refresh\').style.display = \'none\'; }">');
    //     if (enableCaseRefreshButton) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //     // Enable Case Link Button
    //     if (document.getElementById("copy_link")) append('<input id="copy_link" href="javascript:void(0)" padding="0" class="btn" display="inline" title="Copy Link" type="button" style="display: none; background-image: url(\'/img/support/servicedesk/links.png\') !important; background-repeat: no-repeat !important; vertical-align: middle !important; margin: 0px !important; height: 20px; width: 20px;">', "topButtonRow");
    //     currSw = makeSwitch("enableCaseLinkButton", cellToolB, "Enable Case Link Button:", "");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'copy_link\').style.display = \'\'; } if (this.checked == false) { document.getElementById(\'copy_link\').style.display = \'none\'; }">');
    //     if (enableCaseLinkButton) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //     // Enable POP!
    //     if (document.getElementById("pop")) append('<button class="btn ca-button" type="button" id="pop" data-jq-dropdown="#BTNS-BTN-GRP-POP">POP!<span class="caret"></span></button>', "topButtonRow");
    //     currSw = makeSwitch("enablePop", cellToolB, "Enable POP!:");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'pop\').style.display = \'\'; } if (this.checked == false) { document.getElementById(\'pop\').style.display = \'none\'; }">');
    //     if (enablePop) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //     // Enable 50/50
    //     if (document.getElementById("fifty").length < 1) append('<button class="btn ca-button" type="button" id="fifty" data-jq-dropdown="#BTNS-BTN-GRP-50">50/50<span class="caret"></span></button>', "topButtonRow");
    //     currSw = makeSwitch("enable5050", cellToolB, "Enable 50/50:");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'fifty\').style.display = \'\'; } if (this.checked == false) { document.getElementById(\'fifty\').style.display = \'none\'; }">');
    //     if (enable5050) { document.getElementById(currSw).checked = true; } // match current setting...
		//
		// // Enable convenience
    //     if (document.getElementById("conv").length < 1) append('<button class="btn ca-button" type="button" id="conv" data-jq-dropdown="#BTNS-BTN-GRP-CONV">Buttons<span class="caret"></span></button>', "topButtonRow");
    //     currSw = makeSwitch("enableConvenience", cellToolB, "Enable Convenience:");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementById(\'conv\').style.display = \'\'; } if (this.checked == false) { document.getElementById(\'conv\').style.display = \'none\'; }">');
    //     if (enable5050) { document.getElementById(currSw).checked = true; } // match current setting...
		//
    //     // Remove Display Process Flow
    //     currSw = makeSwitch("removeDisplayProcessFlow", cellToolB, "Remove Display Process Flow:");
    //     document.getElementById(currSw).outerHTML = document.getElementById(currSw).outerHTML.replace('>', ' onclick="if (this.checked == true) { document.getElementsByName(\'process_flow\')[0].style.display = \'none\'; } if (this.checked == false) { document.getElementsByName(\'process_flow\')[0].style.display = \'\'; }">');
    //     if (removeDisplayProcessFlow) { document.getElementById(currSw).checked = true; } // match current setting...

     } else {
        // Add width textbox (to cell toolbar)
        var newCellTB = makeTextbox(newCell + "-wB", cellToolB, "100%");
        addClass(document.getElementById(newCellTB), "widthTB");
        document.getElementById(newCellTB).style.width = "35px";

        // Add Buttons (to cell toolbar)
        var newCellChangeBtn = makeButton(newCell + "-wB-btn", "Re-Size", "", cellToolB, cellResize);
        var newCellDeleteBtn = makeButton(newCell + "-del-btn", "Delete","", cellToolB, cellDelete);
        cleanArrangeCells(rowNum);

    }

	return newCell;


    /* above and below boxes disabled...
    // Add "add above" box
    newDiv = makeDiv(newCell + "-addAbove", newCell);
    addClass(document.getElementById(newDiv), "addAbove");
    newDiv.text = "+ ^";
    // Add drag tags (the hard way...)
    document.getElementById(newDiv).outerHTML = document.getElementById(newDiv).outerHTML.replace('">', '" ondrop="drop(event)" ondragover="allowDrop(event)">');

    // Add "add below" box
    newDiv = makeDiv(newCell + "-addBelow", newCell);
    addClass(document.getElementById(newDiv), "addBelow");
    newDiv.text = "+ v";
    // Add drag tags (the hard way...)
    document.getElementById(newDiv).outerHTML = document.getElementById(newDiv).outerHTML.replace('">', '" ondrop="drop(event)" ondragover="allowDrop(event)">');
   */

   //cleanArrangeCells(rowNum);
}

function cleanArrangeCells(rowNum) {
    //console.log("cleaning cells of row " + rowNum);
    // Set up vars for later use
    var arrangeTable = document.getElementById("arrangementTable-" + rowNum);      // Get table element (needed???)
    var arrangeRow = document.getElementById("arrangementTable-" + rowNum + "-0"); // Get row element (needed???)
    var numCells = arrangeRow.cells.length;                           // Find the number of cells in this row
	//alert(numCells);
    var calcW; // Empty var to hold width later

    //Decide default width of cells
         if (numCells == 1) { calcW = "100%"; } // If 1 cell, set to 100% width
    else if (numCells == 2) { calcW = "50%";  } // if 2 cells, set each to 50% width
    else if (numCells == 3) { calcW = "33%";  } // if 2 cells, set each to 33% width
    else if (numCells == 4) { calcW = "25%";  } // if 2 cells, set each to 25% width
    else if (numCells == 5) { calcW = "20%";  } // if 2 cells, set each to 20% width
                                                // If there are already 5 cells, stop... >5 is too many to be useful:
    else if (numCells == 6) { alert("Cell not Added: This row is full (5 cells)"); return ''; }

    for (var i=0; i < numCells; i++) {   // For each cell
        var cell = arrangeRow.cells[i];  // Get Cell element
        addClass(cell, "arrangeTD");     // Add style class??
        cell.width = calcW;              // Set Cell Width


        // Fix toolbar ID
        var toolbar = cell.getElementsByClassName("arrangeTD-toolbar")[0];
        toolbar.setAttribute("id", cell.id + "-toolbar");

        // Fix width Textbox ID & value
		try {
        var cellWidthTB = cell.getElementsByClassName("widthTB")[0];
        cellWidthTB.value = calcW; // Set Width textbox to match Cell width
        cellWidthTB.setAttribute("id", "arrangementTable-" + rowNum + "-0" + '-' + i + "-wB");
		} catch(e) {console.log(e);}

        // Fix button ID's
        cell.getElementsByTagName("button")[0].setAttribute("id", "arrangementTable-" + rowNum + "-0" + '-' + i + "-wB-btn");
        cell.getElementsByTagName("button")[1].setAttribute("id", "arrangementTable-" + rowNum + "-0" + '-' + i + "-del-btn");

		cell.setAttribute("id", "arrangementTable-" + rowNum + "-0" + '-' + i); // Set Cell ID
    }
}

function cleanArrangeRows() {
    // Set up vars for later use
    var rows = document.getElementsByClassName('arrange'); // Get row collection
    var numRows = rows.length;                             // Find the number of rows
    for (var i=0; i < numRows; i++) {   // For each cell
        //console.log("cleaning row " + i);
        rows[i].setAttribute("id", "arrangementTable-" + i);                // Set Row outer table ID
        rows[i].rows[0].setAttribute("id", "arrangementTable-" + i + "-0"); // Set Row <tr> ID, should only be 1 row here...
        cleanArrangeCells(i);                  // Clean the cells in this row
    }
}

function removeArrangeCell(ev) {
    //returnArrangeCellToSidebar(arrangeCellID);
    //console.log(ev.target);
    //console.log(ev.currentTarget.id);
    cleanArrangeCells(0);
}

function removeArrangeRow(ev) {
    cleanArrangeRows();
    refillArrangeSelect();
}



    //if ( value == 'realFill'  ) {
    //} else if ( value == 'smallFill' ) {
    //} else if ( value == 'fullFill'  ) {
    //} else if ( value == 'emptyFull' ) {
    //}

	function cellResize() {
		var par = this.parentElement.parentElement;
		par.width=par.getElementsByClassName('widthTB')[0].value;
		console.log('new: ' + par.getElementsByClassName('widthTB')[0].value + ' -- actual: ' + par.width);
	}

	function cellDelete() {
		// alert('clkd');
		var cell2Return = findParentNodeByClass(this, 'arrangeTD');
         if (cell2Return.parentNode.cells.length > 1) {
			returnArrangeCellToSidebar(cell2Return.id);
            cell2Return.parentNode.removeChild(cell2Return);
            $("#deleteCellBtn").click();
		} else {
			var row2Return = findParentNodeByClass(this, 'arrange');
			var conf = confirm('Removing this Cell will remove the whole row, continue?');
			if (conf == true) {
				returnArrangeRowToSidebar(row2Return.id);
				row2Return.parentNode.removeChild(row2Return);
				$("#deleteCellBtn").click();
				cleanArrangeRows();
				return true;
			} else { return false; }
		}
	}

function cellReturn() {
	returnArrangeBoxToSidebar(findParentNodeByClass(this, 'movableDiv'));
}

function pushCellUp() {
	var par = findParentNodeByClass(this, 'movableDiv');
	var sib = par.previousSibling;
	if (sib.className !== 'arrangeTD-toolbar') {
		console.log('^');
		insertAfter(sib,par);
		divMoved();
	} else {
		alert('Cannot move further up.');
	}
}

function pushCellDown() {
	var par = findParentNodeByClass(this, 'movableDiv');
	var sib = par.nextSibling;
	if (sib !== null) {
		console.log('v');
		insertAfter(par,sib);
		divMoved();
	} else {
		alert('Cannot move further down.');
	}
}

function pushCellLeft() {
	var par = findParentNodeByClass(this, 'movableDiv');
	var newCell = findParentNodeByClass(this, 'arrangeTD').previousSibling;
	if (newCell !== null) {
		console.log('<');
		newCell.appendChild(par);
		divMoved();
	} else {
		alert('Cannot move further left.');
	}
}

function pushCellRight() {
	var par = findParentNodeByClass(this, 'movableDiv');
	var newCell = findParentNodeByClass(this, 'arrangeTD').nextSibling;
	if (newCell !== null) {
		console.log('>');
		newCell.appendChild(par);
		divMoved();
	} else {
		alert('Cannot move further right.');
	}
}


function findParentNodeByClass(childObj, parentClass) {
        console.log("checking for parent by class");
    var testObj = childObj.parentNode;
    try { console.log(testObj.className); }
    catch(e) { console.log("no class name"); }
    var count = 1;
    while(testObj.className != parentClass && count < 15) {
        console.log(testObj.className);
        testObj = testObj.parentNode;
        count++;
    }
    return testObj;
}

function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if(parent.lastchild == targetElement) { parent.appendChild(newElement); }
    else { parent.insertBefore(newElement, targetElement.nextSibling); }
}


//--------------------------------
/* Function Information:

Arrangement Functions:
    addArrangeCell(rowNum, cellNum);
    addArrangeRow(num);
    removeArrangeCell(ev);
    cleanArrangeCells(rowNum);
    makeArrangeSideBar();
    refillArrangeSelect();

Table Generation:
    addTable(tableID, appendToID);
    insertRowX(tableID, pos);
    insertColX(tableID, rowID, pos, fill, width);


//------------------------------*/


//resizable tables
//http://jsfiddle.net/euka4rm3/


// Unimplemented:
function makeBody() {} // make page body
function makeFooter() {} // Make Footer
function makeHeader() {} // Make header
function makeIframe() {} // Make an IFrame????
function makeLabel() {} // Make a label for textbox/button/radio/etc...
function makeList() {} // ARR: List of used & unused
function saveConfig() {} // Generate file & download?



function addArrangeRow(num) {
    var topB = false;
    if (num == "topB")  { topB = true; }
    if (/^([0-9]*)$/.test(num) === false) { num = document.getElementsByClassName("arrange").length; }

    addTable("arrangementTable-"+num, "ep");
    //addTable("arrangementTable-"+num, "arrangementDiv");

    var arrangeTable = document.getElementById("arrangementTable-"+num);
    arrangeTable.width= "100%";
    addClass(arrangeTable,"arrange");
    var arrRow = insertRowX(arrangeTable.id, "L", "1");
    addArrangeCell(num , 0, topB);
    //insertColX(arrangeTable.id, 0, "L", "", "100%");
    //insertColX(arrangeTable.id, 0, "F", "", "33%");
    //insertColX(arrangeTable.id, 0, 3, "", "34%");

    for (var i=0; i < arrangeTable.children[0].children[0].children.length; i++) { //for each cell
        var cell = arrangeTable.children[0].children[0].children[i]; // get cell
        addClass(cell, "arrangeTD"); // add style class

        if (topB !== true) {
					// cell.outerHTML = cell.outerHTML.replace('">', '" ondrop="drop(event)" ondragover="allowDrop(event);">');
					// cell.addEventListener("drop", function(event) { drop(event); });
					// cell.addEventListener("dragover", function(event) { allowDrop(event); });
					addDrop(cell.id);
					addAllowDrop(cell.id);


				}//add drag tags (the hard way...)
    } //return true;
    refillArrangeSelect();

}

function addTable(tableID, appendToID,tableHead) {
    var tableTemplate = '<table id="' + tableID + '"><tbody></tbody></table>';
    append(tableTemplate,appendToID);
	if (tableHead) {
		var tableHeadRow = insertRowX(tableID);
		var tableHeadCol = insertColX(tableID,tableHeadRow,'F',tableHead);
		document.getElementById(tableHeadCol).className = "tableHead";
		document.getElementById(tableHeadCol).colSpan = "5";

	}

    return tableID;
}
//--------------------------------------
//--sub functions
    function insertRowX(tableID, pos) {
        var table = document.getElementById(tableID);
        var numRows = table.rows.length; // Get # of rows
        var row;

        if (pos == 'F') { row = table.insertRow(0); } // if first...
        else if (pos == 'L') { row = table.insertRow(numRows); } // if last....
        else if (/^([0-9]*)$/.test(pos)) { row = table.insertRow(pos-1); } // if number
        else { row = table.insertRow(numRows); /*alert("why is this an error??");*/ }

        row.id = tableID + '-placeHolder';
        var cell = row.insertCell(0);
        cell.innerHTML = '&nbsp;';
        cell.id = row.id + '-placeHolder';
        //cell.width = "100%";

        // re-name rows to reflect new order
        for (var i = 0; i <= numRows; i++) {
            var workingRow = table.rows[i];
            table.rows[i].setAttribute("id", tableID + '-' + i);
            //alert(workingRow.cells[0].id);
            if (workingRow.cells[0].id != tableID + '-placeHolder' + '-placeHolder') {
                for (var j = 0; j < workingRow.cells.length; j++) {
                    workingRow.cells[j].setAttribute("id", workingRow.id + '-' + j);
                }
            }
        }
        return row.id;
    }
    function insertColX(tableID, rowID, pos, fill, width) {
		// TODO object orient...
		// tableID, rowID, pos, fill, width
        var table = document.getElementById(tableID);
        var row = table.rows[rowID]; // Get row
        var cell;

        // if holder exist: remove
        if (row.cells[0].id == tableID + '-placeHolder-placeHolder') {
            console.log('removing:' + tableID + '-placeHolder-placeHolder');
            //cell = row.insertCell(row.length);
            cell = row.insertCell(1);
            row.deleteCell(0);
        } else {
            if (pos == 'F') { cell = row.insertCell(0); } // if first...
            else if (pos == 'L') { cell = row.insertCell(row.length); } // if last....
            else if (/^([0-9]*)$/.test(pos)) { cell = row.insertCell(pos-1); } // if number
            else {cell = row.insertCell(row.length); /*alert("why is this also an error?!");*/ }
        }
        if (fill !== undefined) { cell.innerHTML = fill; }
        cell.width = width;

        var numCells = row.cells.length;
        for (var i = 0; i < numCells; i++) { // re-name rows to reflect new order
            //alert(row.cells[i].innerHTML);
            row.cells[i].setAttribute("id", tableID + '-' + rowID + '-' + i);
        }
        return cell.id;
    }
//--------------------------------------

function append(templateHTML,appendToID) {
	try {
		// Setup template element to append
		var template = document.createElement('template');
		template.innerHTML = templateHTML;

		// Append element based on appendToID
		if (appendToID == 'body' ) {
			document.body.appendChild(template.content.firstChild);
		} else if (appendToID == 'head') {
			document.head.appendChild(template.content.firstChild);
		} else {
			document.getElementById(appendToID).appendChild(template.content.firstChild);
		}
		return true;
	} catch(e) {
		logError("Problm appending " + templateHTML + " to " + appendToID + ". Additional Info: " + e);
		return false;
	}
}

function clearById(id) {
	try {
		// Remove innerHTML of element to clear it
		document.getElementById(id).innerHTML = "";
	} catch(e) {
		logError("Problm clearing " + id + ". Additional Info: " + e);
	}

}

function clearByTagName(tag, index) {
	try {
		// If no index defined: choose 0 to select first
		if (index === undefined) {
			index = 0;
		}
		// Remove innerHTML of element to clear it
		document.getElementsByTagName(tag)[index].innerHTML = "";
	} catch(e) {
		logError("Problm clearing by tag " + tag + ", with index " + index + ". Additional Info: " + e);
	}
    if (index === undefined) { index = 0; }                   // If no index defined: choose 0 to select first
    document.getElementsByTagName(tag)[index].innerHTML = ""; // Remove innerHTML of element to clear it
}

function getEleById(id) { return document.getElementById(id); }
function getEleByID(id) { return document.getElementById(id); } // phase this out, switch to Id...!

function getEleByTag(tag, index) {
    if (index === undefined) { index = 0; }                                 // If no index defined: choose 0 to select first
    else if (index === "*") { return document.getElementsByTagName(tag);  } // if index is *: return full collection.
    return document.getElementsByTagName(tag)[index];                       // else, index is #: return that element
}

function hasClass(el, className) {
  if (el.classList) { return el.classList.contains(className); }
  else { return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)')); }
}
//--------------------------------------
//--sub functions
    function addClass(el, className) {
      if (el.classList) { el.classList.add(className); }
      else if (!hasClass(el, className)) { el.className += " " + className; }
    }
    function removeClass(el, className) {
      if (el.classList) { el.classList.remove(className); }
      else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s+|^)' + className + '(\\s+|$)');
        el.className=el.className.replace(reg, ' ');
      }
    }
//--------------------------------------

function insertCSS() { // Add CSS variables to header
    for (var i = 0; i < cssCollection.length; i++) { insertTag("head", "style", "text/css", cssCollection[i]); }
}

function insertCssTagSrc(source) { // Add CSS variables to header
    var script = document.createElement('link');
    script.type = "text/css";
	script.rel = "stylesheet";
    //script.innerHTML = content;
	script.href = source;
    document.getElementsByTagName('head')[0].appendChild(script);
}


function insertTag(appendToID, tag, type, content) {// Add tags to places
    var script = document.createElement(tag);
    script.type = type;
    script.innerHTML = content;
    document.getElementsByTagName('head')[0].appendChild(script);

    //var tagTemplate = '<' + tag + ' type="' + type + '">' + content + '</' + tag + '>';
    //append(tagTemplate, appendToID);
    //$(appendToID).append(tagTemplate);
}


function makeDiv(divID, appendToID) {
    var divTemplate = '<div id="' + divID + '"></div>';
    append(divTemplate, appendToID);
    return divID; // returns element? switch to ID?
}

function makeButton(btnID, btnName, btnOC, appendToID, funcX) {
	 // class="btn"
    var buttonTemplate = '<button id="' + btnID + '"  onclick="' + btnOC + '">' + btnName + '</button>'; //onclick="' + btnOC + '" //onclick="' + btnOC + '" "onclick="' + funcX + '()"  ' + funcX + '
    append(buttonTemplate, appendToID);
	//document.getElementById(btnID).addEventListener('click', btnOC, false);
    if (funcX !== undefined) { document.getElementById(btnID).addEventListener('click', funcX, false); }
    return document.getElementById(btnID);
}

function makeInput(inpID, inpType, appendToID) {
    var inpTemplate = '<input type="' + inpType + '" id="' + inpID +'"></input>';
    append(inpTemplate,appendToID);
    //$(appendToID).append(inpTemplate);
}

function makePWbox(pwID, appendToID, preFill) {
    makeInput(pwID, "password", appendToID);
    document.getElementById(pwID).setAttribute("value", preFill);
}

function makeSelect(selID, appendToID) {
    var selTemplate = '<select id="' + selID +'"></select>';
    append(selTemplate,appendToID);
    return selID;
}
//--------------------------------------
//--sub functions
    function addSelOpt(optID, optName, selID, pos, value, selected, enabled) {
        var select = document.getElementById(selID);
        var option = document.createElement("option");
        option.text = optName;
        if (value !== undefined || '') option.value = value;
        if (selected !== undefined || '') option.selected = selected;
        if (enabled !== undefined || '') option.enabled = enabled;
        option.id = optID;

        //select.add(option, select[0]);
        if (pos == 'F') { select.add(option, select[0]); } // if first...
        else if (pos == 'L') { select.add(option, select[select.length]); } // if last....
        else if (/^([0-9]*)$/.test(pos)) { select.add(option, select[pos-1]); } // if number
        else { select.add(option, select[select.length]); /*alert("error");*/ }
    }
//--------------------------------------

function makeListBox(args) {
	// TODO move into makeOption...
	try {
		// Check for Required args: {varId:'',targetId:''}
		if (args.id == undefined | args.targetId == undefined ) {
			logError("Unable to create List Box. id or targetId = undefined");
			return false;
		}

		logTrace("Adding toggle List Box: " + args.id)

		// Create defaults
		if (args.listSize == undefined) {
			args.listSize = 7;
		}



var txt = 'prompt("Text to add: "); if (txt != null) { var e = document.getElementById(\'' + args.id + '\'); e.appendChild(document.createElement("option").text(txt));} else {alert("No text entered");}';

		// Create template
		// TODO create css classes for: listBox_holder, listBox_topBar, listBox_box, listBox_option :selected,
		var listBoxTemplate =
			'<div id="' + args.id + '_holder" class="listBox_holder"> \n' +
			'	<div id="' + args.id + '_topBar" class="listBox_topBar"> \n' +
			'		<button class="listBox_button" id="' + args.id + '_add_btn" onclick="var txt = prompt(\'Text to add: \'); if (txt != null) { var e = document.getElementById(\'' + args.id + '\'); var node = document.createElement(\'option\'); node.text=txt; e.appendChild(node);} else {alert(\'No text entered\');}"> + </button> \n' +
			'		<button class="listBox_button" id="' + args.id + '_delete_btn" onclick="var e = document.getElementById(\'' + args.id + '\'); e.options[e.selectedIndex].remove();"> - </button> \n' +

			// TODO add title & header buttons... delete, +
			'	<div/> \n' +
			'	<select  id="' + args.id + '" class="listBox_box" size="' + args.listSize + '"> \n' +
			// TODO options here...
			'		<option  id="' + args.id + '_opt1" class="listBox_option" value="bbb">aaa</option> \n' +
			'	</select> \n' +
			'</div>';


		// Modify template based on requested display style


		// Append Template
		append(listBoxTemplate,args.targetId);

		// Apply Additional args
		var myListBox = document.getElementById("switch_" + args.varId);

		try {

		} catch (e) {
			logError("Problem setting checked attribute of "+ mySwitch.id + ". Additional Info: " + e);
		}
		try {
			// mySwitch.onclick = args.action; // Use this?
			myListBox.addEventListener('click', args.onclick, false); // I think this works better
		} catch (e) {
			logError("Problem adding onclick to "+ myListBox.id + ". Additional Info: " + e);
		}
		return myListBox;
	} catch (e) {
		logError("Problem making ListBox "+ args.id + ". Additional Info: " + e);
	}
}

function makeSwitch(switchID, appendToID, switchLabel, switchTip) { // Make a switch
    // starting source: http://www.w3schools.com/howto/howto_css_switch.asp
    if (switchTip == undefined) { switchTip = ''; }
    var switchTemplate = '<label class="switchLabel"> ' + switchLabel + '\n' +
                          '<label class="switch"> \n' +
                         '  <input type="checkbox" id="' + switchID + '"> \n' +
                         '  <div class="slider round" title="' + switchTip + '"></div> \n' +
                          '</label> \n' +
                         '</label> \n';
    append(switchTemplate,appendToID);
    return switchID;
}




// TODO multiple component settings.??
//		type: multi
// 	components: {comp name: type, comp2 name: type2, n...}

function makeOption(args) { // Make a switch
// Accepted args:
// * = REQUIRED
//
//		varId* 			= T/F Variable this will control
//		targetId* 		= id of where to place the switch
//		type*			= header!!, switch, textBox, textArea, color, select
//		preFunc?			= execute before testFunc
//		onclick			= execute onclick for sample actions...
//		postFunc?		= execute after testFunc
//		autoSave		= auto save on click/leaveing tb
//		saveBtn			= include save button
//		labelText		= Text for the label (if empty = "Toggle " + args.varId)
//		title 			= Title/Tool Tip/alt text for switch (if empty = args.labelText + "Toggle Switch"
//		displayStyle	= How to display the switch: br, tableRow, tableCell
//		selectOptions	= for select type only (so far?), options to be listed in select, object { value:, title:,}
//		width				= duh...
//		height			= duh...
//		stringify		= (true/false), stringify the initial setting
//		ltSchema 		= types of option for floatbox setting ['textBox','textBox','colorZ']
//
// Add left/right side options?
	// try {
		//Check for Required args: {varId:'',targetId:''}
		if (args.type == undefined | args.targetId == undefined | args.varId == undefined) {
			logError("Unable to create option. type, targetId, or varId = undefined");
			return false;
		}

		// logTrace("Adding option item for: " + args.varId + ', val: ' + window[args.varId] + ', val: ' + window[args.varId.split(".")[1]]);

		var isTheme = false;
		if (args.varId.split('.')[0] == "myTheme") {
			isTheme = true;
			args.varId = args.varId.split(".")[1];
		}

		// Create defaults
		if (args.labelText == undefined) {
			args.labelText = "Set " + args.varId;
		}

		if (args.title == undefined) {
			args.title = args.labelText;
		}

		if (args.autoSave == undefined) {
			args.autoSave = false;
		}

		var optionTemplate = {};

		//optionTemplate.type = [args.type];

		optionTemplate.label =
			'<label class="optionLabel" id="option_label_' + args.varId + '"> ' + args.labelText + '</label>\n';

		optionTemplate.changed =
			'<div id="option_changed_' + args.varId + '" class="optChangedSpan optNotChanged"> *</div>';//style="color:red; font-size:20;"

		optionTemplate.changedScript =
			'function(){var co=document.getElementById(option_changed_'+args.varId+');if(co.style.display!=\"none\"){co.style.diplay=\"none\";}else{co.style.diplay=\"inline\"}}';

		optionTemplate.color =
			'<div class="optionDiv "> \n'+
			'	<input type="color" id="option_' + args.varId + '" title="' + args.title + '"></input>  \n' +
			optionTemplate.changed +
			'</div>';

		optionTemplate.select =
			'<div class="optionDiv"> \n'+
			'	<select id="option_' + args.varId + '" title="' + args.title + '"></select> \n' +
			optionTemplate.changed +
			'</div>';

		optionTemplate.toggle =
			'<div class="optionDiv"> \n' +
			'	<label class="switch"> \n'+
			'		<input type="checkbox" id="option_' + args.varId + '"></input> \n' +
			'		<div class="slider round" title="' + args.title + '"></div> \n' +
			'	</label> \n' +
			optionTemplate.changed +
			'</div>';

			// TODO add width & height options
		optionTemplate.textArea =
			'<div class="optionDiv"> \n'+
			'	<textarea id="option_' + args.varId + '" title="' + args.title + '"></textarea> \n' +
			optionTemplate.changed +
			'</div>';

		optionTemplate.textBox =
			'<div class="optionDiv"> \n'+
			'	<input type="text" id="option_' + args.varId + '" title="' + args.title + '"></input> \n' +
			optionTemplate.changed +
			'</div>';

		optionTemplate.style =
			'<div class="optionDiv"> \n'+
			'	<input type="text" id="option_' + args.varId + '" title="' + args.title + '"></input> \n' +
			'	<input type="color" id="option_' + args.varId + '_color" title="' + args.title + '"></input> \n' +
			optionTemplate.changed +
			'</div>';

		optionTemplate.colorZ =
			'<div class="optionDiv"> \n'+
			'	<input type="text" id="option_' + args.varId + '" title="' + args.title + '"></input> \n' +
			'	<input type="button" id="option_' + args.varId + '_colorPick" title="' + args.title + '" value="Choose..."></input> \n' +
			'	<div class="checkerBoard colorZDCB"><table id="option_' + args.varId + '_colorPick_D" title="' + args.title + ' demo" class="colorZD"></table></div> \n' +
			optionTemplate.changed +
			'</div>';

			// TODO create css classes for: listBox_holder, listBox_topBar, listBox_box, listBox_option :selected,
			// TODO add title & header buttons... delete, +
			optionTemplate.listBox =
				'<div id="' + args.varId + '_holder" class="listBox_holder"> \n' +
				'	<div id="' + args.varId + '_topBar" class="listBox_topBar"> \n' +
				'		<button class="listBox_button" id="' + args.varId + '_add_btn" onclick="var txt = prompt(\'Text to add: \'); if (txt != null) { var e = document.getElementById(\'' + args.varId + '\'); var node = document.createElement(\'option\'); node.text=txt; e.appendChild(node);} else {alert(\'No text entered\');}"> + </button> \n' +
				'		<button class="listBox_button" id="' + args.varId + '_delete_btn" onclick="var e = document.getElementById(\'' + args.varId + '\'); e.options[e.selectedIndex].remove();"> - </button> \n' +
				'	<div/> \n' +
				'	<select  id="' + args.varId + '" class="listBox_box" size="' + args.listSize + '"> \n' +
				// Options will go here...
				'	</select> \n' +
				'</div>';

			optionTemplate.listTable =
				'<div id="option_' + args.varId + '_holder" class="listBox_holder"> \n' +
				'	<div id="option_' + args.varId + '_topBar" class="listBox_topBar"> \n' +
				'   <input id="option_' + args.varId + '" type="text" style="display:none;"></input> \n' +
				'		<button class="listBox_button" id="option_' + args.varId + '_add_btn"> + </button> \n' +
				// '		<button class="listBox_button" id="option_' + args.varId + '_delete_btn" onclick="var e = document.getElementById(\'' + args.varId + '\'); e.options[e.selectedIndex].remove();"> - </button> \n' +
				optionTemplate.changed +
				'	<div/> \n' +
				// Options will go here...
				'</div>';



		//defaultTemplate

		//var optionTableStyle

		// Modify template based on requested display style
		// if (args.displayStyle == 'br') {
			// switchTemplate += '<br /> \n';
			// append(switchTemplate,args.targetId);
		// } else
		if (args.displayStyle == 'tableRow') {
			var newRow = insertRowX(args.targetId);
			var lblCell = insertColX(args.targetId,newRow);
			var dtaCell = insertColX(args.targetId,newRow);

			append(optionTemplate.label,lblCell);
			append(optionTemplate[args.type],dtaCell);

			document.getElementById(lblCell).className = 'label2Col';
			document.getElementById(dtaCell).className = 'data2Col';
		} else if (args.displayStyle == 'tableCell') {
			append(optionTemplate.label,args.targetId);
			append(optionTemplate[args.type],args.targetId);
		} else {
			// use default template setup
			//append("<div>" + optionTemplate.label + optionTemplate[args.type] + "</div>", args.targetId);
		}


		// Append Template
		// append(switchTemplate,args.targetId);

		// Apply Additional args
		// var thisOption = {};
		var myOptionLabel = document.getElementById("option_label_" + args.varId);
		var myOption = document.getElementById("option_" + args.varId);
		var myOptionChanged = document.getElementById("option_changed_" + args.varId);
		var changables = [ myOption ];
		var newVal = null;

		// Determine appropriate value
		if (isTheme) {
			newVal = myTheme[args.varId];
		} else if (args.stringify) {
			newVal = JSON.stringify(window[args.varId]);
		} else {
			newVal = window[args.varId];
		}

		// Set current value
		switch (args.type) {

			case 'toggle':
				myOption.checked = newVal;
				logTrace("Setting checked set to: " + newVal);
				break;

			case 'select':
				var opts = JSON.parse(args.selectOptions);
				for (var opt in opts) {
					var itm = opts[opt];
					var selectOption = '<option id="option_' + args.varId + '_' + itm.value + '" value="' + itm.value + '" >' + itm.title + '</option>';
					append(selectOption,'option_' + args.varId);
					logTrace('Added select option: ' + itm.value + ' to: option_' + args.varId);
				}
				document.getElementById('option_' + args.varId).value = newVal;
				break;

			case 'style': // for border styling... not ready
				var myOptionC = document.getElementById("option_" + args.varId + "_color");
				myOption.value = newVal.split(' #')[0];
				myOptionC.value = '#' + newVal.split(' #')[1];//.splice(0,6);
				changables.push(myOptionC);
				break;

			case 'listTable':
				var ltAdd = document.getElementById("option_" + args.varId + "_add_btn");
				var ltDel = document.getElementById("option_" + args.varId + "_add_btn");
				var lt = document.getElementById("option_" + args.varId + "_table");
				myOption.value = newVal;
				// for (key in newVal) {add rowX to "option_" + args.varId + "_table"}
				var optObj = JSON.parse(myOption.value);
				// var optObj = myOption.value;

				var tid = addTable("option_" + args.varId + "_table", "option_" + args.varId + "_holder",args.varId);
				var headerRow = insertRowX(tid);
				for (var rowTitle in args.ltSchema) {
					var c = document.getElementById(insertColX(tid,headerRow));
					c.className='tableHead';
					c.innerHTML = rowTitle;
				}
				//"option_" + args.varId + "_table";
				// var t = document.getElementById(tid);
				for (var objRow in optObj) {
					var optItm = optObj[objRow];
					makeltRow(tid,args.ltSchema,optItm);
				//
				// 	var r = insertRowX(tid);
				// 	for (var objCol in optObj[objRow]) {
				// 		var c = document.getElementById(insertColX(tid,r));
				// 		//c.class='';
				//
				// 		//TODO THIS SHOULD BE COL CELL, NOTTTTTT Row Col???? i think...
				//
				// 		// c.innerHTML = optObj[objRow][objCol];
				// 		//c.innerHTML = optionTemplate[args.type]
				//
				// 		var thisArgs = {
				// 			varId: c.id + '_' + objCol,
				// 			colorPick: c.id + '_' + objCol + '_colorPick'
				// 		};
				// 		// alert('type: ' + args.ltSchema[objCol] + ' - val: ' + optObj[objRow][objCol]);
				// 		append('<input id="' + thisArgs.varId + '" type="text"></input>',c.id);
				//
				//
				//
				// 		var thisSubOpt = document.getElementById(thisArgs.varId);
				// 		thisSubOpt.value = optObj[objRow][objCol];
				// 		thisSubOpt.addEventListener('change',
				// 			function() {
				// 				var optObj = {};
				//
				// 				var parRowId = $(this).parent().parent().attr('id');
				// 				var parRowNum = parRowId.split('-');
				// 				parRowNum = (parRowNum[parRowNum.length-1]) - 2;
				// 				var mainOptTb = parRowId.split('_');
				// 				mainOptTb =  document.getElementById('option_' + mainOptTb[1]);
				// 				// alert('par: ' + parRowId);
				// 				$('#' + parRowId + ' td input[type!=button]').each(
				// 					function() {
				// 						alert($(this).attr('id') + ' - val: ' + $(this).val() + ' - key?: ' + key);
				// 						var key = $(this).attr('id').split('_');
				// 						key = key[key.length-1];
				// 						optObj[key] = $(this).val();
				// 						alert($(this).attr('id') + ' - val: ' + $(this).val() + ' - key?: ' + key);
				// 					}
				// 				);
				//
				// 				var curArr = JSON.parse(mainOptTb.value);
				// 				//alert('currArr: '+ JSON.stringify(curArr));
				// 				//alert('array row: #' + parRowNum + ' ' + JSON.stringify(curArr[parRowNum]));
				// 				//alert('optObj: '+ JSON.stringify(optObj));
				// 				curArr[parRowNum] = optObj;
				// 				//alert('New curArr: ' + JSON.stringify(curArr));
				// 				mainOptTb.value=JSON.stringify(curArr);
				// 				triggerChange(mainOptTb.id);
				// 				// alert("arrIndx: " + parRowNum-2 + "curarrrrr: " + curArr);
				//
				// 				// alert(JSON.stringify(optObj));
				//
				// 			}
				// 		);
				//
				// 		switch (args.ltSchema[objCol]) {
				// 			case "colorZ":
				// 				append('<input type="button" id="' + thisArgs.colorPick + '" title="' + args.title + '" value="Choose..."></input>',c.id);
				// 				makeColorPicker(thisArgs, thisSubOpt);
				// 				break;
				// 			default:
				// 				break;
				// 		}
				//
				// 	}
				//
				// 	ltAdd.addEventListener('click',
				// 		function() {
				// 			var tid = "option_" + args.varId + "_table";
				// 			// var t = documnet.getElementById(tid);
				// 			var r = insertRowX(tid);
				// 			$('#' + r).prev().children('td').each(
				// 				function() {
				// 					insertColX(tid,r);
				// 				}
				// 			);
				// 			// for (var key in r.previousSibling) {
				// 			// 	insertColX(tid,r);
				// 			// }
				// 		}
				// 	);

				}

						ltAdd.addEventListener('click',
							function() {
								var tid = "option_" + args.varId + "_table";
								// var t = documnet.getElementById(tid);
								// makeltRow()?????????????????????????????????
								var optItm = {};
								for (var itm in args.ltSchema) {
									optItm[itm] = '';
								}
								makeltRow(tid,args.ltSchema,optItm);
								// var r = insertRowX(tid);
								// $('#' + r).prev().children('td').each(
								// 	function() {
								// 		var c = insertColX(tid,r);
								// 	}
								// );
								// for (var key in r.previousSibling) {
								// 	insertColX(tid,r);
								// }
							}
						);


				break;

			case 'colorZ': // for border styling... not ready

				myOption.value = newVal;
				args.colorPick = "option_" + args.varId + "_colorPick";
				$('#' + args.colorPick + '_D').css('background-color', newVal);
				makeColorPicker(args, myOption);
				/*var colorPick = document.getElementById("option_" + args.varId + "_colorPick");
				myOption.value = newVal;
				colorPick.addEventListener('click',
					function() {
						if ($('#' + args.varId + '_cpfb').length == 0) {
							var fb = makeFloatingBox({'id': args.varId + '_cpfb',"title":"Color Picker"});
							append('<td id="' + args.varId + '_cptd"></td>',fb.content);
							var currOptTable = addTable(args.varId + '_cptb', args.varId + '_cptd');
							document.getElementById(currOptTable).style.width = "";

							var sliders = ['Red','Green','Blue','Alpha'];

							sliders.forEach(
								function(element, index, array) {
									var sliderLabelTemplate = element;
									var sliderMin = 0;
									var sliderMax = 255;
									var sliderStep = 1;
									if (element == 'Alpha') {
										sliderMax = 1;
										sliderStep = 0.01;
									}
									var sliderTemplate = '<input id="' + fb.id + '_' + element + '" type="range" step="' + sliderStep + '" min="' + sliderMin + '" max="' + sliderMax + '"></input>';
									var sliderTbTemplate = '<input type="number" maxlength="3" min="0" max="255" id="' + fb.id + '_' + element + '_tb" size="10" value=""></input>';

									var newRow = insertRowX(currOptTable);
									var lblCell = insertColX(currOptTable,newRow);
									var dtaCell = insertColX(currOptTable,newRow);

									append(sliderLabelTemplate,lblCell);
									append(sliderTemplate,dtaCell);
									append(sliderTbTemplate,dtaCell);

									document.getElementById(fb.id + '_' + element).addEventListener("change",
										function() {
											document.getElementById(fb.id + '_' + element + '_tb').value = this.value;
											// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
											var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
											$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
										}
									);

									document.getElementById(fb.id + '_' + element + '_tb').addEventListener("change",
										function() {
											document.getElementById(fb.id + '_' + element).value = this.value;
											// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
											var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
											$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
										}
									);
									document.getElementById(fb.id + '_' + element + '_tb').addEventListener("keyup",
										function() {
											document.getElementById(fb.id + '_' + element).value = this.value;
											// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
											var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
											$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
										}
									);
								}
							);

							var colorDemoTemplate = '<table id="' + fb.id + '_demo" height="100%" width="100%" style="background-color: rgba(0,0,0,0.75); float:left; display:inline-block; border: none;"></table>';
							var colorSetBtnTemplate = '<input id="' + fb.id + '_setBtn" type="button" value="Set" width="100%" height="20px"></input>';

							var demoCell = insertColX(currOptTable,0);
							append(colorDemoTemplate,demoCell);
							demoCell = document.getElementById(demoCell);
							demoCell.rowSpan = 3;
							demoCell.className = 'checkerBoard';
							demoCell.style.width = '100px';
							demoCell.style.height = '100px';

							var demoCell2 = insertColX(currOptTable,3);
							append(colorSetBtnTemplate,demoCell2);

							document.getElementById(fb.id + '_setBtn').addEventListener('click',
								function() {
									var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
									myOption.value = 'rgba('+rgba+')';
									triggerChange("option_" + args.varId);
									$('#' + fb.id + '-close a:eq(0)').click();
								}
							);

							var curSetting = myOption.value.split('(')[1].split(')')[0];

							document.getElementById(fb.id + '_Red').value = curSetting.split(',')[0];
							triggerChange(fb.id + '_Red');
							document.getElementById(fb.id + '_Green').value = curSetting.split(',')[1];
							triggerChange(fb.id + '_Green');
							document.getElementById(fb.id + '_Blue').value = curSetting.split(',')[2];
							triggerChange(fb.id + '_Blue');
							document.getElementById(fb.id + '_Alpha').value = curSetting.split(',')[3];
							triggerChange(fb.id + '_Alpha');
						}
					}
				);*/
				break;

			// case "color":
			// case "textBox":
			default:
				myOption.value = newVal;
				break;
		}



		// Add on change listener
		try {
			// myOption.onclick = args.action; // Use this?
			for (var changeMe in changables) {
			changables[changeMe].addEventListener('change',
				function() {

					var optionItem = document.getElementById( "option_" + args.varId);
					var optType = optionItem.type;
					if ($( "#option_" + args.varId + "_color" ).length) {
						optType = 'style';
					}

					var setting;
					switch(optType) {
						case 'checkbox':
							setting = optionItem.checked;
							break;

						case 'style':
							var optionItemC = document.getElementById('option_' + args.varId + '_color');
							setting = optionItem.value + ' ' + optionItemC.value;
							break;

						default:
							setting = optionItem.value
							break;
					}

					logTrace('Option modified: ' + args.varId + ' original: ' + window[args.varId] + ', is now: ' + setting);


					try {
						setting = JSON.parse(setting);
					} catch (e) { }
// saveASC
					if (window[args.varId] == setting) {
						document.getElementById("option_changed_" + args.varId).className = "optChangedSpan optNotChanged";
					}
					// else if (window[args.varId] == ) {
					// 	 document.getElementById("option_changed_" + args.varId).className = "optChangedSpan optNotChanged";
					// }
					 else {
						document.getElementById("option_changed_" + args.varId).className = "optChangedSpan optChanged";
					}

					toggleSaveButton();
				},
				false);
			}
		} catch (e) {
			logError("Problem adding onclick to " + myOption.id + ". Additional Info: " + e);
		}

		// Not in use. not correct
		if (args.autoSave) {
			try {
				var saveArgs = {  };
				myOption.addEventListener('change',  function() { saveArgs[args.varId] = myOption.checked; setVars(saveArgs); } , false); // I think this works better
				logTrace("Auto Save event listener added for: " + myOption.id);
			} catch (e) {
				logError("Problem adding save func to onclick with " + myOption.id + ". Additional Info: " + e);
			}
		}

		try {

		} catch (e) {
			logError("Problem <problem here> with "+ myOption.id + ". Additional Info: " + e);
		}
	// } catch (e) {
		//logError("Problem making option for "+ args.varId + ". Additional Info: " + e);
	// }

    return myOption;
}





function makeTabBox(tabBoxID) {// Make a box to hold tabs
    // Make Tab Box & Tabs
    //source: http://www.w3schools.com/howto/howto_js_tabs.asp
    var tabBoxTemplate = '<ul class="tab" id="' + tabBoxID + '"></ul>';
    append(tabBoxTemplate,"body");
    //$(tabBoxTemplate).appendTo("body");
}
//--------------------------------------
//--sub functions
    function addTab(tabBoxID, tabID, tabTitle, tabContent) {
        var tabLITemplate = '<li><a href="#" id="' + tabID + '-li" class="tablinks" onclick="openTab(event, \'' + tabID + '\')">' + tabTitle + '</a></li>';
        append(tabLITemplate,tabBoxID);
        //$(tabLITemplate).appendTo("#" + tabBoxID);

        var tabDivTemplate = '<div id="' + tabID + '" class="tabcontent">' + tabContent + '</div>';
        append(tabDivTemplate,"body");
    } // Add a tab to a TabBox
//--------------------------------------

function makeTextarea(taID, appendToID, preFill) {
    var taTemplate = '<textarea id="' + taID +'">' + preFill + '</textarea>';
    append(taTemplate, appendToID);
}

function makeTextbox(tbID, appendToID, preFill) {
    makeInput(tbID, "textbox", appendToID);
    document.getElementById(tbID).setAttribute("value", preFill);
    return tbID;
}


function makeTopBar(appendTo) {
    var topBarTemplate = '<div class="topBar" style="" id="topBar"></div>';
    append(topBarTemplate,appendTo);
} // Make a div

function setAttr(toID, attrs) {
    document.getElementById(pwID).setAttribute("value", preFill);
}

var tabBoxScript =
'function openTab(evt, tabID) {                                                         \n' +
'    // Declare all variables                                                           \n' +
'    var i, tabcontent, tablinks;                                                       \n' +
'    // Get all elements with class="tabcontent" and hide them                          \n' +
'    tabcontent = document.getElementsByClassName("tabcontent");                        \n' +
'    for (i = 0; i < tabcontent.length; i++) {                                          \n' +
'        tabcontent[i].style.display = "none";                                          \n' +
'    }                                                                                  \n' +
'    // Get all elements with class="tablinks" and remove the class "active"            \n' +
'    tablinks = document.getElementsByClassName("tablinks");                            \n' +
'    for (i = 0; i < tablinks.length; i++) {                                            \n' +
'        tablinks[i].className = tablinks[i].className.replace(" active", "");          \n' +
'    }                                                                                  \n' +
'    // Show the current tab, and add an "active" class to the link that opened the tab \n' +
'    document.getElementById(tabID).style.display = "block";                            \n' +
'    evt.currentTarget.className += " active";                                          \n' +
'}                                                                                        ';



var htmlDemoBoxes =  {

    /* Generalize... Make sure you get the insides of links too!
    Support Engineer's name  = Support Engineer (+# if multiple)
    Support Engineer's email = support@ca.com
    Case #                   = 00999999
    Case Subject             = CA Support Case
    Case contact             = Customer Contact
    Case contact email       = customer@sample.com
    Case site Name           = Sample Company

    options... Sample Fills: Real Case Fill (Make sure show more works), empty, small sample, max capacity
               sw: use square monitor style
    Allow to collapse/uncollapse individually - collapse all button

    */
//'<img src="/s.gif" alt="Hide Section - Details" class="hideListButton" id="img_colBut-Open_Activities" name="Details" onclick="if ($(\'#500a000001CGCP1_RelatedActivityList_body\').css(\'display\') == \'none\') { $(\'#500a000001CGCP1_RelatedActivityList_body\').css({\'display\': \'block\'}); $(\'#img_colBut-Open_Activities\').attr({\'class\': \'hideListButton\', \'title\': \'Hide Section - Open Activities\', \'alt\': \'Hide Section - Open Activities\'}); } else { $(\'#500a000001CGCP1_RelatedActivityList_body\').css({\'display\': \'none\'}); $(\'#img_colBut-Open_Activities\').attr({\'class\': \'showListButton\', \'title\': \'Show Section - Open Activities\', \'alt\': \'Show Section - Open Activities\'}); }" style="cursor:pointer;" tabindex="0" title="Hide Section - Open Activities">'
    emails: [
        '<div class="bRelatedList" id="openActs"><a name="500a_RelatedEmailMessageList_target"></a> \n' +
        '<div class="listRelatedObject emailMessageBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><div class="pbHeader"><div class="realFill">realFill</div><div class="smallFill">smallFill</div><div class="fullFill">fullFill</div><div class="emptyFill">emptyFill</div><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" width="12" height="1" class="minWidth" style="margin-right: 0.25em;" title=""><img src="/s.gif" alt="" class="relatedListIcon" title=""><h3 id="500a000001CGCP1_RelatedEmailMessageList_title">Emails</h3></td><td class="pbButton"><input value="Send an Email" class="btn" name="newEmail" onclick="" title="Send an Email" type="button"></td><td class="pbHelp"><span class="help" title="Emails Help (New Window)"><a href="" class="linkCol"><span class="linkSpan">Emails Help</span> <img src="/s.gif" alt="Emails Help (New Window)" class="helpIcon" title="Emails Help (New Window)"></a></span></td></tr> \n' +
        '</tbody></table></div><div class="pbBody" id="500a000001CGCP1_RelatedEmailMessageList_body"><table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Status</th><th scope="col" class=" cellCol2 zen-deemphasize">&nbsp;</th><th scope="col" class=" cellCol3 zen-deemphasize">Subject</th><th scope="col" class=" cellCol4 zen-deemphasize">Email Address</th><th scope="col" class=" cellCol5 zen-deemphasize">Message Date</th></tr> \n' +
        '<tr class="dataRow even first" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
        '...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd last" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
        '...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr></tbody></table> \n' +
        '</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div><script></script> \n' +
        '</div>'],
    caseTeam:
    [   '<div class="bRelatedList" id="500aRelatedTeamMemberList"><a name="500a_RelatedTeamMemberList_target"></a> \n' +
        '<div class="listRelatedObject caseBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><div class="pbHeader"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" class="minWidth" style="margin-right: 0.25em;margin-right: 0.25em;" title="" width="12" height="1"><img src="/s.gif" alt="" class="relatedListIcon" title=""><h3 id="500a000001CGNWc_RelatedTeamMemberList_title">Case Team</h3></td><td class="pbButton"><input value="Update Case Team Members" class="btn" name="newMember" title="Update Case Team Members" type="button"></td><td class="pbHelp"><span class="help" title="Case Team Help (New Window)"><a href="" class="linkCol"><span class="linkSpan">Case Team Help</span> <img src="/s.gif" alt="Case Team Help (New Window)" class="helpIcon" title="Case Team Help (New Window)"></a></span></td></tr> \n' +
        '</tbody></table></div><div class="pbBody" id="500a_RelatedTeamMemberList_body"><table class="list" cellspacing="0" cellpadding="0" border="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Team Member</th><th scope="col" class=" cellCol2 zen-deemphasize">Member Role</th><th scope="col" class=" cellCol3 zen-deemphasize">Case Access</th><th scope="col" class="booleanColumn cellCol4 zen-deemphasize">Visible In Customer Portal</th><th scope="col" class=" cellCol5 zen-deemphasize">Modified By</th></tr> \n' +
        '<!-- ListRow --><tr class="dataRow even first"><td class="actionColumn"><a href="" class="actionLink" title="Remove - Record 1 - User: Support Engineer 2">Remove</a></td><th scope="row" class=" dataCell  cellCol1 "><a href="">User: Support Engineer 2</a></th><td class=" dataCell  cellCol2 "><a href="">Contributor</a></td><td class=" dataCell  cellCol3 ">Read/Write</td><td class=" dataCell  cellCol4 booleanColumn"><img src="/img/checkbox_checked.gif" alt="Checked" class="checkImg" title="Checked" width="21" height="16"></td><td class=" dataCell  cellCol5 "><a href="">Support Engineer</a>, 10/5/2016 4:51 PM</td></tr></tbody></table> \n' +
        '</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div> \n' +
        '<!-- ListRow --><tr class="dataRow odd last"><td class="actionColumn"><a href="" class="actionLink" title="Remove - Record 1 - User: Support Engineer 3">Remove</a></td><th scope="row" class=" dataCell  cellCol1 "><a href="">User: Support Engineer 3</a></th><td class=" dataCell  cellCol2 "><a href="">Advisor</a></td><td class=" dataCell  cellCol3 ">Read/Write</td><td class=" dataCell  cellCol4 booleanColumn"><img src="/img/checkbox_checked.gif" alt="Checked" class="checkImg" title="Checked" width="21" height="16"></td><td class=" dataCell  cellCol5 "><a href="">Support Engineer</a>, 10/5/2016 4:51 PM</td></tr></tbody></table> \n' +
        '</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div> \n' +
        '</div>'],

    caseTeamBKUP: //not correct
    [   '<div class="bRelatedList" id="caseTeam"><a name="500a_RelatedEmailMessageList_target"></a> \n' +
        '<div class="listRelatedObject emailMessageBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><div class="pbHeader"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" width="12" height="1" class="minWidth" style="margin-right: 0.25em;" title=""><img src="/s.gif" alt="" class="relatedListIcon" title=""><h3 id="500a000001CGCP1_RelatedEmailMessageList_title">Emails</h3></td><td class="pbButton"><input value="Send an Email" class="btn" name="newEmail" onclick="" title="Send an Email" type="button"></td><td class="pbHelp"><span class="help" title="Emails Help (New Window)"><a href="" class="linkCol"><span class="linkSpan">Emails Help</span> <img src="/s.gif" alt="Emails Help (New Window)" class="helpIcon" title="Emails Help (New Window)"></a></span></td></tr> \n' +
        '</tbody></table></div><div class="pbBody" id="500a000001CGCP1_RelatedEmailMessageList_body"><table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Status</th><th scope="col" class=" cellCol2 zen-deemphasize">&nbsp;</th><th scope="col" class=" cellCol3 zen-deemphasize">Subject</th><th scope="col" class=" cellCol4 zen-deemphasize">Email Address</th><th scope="col" class=" cellCol5 zen-deemphasize">Message Date</th></tr> \n' +
        '<tr class="dataRow even first" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
        '...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
        '<tr class="dataRow odd last" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
        '...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr></tbody></table> \n' +
        '</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div> \n' +
        '</div>'],

    actHistory:
    [   '<div style="realFill"><div class="bRelatedList" id="500a_RelatedHistoryList"><a name="500a_RelatedHistoryList_target"></a> \n' +
        '<div class="listRelatedObject taskBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><input type="hidden" name="isdtp" id="isdtp" value="vw"><div class="pbHeader"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" width="1" height="1" class="minWidth" title=""><img src="/s.gif" alt="" class="relatedListIcon" title=""><h3 id="500a000001CGCP1_RelatedHistoryList_title">Activity History</h3></td><td class="pbButton"><input value="Log a Call" class="btn" name="new" title="Log a Call" type="button"> <input value="View All" class="btn" name="all" type="button"><input value="Send an Email" class="btn" name="send_an_email" title="Send an Email" type="button"></td><td class="pbHelp"><span class="help" title="Activity History Help (New Window)"><a href"" class="linkCol"><span class="linkSpan">Activity History Help</span> <img src="/s.gif" alt="Activity History Help (New Window)" class="helpIcon" title="Activity History Help (New Window)"></a></span></td></tr> \n' +
        '</tbody></table></div><div class="pbBody" id="500a000001CGCP1_RelatedHistoryList_body"><table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col"><input id="allBox" name="allBox" title="Toggle All Rows" type="checkbox" value="">&nbsp;Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Subject</th><th scope="col" class=" cellCol2 zen-deemphasize">Type</th><th scope="col" class=" cellCol3 zen-deemphasize">Due Date (SLO)</th><th scope="col" class=" cellCol4 zen-deemphasize">Actual Completion Date/Time</th><th scope="col" class="DateElement cellCol5 zen-deemphasize">Due Date</th><th scope="col" class=" cellCol6 zen-deemphasize">Status</th><th scope="col" class=" cellCol7 zen-deemphasize">Assigned To</th><th scope="col" class=" cellCol8 zen-deemphasize">Last Modified Date/Time</th><th scope="col" class=" cellCol9 zen-deemphasize">Queue Jumper</th></tr> \n' +
        '<!-- ListRow --> \n' +
        '<tr class="dataRow even first"><td class="actionColumn"><input id="ids0" name="ids" title="Select null" type="checkbox" value="00Ta000004pTQnE">&nbsp;|&nbsp;<a href="" class="actionLink" title="Edit - Record 1 - 10/10/2016 11:59 PM">Edit</a>&nbsp;|&nbsp;<a href="" class="actionLink" title="Del - Record 1 - 10/10/2016 11:59 PM">Del</a></td><th scope="row" class=" dataCell  cellCol1 "><a href="">Email: CA Support Case 00516956 - Windows SFA - Installation issue</a></th><td class=" dataCell  cellCol2 ">Email</td><td class=" dataCell  cellCol3 ">10/10/2016 11:59 PM</td><td class=" dataCell  cellCol4 ">10/10/2016 10:25 AM</td><td class=" dataCell  cellCol5 DateElement">10/10/2016</td><td class=" dataCell  cellCol6 ">Completed</td><td class=" dataCell  cellCol7 "><a href="">Support Engineer</a></td><td class=" dataCell  cellCol8 ">10/10/2016 10:25 AM</td><td class=" dataCell  cellCol9 ">&nbsp;</td></tr> \n' +
        '<!-- ListRow --> \n' +
        '<tr class=" dataRow odd last"><td class="actionColumn"><input id="ids14" name="ids" title="Select null" type="checkbox" value="00Ta000004nRr9J">&nbsp;|&nbsp;<a href="" class="actionLink" title="Edit - Record 15 - 9/27/2016 10:24 AM">Edit</a>&nbsp;|&nbsp;<a href="" class="actionLink" title="Del - Record 15 - 9/27/2016 10:24 AM">Del</a></td><th scope="row" class=" dataCell  cellCol1 "><a href="">Case Update</a></th><td class=" dataCell  cellCol2 ">Callback</td><td class=" dataCell  cellCol3 ">9/27/2016 10:24 AM</td><td class=" dataCell  cellCol4 ">9/26/2016 5:12 PM</td><td class=" dataCell  cellCol5 ">&nbsp;</td><td class=" dataCell  cellCol6 ">Closed</td><td class=" dataCell  cellCol7 "><a href="">Support Engineer</a></td><td class=" dataCell  cellCol8 ">9/26/2016 5:12 PM</td><td class=" dataCell  cellCol9 ">&nbsp;</td></tr></tbody></table> \n' +
        '<div class="pShowMore"><a href="">Show more »</a>&nbsp;|&nbsp;<a href="">Go to list&nbsp;»</a></div></div></form><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div></div>'],

    sftpAttachments:
    [   '<div class="bRelatedList" id="500a_00Na000000ArhjW"><a name="500a_00Na000000ArhjW_target"></a> \n' +
        '<div class="listRelatedObject customnotabBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><div class="pbHeader"><table cellspacing="0" cellpadding="0" border="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" class="minWidth" style="margin-right: 0.25em;margin-right: 0.25em;" title="" width="12" height="1"><img src="/s.gif" alt="Custom" class="relatedListIcon" title="Custom"><h3 id="500a000001CGNWc_00Na000000ArhjW_title">SFTP File Attachments</h3></td><td class="pbButton">&nbsp;</td><td class="pbHelp"><span class="help" title="SFTP File Attachments Help (New Window)"><a href="" class="linkCol"><span class="linkSpan">SFTP File Attachments Help</span> <img src="/s.gif" alt="SFTP File Attachments Help (New Window)" class="helpIcon" title="SFTP File Attachments Help (New Window)"></a></span></td></tr> \n' +
        '</tbody></table></div><div class="pbBody" id="500a000001CGNWc_00Na000000ArhjW_body"><table class="list" cellspacing="0" cellpadding="0" border="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">File Name</th><th scope="col" class=" cellCol2 zen-deemphasize">SFTP Link</th><th scope="col" class="numericalColumn cellCol3 zen-deemphasize">File Size</th><th scope="col" class=" cellCol4 zen-deemphasize">Description</th><th scope="col" class=" cellCol5 zen-deemphasize">Updated by</th><th scope="col" class=" cellCol6 zen-deemphasize">Updated date</th></tr> \n' +
        '<!-- ListRow --><tr class="dataRow even first"><td class="actionColumn">&nbsp;</td><th scope="row" class=" dataCell  cellCol1 ">logs.log</th><td class=" dataCell  cellCol2 "><a href="" target="_blank">"ftp://supportftp.ca.com/0126682/00521100/files_from_customer/logs.log"</a></td><td class=" dataCell  cellCol3 numericalColumn">6,864,721</td><td class=" dataCell  cellCol4 ">&nbsp;</td><td class=" dataCell  cellCol5 ">Customer Contact</td><td class=" dataCell  cellCol6 ">9/30/2016 11:54 AM</td></tr> \n' +
        '<!-- ListRow --><tr class="dataRow odd last"><td class="actionColumn">&nbsp;</td><th scope="row" class=" dataCell  cellCol1 ">putty error.PNG</th><td class=" dataCell  cellCol2 "><a href="" target="_blank">"ftp://supportftp.ca.com/0126682/00521100/files_from_customer/putty error.PNG"</a></td><td class=" dataCell  cellCol3 numericalColumn">38,070</td><td class=" dataCell  cellCol4 ">&nbsp;</td><td class=" dataCell  cellCol5 ">Nate Wood</td><td class=" dataCell  cellCol6 ">9/29/2016 4:01 PM</td></tr></tbody></table> \n' +
        '</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div></div>'],
    caseDetails:
    [   '<div class="brandTertiaryBrd pbSubheader tertiaryPalette" id="head_01Ba000000ETFuz_ep"><img src="/s.gif" alt="Hide Section - Details" class="hideListButton" id="img_01Ba000000ETFuz" name="Details" onclick="twistSection(this);" onkeypress="if (event.keyCode==\'13\')twistSection(this);" style="cursor:pointer;" tabindex="0" title="Hide Section - Details"><h3>Details<span class="titleSeparatingColon">:</span></h3></div> \n' +
        '<div class="pbSubsection"><table class="detailList" border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="labelCol">Subject</td><td class="dataCol col02 inlineEditWrite" id="cas14_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onkeypress="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun &amp;&amp; event &amp;&amp; event.keyCode==KEY_ENTER) sfdcPage.dblClickField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" tabindex="0"><div id="cas14_ileinner">Windows agent not uninstalling properly</div></td><td class="labelCol">Legacy Case Number</td><td class="dataCol inlineEditLockOn" id="00Na000000BFvjB_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);"><div id="00Na000000BFvjB_ileinner">&nbsp;</div></td></tr> \n' +
        '<tr><td class="labelCol">Description</td><td class="dataCol col02 inlineEditWrite" id="cas15_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onkeypress="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun &amp;&amp; event &amp;&amp; event.keyCode==KEY_ENTER) sfdcPage.dblClickField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" tabindex="0"><div id="cas15_ileinner">I\'m attaching the install and uninstall log for review - please let me know if there is an obvious problem with this agent.  The install appears to be good, however the uninstall hangs.</div></td><td class="labelCol">Legacy Case Id</td><td class="dataCol inlineEditLock" id="00Na000000BFvj6_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);"><div id="00Na000000BFvj6_ileinner">&nbsp;</div></td></tr> \n' +
        '<tr><td class="labelCol"><span class="helpButton" id="Case.00Na000000ArhhG-_help">Resolution<img src="/s.gif" alt="" class="helpOrb" title=""><script>sfdcPage.setHelp(\'Case.00Na000000ArhhG\', \'Enter how the case was resolved\');</script></span></td><td class="dataCol col02 inlineEditWrite" id="00Na000000ArhhG_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onkeypress="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun &amp;&amp; event &amp;&amp; event.keyCode==KEY_ENTER) sfdcPage.dblClickField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" tabindex="0"><div id="00Na000000ArhhG_ileinner">&nbsp;</div></td><td class="labelCol">Legacy Source System</td><td class="dataCol inlineEditLock" id="00Na000000BFvjG_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);"><div id="00Na000000BFvjG_ileinner">&nbsp;</div></td></tr> \n' +
        '<tr><td class="last labelCol"><span class="helpButton" id="Case.00Na000000ArhgQ-_help">Business Impact<img src="/s.gif" alt="" class="helpOrb" title=""><script>sfdcPage.setHelp(\'Case.00Na000000ArhgQ\', \'How does this problem affect the customer?\');</script></span></td><td class="dataCol last col02 inlineEditWrite" id="00Na000000ArhgQ_ilecell" onblur="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.clickField(event, this);" ondblclick="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.dblClickField(event, this);" onfocus="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" onkeypress="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun &amp;&amp; event &amp;&amp; event.keyCode==KEY_ENTER) sfdcPage.dblClickField(event, this);" onmouseout="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOutField(event, this);" onmouseover="if (window.sfdcPage &amp;&amp; window.sfdcPage.hasRun) sfdcPage.mouseOverField(event, this);" tabindex="0"><div id="00Na000000ArhgQ_ileinner">&nbsp;</div></td><td class="labelCol last empty">&nbsp;</td><td class="dataCol last empty">&nbsp;</td></tr> \n' +
        '</tbody></table></div>'],

};

var htmlDemoBox =
'<div class="movableDiv" draggable="true" ondragstart="drag(event)" style="" id="htmlDemoBox-MD"> \n' +
'<div class="movableDCover" draggable="true" ondragstart="drag(event)" style="" id="htmlDemoBox-MDC">&nbsp;</div> \n' +
'<div class="bRelatedList" id="500a_RelatedEmailMessageList"><a name="500a_RelatedEmailMessageList_target"></a> \n' +
'<div class="listRelatedObject emailMessageBlock"><div class="bPageBlock brandSecondaryBrd secondaryPalette"><div class="pbHeader"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="pbTitle"><img src="/s.gif" alt="" width="12" height="1" class="minWidth" style="margin-right: 0.25em;" title=""><img src="/s.gif" alt="" class="relatedListIcon" title=""><h3 id="500a000001CGCP1_RelatedEmailMessageList_title">Emails</h3></td><td class="pbButton"><input value="Send an Email" class="btn" name="newEmail" onclick="" title="Send an Email" type="button"></td><td class="pbHelp"><span class="help" title="Emails Help (New Window)"><a href="" class="linkCol"><span class="linkSpan">Emails Help</span> <img src="/s.gif" alt="Emails Help (New Window)" class="helpIcon" title="Emails Help (New Window)"></a></span></td></tr> \n' +
'</tbody></table></div><div class="pbBody" id="500a000001CGCP1_RelatedEmailMessageList_body"><table class="list" border="0" cellspacing="0" cellpadding="0"><tbody><tr class="headerRow"><th class="actionColumn" scope="col">Action</th><th scope="col" class=" cellCol1 zen-deemphasize">Status</th><th scope="col" class=" cellCol2 zen-deemphasize">&nbsp;</th><th scope="col" class=" cellCol3 zen-deemphasize">Subject</th><th scope="col" class=" cellCol4 zen-deemphasize">Email Address</th><th scope="col" class=" cellCol5 zen-deemphasize">Message Date</th></tr> \n' +
'<tr class="dataRow even first" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 1 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 1 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 1 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
'...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">10/6/2016 10:14 AM</td></tr> \n' +
'<tr class="dataRow odd last" onblur="if (window.hiOff){hiOff(this);}" onfocus="if (window.hiOn){hiOn(this);}" onmouseout="if (window.hiOff){hiOff(this);}" onmouseover="if (window.hiOn){hiOn(this);}"><td class="actionColumn"><a href="" class="actionLink actionLink" title="Reply - Record 6 - Sent">Reply</a>&nbsp;|&nbsp;<a href="" class="actionLink actionLink" title="To All - Record 6 - Sent">To All</a>&nbsp;|&nbsp;<a href="" class="actionLink" onclick="return confirmDelete();" title="Delete - Record 6 - Sent">Del</a></td><th scope="row" class=" dataCell  cellCol1 ">Sent</th><td class=" dataCell  cellCol2 "><div class="bEmailStatus"><img src="/img/emailOutbound.gif" alt="Outbound" width="16" height="13" title="Outbound">&nbsp;</div></td><td class=" dataCell  cellCol3 "><a href="">CA Support Case 00999999 - Support Issue</a><br><font style="font-style:italic;font-decoration:none;font-size:11px;">This email is in regards to case 00999999 - Support Issue \n' +
'...</font></td><td class=" dataCell  cellCol4 ">email@ca.com</td><td class=" dataCell  cellCol5 ">9/26/2016 5:12 PM</td></tr></tbody></table> \n' +
'</div><div class="pbFooter secondaryPalette"><div class="bg"></div></div></div></div><div class="listElementBottomNav"></div><script></script> \n' +
'</div></div>';


function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
	}

	function drag(dragevent) {
		alert('d start');
	    var a = dragevent.dataTransfer.setData("text", dragevent.target.id);
			alert(a);
	}


	function addDrag(targetId) {
		// console.log("adding drag to: " + targetId)
		document.getElementById(targetId).addEventListener("dragstart",
			function(event) {
				// console.log('d start');
				 event.dataTransfer.setData("text", event.target.id);
			 }
	 	);
	}

	function addAllowDrop(targetId) {
		// console.log("adding allow-drop to: " + targetId)
		document.getElementById(targetId).addEventListener("dragover",
			function(event) {
				event.preventDefault();
			}
		);
	}


	function addDrop(targetId) {
		// console.log("adding drop to: " + targetId)
		document.getElementById(targetId).addEventListener("drop",
			function(event) {

				event.preventDefault();
				var targetClass = event.target.className;
				var movingBoxId = event.dataTransfer.getData("text");
		    var movingBox = document.getElementById(movingBoxId).parentElement;
				var sbi = document.getElementById(movingBoxId.replace("MDC","SBI"));
				var sbd = document.getElementById(movingBoxId.replace("MDC","SBD"));
				var mdctb = document.getElementById(movingBoxId.replace("MDC","MDCTB"));

				if (targetClass == "arrangeTD") {
					event.target.appendChild(movingBox);
					sbi.style.display = "none";
					sbd.style.display = "block";
					mdctb.style.display = "block";
				} else if (targetClass == "sideBar") {
					event.target.appendChild(movingBox);
					sbi.style.display = "block";
					sbd.style.display = "none";
					mdctb.style.display = "none";
				} else if (targetClass == "movableDivCover" && event.target.parentNode.parentNode.className != "sideBar") {//
					// dropped on top of other div (that is NOT in the sidebar still...)
					event.target.parentNode.parentNode.appendChild(movingBox);
		      sbi.style.display = "none";
		      sbd.style.display = "block";
		      mdctb.style.display = "block";
		    } else if (targetClass == "movableDivCover" && event.target.parentNode.parentNode.className == "sideBar") {//
					// dropped on top of other div (that IS in the sidebar still...)
					event.target.parentNode.parentNode.appendChild(movingBox);
					sbi.style.display = "block";
					sbd.style.display = "none";
					mdctb.style.display = "none";
		    }

				divMoved();
			}
		);
	}


function divMoved(mdctb) {

	toggleSaveButton();
	// mdctb.style.setProperty("background-color","var(--alert_background_color)","important");
	// mdctb.style.setProperty("border","var(--alert_border_style)","important");

	// var changed = toggleSaveButton();
	// if (changed) {
	// 	mdctb.style.setProperty("background-color","var(--alert_background_color)","important");
	// 	mdctb.style.setProperty("border","var(--alert_border_style)","important");
	// } else {
	// 	mdctb.style.setProperty("background-color","");
	// 	mdctb.style.setProperty("border","");
	// }
}


	function drop(dropevent) {
		alert('reg drop ' + dropevent.target.id);
	    dropevent.preventDefault();
	    var data = dropevent.dataTransfer.getData("text");
			alert(data);
	//     'alert(data); \n' + //moving div
	//'    alert(ev.target.className + "     " + ev.target.parentNode.parentNode.className); \n' + // Alert Where it is dropped & the parent
	    if (dropevent.target.className == "arrangeTD") {
	//    alert("to td");   //to td
	        dropevent.target.appendChild(document.getElementById(data).parentElement);
	        document.getElementById(data.replace("MDC","SBI")).style.display = "none";
	        document.getElementById(data.replace("MDC","SBD")).style.display = "block";
	        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block";
	/* Above below boxes disabled...
	'    } else if (ev.target.className == "addAbove") { \n' +
	        'alert("to UP"); \n' + //to td
	'        ev.target.parentElement.appendChild(document.getElementById(data).parentElement); \n' +
	'        document.getElementById(data.replace("MDC","SBI")).style.display = "none"; \n' +
	'        document.getElementById(data.replace("MDC","SBD")).style.display = "block"; \n' +
	'        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block"; \n' +
	'    } else if (ev.target.className == "addBelow") { \n' +
	        'alert("to DOWN"); \n' + //to td
	'        ev.target.parentElement.appendChild(document.getElementById(data).parentElement); \n' +
	'        document.getElementById(data.replace("MDC","SBI")).style.display = "none"; \n' +
	'        document.getElementById(data.replace("MDC","SBD")).style.display = "block"; \n' +
	'        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block"; \n' +
	*/
	   } else if (dropevent.target.className == "sideBar") {
	//        alert("to sb");   //to sideBar
	        dropevent.target.appendChild(document.getElementById(data).parentElement);
	       document.getElementById(data.replace("MDC","SBI")).style.display = "block";
	        document.getElementById(data.replace("MDC","SBD")).style.display = "none";
	        document.getElementById(data.replace("MDC","MDCTB")).style.display = "none";
	    }  else if (dropevent.target.className == "movableDivCover" && dropevent.target.parentNode.parentNode.className != "sideBar") {   //to ontop of other div (that is not in the sidebar still...)
	        //alert("to other Div...");

	      dropevent.target.parentNode.parentNode.appendChild(document.getElementById(data).parentElement);
	      // event.target.parentElement.parentElement.appendChild(document.getElementById(data).parentElement);
	      document.getElementById(data.replace("MDC","SBI")).style.display = "none";
	       document.getElementById(data.replace("MDC","SBD")).style.display = "block";
	        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block";
	    }
	}





// var htmlDemoScript =
// 'function allowDrop(ev) {  '+
// '    ev.preventDefault();  '+
// '}  '+
//
// 'function drag(ev) {  '+
// '    ev.dataTransfer.setData("text", ev.target.id);  '+
// '}   '+
// 'function drop(ev) {  '+
// '    ev.preventDefault();  '+
// '    var data = ev.dataTransfer.getData("text");  '+
// //     'alert(data); \n' + //moving div
// //'    alert(ev.target.className + "     " + ev.target.parentNode.parentNode.className); \n' + // Alert Where it is dropped & the parent
// '    if (ev.target.className == "arrangeTD") {  '+
// //    alert("to td");   //to td
//  '       ev.target.appendChild(document.getElementById(data).parentElement);  '+
//   '      document.getElementById(data.replace("MDC","SBI")).style.display = "none"; '+
//    '     document.getElementById(data.replace("MDC","SBD")).style.display = "block"; '+
//     '    document.getElementById(data.replace("MDC","MDCTB")).style.display = "block";  '+
// /* Above below boxes disabled...
// '    } else if (ev.target.className == "addAbove") { \n' +
//         'alert("to UP"); \n' + //to td
// '        ev.target.parentElement.appendChild(document.getElementById(data).parentElement); \n' +
// '        document.getElementById(data.replace("MDC","SBI")).style.display = "none"; \n' +
// '        document.getElementById(data.replace("MDC","SBD")).style.display = "block"; \n' +
// '        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block"; \n' +
// '    } else if (ev.target.className == "addBelow") { \n' +
//         'alert("to DOWN"); \n' + //to td
// '        ev.target.parentElement.appendChild(document.getElementById(data).parentElement); \n' +
// '        document.getElementById(data.replace("MDC","SBI")).style.display = "none"; \n' +
// '        document.getElementById(data.replace("MDC","SBD")).style.display = "block"; \n' +
// '        document.getElementById(data.replace("MDC","MDCTB")).style.display = "block"; \n' +
// */
//     '} else if (ev.target.className == "sideBar") { '+
// //        alert("to sb");   //to sideBar
//      '   ev.target.appendChild(document.getElementById(data).parentElement);  '+
//       '  document.getElementById(data.replace("MDC","SBI")).style.display = "block"; '+
//        ' document.getElementById(data.replace("MDC","SBD")).style.display = "none"; '+
//         'document.getElementById(data.replace("MDC","MDCTB")).style.display = "none"; '+
//     '}  else if (ev.target.className == "movableDivCover" && ev.target.parentNode.parentNode.className != "sideBar") {  '+ //to ontop of other div (that is not in the sidebar still...)
//         //alert("to other Div...");
//       '  ev.target.parentElement.parentElement.appendChild(document.getElementById(data).parentElement);  '+
//      '   document.getElementById(data.replace("MDC","SBI")).style.display = "none"; '+
//        ' document.getElementById(data.replace("MDC","SBD")).style.display = "block";  '+
//         'document.getElementById(data.replace("MDC","MDCTB")).style.display = "block"; '+
//    ' }'+
// '}';



function returnArrangeBoxToSidebar(arrangeBox) {
    document.getElementById("sideBar").appendChild(arrangeBox);
    document.getElementById(arrangeBox.id.replace("MD","SBI")).style.display = "block";
    document.getElementById(arrangeBox.id.replace("MD","SBD")).style.display = "none";
    document.getElementById(arrangeBox.id.replace("MD","MDCTB")).style.display = "none";
		divMoved();
		logTrace(arrangeBox.id + " returned to sidebar.");
    return true;
}

function returnArrangeCellToSidebar(arrangeCellID) {
    var boxes = document.getElementById(arrangeCellID).getElementsByClassName("movableDiv");
    console.log(arrangeCellID + " - " + boxes.length);
    var numBoxes = boxes.length;
    for (var i=numBoxes-1; i >= 0; i--) {
		console.log(numBoxes + " - " + boxes.length);
        console.log("arrangeCellID " + i + " - " + boxes[i].id);
        returnArrangeBoxToSidebar(boxes[0]);
    }
	return arrangeCellID;
}

function returnArrangeRowToSidebar(arrangeRow) {
    var cells = document.getElementById(arrangeRow).getElementsByClassName("arrangeTD");
	var numCells = cells.length;
	logTrace("Number of Cells in Row " + arrangeRow + " = "+ numCells);
	// if (numCells > 1) {
		for (var i=0; i < numCells; i++) {
			returnArrangeCellToSidebar(cells[i].id);
		}
	// }
}

function returnAllArrangeBoxesToSidebar() {
    var rows = document.getElementsByClassName("arrange");
	var numRows = rows.length;
	logTrace("Number of Rows: " + numRows);
	// stop at 1 to skip topbar stuff in row 0
    for (var i = numRows -1; i >= 1; i--) {
        returnArrangeRowToSidebar(rows[i].id);
				logTrace("Returned Arrnge Box " + rows[i].id);
    }
}

// var theBoxesSet = {
//     // info type
//     "01Ba000000ETFux": "caseInfoID",
//     "01Ba000000ETFuz": "detailsID",
//     "01Ba000000ETFv0": "advInfoID",
//     "01Ba000000ETFv1": "componentID",
//     "01Ba000000ETFv2": "prodDetailsID",
//     "01Ba000000ETFv3": "altContactID",
//     "01Ba000000ETFv4": "auditHistoryID",
//     "arrangeSC-alertBox": "alertBoxID",
//     // related type
//     "RelatedActivityList": "openActsID",
//     "RelatedHistoryList": "actHistoryID",
//     "RelatedTeamMemberList": "caseTeamID",
//     "RelatedAttachmentList": "attachmentsID",
//     "RelatedCommentsList": "caseCommentsID",
//     "00Na000000ArhjW": "sftpAttachmentsID",
//     "RelatedChildCaseList": "relCasesID",
//     "00Na000000Arhi2": "extReqsID",
//     "00Na000000BFxGs": "kbArtsID",
//     "RelatedEmailMessageList": "emailsID",
//     "00Na000000BLy1J": "caseReviewsID",
//     "RelatedLiveChatTranscriptList": "chatTransID",
//     "00Na000000BFxGt": "defectsID",
//     "RelatedEntityHistoryList": "caseHistoryID",
//     "00Na000000AxMex": "relContentID", };


/* Not used currently, saving
function alertAncestorsUntilTag(node, tag) {
    var parent = node;
    var nodeTags;
    try { nodeTags = parent.className; } catch(e){ }
    while(nodeTags !== undefined && nodeTags.includes(tag) !== true) {
        parent = parent.parentNode;
        try { nodeTags = parent.className; } catch(e) { }
        //alert(parent.id);
    }
    return parent;
}
function alertAncestorsUntilID(node, id) {
    var parent = node;
    while(parent.id != id) {
        parent = parent.parentNode;
        //alert(parent.id);
    }
    return parent;
}
*/


//var cssCollection = [switchCSS, tabBoxCSS, arrangementTableCSS, infoBoxCSSFix]; //[buttonCSS, switchCSS, tabBoxCSS, tabCSS, textboxCSS]; // Array of CSS variables
//init();



function makeColorPicker(args, myOption) {
	/* required args

	 * varId
	 */
	// alert(args.varId);
	var colorPick = document.getElementById(args.colorPick);
	colorPick.addEventListener('click',
		function() {
			if ($('#' + args.varId + '_cpfb').length == 0) {
				var fb = makeFloatingBox({'id': args.varId + '_cpfb',"title":"Color Picker"});
				append('<td id="' + args.varId + '_cptd"></td>',fb.content);
				var currOptTable = addTable(args.varId + '_cptb', args.varId + '_cptd');
				document.getElementById(currOptTable).style.width = "";

				var sliders = ['Red','Green','Blue','Alpha'];

				sliders.forEach(
					function(element, index, array) {
						var sliderLabelTemplate = element;
						var sliderMin = 0;
						var sliderMax = 255;
						var sliderStep = 1;
						if (element == 'Alpha') {
							sliderMax = 1;
							sliderStep = 0.01;
						}
						var sliderTemplate = '<input id="' + fb.id + '_' + element + '" type="range" step="' + sliderStep + '" min="' + sliderMin + '" max="' + sliderMax + '"></input>';
						var sliderTbTemplate = '<input type="number" maxlength="3" min="0" max="255" id="' + fb.id + '_' + element + '_tb" size="10" value=""></input>';

						var newRow = insertRowX(currOptTable);
						var lblCell = insertColX(currOptTable,newRow);
						var dtaCell = insertColX(currOptTable,newRow);

						append(sliderLabelTemplate,lblCell);
						append(sliderTemplate,dtaCell);
						append(sliderTbTemplate,dtaCell);

						document.getElementById(fb.id + '_' + element).addEventListener("change",
							function() {
								document.getElementById(fb.id + '_' + element + '_tb').value = this.value;
								// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
								var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
								$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
							}
						);

						document.getElementById(fb.id + '_' + element + '_tb').addEventListener("change",
							function() {
								document.getElementById(fb.id + '_' + element).value = this.value;
								// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
								var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
								$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
							}
						);
						document.getElementById(fb.id + '_' + element + '_tb').addEventListener("keyup",
							function() {
								document.getElementById(fb.id + '_' + element).value = this.value;
								// var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
								var rgba = $('#'+fb.id+'_Red').val()+','+$('#'+fb.id+'_Green').val()+','+$('#'+fb.id+'_Blue').val()+','+$('#'+fb.id+'_Alpha').val();
								$('#' + fb.id + '_demo').css('background-color', 'rgba('+rgba+')');
							}
						);
					}
				);

				var colorDemoTemplate = '<table id="' + fb.id + '_demo" height="100%" width="100%" style="background-color: rgba(0,0,0,0.75); float:left; display:inline-block; border: none;"></table>';
				var colorSetBtnTemplate = '<input id="' + fb.id + '_setBtn" type="button" value="Set" width="100%" height="20px"></input>';

				var demoCell = insertColX(currOptTable,0);
				append(colorDemoTemplate,demoCell);
				demoCell = document.getElementById(demoCell);
				demoCell.rowSpan = 3;
				demoCell.className = 'checkerBoard';
				demoCell.style.width = '100px';
				demoCell.style.height = '100px';

				var demoCell2 = insertColX(currOptTable,3);
				append(colorSetBtnTemplate,demoCell2);

				document.getElementById(fb.id + '_setBtn').addEventListener('click',
					function() {
						var rgba = document.getElementById(fb.id + '_Red').value + ',' + document.getElementById(fb.id + '_Green').value + ',' + document.getElementById(fb.id + '_Blue').value + ',' + document.getElementById(fb.id + '_Alpha').value;
						myOption.value = 'rgba('+rgba+')';
						// alert('varis: ' + args.varId );
						triggerChange("option_" + args.varId.replace('option_',''));
						// alert('#' + args.colorPick + '_D');
						$('#' + args.colorPick + '_D').css('background-color', 'rgba('+rgba+')');
						$('#' + fb.id + '-close a:eq(0)').click();
					}
				);

				var curSetting = myOption.value.split('(')[1].split(')')[0];

				document.getElementById(fb.id + '_Red').value = curSetting.split(',')[0];
				triggerChange(fb.id + '_Red');
				document.getElementById(fb.id + '_Green').value = curSetting.split(',')[1];
				triggerChange(fb.id + '_Green');
				document.getElementById(fb.id + '_Blue').value = curSetting.split(',')[2];
				triggerChange(fb.id + '_Blue');
				document.getElementById(fb.id + '_Alpha').value = curSetting.split(',')[3];
				triggerChange(fb.id + '_Alpha');

			}
		}
	);
}


function makeltRow(tid,ltSchema,optItm) {
	// if (!objRow) {
	// 	objRow = optObj[optObj.length]
	// }
	//alert(JSON.stringify(optItm));

		var r = insertRowX(tid);
		// for (var objCol in optObj[objRow]) {
		// if (optItm !== null && typeof optItm === 'object') {
		// 	optItm
		// }
		for (var objCol in optItm) {
			var c = document.getElementById(insertColX(tid,r));
			//c.class='';

			//TODO THIS SHOULD BE COL CELL, NOTTTTTT Row Col???? i think...

			// c.innerHTML = optObj[objRow][objCol];
			//c.innerHTML = optionTemplate[args.type]

			var thisArgs = {
				varId: c.id + '_' + objCol,
				colorPick: c.id + '_' + objCol + '_colorPick'
			};
			// alert('type: ' + args.ltSchema[objCol] + ' - val: ' + optObj[objRow][objCol]);
			append('<input id="' + thisArgs.varId + '" type="text"></input>',c.id);

			var thisSubOpt = document.getElementById(thisArgs.varId);
			// thisSubOpt.value = optObj[objRow][objCol];
			thisSubOpt.value = optItm[objCol];
			thisSubOpt.addEventListener('change',
				function() {
					var optObj = {};

					var parRowId = $(this).parent().parent().attr('id');
					var parRowNum = parRowId.split('-');
					parRowNum = (parRowNum[parRowNum.length-1]) - 2;
					var mainOptTb = parRowId.split('_');
					mainOptTb =  document.getElementById('option_' + mainOptTb[1]);

					// alert('par: ' + parRowId);
					$('#' + parRowId + ' td input[type!=button]').each(
						function() {
							var thisVal = $(this).val().trim();
							var thisId = $(this).attr('id');
							// if (!thisVal) {
							//
							// } else {
								// alert(thisId + ' - val: ' + thisVal);
								var key = thisId.split('_');
								key = key[key.length-1];
								optObj[key] = $(this).val();
								// alert(thisId + ' - val: ' + thisVal + ' - key?: ' + key);
							// }
						}
					);

					var curArr = JSON.parse(mainOptTb.value);
					//alert('currArr: '+ JSON.stringify(curArr));
					//alert('array row: #' + parRowNum + ' ' + JSON.stringify(curArr[parRowNum]));
					//alert('optObj: '+ JSON.stringify(optObj));
					curArr[parRowNum] = optObj;
					//alert('New curArr: ' + JSON.stringify(curArr));
					mainOptTb.value=JSON.stringify(curArr);
					triggerChange(mainOptTb.id);
					// alert("arrIndx: " + parRowNum-2 + "curarrrrr: " + curArr);

					// alert(JSON.stringify(optObj));

				}
			);

			switch (ltSchema[objCol]) {
				case "colorZ":
					append('<input type="button" id="' + thisArgs.colorPick + '" value="Choose..."></input>',c.id);
					append('<div class="checkerBoard colorZDCB"><table id="' + thisArgs.colorPick + '_D" title="color demo" class="colorZD"></table></div>',c.id);
					makeColorPicker(thisArgs, thisSubOpt);
					$('#' + thisArgs.colorPick + '_D').css('background-color', document.getElementById(thisArgs.varId).value);
					break;

				default:
					break;
			}

		}

}

logTrace('settings_content.js finished.');
