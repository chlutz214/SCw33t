// Global
var forceIframe;

// CSS Theme
var myTheme;
var replaceCloud;
var console_top_color;
var console_bottom_color;
var console_text_color;
var tabstrip_bg_color;
var tabstrip_alt_bg_color;
var tabstrip_text_color;
var tabstrip_border_color;
var tabstrip_tab_border_color;
var tabstrip_tab_alt_border_color;
var body_bg_color;
var body_text_color;
var body_text_modified_color;
var body_link_hover_color;
var body_link_color;
var body_label_text_color;
var alert_bg_color;
var alert_text_color;
var alert_border_color;
var warning_bg_color;
var warning_text_color;
var warning_border_color;
var success_bg_color;
var success_text_color;
var success_border_color;
var percent_bar_color;
var percent_bar_bg_color;
var tb_bg_color;
var tb_text_color;
var tb_link_color;
var tb_border_color;
var box_h_text_color;
var box_h_bg_color;
var box_h_border_color;
var box_body_bg_color;
var box_body_border_color;
var table_header_bg_color;
var table_header_text_color;
var table_header_border_color;
var cell_label_border_color;
var cell_data_border_color;
var row_color_even;
var row_color_odd;
var row_color_highlight;
var btn_text_color;
var btn_bg_color;
var btn_border_color;
var btn_alt_text_color;
var btn_alt_bg_color;
var btn_alt_border_color;
var txtfield_text_color;
var txtfield_bg_color;
var txtfield_border_color;
var txtfield_alt_border_color;

// Team
var myself;
var myTeam;

// General
var boostTextSize;
var removePullDownBar;
var squareMonitor;
var convertBytesSFTP;
var enableBack2Top;
var showRedundantButtons;
// var showHelpButtons;
// var showBodyBorders;
var bodyBorderStyle;
var enableCompression;
var enableCommentFilters;
var listArrangementFix;

// Top Bar
var lockTopBar;
var topBarBG;
var topBarFontColor;
var disableHoverLinks;
var removeHoverLinks;
var hoverLinkColor;
var enableCaseRefreshButton;
var enableCaseLinkButton;
var removeDisplayProcessFlow;

// POP! & 50/50
var enablePOP;
var enable5050;
var enableSCTab;
var fiftyPageOnLeft;
var popUpEmails;
var popUpWidth;
var popUpHeight;

// Convenience Buttons !! BETA !!
var enableConvenience;
var createLocalDirs;
var openLocalButton;

// PeekIt !! BETA !!
var enablePeekIt;
var highlightPeeks;
var peekHighlightColor;
var peekDelay;
var peekItHeight;
var peekItWidth;
var peekSftpTypes;

// Arrangement
var cRows;
var hRows;
var cIndex;
var hIndex;
var cDisabledObjects;
var hDisabledObjects;
var cCollapsedObjects;
var hCollapsedObjects;
var cOpenObjects;
var hOpenObjects;

// New Comment Page Specific Options
var alwaysPublic;
var alwaysSendEMail;
var alsoCheckEMail;
var commentBoxW;
var commentBoxH;

// Email Page Specific Options
var disableOriginalSendButtons;
var forceCAEmail;
var includeToInfo;
var includeSubjet;
var includeEmailBody;

// New Defect Page Specific
var newDefDescriptionBoxW;
var newDefDescriptionBoxH;
var newDefCommentBoxW;
var newDefCommentBoxH;

// Defect New Comment Page Specific
var dComBoxWidth;
var dComBoxHeight;

// Live Agent Supervisor Page Specific
var prodName;
var onlyMyQS;
var collapseQS;
var statusLevel;
var userFilter;
var userList;

// Case Review Page Specific
var caseRevTestMode;
var caseRevSubject;
var caseRevBody;
var caseRevCC;
var caseRevBCC;
var caseRevDefaultToAssisted;
var defaultAssType;

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

// Cases Page (queue) Specific
var unlockRolodex;

// logTrace('500a_content.js collecting settings.');
chrome.storage.sync.get(
	{
		// Global
		'forceIframe':false,

		// CSS Theme
		"myTheme":"SCDefault",

		"console_top_color":"rgba(0,112,210,1)",
		"console_bottom_color":"rgba(37,44,51,1)",
		"console_text_color":"rgba(255,255,255,1)",
		"tabstrip_bg_color":"rgba(244,246,249,1)",
		"tabstrip_alt_bg_color":"rgba(255,255,255,1)",
		"tabstrip_text_color":"rgba(22,50,92,1)",

		"tabstrip_border_color":"rgba(0,0,0,0.2)",
		"tabstrip_tab_border_color":"rgba(255,255,0,1)",
		"tabstrip_tab_alt_border_color":"rgba(255,0,0,1)",

		"body_bg_color":"rgba(255,255,255,1)",
		"body_text_color":"rgba(22,50,92,1)",
		"body_text_modified_color":"rgba(255,106,0,1)",
		"body_link_hover_color":"rgba(0,108,181,1)",
		"body_link_color":"rgba(0,108,181,1)",
		"body_label_text_color":"rgba(84,105,141,1)",

		"alert_bg_color":"rgba(0,0,0,0)",
		"alert_text_color":"rgba(204,0,0,1)",
		"alert_border_color":"rgba(0,0,0,0)",

		"warning_bg_color":"rgba(0,0,0,0)",
		"warning_text_color":"rgba(255,106,0,1)",
		"warning_border_color":"rgba(0,0,0,0)",

		"success_bg_color":"rgba(0,0,0,0)",
		"success_text_color":"rgba(255,106,0,1)",
		"success_border_color":"rgba(0,0,0,0)",

		"percent_bar_color":"rgba(255,255,0,1)",
		"percent_bar_bg_color":"rgba(0,0,0,0)",

		"tb_bg_color":"rgba(255,255,255,1)",
		"tb_text_color":"rgba(22,50,92,1)",
		"tb_link_color":"rgba(0,108,181,1)",
		"tb_border_color":"rgba(255,255,255,1)",

		"box_h_text_color":"rgba(22,50,92,1)",
		"box_h_bg_color":"rgba(244,246,249,1)",
		"box_h_border_color":"rgb(216,221,230,1)",
		"box_body_bg_color":"rgba(255,255,255,1)",
		"box_body_border_color":"rgba(255,255,255,1)",

		"table_header_bg_color": "rgba(255,255,255,1)",
		"table_header_text_color": "rgba(84,105,141,1)",
		"table_header_border_color": "rgba(224,227,229,1)",

		"cell_label_border_color":"rgba(236,236,236,1)",
		"cell_data_border_color":"rgba(236,236,236,1)",

		"row_color_even":"rgba(255,255,255,1)",
		"row_color_odd":"rgba(255,255,255,1)",
		"row_color_highlight":"rgba(244,246,249,1)",

		"btn_text_color":"rgba(0,112,210,1)",
		"btn_bg_color":"rgba(244,245,247,1)",
		"btn_border_color":"rgba(224,229,238,1)",
		"btn_alt_text_color":"rgba(0,112,210,1)",
		"btn_alt_bg_color":"rgba(231,237,244,1)",
		"btn_alt_border_color":"rgba(224,229,238,1)",

		"txtfield_text_color":"rgba(0,0,0,1)",
		"txtfield_bg_color":"rgba(255,255,255,1)",
		"txtfield_border_color":"rgba(216,221,230,1)",
		"txtfield_alt_border_color": "rgba(216,221,230,1)",

		// Team
		'myself': '{"name":"Christian Lutz","alias":"lutch01","color":"#e6e6fa","startHour":8,"endHour":17}',
		'myTeam': '[{"name":"Ed Vogel","alias":"VOGED01","color":"#bcd7f2"},{"name":"Margaret Anttila","alias":"ANTMA06","color":"#a6eea7"},{"name":"Ralf Prigl","alias":"PRIRA01","color":"#c9eea6"},{"name":"Ilir Prifti","alias":"PRIIL01","color":"#f2bcd7"},{"name":"Anthony Manoleas","alias":"MANAN23","color":"#bcf2d7"},{"name":"Joseph Lutz","alias":"LUTJO01","color":"#bcbcf2"},{"name":"Brian Rehder","alias":"REHBR01","color":"#bcf2f2"},{"name":"Carlos Solla","alias":"SOLCA02","color":"#f2d7bc"},{"name":"Aaron Armagost","alias":"ARMAA01","color":"#f2f2bc"},{"name":"Shams Ahmed","alias":"AHMSH05","color":"#e3e3e3"},{"name":"Kelly Wong","alias":"SONWA03","color":"#e3e3FF"}]',

		// General
		'boostTextSize': '75%',
		'removePullDownBar': true,
		'squareMonitor': false,
		'convertBytesSFTP': true,
		'enableBack2Top': true,
		'showRedundantButtons': false,
		'showHelpButtons': false,
		// 'showBodyBorders': true,
		// 'bodyBorderStyle': '#d8dde6',
		'enableCommentFilters': true,
		'enableCompression ': false,
		'listArrangementFix': true,
		'enableArrangement': true,

		// Top Bar
		'lockTopBar': true,
		// 'topBarBG': '#0070D2',
		// 'topBarFontColor': '#FFFFFF',
		'disableHoverLinks': true,
		'removeHoverLinks': false,
		'hoverLinkColor': '#FFFFFF',
		'enableCaseRefreshButton': true,
		'enableCaseLinkButton': true,
		'removeDisplayProcessFlow': true,

		// POP! & 50/50
		'enablePOP': true,
		'enable5050': true,
		'enableSCTab': true,
		'fiftyPageOnLeft': false,
		'popUpEmails': true,
		'popUpWidth': '900',
		'popUpHeight': '750',

		// Convenience Buttons !! BETA !!
		'enableConvenience': true,
		'createLocalDirs': true,
		'openLocalButton': true,

		// PeekIt !! BETA !!
		'enablePeekIt': true,
		'highlightPeeks': true,
		'peekHighlightColor': 'pink',
		'peekDelay': '1000',
		'peekItHeight': "300",
		'peekItWidth': "550",
		'peekSftpTypes': "noextension,txt,log,out,trace,pdf,ini,cfg,conf,cnf,csv,htm,html,php,xml,avi,mp4,webm,png,jpg,jpeg,bmp,gif,bat,cmd,sh,reg,js,pl,py,eml,p7m",

		// Arrangement
		'cRows': '4',
		'hRows': '1',
		// 'cIndex': '[[[],[]],[[],["50%","caseInfo"],["50%","altContact","caseRes","alertBox"]],[[],["60%","details"],["40%","openActs","defects","caseTeam"]],[[],["60%","caseComments"],["40%","kbArts","relContent","sftpAttachments","attachments","emails","relCases"]],[[],["33%","prodOffering"],["33%","prodDetail"],["34%","auditHistory"]]]',
		'cIndex': '[[[],[]],[[],["50%","Case Information"],["50%","Alt Contact Information","Case Resolution","SCw33t Alerts!"]],[[],["60%","Details"],["40%","Open Activities","Related Defects","Case Team"]],[[],["60%","Case Comments"],["40%","KB Articles","Related Content","SFTP File Attachments","Attachments","Emails","Related Cases"]],[[],["33%","Product and Offering"],["33%","Product Detail"],["34%","Case Audit History"]]]',
		'hIndex': '[[[],[]],[[],["50%","Case Information","SCw33t Alerts!","Details","Product Detail","Case Resolution","Product and Offering","Supplemental Details","Alt Contact Information","Case Audit History","Open Activities","Activity History","Case Team","Attachments","Case Comments","SFTP File Attachments","Related Cases","CA Diagnostics","External Requests","KB Articles","Related Content","Emails","Case Reviews","Live Chat Transcripts","Related Defects","Case History"],["50%","empty"]]]',
		'cDisabledObjects': '[]',
		'hDisabledObjects': '[]',
		'cCollapsedObjects': '["Case Resolution","SCw33t Alerts!"]',//'["altContact","openActs"]',
		'hCollapsedObjects': '["Case Resolution","SCw33t Alerts!"]',//'["altContact","openActs"]',
		'cOpenObjects': '["Case Resolution","SCw33t Alerts!"]',//'["caseInfo","caseComments","details"]',
		'hOpenObjects': '[]',//'["caseInfo","caseComments","details"]',

		 // New Comment Page Specific Options
		'alwaysPublic': true,
		'alwaysSendEMail': false,
		'alsoCheckEMail': false,
		'commentBoxW': '400px',
		'commentBoxH': '350px',

		// Email Page Specific Options
		'disableOriginalSendButtons': false,
		'forceCAEmail': true,
		'includeToInfo': true,
		'includeSubjet': true,
		'includeEmailBody': true,

		// New Defect Page Specific
		'newDefDescriptionBoxW': '450px',
		'newDefDescriptionBoxH': '300px',
		'newDefCommentBoxW': '450px',
		'newDefCommentBoxH': '200px',

		// Defect New Comment Page Specific
		'dComBoxWidth': '450px',
		'dComBoxHeight': '300px',

		// Live Agent Supervisor Page Specific
		'prodName':  JSON.stringify(["Privileged Identity Manager"]),
		'onlyMyQS': true,
		'collapseQS': false,
		'statusLevel': 0,
		'userFilter': true,
		'userList':  JSON.stringify(["Aaron Armagost", "Brian Rehder", "Carlos Solla", "Christian Lutz", "Patrick Thomson", "Shams Ahmed"]),

		// Case Review Page Specific
		'caseRevTestMode': true,
		'caseRevSubject': 'You case #<caseNumber> has been reviewed!',
		'caseRevBody': "Hello <engineerFirst>,<enter>I have reviewed your case, Case #: <caseNumber><enter>Here is a direct link to the case: <caseLink><enter>You scored: <reviewScore><enter><enter>Thanks, <enter>-Your Manager",
		'caseRevCC': '',
		'caseRevBCC': '',
		'caseRevDefaultToAssisted': true,
		'defaultAssType': 'Manager',


		// TemplateSC
		"enableCommentTemplates": true,
		"enableNewDefectTemplate": true,
		"enableEmailTemplates": true,
		"emailGreeting": "Hello <contactFirst>,",
		"emailSignature": "Thanks, \n" +
		                  "Christian Lutz \n" +
		                  "Support Engineer \n" +
		                  "CA Technologies - North America",
		"ftsSubject": "FTS Sev 1 - Case #<caseNum>",
		"ftsDList": '',
		"ftsCC": '',
		"ftsBCC": '',

		"emailTemplates": JSON.stringify({
			"Basic Email": {
				greeting: "<myGreeting>",
				body: '',
				signature: "<mySignature>",
				postSignature: "<SFTPLinks>",

			},
			"Follow-Up Email": {
				greeting: "<myGreeting>",
				body: "I sent a response to this case on <INSERT DATE HERE> <as well as a follow-up email on --date here--> and haven't heard back from you. Do you have any further questions regarding this issue? Can we consider this issue resolved and close the support ticket?",
				signature: "<mySignature>",
				postSignature: "<SFTPLinks>",
			},
			"Close Case Email": {
				greeting: "<myGreeting>",
				body: "This case is being closed. If you receive a customer satisfaction survey please take the time to fill it out, I would truly appreciate your honest feedback.\n\n" +
				      "If you should need any additional help with this issue now that it is closed, you can easily reopen it within 14 days of closure. After 14 days we would need to open a new issue and can simply reference this issue number within the new issue.",
				signature: "<mySignature>",
				postSignature: "",
			},
			"Close Case Inactive": {
				greeting: "<myGreeting>",
				body: "I sent a response to this case on <INSERT DATE HERE> <as well as a follow-up email on --date here--> and haven't heard back from you. Do you have any further questions regarding this issue? Can we consider this issue resolved and close the support ticket?",
				signature: "<mySignature>",
				postSignature: "",
			},
			"Proactive Email": {
				greeting: "<myGreeting>",
				body: "I am just checking to see if the solution we discussed for this case still meets your needs or if you have concerns. There is no need to respond to this email if things are going well, but if you have concerns please feel free to respond.",
				signature: "<mySignature>",
				postSignature: "",
			}
		}),

		setSendNotification: true,
		commentTemplates: JSON.stringify({
			"Case Update": [
					["Current Status", 6, "", "<explanations.currentStatus>"],
					["Next Action", 6, "", "<explanations.nextAction>"],
			],
			"Initial Contact & Full Summary": [
				["Issue Details", 6, "", "<explanations.issueDetails>"],
				["Product Impact", 2, "", "<explanations.productImpact>"],
				["Business Impact", 2, "", "<explanations.businessImpact>"],
				["Environment Details", 4, "", "<explanations.environmentDetails>"],
				["Troubleshooting", 2, "", "<explanations.troubleshooting>"],
				["Reproduction Steps", 6, "", "<explanations.reproductionSteps>"],
				["Search Results", 2, "", "<explanations.searchResults>"],
				["Case Update", 0, "", ""],
				["Current Status", 4, "", "<explanations.currentStatus>"],
				["Next Action", 4, "", "<explanations.nextAction>"],
			],
			"Case Closure Summary": [
					["Issue Details", 4, "", "<explanations.issueDetails>"],
					["Environment Details", 4, "Environment Type: PRODUCTION | PRE-PRODUCTION | DEVELOPMENT | TEST\n", "<explanations.environmentDetails>"],
					["Useful Resources", 2, "", "<explanations.usefulResources>"],
					["Root Cause Analysis", 2, "", "<explanations.rootCauseAnalysis>"],
					["Workaround", 4, "", "<explanations.workaround>"],
					["Resolution", 2, "", "<explanations.resolution>"],
			],
			"Follow The Sun": [
					["Current Status", 4, "", "<explanations.currentStatus>"],
					["Issue Details", 8, "", "<explanations.issueDetails>"],
					["Next Action", 4, "", "<explanations.nextAction>"],
					["Product Impact", 2, "", "<explanations.productImpact>"],
					["Business Impact", 2, "", "<explanations.businessImpact>"],
					["Client Contact(s) & Sensitivity", 2, "", "<explanations.clientContactsSensitivity>"],
					["CA Management Involved", 2, "", "<explanations.managementInvolved>"],
					["Who Was Contacted From Next Region?", 2, "", "<explanations.nextRegionContacted>"],
					["Engineering Involvement", 2, "", "<explanations.engineeringInvolvement>"],
					["Lab Information", 2, "", "<explanations.labInformation>"],
					["Early Transfer Reason", 2, "", "<explanations.earlyTransferReason>"],
					["Non-Case Attachments", 2, "", "<explanations.attachments>"],
			],

		}),




	},
	function(items) {
		// logTrace('500a_content.js settings collected, listing:');
		// for (var key in items)
		// {
		// 	// logTrace("var: " + key + " = " + items[key]);
		// }
		// logTrace('500a_content.js assigning vars.');

		//Global
		forceIframe = items.forceIframe;

		// CSS Theme
		myTheme = items.myTheme;
		console_top_color = items.console_top_color;
		console_bottom_color = items.console_bottom_color;
		console_text_color = items.console_text_color;
		tabstrip_bg_color = items.tabstrip_bg_color;
		tabstrip_alt_bg_color = items.tabstrip_alt_bg_color;
		tabstrip_text_color = items.tabstrip_text_color;
		tabstrip_border_color = items.tabstrip_border_color;
		tabstrip_tab_border_color = items.tabstrip_tab_border_color;
		tabstrip_tab_alt_border_color = items.tabstrip_tab_alt_border_color;
		body_bg_color = items.body_bg_color;
		body_text_color = items.body_text_color;
		body_text_modified_color = items.body_text_modified_color;
		body_link_hover_color = items.body_link_hover_color;
		body_link_color = items.body_link_color;
		body_label_text_color = items.body_label_text_color;
		alert_bg_color = items.alert_bg_color;
		alert_text_color = items.alert_text_color;
		alert_border_color = items.alert_border_color;
		warning_bg_color = items.warning_bg_color;
		warning_text_color = items.warning_text_color;
		warning_border_color = items.warning_border_color;
		success_bg_color = items.success_bg_color;
		success_text_color = items.success_text_color;
		success_border_color = items.success_border_color;
		percent_bar_color = items.percent_bar_color;
		percent_bar_bg_color = items.percent_bar_bg_color;
		tb_bg_color = items.tb_bg_color;
		tb_text_color = items.tb_text_color;
		tb_link_color = items.tb_link_color;
		tb_border_color = items.tb_border_color;
		box_h_text_color = items.box_h_text_color;
		box_h_bg_color = items.box_h_bg_color;
		box_h_border_color = items.box_h_border_color;
		box_body_bg_color = items.box_body_bg_color;
		box_body_border_color = items.box_body_border_color;
		table_header_bg_color = items.table_header_bg_color;
		table_header_text_color = items.table_header_text_color;
		table_header_border_color = items.table_header_border_color;
		cell_label_border_color = items.cell_label_border_color;
		cell_data_border_color = items.cell_data_border_color;
		row_color_even = items.row_color_even;
		row_color_odd = items.row_color_odd;
		row_color_highlight = items.row_color_highlight;
		btn_text_color = items.btn_text_color;
		btn_bg_color = items.btn_bg_color;
		btn_border_color = items.btn_border_color;
		btn_alt_text_color = items.btn_alt_text_color;
		btn_alt_bg_color = items.btn_alt_bg_color;
		btn_alt_border_color = items.btn_alt_border_color;
		txtfield_text_color = items.txtfield_text_color;
		txtfield_bg_color = items.txtfield_bg_color;
		txtfield_border_color = items.txtfield_border_color;
		txtfield_alt_border_color = items.txtfield_alt_border_color;

		// Team
		myself = items.myself;
		myTeam = items.myTeam;

		// General
		boostTextSize = items.boostTextSize;
		removePullDownBar = items.removePullDownBar;
		squareMonitor = items.squareMonitor;
		convertBytesSFTP = items.convertBytesSFTP;
		enableBack2Top = items.enableBack2Top;
		showRedundantButtons = items.showRedundantButtons;
		showHelpButtons = items.showHelpButtons;
		// showBodyBorders = items.showBodyBorders;
		// bodyBorderStyle = items.bodyBorderStyle;
		enableCommentFilters = items.enableCommentFilters;
		enableCompression = items.enableCompression;
		listArrangementFix = items.listArrangementFix;
		enableArrangement = items.enableArrangement

		// Top Bar
  	lockTopBar = items.lockTopBar;
    topBarBG = items.topBarBG;
		topBarFontColor = items.topBarFontColor;
		disableHoverLinks = items.disableHoverLinks;
    removeHoverLinks = items.removeHoverLinks;
		topBarFontColor = items.topBarFontColor;
		hoverLinkColor = items.hoverLinkColor;
    enableCaseRefreshButton = items.enableCaseRefreshButton;
		enableCaseLinkButton = items.enableCaseLinkButton;
		removeDisplayProcessFlow = items.removeDisplayProcessFlow;

		// POP! & 50/50
		enablePOP = items.enablePOP;
		enable5050 = items.enable5050;
		enableSCTab = items.enableSCTab;
		fiftyPageOnLeft = items.fiftyPageOnLeft;
		popUpEmails = items.popUpEmails;
		popUpWidth = items.popUpWidth;
		popUpHeight = items.popUpHeight;

		// Convenience Buttons !! BETA !!
		enableConvenience = items.enableConvenience;
		createLocalDirs = items.createLocalDirs;
		openLocalButton = items.openLocalButton;

		// PeekIt !! BETA !!
		enablePeekIt = items.enablePeekIt;
		highlightPeeks = items.highlightPeeks;
		peekHighlightColor = items.peekHighlightColor;
		peekDelay = items.peekDelay;
		peekItHeight = items.peekItHeight;
		peekItWidth = items.peekItWidth;
		peekSftpTypes = items.peekSftpTypes;

		// Arrangement
		cRows = items.cRows;
		hRows = items.hRows;
		cIndex = items.cIndex;
		hIndex = items.hIndex;
		cDisabledObjects = items.cDisabledObjects;
		hDisabledObjects = items.hDisabledObjects;
		cCollapsedObjects = items.cCollapsedObjects;
		hCollapsedObjects = items.hCollapsedObjects;
		cOpenObjects = items.cOpenObjects;
		hOpenObjects = items.hOpenObjects;

		 // New Comment Page Specific Options
		alwaysPublic = items.alwaysPublic;
		alwaysSendEMail = items.alwaysSendEMail;
		alsoCheckEMail = items.alsoCheckEMail;
		commentBoxW = items.commentBoxW;
		commentBoxH = items.commentBoxH;

		// Email Page Specific Options
		disableOriginalSendButtons = items.disableOriginalSendButtons;
		forceCAEmail = items.forceCAEmail;
		includeToInfo = items.includeToInfo;
		includeSubjet = items.includeSubjet;
		includeEmailBody = items.includeEmailBody;

		// New Defect Page Specific
		newDefDescriptionBoxW = items.newDefDescriptionBoxW;
		newDefDescriptionBoxH = items.newDefDescriptionBoxH;
		newDefCommentBoxW = items.newDefCommentBoxW;
		newDefCommentBoxH = items.newDefCommentBoxH;

		// Defect New Comment Page Specific
		dComBoxWidth = items.dComBoxWidth;
		dComBoxHeight = items.dComBoxHeight;

		// Live Agent Supervisor Page Specific
		prodName = JSON.parse(items.prodName);
		onlyMyQS = items.onlyMyQS;
		collapseQS = items.collapseQS;
		statusLevel = items.statusLevel;
		userFilter = items.userFilter;
		userList = JSON.parse(items.userList);

		// Case Review Page Specific
		caseRevTestMode = items.caseRevTestMode;
		caseRevSubject = items.caseRevSubject;
		caseRevBody = items.caseRevBody;
		caseRevCC = items.caseRevCC;
		caseRevBCC = items.caseRevBCC;
		caseRevDefaultToAssisted = items.caseRevDefaultToAssisted;
		defaultAssType = items.defaultAssType;

		// TemplateSC
		enableCommentTemplates = items.enableCommentTemplates;
		enableNewDefectTemplate = items.enableNewDefectTemplate;
		enableEmailTemplates = items.enableEmailTemplates;
		emailGreeting = items.emailGreeting;
		emailSignature = items.emailSignature;
		ftsSubject = items.ftsSubject;
		ftsDList = items.ftsDList;
		ftsCC = items.ftsCC;
		ftsBCC = items.ftsBCC;

		emailTemplates = items.emailTemplates;
		commentTemplates = items.commentTemplates;
		setSendNotification = items.setSendNotification;

chrome.extension.onMessage.addListener(
	function(msg, sender, sendResponse) {
		console.log('msg rcv')
		if (msg.action == 'get_vars') {
			console.log("Getting vars: "+ msg.varList);
			if (msg.varList == 'all') {
				sendResponse({
					//Global
					'forceIframe': forceIframe,

					// CSS Theme
					'myTheme': myTheme,
					"console_top_color":console_top_color,
					"console_bottom_color":console_bottom_color,
					"console_text_color":console_text_color,
					"tabstrip_bg_color":tabstrip_bg_color,
					"tabstrip_alt_bg_color":tabstrip_alt_bg_color,
					"tabstrip_text_color":tabstrip_text_color,

					"tabstrip_border_color":tabstrip_border_color,
					"tabstrip_tab_border_color":tabstrip_tab_border_color,
					"tabstrip_tab_alt_border_color":tabstrip_tab_alt_border_color,

					'body_bg_color': body_bg_color,
					'body_text_color': body_text_color,
					'body_text_modified_color': body_text_modified_color,
					'body_link_hover_color': body_link_hover_color,
					'body_link_color': body_link_color,
					'body_label_text_color': body_label_text_color,
					'alert_bg_color': alert_bg_color,
					'alert_text_color': alert_text_color,
					'alert_border_color': alert_border_color,
					'warning_bg_color': warning_bg_color,
					'warning_text_color': warning_text_color,
					'warning_border_color': warning_border_color,
					'success_bg_color': success_bg_color,
					'success_text_color':success_text_color,
					'success_border_color':success_border_color,
					'percent_bar_color': percent_bar_color,
					'percent_bar_bg_color': percent_bar_bg_color,
					'tb_bg_color': tb_bg_color,
					'tb_text_color': tb_text_color,
					'tb_link_color': tb_link_color,
					'tb_border_color': tb_border_color,
					'box_h_text_color': box_h_text_color,
					'box_h_bg_color': box_h_bg_color,
					'box_h_border_color': box_h_border_color,
					'box_body_bg_color': box_body_bg_color,
					'box_body_border_color': box_body_border_color,
					'table_header_bg_color': table_header_bg_color,
					'table_header_text_color': table_header_text_color,
					'table_header_border_color': table_header_border_color,
					'cell_label_border_color': cell_label_border_color,
					'cell_data_border_color': cell_data_border_color,
					'row_color_even': row_color_even,
					'row_color_odd': row_color_odd,
					'row_color_highlight': row_color_highlight,
					'btn_text_color': btn_text_color,
					'btn_bg_color': btn_bg_color,
					'btn_border_color': btn_border_color,
					'btn_alt_text_color': btn_alt_text_color,
					'btn_alt_bg_color': btn_alt_bg_color,
					'btn_alt_border_color': btn_alt_border_color,
					'txtfield_text_color': txtfield_text_color,
					'txtfield_bg_color': txtfield_bg_color,
					'txtfield_border_color': txtfield_border_color,
					'txtfield_alt_border_color': txtfield_alt_border_color,

					// Team
					'myself': myself,
					'myTeam': myTeam,

					// General
					'boostTextSize': boostTextSize,
					'removePullDownBar': removePullDownBar,
					'squareMonitor': squareMonitor,
					'convertBytesSFTP': convertBytesSFTP,
					'enableBack2Top': enableBack2Top,
					'showRedundantButtons': showRedundantButtons,
					'showHelpButtons': showHelpButtons,
					// 'showBodyBorders': showBodyBorders,
					// 'bodyBorderStyle': bodyBorderStyle,
					'enableCommentFilters': enableCommentFilters,
					'enableCompression ': enableCompression,
					'listArrangementFix': listArrangementFix,
					'enableArrangement': enableArrangement,

					// Top Bar
					'lockTopBar': lockTopBar,
					'topBarBG': topBarBG,
					'topBarFontColor': topBarFontColor,
					'disableHoverLinks': disableHoverLinks,
					'removeHoverLinks': removeHoverLinks,
					'hoverLinkColor': hoverLinkColor,
					'enableCaseRefreshButton': enableCaseRefreshButton,
					'enableCaseLinkButton': enableCaseLinkButton,
					'removeDisplayProcessFlow': removeDisplayProcessFlow,

					// POP! & 50/50
					'enablePOP': enablePOP,
					'enable5050': enable5050,
					'enableSCTab': enableSCTab,
					'fiftyPageOnLeft': fiftyPageOnLeft,
					'popUpEmails': popUpEmails,
					'popUpWidth': popUpWidth,
					'popUpHeight': popUpHeight,

					// Convenience Buttons !! BETA !!
					'enableConvenience': enableConvenience,
					'createLocalDirs': createLocalDirs,
					'openLocalButton': openLocalButton,

					// PeekIt !! BETA !!
					'enablePeekIt': enablePeekIt,
					'highlightPeeks': highlightPeeks,
					'peekHighlightColor': peekHighlightColor,
					'peekDelay': peekDelay,
					'peekItHeight': peekItHeight,
					'peekItWidth': peekItWidth,
					'peekSftpTypes': peekSftpTypes,

					// Arrangement
					'cRows': cRows,
					'hRows': hRows,
					'cIndex': cIndex,
					'hIndex': hIndex,
					'cDisabledObjects': cDisabledObjects,
					'hDisabledObjects': hDisabledObjects,
					'cCollapsedObjects': cCollapsedObjects,
					'hCollapsedObjects': hCollapsedObjects,
					'cOpenObjects': cOpenObjects,
					'hOpenObjects': hOpenObjects,

					// New Comment Page Specific Options
					'alwaysPublic': alwaysPublic,
					'alwaysSendEMail': alwaysSendEMail,
					'alsoCheckEMail': alsoCheckEMail,
					'commentBoxW': commentBoxW,
					'commentBoxH': commentBoxH,

					// Email Page Specific Options
					'disableOriginalSendButtons': disableOriginalSendButtons,
					'forceCAEmail': forceCAEmail,
					'includeToInfo': includeToInfo,
					'includeSubjet': includeSubjet,
					'includeEmailBody': includeEmailBody,

					// New Defect Page Specific
					'newDefDescriptionBoxW': newDefDescriptionBoxW,
					'newDefDescriptionBoxH': newDefDescriptionBoxH,
					'newDefCommentBoxW': newDefCommentBoxW,
					'newDefCommentBoxH': newDefCommentBoxH,

					// Defect New Comment Page Specific
					'dComBoxWidth': dComBoxWidth,
					'dComBoxHeight': dComBoxHeight,

					// Live Agent Supervisor Page Specific
					'prodName': prodName,
					'onlyMyQS;': onlyMyQS,
					'collapseQS': collapseQS,
					'statusLevel': statusLevel,
					'userFilter': userFilter,
					'userList': userList,

					// Case Review Page Specific
					'caseRevTestMode': caseRevTestMode,
					'caseRevSubject': caseRevSubject,
					'caseRevBody': caseRevBody,
					'caseRevCC': caseRevCC,
					'caseRevBCC': caseRevBCC,
					'caseRevDefaultToAssisted': caseRevDefaultToAssisted,
					'defaultAssType': defaultAssType,

					// TemplateSC
					'enableCommentTemplates': enableCommentTemplates,
					'enableNewDefectTemplate': enableNewDefectTemplate,
					'enableEmailTemplates': enableEmailTemplates,
					'emailGreeting': emailGreeting,
					'emailSignature': emailSignature,
					'ftsSubject': ftsSubject,
					'ftsDList': ftsDList,
					'ftsCC': ftsCC,
					'ftsBCC': ftsBCC,
					'emailTemplates': emailTemplates,
					'commentTemplates': commentTemplates,
					'setSendNotification': setSendNotification,
				});
			} else {
				var varis = {};
				var myvars = JSON.parse(msg.varList);
				for (var vari in myvars) {
					console.log(window);
					console.log(' myvars[vari]: ' + myvars[vari] + ' = '+ window[myvars[vari]]);
					varis[myvars[vari]] = window[myvars[vari]];
					console.log(varis[myvars[vari]]);
				}
				sendResponse(JSON.stringify(varis));
				console.log('sent ' + JSON.stringify(varis));
			}

		} else if (msg.action == 'set_vars') {
			var test = chrome.storage.sync.set(JSON.parse(msg.varList),
			function() {
				var myvars = JSON.parse(msg.varList);
				for (var vari in myvars) {
					var settingResult = 'Option ' + vari + " was: " + window[vari] + ', setting to: ' + myvars[vari];
					window[vari] = myvars[vari];
					console.log(settingResult);
				}
			});
			sendResponse({response: "true"});
			console.log("response sent");
		}
	}
);
		// logTrace('500a_content.js finished assigning vars.');
		// init();
		// logTrace('500a_content.js finished.');
	}
);
