/////////////////////////////////////       500a_content.js     //////////////////////////////////////
//
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: 500a_content.js
//
// Description: Holds main Case page content.
//
// Notes:
//
// SCw33t - ServiceCloud wildly 3xtensive 3xtension troop testing !! BETA !!
// SCuite  - ServiceCloud Suite
//
// TODO standardize how peekIt links are read & changed... (exclude list, etc...)
// TODO Add "easy alerts" something that will check, colorize & alert on fields by name
//		function to collect value by name
//		function to compare value by < > = <= >= !=
//		Add Settings table to set these up under AlertSC
//		function to run through checks
// TODO add functions to set colors
// TODO add theme dropdown
// TODO dropdown theme ideas: CA colors (like product colors...), SC default, SC +, dark - contrast, dark - readable...
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('500a_content.js initializing.');
logTrace("HREF: " + window.location.href);


// var myself = {
// 	name: "Christian Lutz",
// 	alias: "lutch01",
// 	color: '#e6e6fa',
// 	startHour: 8,
// 	endHour: 17,
// };
// console.log("Stringified myself: " + JSON.stringify(myself));

// Light colors...
/*

	#bcd7f2 blue
	#a6eea7 green
	#c9eea6 lighter green
	#f2bcd7 pink
	#bcf2d7 seafoam
	#bcbcf2 purple
	#bcf2f2 teal
	#f2d7bc orange
	#f2f2bc yellow

*/
// var myTeam = [
// 	{
// 		name: "Ed Vogel",
// 		alias: "VOGED01",
// 		color: "#bcd7f2",
// 	}, {
// 		name: "Margaret Anttila",
// 		alias: "ANTMA06",
// 		color: "#a6eea7",
// 	}, {
// 		name: "Ralf Prigl",
// 		alias: "PRIRA01",
// 		color: "#c9eea6",
// 	},	{
// 		name: "Ilir Prifti",
// 		alias: "PRIIL01",
// 		color: "#f2bcd7",
// 	},	{
// 		name: "Anthony Manoleas",
// 		alias: "MANAN23",
// 		color: "#bcf2d7",
// 	},	{
// 		name: "Joseph Lutz",
// 		alias: "LUTJO01",
// 		color: "#bcbcf2",
// 	}, {
// 		name: "Brian Rehder",
// 		alias: "REHBR01",
// 		color: "#bcf2f2",
// 	}, {
// 		name: "Carlos Solla",
// 		alias: "SOLCA02",
// 		color: "#f2d7bc",
// 	},	{
// 		name: "Aaron Armagost",
// 		alias: "ARMAA01",
// 		color: "#f2f2bc",
// 	}, {
// 		name: "Shams Ahmed",
// 		alias: "AHMSH05",
// 		color: "#e3e3e3",
// 	},
//
// ];
//
// console.log("Stringified myTeam: " + JSON.stringify(myTeam));



// SCPlus
// var myTheme ={
	// body_bg_color: "#FFFFFF",
	// body_text_color: "#16325C",
	// body_text_modified_color: "#FF6A00",
	// body_link_hover_color: "#FF0000", /*#015BA7;*/
	// body_link_color: "#006CB5",

	// body_label_text_color: "#54698D",

	// alert_background_color: "#FF99EE",
	// alert_text_color: "#CC0000",
	// alert_border_style: "1px solid #000000",

	// warning_background_color: "#FFCF6F",
	// warning_text_color: "#FF6A00",
	// warning_border_style: "1px solid #000000",

	// percentBarColor: "#00FFFF",

	// tb_bg_color: "#0070D2",
	// tb_text_color: "#FFFFFF",
	// tb_link_color: "#FFFFFF",
	// tb_border_style: "1px solid #000000",

	// box_h_text_color: "#FFFFFF",
	// box_h_bg_color: "#0070D2",
	// box_h_border_style: "1px solid #000000",
	// box_body_bg_color: "#FFFFFF",
	// box_body_border_style: "1px solid #000000",

	// cell_label_border_style: "1px solid #00FF00",
	// cell_data_border_style: "1px solid #0000FF",

	// row_color_even: "inherit",
	// row_color_odd: "#DDDDDD",
	// row_color_highlight: "#000000",

	// btn_text_color: "#0070d2",
	// btn_bg_color: "#F4F5F7",
	// btn_border_style: "1px solid #E0E5EE",

	// txtfield_text_color: "#000000",
	// txtfield_bg_color: "#FFFFFF",
	// txtfield_border_style: "1px solid #D8DDE6",
// }

// console.log("Stringified theme: " + JSON.stringify(myTheme));












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
var showHelpButtons;
// var showBodyBorders;
// var bodyBorderStyle;
var enableCompression;
var enableCommentFilters;
var listArrangementFix;
var enableArrangement;

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

// Style stuff...
var styleDefault;
var styleTemplate;

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

// Cases Page (queue) Specific
var unlockRolodex;

// Local Globals...
var theBoxes2;
var theCase;

logTrace('500a_content.js collecting settings.');

getVars('all', init);


// Document ready - use?
// window.onload = function() {
	// getVars('all', init);
// }


/*
// TODO modify Sample extension button...
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	    if( request.message === "setVars" ) {
			lockTopBar = request.lockTopBar;
			topBarBG = request.topBarBG;
			alert("top br bg: "+topBarBG);
			init();
        }
        if( request.message === "clicked_browser_action" ) {
			alert('clkB');
            chrome.runtime.sendMessage({"message": "getVars"});
        }
    }
);
*/


/*
var curVersion = "3.0 BETA";
var pblink = "https://cawiki.ca.com/display/CASupport/ArrangeSC+v2";
var changeLog = [
    ['3.0BETA', 'today',
	 'Converted from UserScript to Extension. Now known as SCw33t',
     'Code Cleanup: Made the code more readable.',
     'New Feature: Added Comment Filtering. Filters out irrelevant comments.',
     'New Feature: Added Comment Compression. Removes excess space from comments.',
	 'New Feature: Added SCtab. Opens pages in SC tabs.',
     'New Feature: Added "PeekIt" hover box to allow quick viewing of Special Conditions page.',
     'New Feature: Added Sean Kaim\'s Convenience/SFTP button script. CA SFTP Protocol Handler or other SFTP protocol handler will still be required to use the FTP button. Using this feature will require adding these new true/false values; enableConvenience, createLocalDirs & openLocalButton.',
    ],
	['2.81', 'April 25, 2017',
     'Bug Fix: Resolved problems due to changes to Case Review page. Made more resiliant for the future.',
     'Bug Fix: Resolved a problem where he april update message was being shown at incorrect times.',
    ],
    ['2.80', 'April 21, 2017',
     'SC Update: Fixes & changes related to new/changed items in the latest SC update.',
     'More info on SC update: https://communities.ca.com/thread/241776031',
     'More info on ArrangeSC update: https://cawiki.ca.com/display/CASupport/ArrangeSC+April+21+Update+Info'
    ],
	['2.0.77', 'March 22, 2017',
     'Bug Fix: Fixed specialConditionsFix & made more resiliant to future changes.',
    ],
    ['2.0.76', 'March 06, 2017',
     'Bug Fix: Fixed formatting issues with Case Review related items after Case Review update.',
    ],
    ['2.0.75', 'February 22, 2017',
     'Bug Fix: Fixed bug where 50/50 closed when it shouldn\'t.',
    ],
    ['2.0.74', 'February 22, 2017',
     'Code Cleanup: Made the code more readable.',
     'Fix: Fixed case review parts that were broken by SC change to add Chat vs Assisted types.',
     'New Feature: Review Case, Added option to defult to "Assisted" type. "caseRevDefaultToAssisted"',
     'Minor Fix: Fixed a rare situation where POP windows failed to automatically close.',
     'New Feature: Added Sean Kaim\'s Convenience/SFTP button script. CA SFTP Protocol Handler or other SFTP protocol handler will still be required to use the FTP button. Using this feature will require adding these new true/false values; enableConvenience, createLocalDirs & openLocalButton.',
    ],
    ['2.0.73', 'November 21, 2016',
     'New Alert: Added alert to notify users of case reivews.',
     'New Feature: Added an optional variable to the Case Review email options to include the score. To add this to your settings use this tag: <reviewScore>.',
     'Minor Tweaks: Tweaked some back end code that has no effect on UI.',
    ],
    ['2.0.72', 'October 17, 2016',
     'Fix: Fixed some errors caused by the addition of the "Guarenteed Availability" field.',
     'Feature Change: Changed the Case Review test mode to clearly state that test mode is being used and stopped it from clicking cancel to avoid accidental loss of work.',
    ],
    ['2.0.71', 'October 6, 2016',
     'Added Support: For the new "Related Content" box.',
     'This includes: ability to add to Arrangement Settings, POP! & 50/50 buttons to relate content & re-worked insides for square/low-res monitors.',
     'To add this to the Arrangement Settings: Use the box name "relContent".',
    ],
    ['2.0.70', 'August 26, 2016',
     'New Feature: Added What\'s New? to the footer bar.',
     'Enhancement: Added functionality to support/enhance TemplateSC.',
     'Minor Fix: Removed erroneous error message when on New Task page.',
     'Fix: Fixed some string formatting issues in URLs used for POP! & 50/50.',
     'Fix: Fixed an error where Alerts box would disappear after closing a 50/50 page.',
     'Cosmetic Fix: Some Alerts were not switching to a link cursor on mouse over and had the "I" cursor instead.',
     'Cosmetic Fix: Fixed text formating on some alerts.',
    ],

    ['2.0.6', 'August 8, 2016',
     'New Feature: POP! & 50/50, View Defect in Rally',
     'New Feature: 50/50, Added Close button',
     'Cosmetic Change: POP! & 50/50 button lists, made buttons smaller',
     'Enhancement: Added footer bar which contains the version number & a link to the wiki page.',
     'Behavior Change/Enhancement: POP! Windows now open in the center of the screen.',
     'Behavior Change/Enhancement: POP! Windows that change what would be on the case page now refresh the case page when they close so you have updated version of the page.\n - Note: Does NOT refresh if you press "X", DOES refresh when the page re-loads due to save/send/cancel buttons'
    ],

    ['2.0.5', 'July 25, 2016',
     'Bug Fix: Fixed an issue with "Save/Save & Dismiss" buttons not saving/sending the comment or email.'
    ],

    ['2.0.4', 'July 19, 2016',
     'listArrangementFix: Fixed some bugs that were introduced by the addition of the "Queue Jumper" field to Case Info box.'
    ],

    ['2.0.3', 'July 18, 2016',
     'listArrangementFix: Fixed some unwanted behavior due to changes in SC fields. Added additional tweeks.',
     'Minor Tweak: Made labels fit better.'
    ],

    ['2.0.2', 'July 15, 2016',
     'Bug Fix: On Case Review page removed some debug code & fixed bug.'
    ],

    ['2.0.1', 'June 24, 2016',
     'Minor Fix: New Email POP & 50/50 did not auto-populate subject line like the stock send mail button does.'
    ],

    ['2.0.0', 'June 22, 2016',
     'Major Release: Initial Release.'
    ]
];
*/
// For SC default layout...
var dRows;
var dIndex = JSON.parse('[[[],[]],[[],["100%","Case Information","SCw33t Alerts!","Details","Product Detail","Case Resolution","Product and Offering","Supplemental Details","Alt Contact Information","Case Audit History","Open Activities","Activity History","Case Team","Attachments","Case Comments","SFTP File Attachments","Related Cases","CA Diagnostics","External Requests","KB Articles","Related Content","Emails","Case Reviews","Live Chat Transcripts","Related Defects","Case History"],["0%","empty"]]]');


var SID = 0;



function init() {

// Fixes top Bar spacing
if (lockTopBar) { updateBodyMargin(); }

// Fixes a problem with top Bar spacing when case starts on feed view:
document.getElementById($(".efpDetailsView").attr('id')).addEventListener('click', function() {if (lockTopBar) { updateBodyMargin(); }}, false);

// var rainbowcss = "color: white; background-color:#6c6c6c; text-shadow: -1px -1px hsl(0,100%,50%), 1px 1px hsl(5.4, 100%, 50%), 3px 2px hsl(10.8, 100%, 50%), 5px 3px hsl(16.2, 100%, 50%), 7px 4px hsl(21.6, 100%, 50%), 9px 5px hsl(27, 100%, 50%), 11px 6px hsl(32.4, 100%, 50%), 13px 7px hsl(37.8, 100%, 50%), 14px 8px hsl(43.2, 100%, 50%), 16px 9px hsl(48.6, 100%, 50%), 18px 10px hsl(54, 100%, 50%), 20px 11px hsl(59.4, 100%, 50%), 22px 12px hsl(64.8, 100%, 50%), 23px 13px hsl(70.2, 100%, 50%), 25px 14px hsl(75.6, 100%, 50%), 27px 15px hsl(81, 100%, 50%), 28px 16px hsl(86.4, 100%, 50%), 30px 17px hsl(91.8, 100%, 50%), 32px 18px hsl(97.2, 100%, 50%), 33px 19px hsl(102.6, 100%, 50%), 35px 20px hsl(108, 100%, 50%), 36px 21px hsl(113.4, 100%, 50%), 38px 22px hsl(118.8, 100%, 50%), 39px 23px hsl(124.2, 100%, 50%), 41px 24px hsl(129.6, 100%, 50%), 42px 25px hsl(135, 100%, 50%), 43px 26px hsl(140.4, 100%, 50%), 45px 27px hsl(145.8, 100%, 50%), 46px 28px hsl(151.2, 100%, 50%), 47px 29px hsl(156.6, 100%, 50%), 48px 30px hsl(162, 100%, 50%), 49px 31px hsl(167.4, 100%, 50%), 50px 32px hsl(172.8, 100%, 50%), 51px 33px hsl(178.2, 100%, 50%), 52px 34px hsl(183.6, 100%, 50%), 53px 35px hsl(189, 100%, 50%), 54px 36px hsl(194.4, 100%, 50%), 55px 37px hsl(199.8, 100%, 50%), 55px 38px hsl(205.2, 100%, 50%), 56px 39px hsl(210.6, 100%, 50%), 57px 40px hsl(216, 100%, 50%), 57px 41px hsl(221.4, 100%, 50%), 58px 42px hsl(226.8, 100%, 50%), 58px 43px hsl(232.2, 100%, 50%), 58px 44px hsl(237.6, 100%, 50%), 59px 45px hsl(243, 100%, 50%), 59px 46px hsl(248.4, 100%, 50%), 59px 47px hsl(253.8, 100%, 50%), 59px 48px hsl(259.2, 100%, 50%), 59px 49px hsl(264.6, 100%, 50%), 60px 50px hsl(270, 100%, 50%), 59px 51px hsl(275.4, 100%, 50%), 59px 52px hsl(280.8, 100%, 50%), 59px 53px hsl(286.2, 100%, 50%), 59px 54px hsl(291.6, 100%, 50%), 59px 55px hsl(297, 100%, 50%), 58px 56px hsl(302.4, 100%, 50%), 58px 57px hsl(307.8, 100%, 50%), 58px 58px hsl(313.2, 100%, 50%), 57px 59px hsl(318.6, 100%, 50%), 57px 60px hsl(324, 100%, 50%), 56px 61px hsl(329.4, 100%, 50%), 55px 62px hsl(334.8, 100%, 50%), 55px 63px hsl(340.2, 100%, 50%), 54px 64px hsl(345.6, 100%, 50%), 53px 65px hsl(351, 100%, 50%), 52px 66px hsl(356.4, 100%, 50%), 51px 67px hsl(361.8, 100%, 50%), 50px 68px hsl(367.2, 100%, 50%), 49px 69px hsl(372.6, 100%, 50%), 48px 70px hsl(378, 100%, 50%), 47px 71px hsl(383.4, 100%, 50%), 46px 72px hsl(388.8, 100%, 50%), 45px 73px hsl(394.2, 100%, 50%), 43px 74px hsl(399.6, 100%, 50%), 42px 75px hsl(405, 100%, 50%), 41px 76px hsl(410.4, 100%, 50%), 39px 77px hsl(415.8, 100%, 50%), 38px 78px hsl(421.2, 100%, 50%), 36px 79px hsl(426.6, 100%, 50%), 35px 80px hsl(432, 100%, 50%), 33px 81px hsl(437.4, 100%, 50%), 32px 82px hsl(442.8, 100%, 50%), 30px 83px hsl(448.2, 100%, 50%), 28px 84px hsl(453.6, 100%, 50%), 27px 85px hsl(459, 100%, 50%), 25px 86px hsl(464.4, 100%, 50%), 23px 87px hsl(469.8, 100%, 50%), 22px 88px hsl(475.2, 100%, 50%), 20px 89px hsl(480.6, 100%, 50%), 18px 90px hsl(486, 100%, 50%), 16px 91px hsl(491.4, 100%, 50%), 14px 92px hsl(496.8, 100%, 50%), 13px 93px hsl(502.2, 100%, 50%), 11px 94px hsl(507.6, 100%, 50%), 9px 95px hsl(513, 100%, 50%), 7px 96px hsl(518.4, 100%, 50%), 5px 97px hsl(523.8, 100%, 50%), 3px 98px hsl(529.2, 100%, 50%), 1px 99px hsl(534.6, 100%, 50%), 7px 100px hsl(540, 100%, 50%), -1px 101px hsl(545.4, 100%, 50%), -3px 102px hsl(550.8, 100%, 50%), -5px 103px hsl(556.2, 100%, 50%), -7px 104px hsl(561.6, 100%, 50%), -9px 105px hsl(567, 100%, 50%), -11px 106px hsl(572.4, 100%, 50%), -13px 107px hsl(577.8, 100%, 50%), -14px 108px hsl(583.2, 100%, 50%), -16px 109px hsl(588.6, 100%, 50%), -18px 110px hsl(594, 100%, 50%), -20px 111px hsl(599.4, 100%, 50%), -22px 112px hsl(604.8, 100%, 50%), -23px 113px hsl(610.2, 100%, 50%), -25px 114px hsl(615.6, 100%, 50%), -27px 115px hsl(621, 100%, 50%), -28px 116px hsl(626.4, 100%, 50%), -30px 117px hsl(631.8, 100%, 50%), -32px 118px hsl(637.2, 100%, 50%), -33px 119px hsl(642.6, 100%, 50%), -35px 120px hsl(648, 100%, 50%), -36px 121px hsl(653.4, 100%, 50%), -38px 122px hsl(658.8, 100%, 50%), -39px 123px hsl(664.2, 100%, 50%), -41px 124px hsl(669.6, 100%, 50%), -42px 125px hsl(675, 100%, 50%), -43px 126px hsl(680.4, 100%, 50%), -45px 127px hsl(685.8, 100%, 50%), -46px 128px hsl(691.2, 100%, 50%), -47px 129px hsl(696.6, 100%, 50%), -48px 130px hsl(702, 100%, 50%), -49px 131px hsl(707.4, 100%, 50%), -50px 132px hsl(712.8, 100%, 50%), -51px 133px hsl(718.2, 100%, 50%), -52px 134px hsl(723.6, 100%, 50%), -53px 135px hsl(729, 100%, 50%), -54px 136px hsl(734.4, 100%, 50%), -55px 137px hsl(739.8, 100%, 50%), -55px 138px hsl(745.2, 100%, 50%), -56px 139px hsl(750.6, 100%, 50%), -57px 140px hsl(756, 100%, 50%), -57px 141px hsl(761.4, 100%, 50%), -58px 142px hsl(766.8, 100%, 50%), -58px 143px hsl(772.2, 100%, 50%), -58px 144px hsl(777.6, 100%, 50%), -59px 145px hsl(783, 100%, 50%), -59px 146px hsl(788.4, 100%, 50%), -59px 147px hsl(793.8, 100%, 50%), -59px 148px hsl(799.2, 100%, 50%), -59px 149px hsl(804.6, 100%, 50%), -60px 150px hsl(810, 100%, 50%), -59px 151px hsl(815.4, 100%, 50%), -59px 152px hsl(820.8, 100%, 50%), -59px 153px hsl(826.2, 100%, 50%), -59px 154px hsl(831.6, 100%, 50%), -59px 155px hsl(837, 100%, 50%), -58px 156px hsl(842.4, 100%, 50%), -58px 157px hsl(847.8, 100%, 50%), -58px 158px hsl(853.2, 100%, 50%), -57px 159px hsl(858.6, 100%, 50%), -57px 160px hsl(864, 100%, 50%), -56px 161px hsl(869.4, 100%, 50%), -55px 162px hsl(874.8, 100%, 50%), -55px 163px hsl(880.2, 100%, 50%), -54px 164px hsl(885.6, 100%, 50%), -53px 165px hsl(891, 100%, 50%), -52px 166px hsl(896.4, 100%, 50%), -51px 167px hsl(901.8, 100%, 50%), -50px 168px hsl(907.2, 100%, 50%), -49px 169px hsl(912.6, 100%, 50%), -48px 170px hsl(918, 100%, 50%), -47px 171px hsl(923.4, 100%, 50%), -46px 172px hsl(928.8, 100%, 50%), -45px 173px hsl(934.2, 100%, 50%), -43px 174px hsl(939.6, 100%, 50%), -42px 175px hsl(945, 100%, 50%), -41px 176px hsl(950.4, 100%, 50%), -39px 177px hsl(955.8, 100%, 50%), -38px 178px hsl(961.2, 100%, 50%), -36px 179px hsl(966.6, 100%, 50%), -35px 180px hsl(972, 100%, 50%), -33px 181px hsl(977.4, 100%, 50%), -32px 182px hsl(982.8, 100%, 50%), -30px 183px hsl(988.2, 100%, 50%), -28px 184px hsl(993.6, 100%, 50%), -27px 185px hsl(999, 100%, 50%), -25px 186px hsl(1004.4, 100%, 50%), -23px 187px hsl(1009.8, 100%, 50%), -22px 188px hsl(1015.2, 100%, 50%), -20px 189px hsl(1020.6, 100%, 50%), -18px 190px hsl(1026, 100%, 50%), -16px 191px hsl(1031.4, 100%, 50%), -14px 192px hsl(1036.8, 100%, 50%), -13px 193px hsl(1042.2, 100%, 50%), -11px 194px hsl(1047.6, 100%, 50%), -9px 195px hsl(1053, 100%, 50%), -7px 196px hsl(1058.4, 100%, 50%), -5px 197px hsl(1063.8, 100%, 50%), -3px 198px hsl(1069.2, 100%, 50%), -1px 199px hsl(1074.6, 100%, 50%), -1px 200px hsl(1080, 100%, 50%), 1px 201px hsl(1085.4, 100%, 50%), 3px 202px hsl(1090.8, 100%, 50%), 5px 203px hsl(1096.2, 100%, 50%), 7px 204px hsl(1101.6, 100%, 50%), 9px 205px hsl(1107, 100%, 50%), 11px 206px hsl(1112.4, 100%, 50%), 13px 207px hsl(1117.8, 100%, 50%), 14px 208px hsl(1123.2, 100%, 50%), 16px 209px hsl(1128.6, 100%, 50%), 18px 210px hsl(1134, 100%, 50%), 20px 211px hsl(1139.4, 100%, 50%), 22px 212px hsl(1144.8, 100%, 50%), 23px 213px hsl(1150.2, 100%, 50%), 25px 214px hsl(1155.6, 100%, 50%), 27px 215px hsl(1161, 100%, 50%), 28px 216px hsl(1166.4, 100%, 50%), 30px 217px hsl(1171.8, 100%, 50%), 32px 218px hsl(1177.2, 100%, 50%), 33px 219px hsl(1182.6, 100%, 50%), 35px 220px hsl(1188, 100%, 50%), 36px 221px hsl(1193.4, 100%, 50%), 38px 222px hsl(1198.8, 100%, 50%), 39px 223px hsl(1204.2, 100%, 50%), 41px 224px hsl(1209.6, 100%, 50%), 42px 225px hsl(1215, 100%, 50%), 43px 226px hsl(1220.4, 100%, 50%), 45px 227px hsl(1225.8, 100%, 50%), 46px 228px hsl(1231.2, 100%, 50%), 47px 229px hsl(1236.6, 100%, 50%), 48px 230px hsl(1242, 100%, 50%), 49px 231px hsl(1247.4, 100%, 50%), 50px 232px hsl(1252.8, 100%, 50%), 51px 233px hsl(1258.2, 100%, 50%), 52px 234px hsl(1263.6, 100%, 50%), 53px 235px hsl(1269, 100%, 50%), 54px 236px hsl(1274.4, 100%, 50%), 55px 237px hsl(1279.8, 100%, 50%), 55px 238px hsl(1285.2, 100%, 50%), 56px 239px hsl(1290.6, 100%, 50%), 57px 240px hsl(1296, 100%, 50%), 57px 241px hsl(1301.4, 100%, 50%), 58px 242px hsl(1306.8, 100%, 50%), 58px 243px hsl(1312.2, 100%, 50%), 58px 244px hsl(1317.6, 100%, 50%), 59px 245px hsl(1323, 100%, 50%), 59px 246px hsl(1328.4, 100%, 50%), 59px 247px hsl(1333.8, 100%, 50%), 59px 248px hsl(1339.2, 100%, 50%), 59px 249px hsl(1344.6, 100%, 50%), 60px 250px hsl(1350, 100%, 50%), 59px 251px hsl(1355.4, 100%, 50%), 59px 252px hsl(1360.8, 100%, 50%), 59px 253px hsl(1366.2, 100%, 50%), 59px 254px hsl(1371.6, 100%, 50%), 59px 255px hsl(1377, 100%, 50%), 58px 256px hsl(1382.4, 100%, 50%), 58px 257px hsl(1387.8, 100%, 50%), 58px 258px hsl(1393.2, 100%, 50%), 57px 259px hsl(1398.6, 100%, 50%), 57px 260px hsl(1404, 100%, 50%), 56px 261px hsl(1409.4, 100%, 50%), 55px 262px hsl(1414.8, 100%, 50%), 55px 263px hsl(1420.2, 100%, 50%), 54px 264px hsl(1425.6, 100%, 50%), 53px 265px hsl(1431, 100%, 50%), 52px 266px hsl(1436.4, 100%, 50%), 51px 267px hsl(1441.8, 100%, 50%), 50px 268px hsl(1447.2, 100%, 50%), 49px 269px hsl(1452.6, 100%, 50%), 48px 270px hsl(1458, 100%, 50%), 47px 271px hsl(1463.4, 100%, 50%), 46px 272px hsl(1468.8, 100%, 50%), 45px 273px hsl(1474.2, 100%, 50%), 43px 274px hsl(1479.6, 100%, 50%), 42px 275px hsl(1485, 100%, 50%), 41px 276px hsl(1490.4, 100%, 50%), 39px 277px hsl(1495.8, 100%, 50%), 38px 278px hsl(1501.2, 100%, 50%), 36px 279px hsl(1506.6, 100%, 50%), 35px 280px hsl(1512, 100%, 50%), 33px 281px hsl(1517.4, 100%, 50%), 32px 282px hsl(1522.8, 100%, 50%), 30px 283px hsl(1528.2, 100%, 50%), 28px 284px hsl(1533.6, 100%, 50%), 27px 285px hsl(1539, 100%, 50%), 25px 286px hsl(1544.4, 100%, 50%), 23px 287px hsl(1549.8, 100%, 50%), 22px 288px hsl(1555.2, 100%, 50%), 20px 289px hsl(1560.6, 100%, 50%), 18px 290px hsl(1566, 100%, 50%), 16px 291px hsl(1571.4, 100%, 50%), 14px 292px hsl(1576.8, 100%, 50%), 13px 293px hsl(1582.2, 100%, 50%), 11px 294px hsl(1587.6, 100%, 50%), 9px 295px hsl(1593, 100%, 50%), 7px 296px hsl(1598.4, 100%, 50%), 5px 297px hsl(1603.8, 100%, 50%), 3px 298px hsl(1609.2, 100%, 50%), 1px 299px hsl(1614.6, 100%, 50%), 2px 300px hsl(1620, 100%, 50%), -1px 301px hsl(1625.4, 100%, 50%), -3px 302px hsl(1630.8, 100%, 50%), -5px 303px hsl(1636.2, 100%, 50%), -7px 304px hsl(1641.6, 100%, 50%), -9px 305px hsl(1647, 100%, 50%), -11px 306px hsl(1652.4, 100%, 50%), -13px 307px hsl(1657.8, 100%, 50%), -14px 308px hsl(1663.2, 100%, 50%), -16px 309px hsl(1668.6, 100%, 50%), -18px 310px hsl(1674, 100%, 50%), -20px 311px hsl(1679.4, 100%, 50%), -22px 312px hsl(1684.8, 100%, 50%), -23px 313px hsl(1690.2, 100%, 50%), -25px 314px hsl(1695.6, 100%, 50%), -27px 315px hsl(1701, 100%, 50%), -28px 316px hsl(1706.4, 100%, 50%), -30px 317px hsl(1711.8, 100%, 50%), -32px 318px hsl(1717.2, 100%, 50%), -33px 319px hsl(1722.6, 100%, 50%), -35px 320px hsl(1728, 100%, 50%), -36px 321px hsl(1733.4, 100%, 50%), -38px 322px hsl(1738.8, 100%, 50%), -39px 323px hsl(1744.2, 100%, 50%), -41px 324px hsl(1749.6, 100%, 50%), -42px 325px hsl(1755, 100%, 50%), -43px 326px hsl(1760.4, 100%, 50%), -45px 327px hsl(1765.8, 100%, 50%), -46px 328px hsl(1771.2, 100%, 50%), -47px 329px hsl(1776.6, 100%, 50%), -48px 330px hsl(1782, 100%, 50%), -49px 331px hsl(1787.4, 100%, 50%), -50px 332px hsl(1792.8, 100%, 50%), -51px 333px hsl(1798.2, 100%, 50%), -52px 334px hsl(1803.6, 100%, 50%), -53px 335px hsl(1809, 100%, 50%), -54px 336px hsl(1814.4, 100%, 50%), -55px 337px hsl(1819.8, 100%, 50%), -55px 338px hsl(1825.2, 100%, 50%), -56px 339px hsl(1830.6, 100%, 50%), -57px 340px hsl(1836, 100%, 50%), -57px 341px hsl(1841.4, 100%, 50%), -58px 342px hsl(1846.8, 100%, 50%), -58px 343px hsl(1852.2, 100%, 50%), -58px 344px hsl(1857.6, 100%, 50%), -59px 345px hsl(1863, 100%, 50%), -59px 346px hsl(1868.4, 100%, 50%), -59px 347px hsl(1873.8, 100%, 50%), -59px 348px hsl(1879.2, 100%, 50%), -59px 349px hsl(1884.6, 100%, 50%), -60px 350px hsl(1890, 100%, 50%), -59px 351px hsl(1895.4, 100%, 50%), -59px 352px hsl(1900.8, 100%, 50%), -59px 353px hsl(1906.2, 100%, 50%), -59px 354px hsl(1911.6, 100%, 50%), -59px 355px hsl(1917, 100%, 50%), -58px 356px hsl(1922.4, 100%, 50%), -58px 357px hsl(1927.8, 100%, 50%), -58px 358px hsl(1933.2, 100%, 50%), -57px 359px hsl(1938.6, 100%, 50%), -57px 360px hsl(1944, 100%, 50%), -56px 361px hsl(1949.4, 100%, 50%), -55px 362px hsl(1954.8, 100%, 50%), -55px 363px hsl(1960.2, 100%, 50%), -54px 364px hsl(1965.6, 100%, 50%), -53px 365px hsl(1971, 100%, 50%), -52px 366px hsl(1976.4, 100%, 50%), -51px 367px hsl(1981.8, 100%, 50%), -50px 368px hsl(1987.2, 100%, 50%), -49px 369px hsl(1992.6, 100%, 50%), -48px 370px hsl(1998, 100%, 50%), -47px 371px hsl(2003.4, 100%, 50%), -46px 372px hsl(2008.8, 100%, 50%), -45px 373px hsl(2014.2, 100%, 50%), -43px 374px hsl(2019.6, 100%, 50%), -42px 375px hsl(2025, 100%, 50%), -41px 376px hsl(2030.4, 100%, 50%), -39px 377px hsl(2035.8, 100%, 50%), -38px 378px hsl(2041.2, 100%, 50%), -36px 379px hsl(2046.6, 100%, 50%), -35px 380px hsl(2052, 100%, 50%), -33px 381px hsl(2057.4, 100%, 50%), -32px 382px hsl(2062.8, 100%, 50%), -30px 383px hsl(2068.2, 100%, 50%), -28px 384px hsl(2073.6, 100%, 50%), -27px 385px hsl(2079, 100%, 50%), -25px 386px hsl(2084.4, 100%, 50%), -23px 387px hsl(2089.8, 100%, 50%), -22px 388px hsl(2095.2, 100%, 50%), -20px 389px hsl(2100.6, 100%, 50%), -18px 390px hsl(2106, 100%, 50%), -16px 391px hsl(2111.4, 100%, 50%), -14px 392px hsl(2116.8, 100%, 50%), -13px 393px hsl(2122.2, 100%, 50%), -11px 394px hsl(2127.6, 100%, 50%), -9px 395px hsl(2133, 100%, 50%), -7px 396px hsl(2138.4, 100%, 50%), -5px 397px hsl(2143.8, 100%, 50%), -3px 398px hsl(2149.2, 100%, 50%), -1px 399px hsl(2154.6, 100%, 50%); font-size: 40px;";
// console.log("%cSCwwww33333333tttt!!!!!!!", rainbowcss);

//document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);

	// TODO this only really removes the piece that opens it...
	if (removePullDownBar) {
		var pullDownBar = window.parent.document.getElementsByClassName('x-layout-collapsed x-layout-collapsed-north x-layout-cmini-north');
		for (var i=0; i < pullDownBar.length;i++) {
			pullDownBar[i].remove();
		}
	}

//paintIt();



// TODO
// Look into how to stop "settings not installed" message on Task page...  i think this is fixed...
// ? Feed View box (with & without top?) - $("#entity_feed_" + fiveHunID)
// Fix issue with not being able to scroll through hover boxes
//logTrace('in4it');
// Check if the settings script has been installed, enabled and is first. Alert if not working...
//if ($("#ArrangeVars").length === 6 && ($(window.parent.document).find("#fiftyFrame").length || $(window.parent.document).find("#framePOP").length || $(window.parent.document).find("#frameDEF").length) === 0  && window.location.href.indexOf("ent=Task&") == -1)
//{ alert("ArrangeSC-v2 requires the ArrangeSC-Settings script in order to run. ArrangeSC-Settings is not installed, disabled, or is not in the proper execution order. Please install/enable/fix the execution order before using ArrangeSC-v2."); }


// Add Settings Button
addTemplateByClass("<li><a href='javascript:void(0)' id='asc_Settings_Launch'>SCw33t</a></li>", 'optionContainer');//onclick='init()'
document.getElementById("asc_Settings_Launch").addEventListener('click', init_settings, false);
document.getElementById("asc_Settings_Launch").addEventListener('click', init_settings, false);

//-----BEGIN: Collect Case Info-----
//var fiveHunID = $("div.bRelatedList:eq( 0 )").attr('id').replace("_RelatedActivityList", ""); //Collect the 500 ID  --old way

var caseNum = $(document).find("title").text().split(" ")[1];       // Collect Case #
var fiveHunAAID = window.location.href.split("/")[3].split("?")[0]; // Collect the full 500 ID
var fiveHunID = fiveHunAAID.slice(0,-3);                            // Collect the 500 ID
if(window.location.href.indexOf("&nonce=") > -1) { SID = window.location.href.split("&nonce=")[1].split("&")[0]; } // Collect the Session ID, if available alert("Session ID not found, some ArrangeSC functions may not work.");?
else { squareMonitor = false; enable5050 = false;} // Else disable features that break
var CID = $("#cas3_ileinner a").attr("href").replace("javascript:srcUp(%27%2F", "").replace("%3Fisdtp%3Dvw%27);","");// Collect Contact ID
//-----END: Collect Case Info-----

// TODO replace above with below

theCase = {
	num: pullTextByCellName('Case Number').trim().split(' ')[0],
	fiveHunAAID: fiveHunAAID,
	fiveHunID: fiveHunID,
	SID: SID,
	CID: CID,

	owner: pullTextByCellName('Case Owner').trim().split(' [')[0],
	type: pullTextByCellName('Case Type').trim(),
	tStage: pullTextByCellName('Troubleshooting Stage').trim(),
	sev: pullTextByCellName('Severity').trim().slice(0,1),
	naOwner: pullTextByCellName('Next Action Owner').trim(),
	naDue: pullTextByCellName('Next Action Due Date').trim(),
	siteId: pullTextByCellName('Tops Site ID').trim(),
	siteId: pullTextByCellName('Project ID').trim(),


	conName: pullTextByCellName('Contact Name').trim(),
	conEmail: pullTextByCellName('Contact Emaill').trim(),

	altName: pullTextByCellName('Alt Contact First Name').trim() + ' ' + pullTextByCellName('Alt Contact Last Name').trim(),
	altEmail: pullTextByCellName('Alternate email').trim(),


	product: pullTextByCellName('CA Product').trim(),
	productCode: pullTextByCellName('Product Code').trim(),
	component: pullTextByCellName('Component').trim(),
	release: pullTextByCellName('Product Release Selection').trim(),
	servicePack: pullTextByCellName('Product Service Pack Selection').trim(),

	isOpen: (pullTextByCellName({'name': "Troubleshooting Stage"}).indexOf('Open') > -1),
	isVerify: (pullTextByCellName({'name': "Troubleshooting Stage"}).indexOf('Verify') > -1),
	isClosed: (pullTextByCellName({'name': "Troubleshooting Stage"}).indexOf('Closed') > -1),





	/*escalated: pullTextByCellName('Escalated').trim(),// need oullCheckedByCellName?? */

	//
};
logTrace("theCase: " + JSON.stringify(theCase));

// setStyle(myTheme);

// TODO chekc last comment date, alert if 5+ days...
// TODO alert not your case, add yourself to the case team??
// TODO add alert info internal ca... alert Help Required...alert QJ... alert select ...alert guarenteed avail...
// TODO add button to buttons: reassign case (make sure there is confirmbox)
// TODO based on OS, mini pic in title bar?


// Add Alerts box:
$('<div style="display:none;" id="alertHider"><div class="brandTertiaryBrd pbSubheader tertiaryPalette" id="head_arrangeSC-alertBox_ep"><img src="/s.gif" alt="Hide Section - SCw33t Alerts!" class="hideListButton" id="img_arrangeSC-alertBox" name="SCw33t Alerts!" onclick="twistSection(this);" onkeypress="if (event.keyCode==\'13\')twistSection(this);" style="cursor:pointer;" tabindex="0" title="Hide Section - SCw33t Alerts!"><h3>SCw33t Alerts!<span class="titleSeparatingColon">:</span></h3><h3> ( </h3><h3 id="numAlerts">0</h3><h3> )</h3></div><div class="pbSubsection" id="body_arrangeSC-alertBox_ep" style="display: block;"></div></div>').appendTo('body');
$('<table id="arrangeSC-alertBox-table-0" class="detailList"></table>').appendTo("#body_arrangeSC-alertBox_ep"); // headers? <th class=\'labelCol\' style="min-width:75px;">Level</th><th class=\'dataCol\' style="width:100%;">Details</th>
$('<table id="arrangeSC-alertBox-table-1" class="detailList"></table>').appendTo("#body_arrangeSC-alertBox_ep");
$('<table id="arrangeSC-alertBox-table-2" class="detailList"></table>').appendTo("#body_arrangeSC-alertBox_ep");
$('<table id="arrangeSC-alertBox-table-3" class="detailList"></table>').appendTo("#body_arrangeSC-alertBox_ep");
$('<table id="arrangeSC-alertBox-No-Alerts" style="width:auto;" class="detailList"><tr><td align=\'right\' style=\'min-width:75px; word-wrap: break-word;\'></td><td style=\'width:100%; word-wrap: break-word;\'>-- No Alerts --</td></tr></table>').appendTo("#body_arrangeSC-alertBox_ep");

// addAlert(1, "This is a test of the <a href='www.google.com'>automated</a> alert function. <br /> This is <br /> a multi-line <br /> message");
// addAlert(0, "This is a test of the <a href='www.google.com'>automated</a> alert function.");
// addAlert(2, "This is a test of the <a href='www.google.com'>automated</a> alert function.");
// addAlert(3, "This is a test of the <a href='www.google.com'>automated</a> alert function.");
// addAlert(1, 'DE123456 has no corresponding SE Activity! Create ' + '<a id="seActPOP" onclick=\'$("#makeSEact_" +).click();\'>SE Action</a>' + ' or ' + '<a id="seInfoPOP" onclick=\'$("#makeSEinfo_").click();\'>SE Info</a>' );


theBoxes2 = {};

//------ID the Bodies------
$("div.pbSubheader").each(
	function() {

		var thisId = this.id.replace(/head_|_ep/ig,'');

		var thisBox = {
			title: $(this).children("h3").first().text().replace(/:/g,''),
			id: thisId,
			collapseBtn: "#img_" + thisId,
			head: "head_" + thisId + "_ep",
			body: "body_" + thisId + "_ep",
			pid: "#head_" + thisId + "_ep, #body_" + thisId + "_ep",
			type: 'list',
			target: null,
			// TODO add each list item as their name...
		};

		// Add an ID to the body piece since there is none.
		$(this).next().attr('id', thisBox.body);

		theBoxes2[thisBox.title] = thisBox;
	}
);

$("div.bRelatedList").each(
	function() {

		//var this500Id = this.id.split('_')[0];
		//var thisUniq = this.id.split('_')[1];
		var thisId = this.id;

		var thisBox = {
			title: $('#' + thisId + "_title").text(), //500a000001EpzxC_RelatedTeamMemberList_title
			titleId: '#' + thisId + "_title",
			id: thisId,
			pid: '#'+ thisId,
			collapseBtn: "#img_" + thisId,
			head: null,
			body: thisId + "_body",

			type: 'rel',
			target: thisId + "_target",
			// TODO should I collect more? buttons in head?
		};

		theBoxes2[thisBox.title] = thisBox;
	}
);

// for (var box in theBoxes2) {
	// if (theBoxes2[box].boxType == 'rel') {
		// alert(box);
		// alert(JSON.stringify(theBoxes2[box]));
	// }

// }


// TODO add function to compare settings to boxes & make sure all used boxes still exist!


/*

	// TODO Auto generate theBoxes...
var theBoxes = {
    // Details Boxes
	prodDetailID: ["#head_01Ba000000E3Y8V_ep, #body_01Ba000000E3Y8V_ep", "Product Detail", "l"],            // ID for Product Detail
	caseResID: ["#head_01Ba000000E3Y8W_ep, #body_01Ba000000E3Y8W_ep", "Case Resolution", "l"],                 // ID for Case Resolution
	prodOfferingID: ["#head_01Ba000000E3Y8X_ep, #body_01Ba000000E3Y8X_ep", "Product and Offering", "l"],  // ID for Product and Offering
	supDetailsID: ["#head_01Ba000000E3Y8Y_ep, #body_01Ba000000E3Y8Y_ep", "Supplemental Details", "l"],      // ID for Supplemental Details
	// Details Boxes
	caseInfoID: ["#head_01Ba000000ETFux_ep, #body_01Ba000000ETFux_ep", "Case Information", "l"],              // ID for Case Information
	detailsID: ["#head_01Ba000000ETFuz_ep, #body_01Ba000000ETFuz_ep", "Details", "l"],                         // ID for Details
	//advInfoID: ["#head_01Ba000000ETFv0_ep, #advInfoBody", "Advanced Information", "l"],          // ID for Advanced Information - removed 4/21 2017
	//componentID: ["#head_01Ba000000ETFv1_ep, #componentBody", "Search-Select CA Product and Component", "l"], // ID for Search/Select CA Product and Component
	//prodDetailsID: ["#head_01Ba000000ETFv2_ep, #prodDetailsBody", "Product Details", "l"],       // ID for Product Details
	altContactID: ["#head_01Ba000000ETFv3_ep, #body_01Ba000000ETFv3_ep", "Alt Contact Information", "l"], // ID for Alt Contact Information
	auditHistoryID: ["#head_01Ba000000ETFv4_ep, #body_01Ba000000ETFv4_ep", "Case Audit History", "l"],  // ID for Case Audit History
	alertBoxID: ["#head_arrangeSC-alertBox_ep, #body_arrangeSC-alertBox_ep", "Alerts!", "l"],          // ID for ArrangeSC Alert Box
    // Related List Boxes
    openActsID: ["#" + fiveHunID + "_RelatedActivityList", "Open Activities", "r"],              // ID for Open Activities
    actHistoryID: ["#" + fiveHunID + "_RelatedHistoryList", "Activity History", "r"],            // ID for Activity History
    caseTeamID: ["#" + fiveHunID + "_RelatedTeamMemberList", "Case Team", "r"],                  // ID for Case Team
    attachmentsID: ["#" + fiveHunID + "_RelatedAttachmentList", "Attachments", "r"],             // ID for Attachments
    caseCommentsID: ["#" + fiveHunID + "_RelatedCommentsList", "Case Comments", "r"],            // ID for Case Comments
    sftpAttachmentsID: ["#" + fiveHunID + "_00Na000000ArhjW", "SFTP File Attachments", "r"],     // ID for SFTP File Attachments
    relCasesID: ["#" + fiveHunID + "_RelatedChildCaseList", "Related Cases", "r"],               // ID for Related Cases
    extReqsID: ["#" + fiveHunID + "_00Na000000Arhi2", "External Requests", "r"],                 // ID for External Requests
    kbArtsID: ["#" + fiveHunID + "_00Na000000BFxGs", "KB Articles", "r"],                        // ID for KB Articles
    emailsID: ["#" + fiveHunID + "_RelatedEmailMessageList", "Emails", "r"],                     // ID for Emails
    caseReviewsID: ["#" + fiveHunID + "_00Na000000BLy1J", "Case Reviews", "r"],                  // ID for Case Reviews
    chatTransID: ["#" + fiveHunID + "_RelatedLiveChatTranscriptList", "Live Chat Transcripts", "r"], // ID for Live Chat Transcripts
    defectsID: ["#" + fiveHunID + "_00Na000000BFxGt", "Related Defects", "r"],                   // ID for Related Defects
    caseHistoryID: ["#" + fiveHunID + "_RelatedEntityHistoryList", "Case History", "r"],         // ID for Case History
    relContentID: ["#" + fiveHunID + "_00Na000000AxMex", "Related Content", "r"] };       // ID for Related Content


	*/



var emptyID = "";                   // ID for creating empty space
//var fiftyFrameID = "#fiftyFrame"; // ID for 50/50 Iframe
//------Bodies Successfully Identified------

/*/BEGIN: Related List Collapse Style
$(`<style id="Arrange_Related_List_Collapse_Style">
.hideListButtonR { background: transparent url('/img/alohaSkin/twisty_sprite.png') 0 -11px no-repeat !important;
margin-right: 4px !important;
border: 0 !important;
height: 11px !important;
width: 11px !important;
}
.showListButtonR { background: transparent url('/img/alohaSkin/twisty_sprite.png') 0 0 no-repeat !important;
margin-right: 4px !important;
border: 0 !important;
height: 11px !important;
width: 11px !important;
}
</style>`).appendTo($('body'));
//END: Related List Collapse Style*/

//--BEGIN: Square monitor table style options
/*
if (squareMonitor) {
    $(`<style id="Arrange_Square_Style">
table .sqTB { width: 100% !important;
padding: 1px !important;
border-top-width: 0px !important;
border-bottom-width: 1px !important;
border-left-width: 0px !important;
border-right-width: 0px !important;
border-style: solid !important;
border-color: grey !important;
}
th .sqTH { border: 0 none !important;
}
tr .sqTR { border: 0 none !important;
padding: 0px !important;
}
.sqTD { padding: 0px !important;
margin: 1px !important;
border-top-width: 0px !important;
border-bottom-width: 0px !important;
border-left-width: 0px !important;
border-right-width: 0px !important;
border-style: none !important;
}
.sqTD span {
color: #54698d !important;
font-weight: normal !important;
font-size: .9em !important;
}
.labelSpan {
color: #54698d !important;
font-weight: normal !important;
font-size: .9em !important;
}
</style>`).appendTo($('body'));
}
*/
//--END: Square monitor table style options
var needToDismiss = false; // Are there open callbacks?
// TODO fix needToDismiss on other pages







var loopTime = 200; // Set time between loops (ms)
var loops = 30;     // Set max loops to avoid overrun
var lps = 1;        // Starting at loop 1
loop1();            // Run the loop
var myInterval = setInterval(function() { loop1(); }, loopTime); // Continue running on interval
var foundIt = 0;    // Haven't found the info we are waiting for
var FIAHold = 0;    // For use with Show More >> & squareMonitor/popup emails, needs to re-do changes.

function loop1(argss) {
    if (foundIt === 0) { // If foundIt = 0, page is not ready to execute the following code, loop again
        //alert("looping");
        lps += 1; // Add to loop counter (to avoid endless loop)
        if (lps >= loops) { clearInterval(myInterval); } // If there have been more loops than max, stop trying to loop
        //alert($("table.list tr.dataRow").length +" - "+ FIAHold);
        if ($("table.list tr.dataRow").length > 0) { // If "table.list tr.dataRow" exists, ensure page is ready
            if (FIAHold === 0) { foundIt = 1; } // For initial page load, if not a "Show More" re-check page is ready
            else if ($("table.list tr.dataRow").length > FIAHold) { foundIt = 1; } // For re-check when Show-more button is clicked, if additioanl dataRows have been added page is ready
        }

        if (foundIt) { // If Page is ready execute, otherwise skip and loop again

		// Case status alerts
// If not closed, lets make some alerts...
if (theCase.isClosed == false) {

	// Next acction check
	logTrace("Checking Next Action...");
	var compared = compareDTNow($("#" + pullIdByCellName("Next Action Due Date")).text());

	if (compared.tense == 'today') {
		addAlert(1,"Your next action is set for TODAY! In " + compared.timeLeft);
		addClassByCellName({'name': "Next Action Due Date", "className": "warningCell", "mod": "both"});
	} else if (compared.tense == 'past') {
		addClassByCellName({'name': "Next Action Due Date", "className": "alertText", "mod": "both"});
		addAlert(1,"Your next action has expired! " + compared.timeLeft);
	} else if (compared.tense == 'future') {
		//addAlert(3,"Your next action is OK! " + compared.timeLeft);
	}

	if (compared.tense == 'future' || compared.tense == 'today') {
		var naCell = $("#" + pullIdByCellName("Next Action Due Date"));
		naCell.text(naCell.text() + ' (' + compared.timeLeft + ')');
	}

	// Empty Field Checks
	logTrace("Checking for empty required fields...");
	var fieldsToCheck = ["Symptom", "Root Cause Category", "Root Cause Subcategory", "Case Reason", "Resolution",
								  "Product Release","CA Product","Component","Product Code","Product Release Selection"];

	if (theCase.sev <= 2) {
		logTrace("Sev is 2 or greater, adding additional empty field checks.");
		fieldsToCheck.push("Business Impact");
	}

	if (theCase.sev == 1) {
		logTrace("Sev is 1, adding additional empty field checks.");
		fieldsToCheck.push("Severity 1 Impact", "Production Down Status","SDM Owner");

		logTrace("Sev is 1, adding alert styles.");
		addClassByCellName({'name': "Severity", "className": "alertCell", "mod": "both"});
		// $("#" + pullIdByCellName()).addClass('alertCell');
	}

	var stgNum = parseInt($("#" + pullIdByCellName("Troubleshooting Stage")).text().trim().split('. ')[0]);
	bgPercent(stgNum,7,$("#" + pullIdByCellName("Troubleshooting Stage")).parent());

	var emptyFields=[];// = '';

	for (var field in fieldsToCheck) {
		var txt = pullTextByCellName({'name': fieldsToCheck[field]});
		//console.log("'"+txt+"'");
		if (txt.length <= 2) {
			// document.getElementById('aa').dispatchEvent(new MouseEvent('dblclick'),{'view': window,'bubbles': true,'cancelable': true});
			// set a href to the anchor so the page moves there??
			//emptyFields += ('<a href="javascript:void(0)" onclick="$(\'#' + pullIdByCellName({'name':fieldsToCheck[field]}) + '\').dblclick();" >' + fieldsToCheck[field] + '</a>');
			emptyFields.push(fieldsToCheck[field]);
			addClassByCellName({'name': fieldsToCheck[field], "className": "alertBg"});
		}
	}

	if (emptyFields.length) {
		if (parseInt(pullTextByCellName({name: "Troubleshooting Stage"}).split('.')[0]) >= 5) {
			logTrace("Troubleshooting stage >= 5, generating empty field alert at Alert level instead of Warning.");
			addAlert(1, '<b>The following important fields have not been filled out:</b> <br />' + emptyFields);
		} else {
			logTrace("Generating empty field alert at default level of Warning.");
			addAlert(2, '<b>The following important fields have not been filled out:</b> <br />' + emptyFields);
		}
	} else {
		// TODO decide if I want to generate an alert here saying OK!
		logTrace("No empty fields found. No alert will be generated.");
	}

  var ownerCell = $("#" + pullIdByCellName("Case Owner")).parent();
  if (theCase.owner == myself.name) {
   ownerCell.css('background-color', myself.color);
  } else {
    for (var teamMate in myTeam) {
      if (theCase.owner == myTeam[teamMate].name) {
        ownerCell.css({"background-color": myTeam[teamMate].color});
      }
    }
  }

	// Check if last item in Case History is > 5 days old?
	// alert(compareDTNow(cellPull2('t',"Date",theBoxes2["Case History"].pid,0)));

} else {
	addAlert(3, "This case is closed, case status alerts not processed.");
}


           // if (lockTopBar) { updateBodyMargin(); } // Update body margin for lock top bar

			// BEGIN: "Create Se Action" Alerts
			// TODO logic needs some work :/ how to handle closed DE & closed Acts...
			// I think I fixed it with seperate if statements... needs to be re-evaluated still
			//buttGen("newTask2", "New Task 2","https://ca.my.salesforce.com/00T/e?who_id=" + CID + "&what_id=" + fiveHunID + "&retURL=/"+ fiveHunAAID + "?nooverride=1&RecordType=012a00000018GH8&ent=Task&isdtp=vw&ctestDe=DE123456&ctestSev=2", "New Task");
			if ($(theBoxes2["Related Defects"].pid + " th a").length > 0) {
				if ($(theBoxes2["Related Defects"].pid + " table.list tr.dataRow").length > 0) {
					var seActs = [];
					var defs = [];
					var needed = [];
					var notneeded = 0;

					var bodyID = theBoxes2["Open Activities"].pid;
					for (i = 0; i < $(bodyID + " table.list tr.dataRow").length; i++) {
						// if ($(bodyID + " table.list .dataCell.cellCol2:eq( " + i + " )").text() != ("SE Action" || "SE Info")) { }
						// else { seActs.push($(bodyID + " table.list .dataCell.cellCol1:eq( " + i + " )").text()); }
						if ($(bodyID + " table.list .dataCell.cellCol2:eq( " + i + " )").text()  == ("SE Action" || "SE Info")) {
							seActs.push($(bodyID + " table.list .dataCell.cellCol1:eq( " + i + " )").text());
						}
					}

					bodyID = theBoxes2["Related Defects"].pid;
					var closedDECount = 0;
					for (var i = 0; i < $(bodyID + " table.list tr.dataRow").length; i++) {
						if ($(bodyID + " table.list .dataCell.cellCol2:eq( " + i + " )").text() == "Closed") {
						closedDECount += 1;
						}

						defs.push(i + "-" + $(bodyID + " table.list .dataCell.cellCol1:eq( " + i + " )").text());

					}
					logTrace("seActs.length: "+seActs.length + " defs.length: "+ defs.length);

					// TODO add alert with quick links to defects?
					// if (seActs.length > defs.length - closedDECount) {
						// addAlert(3, "You have more SE Action/SE Info tasks than open defects. Consider closing the extras.");
					// }
					// Too many SE?!
					if (seActs.length > defs.length - closedDECount) {
						addAlert(3, "You have more SE Action/SE Info tasks than open defects. Consider closing the extras.");
					}

                    //else if (seActs.length == defs.length) {  }  // if #SE and #DE are equal, they should each have one
                    if (seActs.length < defs.length) {        // If more defects than SE actions, something is missing
                        for (var i = 0; i < defs.length; i++) {    // Check each DE & SE to see if there are corresponding actions
                            if ($('#' + theBoxes2["Open Activities"].id + " table.list tr.dataRow").length > 0) {
                                for (var j = 0; j < seActs.length; j++) {
                                    if (seActs[j].indexOf(defs[i].split("-")[1]) > -1) {
										notneeded++;
									}//needed.push(defs[i]); } // Open Activity Found with DE in title, doesn't need
									else {
										needed.push(defs[i]);
									} // Open Activity Not found with DE in title, may need one
								}
							} else { needed.push(defs[i]); }       // No Open Activities at all... needs one
						}

						if (seActs.length - notneeded === 0) {      // All SEs have a DE in title, Create individual alerts for remaining DEs
							for (var i = 0; i < needed.length; i++) {
								var loc = "https://ca.my.salesforce.com/00T/e?who_id=" + CID + "&what_id=" + fiveHunID + "&retURL=/"+ fiveHunAAID + "?nooverride=1&RecordType=012a00000018GH8&ent=Task&isdtp=vw&deNum=" + needed[i].split("-")[1] + "&deSev=" + $("#00Na000000ArhhL_ileinner").text();
								$("<a id='makeSEact_" + needed[i].split("-")[0] + "' href='javascript:void(0)'></a>").appendTo("#alertHider").click(function() { popIt("frameDEF", loc + "&seType=action", "Create SE Action", "New Task"); } );
								$("<a id='makeSEinfo_" + needed[i].split("-")[0] + "' href='javascript:void(0)'></a>").appendTo("#alertHider").click(function() { popIt("frameDEF", loc + "&seType=info", "Create SE Info", "New Task"); } );
								$("<b style='color: red;'>NoSE - </b>").prependTo($(bodyID + "_body table.list .dataCell.cellCol1:eq( " + needed[i].split("-")[0] + " )"));
								addAlert(1, needed[i].split("-")[1] + ' has no corresponding SE Activity! Create ' + '<a id="seActPOP" onclick=\'document.getElementById("makeSEact_' + needed[i].split("-")[0] + '").click();\'>SE Action</a>' + ' or ' + '<a id="seInfoPOP" onclick=\'document.getElementById("makeSEinfo_' + needed[i].split("-")[0] + '").click();\'>SE Info</a>' );
							}
						} else if (seActs.length - notneeded > 0) {
							// NO SEs have a DE in title, Create 1 Generic alert for remaining DEs w/o specific SE
                            var alertText = "One or more defects do not have corresponding SE Activity! Create:";
                            for (var i = 0; i < needed.length; i++) {
                                var loc = "https://ca.my.salesforce.com/00T/e?who_id=" + CID + "&what_id=" + fiveHunID + "&retURL=/"+ fiveHunAAID + "?nooverride=1&RecordType=012a00000018GH8&ent=Task&isdtp=vw&deNum=" + needed[i].split("-")[1] + "&deSev=" + $("#00Na000000ArhhL_ileinner").text();
                                $("<a id='makeSEact_" + needed[i].split("-")[0] + "' href='javascript:void(0)'></a>").click(function() { popIt("frameDEF", loc + "&seType=action", "Create SE Action", "New Task"); } ).appendTo("#alertHider");
                                $("<a id='makeSEinfo_" + needed[i].split("-")[0] + "' href='javascript:void(0)'></a>").click(function() { popIt("frameDEF", loc + "&seType=info", "Create SE Info", "New Task"); } ).appendTo("#alertHider");
                                alertText += '<br />' + needed[i].split("-")[1] + ': Create <a id="seActPOP" href=\'javascript:void(0)\' onclick=\'$("#makeSEact_' + needed[i].split("-")[0] + '").click();\'>SE Action</a>' + ' or ' + '<a id="seInfoPOP" href=\'javascript:void(0)\' onclick=\'$("#makeSEinfo_' + needed[i].split("-")[0] + '").click();\'>SE Info</a>';
                            }
                            addAlert(1, alertText);
                        }
                    }
                }
            }
            // END: "Create Se Action" Alerts

            //--BEGIN: Remove " | " from action columns to make them smaller--
            if ($("td.actionColumn").length > 0 ) {
                $("td.actionColumn").each(
                    function() {
                        var that = $(this).html().replace(/\&nbsp;\|\&nbsp;/g, "\<br /\>");
                        $(this).html(that);
                    }
                );
            }
            //--END: Remove " | " from actuion columns to make them smaller--



            //--BEGIN: Add Compress comments button--
            // TODO make expand work
            // on click...
            // - determine which of the below actions to do... look for "-----Original Message-----", "/\\-----Original Message-----/\\" & "\\/-----Original Message-----\\/" to figure out which case.
            // on FIRST compress:
            // - change "-----Original Message-----" to "\\/-----Original Message-----\\/"
            // - Highlight "\\/-----Original Message-----\\/"
            // - everything below "\\/-----Original Message-----\\/" goes into a new hidden div
            // on future cocmpress:
            // - change "/\\-----Original Message-----/\\" to "\\/-----Original Message-----\\/"
            // - Change highlight color?
            // - re-hide div
            // on expand:
            // - change "\\/-----Original Message-----\\/" to "/\\-----Original Message-----/\\"
            // - keep highlight (change color?)
            // - unhide div


// TODO add function to re-even-odd label comments
			var commentsBody = "#" + theBoxes2["Case Comments"].body;
            if (enableCompression && $(commentsBody + " table.list tr.dataRow").length > 0 && $("#compressComments").length < 1)
            {
                $(commentsBody + " table.list tr.dataRow").last().removeClass('last');
                $("<input/>").attr({"id": "compressComments", "value": "Compress All \\/", "title": "Compress or Expand Comments", "type": "button", "class": "btn ca-button"}).click(
                    function()
                    {
                        //var holdComments = ;

                        for (cell in $(commentsBody + " table.list tr.dataRow td.dataCell")) {
                            try {
                                // TODO if cell is number...
                                $(commentsBody + " table.list tr.dataRow td.dataCell:eq(" + cell + ")").html($(commentsBody + " table.list tr.dataRow td.dataCell:eq(" + cell + ")").html().toString().split("-----Original Message-----")[0]);
                            }
                            catch(e) {
								console.log("compress comment fail " + cell + " :: " + e)
							}
                        }
                        if ($("#compressComments").attr("value").indexOf("\\/") > -1) {
                            $("#compressComments").attr("value","Compress All /\\");
                        } else {
                            $("#compressComments").attr("value","Expand All \\/");
                        }
                    }
                ).appendTo($(theBoxes2["Case Comments"].pid + " td.pbButton"));
            }
            //--END: Add Compress comments button--

            //--BEGIN: Add filter comments dropdown--
            //alert(enableCommentFilters + ' cfl: ' + $("#cFilter").length);
            if (enableCommentFilters && $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow").length > 0 && $("#cFilter").length < 1) {
                $('<select id="cFilter" ></select>').change(
                    function() {
                        $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow").each(
                            function() {
                                var creater = $(this).children(" td.dataCell").text().split("Created By: ")[1].split(" (")[0].trim(); // get creater
                                var line2 = $(this).children(" td.dataCell").html().split("<br>")[1].split("<br>")[0];                // get line 2
                                try { var l2creater = line2.split("Created By: ")[1].split(" (")[0].trim(); } catch(e) {}           // check for sub-creater
                                try { var l2defect = line2.split("Defect # ")[1].split("Updated")[0].trim(); } catch(e) {}          // check if defect comment
                                var contactEmail = $("#cas10_ileinner").text(); // get main contact name
                                var contactName = $("#cas3_ileinner").text();   // get main contact email
                                var cFiltered = $("#cFilter option:selected");

                                try {
                                    if (cFiltered.val() == 0) { $(this).css('display','table-row'); }                                                                                       // if "all" display all
                                    else if (cFiltered.val() == 1 && l2defect !== undefined) { $(this).css('display','table-row'); }                                                        // if defect, display defect comments
                                    else if (cFiltered.val() == 2 && (creater === "attachmenteaiintegration" || l2creater === "EAIIntegration" || l2creater === "EAI Integration")) { $(this).css('display','table-row'); }    // if attachments, display attachment commetns
                                    else if (cFiltered.text() == creater || cFiltered.text() == l2creater) { $(this).css('display','table-row'); }                                          // if specified creater, display only that persons comments
                                    else if (cFiltered.text().toLowerCase() == contactName.toLowerCase() && (l2creater == contactEmail || l2creater.toLowerCase() == contactEmail.toLowerCase())) { $(this).css('display','table-row'); }                                          // if specified creater is main contact, also display updates from their email
                                    else { $(this).css('display','none'); }                                                                                                                 // else it doesn't belong, hide it
                                } catch(e) {
									$(this).css('display','none');
								}
                            });

                    }
                ).appendTo($(theBoxes2["Case Comments"].pid + " td.pbButton"));

                // Add default options
                $('<option id="cFilter-AllComments" selected="selected" value="0">-- All Comments --</option>').appendTo("#cFilter");
                $('<option id="cFilter-DefectComments" value="1">- All Defect Comments</option>').appendTo("#cFilter");
                $('<option id="cFilter-attachments" value="2">- Attachments</option>').appendTo("#cFilter");
                var holdComments = $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow");

                for (i = 0; i < holdComments.length; i++) {
                    var creater = $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow:eq("+i+") td.dataCell").text().split("Created By: ")[1].split(" (")[0].trim(); // get creater
                    var line2 = $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow:eq("+i+") td.dataCell").html().split("<br>")[1].split("<br>")[0];     // get line 2
                    try { var l2creater = line2.split("<br>")[0].split("Created By: ")[1].split(" (")[0].trim(); } catch(err) {}
                    var contactEmail = $("#cas10_ileinner").text();
                    var contactName = $("#cas3_ileinner").text();

                    if (creater == "Case ActivityEaiIntegration" || creater == "attachmenteaiintegration" || creater == "EAIIntegration" || l2creater == "EAI Integration" || l2creater == "EAIIntegration") { } // exclude attachment entries, handled separately
                    else if (creater != "Support Integration" && $('#cFilter option').text().indexOf(creater) == -1) { $('<option id="' + creater.replace(" ","") + '" value="' + creater.replace(" ","") + '">' + creater + '</option>').appendTo("#cFilter"); }
                    else if (creater == "Support Integration" && l2creater !== undefined && $('#cFilter option').text().indexOf(l2creater) == -1 && l2creater.toLowerCase() != contactEmail.toLowerCase()) { $('<option id="' + l2creater.replace(" ","") + '" value="' + l2creater.replace(" ","") + '">' + l2creater + '</option>').appendTo("#cFilter"); }
                    //else $('<option id="cFilter-CaseComments" value="2">Case Comments</option>').appendTo("#cFilter");

                }

                var myHilitors = [];

                $('<input type="text" id="cFilter-txt" ></input>').change(
                    function()
                    {
                        if ($("#cFilter-rx").is(':checked'))
                        {
                            //var matches;
                            var re = new RegExp($("#cFilter-txt").val(), "ig");
                            $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow").each(
                                function()
                                {
                                    //matches = $(this).text().match(re);
                                    if (re.test($(this).text())) // if filter text is present
                                    {
                                        $(this).css('display','table-row');

                                        // add match highlight
                                        myHilitors.push(new Hilitor($(this)));
                                        myHilitors[myHilitors.length-1].setMatchType('open');
                                        myHilitors[myHilitors.length-1].apply($("#cFilter-txt").val());
                                        //$(this).text().replace(re, "");
                                    }
                                    else  // else it doesn't belong, hide it
                                    {
                                        $(this).css('display','none');
                                    }
                                }
                            );

                        }
                        else
                        {
                            $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow").each(
                                function()
                                {
                                    if ($(this).text().toLowerCase().indexOf($("#cFilter-txt").val().toLowerCase()) > -1) // if filter text is present
                                    {
                                        $(this).css('display','table-row');

                                        // add match highlight
                                        myHilitors.push(new Hilitor($(this)));
                                        myHilitors[myHilitors.length-1].setMatchType('open');
                                        myHilitors[myHilitors.length-1].apply($("#cFilter-txt").val());
                                    }
                                    else  // else it doesn't belong, hide it
                                    {
                                        $(this).css('display','none');
                                    }
                                }
                            );
                        }

                    } ).appendTo($(theBoxes2["Case Comments"].pid + " td.pbButton"));

                // Regex tut... https://www.w3schools.com/jsref/jsref_obj_regexp.asp
                $('<input type="checkbox" id="cFilter-rx">Rx</input>').appendTo($(theBoxes2["Case Comments"].pid + " td.pbButton"));
                $('<a href="#cFilter-clr" id="cFilter-clr"> Clear</a>').click(
                    function()
                    {
                        $(theBoxes2["Case Comments"].pid + " table.list tr.dataRow").each(
                            function()
                            {
                                $(this).css('display','table-row'); // set all rows visible
                                $("#cFilter-txt").val('');// clear textbox
                                var h = 0;
                                myHilitors.forEach(
                                    function()
                                    {
                                        myHilitors[h].remove();
                                        h++;
                                    }
                                ); // clear highlighting
                                myHilitors = [];
                            }
                        );

                    } ).appendTo($(theBoxes2["Case Comments"].pid + " td.pbButton"));
            }
            //--END: Add filter comments dropdown--

				for (var thisBox in theBoxes2) {
					scweeten(theBoxes2[thisBox].title); //can i just pass thisBox????
				}


            // BEGIN: Show More fix for square monitor changes & pop-up emails
            if ($("div.pShowMore a").length > 0) {
                for (i = 0; i < $("div.pShowMore a").length - 1; i++)
                {
                    if ($("div.pShowMore a:eq(" + i + ")").attr('href').indexOf("showXMore") > -1)
                    {
                        $("div.pShowMore a:eq(" + i + ")").click(
                            function()
                            {
                                foundIt = 0;
                                lps = 1;
                                foundITAgain = 1;
                                FIAHold = $("table.list tr.dataRow").length;
                                loop1("a");
                            }
                        ); // END: function/click
                    } // END: if indexOf "showXMore"
                } // END: for i
            } // END: if show more
            // END: Show More fix for square monitor changes & pop-up emails



            // BEGIN: Add Collapse button to Related Lists
            for (var key in theBoxes2) {
				logTrace('Adding Collpse Button to: ' + key);
                // if (theBoxes[key][2] == "r" && $("#" + "img_" + theBoxes[key][1].replace(/ /g, "_")).length < 1) {
                if ($(theBoxes2[key].collapseBtn).length < 1) {
                    $(theBoxes2[key].titleId)  // TODO .parent()  <will put it in the same placce as others, but its white and still odesnt ork on settings...
                        .prepend($('<img src="/s.gif" alt="Hide Section - ' + key + '" class="hideListButton" id="' + theBoxes2[key].collapseBtn.replace('#','') + '" name="' + key + '" onclick=" \n' +
                                   'if ($(\'#' + theBoxes2[key].body + '\').css(\'display\') == \'none\') \n' +
                                   '    { $(\'#' + theBoxes2[key].body + '\').css({\'display\': \'block\'}); $(\'' + theBoxes2[key].collapseBtn+ '\').attr({\'class\': \'hideListButton\', \'title\': \'Hide Section - ' + key + '\', \'alt\': \'Hide Section - ' + key + '\'}); } \n' +
                                   'else \n' +
                                   '    {$(\'' + theBoxes2[key].collapseBtn + '\').attr({\'class\': \'showListButton\', \'title\': \'Show Section - ' + key + '\', \'alt\': \'Show Section - ' + key + '\'}); $(\'#' + theBoxes2[key].body  + '\').css({\'display\': \'none\'});  }" \n' +
                                   'style="cursor:pointer;" tabindex="0" title="Hide Section - ' + key + '">'));

                    // If Related List is set to be collapsed on load, collapse it
                    if (cCollapsedObjects.indexOf(key) >= 0 && $(theBoxes2[key].collapseBtn).attr('class') != 'showListButton') {
                        $(theBoxes2[key].collapseBtn).click();
                    }
                } // END: if
            }// END: for theBoxes
            // END: Add Collapse button to Related Lists


        } // END: foundit 1
    } // END: if foundIt 0
} // END: loops

//-------------Advanced Style Options----------------------
// Adjust the margin and width allotment...
// TODO merge to css
// $("td.labelCol").css({'margin-left': '3px',"width": "12%"}); // ...of the Labels (e.g Case Number)
// $("td.dataCol").css({'margin-left': '3px',"width": "38%"});  // ...of the Data portion (e.g 88888888 [View Hierarchy])
// note: there are 2 labelCols and 2 dataCols for each info object.
// due to this making labelCol + dataCol > 50% may cause strange formatting

//------BEGIN: Style Tweaks------
try {
    $("div.efdFields").css({'overflow': 'hidden'});                           // Fix wrapper
    // if (showBodyBorders) { $("div.pbSubsection").css({'border': bodyBorderStyle}); } // Body borders?
    $("div.brandTertiaryBrd").css({'margin-top': '2px'});           // Top Margins
    if (showHelpButtons == false) {
  		$(".pbHelp").css('display','none');
  		$(".helpOrb").css('display','none');
	  }
    if (showRedundantButtons == false) {  // Redundant buttons?
      $("div.pbBottomButtons").css('display','none');
    }
}
catch(e) {
    addAlert(0, "ArrangeSC: Failed to complete Style Tweaks.<br />Additional info: " + e);
}
//------END: Style Tweaks------

//------BEGIN: Rework Body------
try {
    $('#' + theBoxes2["Case Comments"].body).css(
        {
            'overflow': 'hidden',
            //'word-break': 'break-all',

            /* Warning: Needed for oldIE support, but words are broken up letter-by-letter */
            //'word-wrap': 'break-word',
            '-ms-word-break': 'break-all',
            'word-break': 'break-all',

            /* Non standard for webkit */
            //'word-break': 'break-word',
            //'overflow-wrap': 'break-word',

            '-webkit-hyphens': 'auto',
            '-moz-hyphens': 'auto',
            '-ms-hyphens': 'auto',
            'hyphens': 'auto',
        }
    ); // Support for VERY long strings in comments


	try {
		$("#" + theBoxes2["Case Resolution"].body + "table.detailList td.labelCol:eq( 3 ),#" + theBoxes2["Case Resolution"].body + " table.detailList td.dataCol:eq( 3 )").removeClass('last');
		var caseReason = $("#" + theBoxes2["Case Resolution"].body + " table.detailList tbody").append($('<tr class="last"/>').append(         // Append new row
			$("#" + theBoxes2["Case Resolution"].body + " table.detailList td.labelCol:eq( 1 ),#" + theBoxes2["Case Resolution"].body + " table.detailList td.dataCol:eq( 1 )") // Append "Case Reason" to the new row
		));
		$("#" + theBoxes2["Case Resolution"].body + " table.detailList td.labelCol").css("width", "15%");   // Set widths for max space
		$("#" + theBoxes2["Case Resolution"].body + " table.detailList td.dataCol").css("width", "85%");
	} catch(e) {
		addAlert(0, "ArrangeSC: Failed to Rework Case Resolution Box.<br />Additional info: " + e);
	}

    $('#' + theBoxes2["SFTP File Attachments"].id).css({'word-break': 'break-all'});  // Support for VERY long filenames in sftpAttachments
    $(".pbButton").css({'padding': '0', 'margin-left': '5px'});
    $("img.minWidth").css({'width': '0'});
    $(".pbTitle").css({'min-width': '100px','width': 'auto'});
    $(".pbTitle:eq(0)").css({'width': '170px'});
    $("h2.mainTitle").append(": " + caseNum);
	  $('<div id="theTrash" style="display:none;"></div>').appendTo('head');
    if (removeDisplayProcessFlow) {
      $("input[name=process_flow]").appendTo('#theTrash');
    }
	// TODO add options to move 'close case', 'send email', 'searchIt' 'edit' 'clone' 'displayprocessflow' to a dropdown
}
catch(e)
{
    addAlert(0, "ArrangeSC: Failed to Rework Body.<br />Additional info: " + e);
}
//------END: Rework Body-----

// // Add footer
// try {
//     $("<table width=\"100%\" height='15px'><tbody><tr id='SCw33t_footer' style='height: 20px; background-color: " + topBarBG +
//       ";'><td id='arrangeFooterText' style='color: " + topBarFontColor + ";'>&nbsp;&nbsp;Sweetened by <a href='" + pblink +
//       "' target='_blank' style='text-decoration: underline; color: " + topBarFontColor + ";'>SCw33t v" + curVersion + "</a> - </td></tr></tbody></table>")
//         .insertBefore("div.fewerMore");
//     $("<a href='javascript:void(0)' style='text-decoration: underline; color: " + topBarFontColor + ";'>What's New?</a>").click(
//         function() {
//             reviewChanges();
//         }
//     ).appendTo($('#arrangeFooterText'));
// } catch(e) {
//     addAlert(0, "ArrangeSC: Failed to add footer.<br />Additional info: " + e);
// }

//------BEGIN: Top Bar Code------
if (disableHoverLinks) {
  $("div#RLPanel").children().first().remove();
}

if (removeHoverLinks) {
  $("div.efdRLHover").css("display","none");
}

if (lockTopBar) {
    $("h2.mainTitle").css({'font-weight': 'bold'});
    if (removeHoverLinks == false) {
        // Add style for coloring hover links & fixing the hover functionality to take 100% width & open at current location (previously opened at very top no matter what)
		// $('<style id="Arrange_Hover_Link">'+
		// '.listHoverLinks { color: ' + hoverLinkColor + '!important; }'+
		// '.linklet { color: ' + hoverLinkColor +'!important; }'+
		// '#RLPanelShadow { width: 100% !important; position: fixed; }'+
		// '</style>').appendTo($('head'));

        //$(".sfxConsole.sfxStyle .listHoverLinks,.sfxConsole.sfxStyle .linklet,.sfxConsole.sfxStyle .listTitle, .sfxConsole.sfxStyle a, .sfxConsole.sfxStyle a:hover").css('color', topBarFontColor, 'important');
        //$("div.listHoverLinks").first().css({'z-index': '1', 'position': 'fixed', 'background': topBarBG, 'width': '100%', 'margin': '-5px 0px 0px 0px','padding': '0px','text-align': 'left', 'min-height': '10px'});
        //$("div.pbHeader").first().css({'z-index': '1', 'position': 'fixed', 'background': topBarBG, 'margin': 'auto 0px 0px 0px', 'width': 'inherit', 'min-height': '40px'});
        //$("div.pbBody").css('margin-top', '55px');
        $("div.listHoverLinks").first().css({'margin': '0','text-align': 'left','padding': '0px'});
        $("<div id='arrangeTopBar'>")//.css({'z-index': '1'})
            .append($("div.efdRLHover").first().css({'text-align': 'left',})).append($("div.pbHeader").first()).prependTo($("#ep"));
    } else {
        $("<div id='arrangeTopBar'>").css({'min-height': '40px !important', 'z-index': '1'})
            .append($("div.pbHeader").first()).prependTo($("#ep"));
        //$("div.pbHeader").first().css({'z-index': '1', 'position': 'fixed', 'background': topBarBG, 'margin': '-5px 0px 0px 0px', 'width': 'inherit', 'min-height': '40px'});
        //$("div.pbBody").css('margin-top', '40px');
    }
    $("div.pbBody").first().css({'margin-top': $("#arrangeTopBar").outerHeight() + "px" });
    $("div.pbHeader").children().first().css('table-layout', 'fixed');
    $("td.topButtonRow").css({'overflow': 'hidden', 'width': 'inherit'});
    $("div.helpElement").css({'z-index': '100','position': 'fixed', 'margin':'7px 10px 0px 130px'}); // Lock layout/print/? icons in place
    $("#efpViews_" + theCase.fiveHunID).first().css({'z-index': '101','position': 'fixed'});                 // Lock Case - feed view switching buttons in place
    $(window).resize(updateBodyMargin); // Set window resize to adjust margin between body & top bar
}


//------END: Top Bar Code------

//------BEGIN: Generate 50-50 buttons & re-arrange objects into custom table------
if (enablePOP || enable5050 || enableSCTab) {

	// Add Dropdown Buttons
	if (enableSCTab) {
		addDropDown("sctab", "SCtab");
	}

	if (enable5050) {
		addDropDown("fifty", "50/50");
	}

	if (enablePOP) {
		addDropDown("pop", "POP!");
	}

	// buttGen Syntax:
	// buttGen("pageName (for button ID)", "friendlyName (user readable)", "location (link)", "optional: dontKill (url string to check if page shouldn't be killed on re-load)");
	var siteID = $("#00Na000000Arhhc_ileinner").text();
	var contactFullName = $("#cas3_ileinner").text();
	var contactFirstName = contactFullName.split(' ')[0];
	buttGen("newCom", "New Comment", encodeURI('https://ca.my.salesforce.com/00a/e?parent_id=' + fiveHunID + '&retURL=/' + fiveHunID + '&isdtp=vw' + "&siteID=" + siteID + "&conFullName=" + contactFullName + "&conFirstName=" + contactFirstName), "Comments: Case");
	buttGen("newerEmail","New Email", encodeURI('https://ca.my.salesforce.com/_ui/core/email/author/EmailAuthor?p2_lkid=' + CID + '&rtype=003&p3_lkid=' + fiveHunID + '&p6=CA Support Case  ' + caseNum + ' -' + $("#cas14_ileinner").text() + '&retURL=/' + fiveHunAAID + '?nooverride=1&isdtp=vw&sfdcIFrameOrigin=https://ca.my.salesforce.com&isdtp=vw'), "Send an Email"); //Now includes subject
	//buttGen("newerEmail","New Email",'https://ca.my.salesforce.com/_ui/core/email/author/EmailAuthor?p2_lkid=' + CID + '&rtype=003&p3_lkid=' + fiveHunID + '&retURL=/' + fiveHunAAID + '?nooverride=1&isdtp=vw&sfdcIFrameOrigin=https://ca.my.salesforce.com&isdtp=vw', "Send an Email") ;//Old, no subject
	buttGen("newTask", "New Task", encodeURI("https://ca.my.salesforce.com/setup/ui/recordtypeselect.jsp?ent=Task&ekp=00T&retURL=/" + fiveHunAAID + "?nooverride=1&isdtp=vw&sfdcIFrameOrigin=https://ca.my.salesforce.com&save_new_url=/00T/e?who_id=" + CID + "&what_id=" + fiveHunID + "&retURL=/"+ fiveHunAAID + "?nooverride=1&isdtp=vw&sfdcIFrameOrigin=https://ca.my.salesforce.com&isdtp=vw"), "New Task");
	//buttGen("newTask2", "New Task 2","https://ca.my.salesforce.com/00T/e?who_id=" + CID + "&what_id=" + fiveHunID + "&retURL=/"+ fiveHunAAID + "?nooverride=1&RecordType=012a00000018GH8&ent=Task&isdtp=vw&ctestDe=DE123456&ctestSev=2", "New Task");
	buttGen("caseReview","Review Case", encodeURI('https://ca--c.na13.visual.force.com/apex/CaseReviewEdit?caseId=' + fiveHunID +'&caseType=' + theCase.type + '&isdtp=vw'));
	buttGen("relateKB","Relate KB Doc", encodeURI('https://ca.my.salesforce.com/apex/RelateKBArticle?id=' + fiveHunID + '&isdtp=vw'));
	buttGen("relateContent", "Relate Content", encodeURI('https://ca.my.salesforce.com/a9n/e?CF00Na000000AxMex=' + caseNum + "&isdtp=vw"));
	buttGen("caseTeam", "Update Case Team", encodeURI('/0B6/e?kp=500&pid=' + fiveHunID + '&isdtp=vw')); //&sfdcIFrameOrigin=https%3A%2F%2Fca.my.salesforce.com
	buttGen("newDefect", "New Defect", encodeURI('https://ca--c.na13.visual.force.com/servlet/servlet.Integration?scontrolCaching=1&lid=00ba0000001QkQ6&eid=' + fiveHunID + '&ic=1&isdtp=vw'));
	buttGen("assDefect", "Associate Defect", encodeURI('https://ca--c.na13.visual.force.com/servlet/servlet.Integration?scontrolCaching=1&lid=00ba0000001QkQ5&eid=' + fiveHunID + '&ic=1&isdtp=vw'));
}

tableGen(cIndex, cRows, "c");

//------END: Generate 50-50 buttons & re-arrange objects into custom table------

//------BEGIN: Generate Convenience Buttons
if (enableConvenience) {

    addDropDown("conv", "Buttons");

	var CSOURL = "https://support.ca.com/irj/portal/implsvccasedetails?issueNo=" + caseNum;
	// Sandbox/SFTP QA (FSB3)
	//var SFTPURL = "sftp://supportftpqa.ca.com/";
	// Prod
	var SFTPURL = "sftp://supportftp.ca.com/";
	var SFTPSite;

	// Get the TOPS Site ID
	var TopsID = $("td.labelCol:contains(Tops Site ID)").next('td').find("div").text();

	// Get the Project Site ID
	var ProjID = $("td.labelCol:contains(Project ID)").next('td').find("div").text();

	// If the Project Site ID exists, use that*
	if (ProjID && ProjID.indexOf("null") == -1) {
		SFTPSite = SFTPURL + prependZero(ProjID) + "/" + caseNum + "/";
	} else {
		SFTPSite = SFTPURL + prependZero(TopsID) + "/" + caseNum + "/";
	}

	if (createLocalDirs) {
		SFTPSite = SFTPSite + "?" + encodeURIComponent($("td.labelCol:contains(Site Association)").next('td').find("div").text().replace(/[<>:\"\/\\\|\?\*\.\']/g, "").trim()) + "?" + encodeURIComponent($("td.labelCol:contains(Subject)").next('td').find("div").text().replace(/[<>:\"\/\\\|\?\*\.\']/g, ""));
	}

	addConvButton("rSFTP","Remote SFTP", 'm', SFTPSite);

	if (createLocalDirs && openLocalButton) {
		localdir = SFTPSite + "?LOCAL";
		addConvButton("lSFTP","Local Dir", 'm', localdir);
	}


	// Replaed with SCtab, keeping in case needed later.
	//addConvButton("commentConvButton","New Comment", 'c', "[name='newComment']");
	//addConvButton("sendEmailConvButton","Send Email", 'c', "[name='newEmail']");
	addConvButton("dismissConvButton","Dismiss Callbacks", 'c', "[name='dismiss_the_selected_call_backs']");
	addConvButton("CSOConvButton","Open in CSO", 'l', CSOURL);

	addConvButton("kbHomeButton","KB Home", 'l', 'https://ecm.ca.com/kb/pages/Authoring/dashboard.aspx');
	addConvButton("searchItButton","Search It", 'l', 'https://searchit.ca.com/Pages/FindSearch.aspx');

	// Account Team button, based on Greg Butt's AccountTeam Script
	var accountId = $('#cas4_ileinner>a').attr('href').slice(23,38);
	var accTeamUrl = "javascript:srcUp(%27%2Facc%2Faccteammemberlist.jsp%3Fid%3D" + accountId + "%26isdtp%3Dvw%27);";
	addConvButton("accTeamConvButton","Account Team", 'l', accTeamUrl);
}
//------END: Generate Convenience Buttons


//------BEGIN: Back2Top, Refresh & Link Button code------

if (enableBack2Top) {
    try {
        $('<div id="arrangeB2T" class="backToTop" height="20px"><a href="#skiplink" title="Back To Top"><img src="/img/upToTop_caret.gif" alt="Back to Top" width="8" height="8" title="Back to Top">Back To Top</a></div>')
            .appendTo($("body"));
    } catch(e) {
        addAlert(0, "ArrangeSC: There was a problem with Back to Top.<br />Additional info: " + e);
    }
}

if (enableCaseRefreshButton) {
    try {
        $('<input/>').attr({'id': 'case_refresh', 'href': 'javascript:void(0)', 'class': 'refreshListButton btn',
							'onclick': 'window.location.reload();', 'display': 'inline', 'title': 'Refresh', 'type': 'button'})
            .appendTo($("#topButtonRow"));
    } catch(e) {
        addAlert(0, "ArrangeSC: There was a problem adding the 'Case Refresh' button.<br />Additional info: " + e);
    }
}

if (enableCaseLinkButton) {
    try {
        var genLink = "https://ca.my.salesforce.com/" + fiveHunAAID + "?nooverride=1"; // Create Link
        $('<input/>').attr({'id': 'copy_link', 'href': 'javascript:void(0)',  'padding':'0', "class": "copyLinkButton btn",
                            'display': 'inline', 'title': 'Copy Link', 'type': 'button'})
            .click(function() {prompt("Case Link for " + caseNum +":", genLink);})
            .appendTo($("#topButtonRow"));
    }  catch(e) {
		addAlert(0, "ArrangeSC: There was a problem adding the 'Case Link' button<br />Additional info: " + e);
	}
}
//------END: Refresh & Link Button code------


} // End Init


//------BEGIN: Special Conditions Fix & Peek-----
function fixSpecialConditions() {
	//TODO cellfound replace with pullCellId....
	try {
		var cellFound = false;
		var caseInfoID = theBoxes2["Case Information"].body;
		var cellNumber = 0;
		$('#'+caseInfoID + " td.labelCol").each(
			function() {
				if (cellFound == false) {
					if ($(this).text() == "Special Conditions") {
						cellFound = true;
						//console.log(cellNumber);
						return;
					} else  {
						cellNumber++;
					}
				}
			}
		);

		// var formID = $(caseInfoID +" td.dataCol:eq("+cellNumber+")").text().replace("document.forms['","").replace("'].submit()","").replace("echoScontrolForm_",""); // Collect form properties
		var formID = $('#'+caseInfoID +" td.dataCol:eq("+cellNumber+")").text().replace("document.forms['","").replace("'].submit()","").replace("echoScontrolForm_",""); // Collect form properties
		if (formID.indexOf("[View]") > -1) {
			//if ($("#specialViewLink").length > 0) {
			formID = formID.replace("[View]","");
			$("#specialViewLink").remove();
		}
		document.forms["echoScontrolForm_" + formID].submit(); // Re-submit form (number goes away when page is modified, this brings it back)
		//$("#caseInfoBody td.dataCol:eq("+cellNumber+")").css("vertical-align","middle"); //already aligned middle even though it doesnt look like it...
		$("#" + formID).attr({"width": "20px", "height": "15px"})
			.after("<a id='specialViewLink' href=javascript:srcUp(\'https://ca--c.na13.visual.force.com/apex/SC_VFComponents?id=" + fiveHunAAID + "&blkRender=SC&isdtp=vw\')>[View]</a>"); // Add [View] link

		if (enablePeekIt) {
			peekIt("specialViewLink", "https://ca--c.na13.visual.force.com/apex/SC_VFComponents?id=" + fiveHunAAID + "&blkRender=SC&isdtp=vw");
		}

    // trying to find a way to read the number of conditions
    // alert($("[title='SpecialConditionsPage']").attr('id'));
    // var myIFrame = document.getElementById($("[title='SpecialConditionsPage']").attr('id'));
    // var content = myIFrame.contentWindow.document.body.innerHTML;
    // alert(content);

	} catch(e) {
		addAlert(0, "ArrangeSC: Special conditions fix failed.<br />Additional info: " + e);
	}
}
//------END: Special Conditions Fix-----f




//Current box status for Square adjustmnets:
//
// E = Enabled
// D = Disabled
// N = Not implemented / Haven't seen it's effect
// X = Doesn't need to be fixed (Based on my square Dell)
//
// E - Open Activites - Working, but needs to be optimized. are Due and completed needed?!
// E - Activity History - Working, but needs to be optimized. are Due and modified needed?!
// E - Case Team
// N - Attachments - Haven't seen a case with attachemnts used
// X - Case Comments
// E - SFTP File Attachments
// N - Related Cases - Haven't seen a case with Related Cases used
// N - External Requests - Haven't seen a case with external requests used
// E - KB Articles
// E - Emails
// E - Case Reviews
// X - Live Chat Transcripts
// E - Related Defects
// X - Case History
// E - Related Content

function scweeten(boxTitle) {
	// try{
		var bodyId = theBoxes2[boxTitle].pid;
		logTrace("SCw33tening: " + boxTitle);

		switch (boxTitle) {

			case "Activity History":
				if (squareMonitor) {
					if ($(bodyId + " table.list tr.dataRow").length > 0) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "30%",'', "<span>Subject: </span>" + cellPull(1,'h',bodyId),bodyId);
							cellGen(1, 2, "25%",'', "<span>SLO: </span>" + cellPull(3,'',bodyId),bodyId);
							cellGen(1, 3, "20%",'', "<span>Status: </span>" + cellPull(6,'',bodyId),bodyId);
							cellGen(1, 4, "20%","", "<span>Completed: </span>" + cellPull(4,'',bodyId),bodyId);

							cellGen(2, 1, "30%",'',"<span>Type: </span>" + cellPull(2,'',bodyId),bodyId);
							cellGen(2, 2, "25%",'',"<span>Due: </span>" + cellPull(5,'',bodyId),bodyId);
							cellGen(2, 3, "20%","","<span>Assigned: </span>" + cellPull(7,'',bodyId),bodyId);
							cellGen(2, 4, "20%","","<span>Mod: </span>" + cellPull(8,'',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;



			case "Case Comments":
				if ($(bodyId + " table.list tr.dataRow").length > 0 && $("#revComments").length < 1) {
					logTrace("Adding Reverse Comments button...");
					$(bodyId + " table.list tr.dataRow").last().removeClass('last');
					$("<input/>").attr({"id": "revComments", "value": "Reverse Comments \\/", "title": "Reverse Comments", "type": "button", "class": "btn ca-button"}).click(
						function() {
							var holdComments = $(bodyId + " table.list tr.dataRow");

							for (i = holdComments.length -1; i >= 0; i--) {
								$(bodyId + " table.list tbody").append(holdComments[i]);
							}
							if ($("#revComments").attr("value").indexOf("\\/") > -1) {
								$("#revComments").attr("value","Reverse Comments /\\");
							} else {
								$("#revComments").attr("value","Reverse Comments \\/");
							}
						}
					).appendTo($(bodyId + " td.pbButton"));
				}
				break;

			case "Case Reviews":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {
					// Generate Case Reviewed alert:
					for (var h = 0; h < $(bodyId + " table.list tr.dataRow").length; h++) {
						//var reviewer = $(bodyId + " table.list .dataCell.cellCol" + 6 + ":eq( " + i + " )").text().split(", ");
						// TODO datacells into new func...
						var reviewer = $(bodyId + " table.list .dataCell.cellCol" + 5 + ":eq( " + h + " )").text();
						var reviewLink = $(bodyId + " table.list .dataCell.cellCol" + 1 + ":eq( " + h + " )").html().split('href="')[1].split('">')[0];
						addAlert(3, 'This case was reviewed by ' + reviewer /*[0] + ' @ ' + reviewer[1] */ + '!\n' + '  <a id="caseRevAlert-' + h + '" href=\'' + reviewLink + '\'>Click to view this review.</a>' );
					}

					if (squareMonitor) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "40%",'', cellPull(1, 'h',bodyId) + " (" + cellPull(2,'',bodyId) + ")",bodyId);
							cellGen(1, 2, "40%",'', "<span>Engineer: </span>" + cellPull(3, 'h',bodyId),bodyId);
							cellGen(1, 3, "15%",'', "<span>Score: </span>" + cellPull(4, 'h',bodyId),bodyId);

							cellGen(2, 1, "40%",'', "<span>Reviewed By: </span>" + cellPull(5, 'h',bodyId),bodyId);
							cellGen(2, 2, "55%",'colspan="2"', "<span>Last Modified: </span>" + cellPull(6, 'h',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;

			case "Case Team":
				if (squareMonitor) {
					if ($(bodyId + " table.list tr.dataRow").length > 0) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "10%",'rowspan="2"', cellPull2('a','Action',bodyId),bodyId);
							cellGen(1, 1, "45%",'',"<span>User: </span>" + cellPull2('h','Team Member',bodyId).replace("User: ", ""),bodyId);
							cellGen(1, 2, "17%",'',"<span>Access: </span>" + cellPull2('t', 'Case Access',bodyId),bodyId);
							cellGen(1, 3, "28%",'',"<span>Last Modified: </span>",bodyId);

							cellGen(2, 1, "45%",'',"<span>Role: </span>" + cellPull2('h', 'Member Role',bodyId),bodyId);
							cellGen(2, 2, "17%","","<span>Visible in Portal: </span>" + cellPull2('h', 'Visible In Customer Portal',bodyId),bodyId);
							cellGen(2, 3, "28%","",cellPull2('h', 'Modified By',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;

			case "Emails":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {
					if (squareMonitor) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "70%",'',cellPull(3,'h',bodyId),bodyId);
							cellGen(1, 2, "25%",'',"<span>Status: </span>" + cellPull(1,'',bodyId),bodyId);

							cellGen(2, 1, "70%",'',"<span>To: </span>" + cellPull(4,'',bodyId),bodyId);
							cellGen(2, 2, "25%","","<span>Date: </span>" + cellPull(5,'',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
						// if there are emails, try adding pop & peek
						if ($(bodyId + " td.sqTD a").length > 0) {
							emailAdjustment($(bodyId + " td.sqTD a"));
						}
					}

				}

				break;

			case "KB Articles":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {
					$(bodyId +" table.list tr.dataRow a").each(
						function(index) {
							var txt = $(this).text();
							var excludes = ["Del", "Edit"];//"Make Private"
							if (excludes.indexOf(txt) == -1) {
								// TODO choose href based on xframe option (to enable/disable sameorigin compliance)
                                //var href = $(this).attr('href');
                                // \/ would be better looking, but not working, iframe cross origin...
                                var href = "https://www.ca.com/us/services-support/ca-support/ca-support-online/knowledge-base-articles." + txt + ".html";
                                var newId = $(this).text() + '_link';
                                $(this).attr('id', newId);
                                peekIt(newId,href);
                            }

                        }

                    );
					if (squareMonitor) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "95%",'',cellPull(1, 'h',bodyId) + ": " + cellPull(2,'',bodyId),bodyId);

							cellGen(2, 1, "95%",'', cellPull(4,'',bodyId) + "<span> By: </span>" + cellPull(3,'',bodyId) + "<span>, </span>" + cellPull(5,'',bodyId),bodyId);

						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;

			case "Open Activities":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {

					var cbNum = 0;
					var cbs = [];

					// TODO not seeing CBs when there is 1 cb & 1 DE...

					for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
						// if ($(bodyId + " table.list .dataCell.cellCol2:eq( " + i + " )").text().indexOf("Callback") > -1) {
						if (cellPull2('t','Type',bodyId).indexOf("Callback") > -1) {
								needToDismiss = true;
								cbNum++;
								// cbs.push($(bodyId + " table.list .dataCell.cellCol3:eq( " + i + " )").text());
								cbs.push(cellPull2('t','Due Date (SLO)',bodyId));
						}
					}

					// last in list isnt always first to expire... especially when a case goes sev 1 it can have new updates with shorter SLO
					var closestCB = null;
					// TODO Reverse this for loop? It will usually find the last one is newest...
					// TODO Find out if this needs to check for show more (when >10 open activities)...

					// TODO function splitTimestamp()
					for (var cb in cbs) {

							var splitCB = cbs[cb].split(' ');

							var cbObj = {};

							cbObj.orig = cbs[cb];

							cbObj.date = splitCB[0];
							cbObj.time = splitCB[1];

							cbObj.month = parseInt(cbObj.date.split('/')[0]);
							cbObj.day = parseInt(cbObj.date.split('/')[1]);
							cbObj.year = parseInt(cbObj.date.split('/')[2]);

							cbObj.hour = parseInt(cbObj.time.split(':')[0]);
							cbObj.mins = parseInt(cbObj.time.split(':')[1]);

							cbObj.ampm = splitCB[2];


							// Convert to 24 hrs
							if (cbObj.ampm == "PM" && cbObj.hour != 12) {
								cbObj.hour += 12;
							} else if  (cbObj.ampm == "AM" && cbObj.hour == 12) {
								cbObj.hour = 0;
							}
							// if closestCB not defined, this is closestCB...

						if (closestCB == null) {
							closestCB = cbObj;
							logTrace("Setting closestCB for the first time: " + cbObj.date + " @ " + cbObj.time);
						} else {
							closestCB = compareCBs(cbObj,closestCB);
							logTrace("Re-setting closestCB: " + cbObj.date + " @ " + cbObj.time);
						}
					}

					if (needToDismiss) {
						// TODO better implementation of the time difference...
						logTrace("Need to dismiss... Creating alert.");
						//('Y: ' + compareDTNow(closestCB.orig).yearDif + ' M: ' + compareDTNow(closestCB.orig).minsDif

						var compared = compareDTNow(closestCB.orig);
						// var timeLeft = ((compared.yearDif != 0) ? 'Yrs: ' + compared.yearDif : '')
											// + ((compared.monthDif != 0) ? ' Mos: ' + compared.monthDif : '')
											// + ((compared.dayDif != 0) ? ' Days: ' + compared.dayDif : '')
											// + ' Hrs: ' + compared.hourDif + ' Mins: ' + compared.minsDif;
						if (cbNum == 1) {
							addAlert(2, 'There is an open callback expiring ' + closestCB.date + ' @ ' + closestCB.time + ' (' + compared.timeLeft + '). <a id="dismissAlert" href=\'javascript:void(0)\' onclick=\'$("input[name=dismiss_the_selected_call_backs]").click();\'>Dismiss Callback.</a>');
						} else {
							addAlert(2, 'There are ' + cbNum + ' open callbacks which start expiring ' + closestCB.date + ' @ ' + closestCB.time + ' (' + compared.timeLeft + '). <a id="dismissAlert" href=\'javascript:void(0)\' onclick=\'$("input[name=dismiss_the_selected_call_backs]").click();\'>Dismiss Callbacks.</a>');
						}
					}

					for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {

						tabGen(2,bodyId);

						cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
						cellGen(1, 1, "30%",'',"<span> Subject: </span>" + cellPull(1,'h',bodyId),bodyId);
						cellGen(1, 2, "8%",'',"<span>Sev: </span>" + cellPull(7,'',bodyId),bodyId);
						cellGen(1, 3, "22%",'',"<span>Status: </span>" + cellPull(6,'',bodyId),bodyId);
						cellGen(1, 4, "40%",'',"<span>Owner: </span>" + cellPull(8, 'h',bodyId),bodyId);

						cellGen(2, 1, "35%",'colspan="2"',"<span>SLO: </span>" + cellPull(3,'',bodyId),bodyId);
						cellGen(2, 2, "20%",'',"<span>Type: </span>" + cellPull(2,'',bodyId),bodyId);
						cellGen(2, 3, "40%",'',"<span>Mod: </span>" + cellPull(9,'',bodyId),bodyId);

						// cellGen(1, 3, "35%","colspan='2'","<span>Completed: </span>" + cellPull(4));
						// cellGen(2, 2, "20%","","<span>Due: </span>" + cellPull(5));
					}
					$(bodyId + " table.list tr.headerRow").remove();
					$(bodyId + " table.list tr.dataRow").remove();

				}
				break;

			case "Related Content":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {
					if (enablePeekIt) {
						$(bodyId + " table.list tr.dataRow a").each(
							function(index) {
								var txt = $(this).text();
								var href = $(this).attr('href');
								var excludes = ["Del", "Edit"];//"Make Private"
								if (excludes.indexOf(txt) == -1 && href.indexOf('javascript:srcUp') == -1) {
									var validTypes = peekSftpTypes.split(',');
									var newId = '_link_' + index;
									$(this).attr('id', newId);
									peekIt(newId,href);
								}
							}
						);
					}
					if (squareMonitor) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(3,bodyId);

							cellGen(1, 0, "5%",'rowspan="3"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "95%",'',"<span>" + cellPull(1, 'h',bodyId) + "</span>" + ": " + cellPull(2,'',bodyId),bodyId);

							cellGen(2, 1, "95%",'', "<span>Link: </span>" + cellPull(3, 'h',bodyId),bodyId);

							cellGen(3, 1, "95%",'',  "<span>Added By: </span>" + cellPull(4,'',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;

			case "Related Defects":
				$(bodyId + " th a").each(
					function() {
						var txt = $(this).text();
						var href = $(this).attr('href');
						var excludes = ["Del", "Edit", "NoSE"];//"Make Private"
						if (excludes.indexOf(txt) == -1) {
							var newId = $(this).text().trim().replace(' ','_');
							$(this).attr('id',newId);
							var defectID = $(this).attr("href").replace("javascript:srcUp(%27%2F","").replace("%3Fisdtp%3Dvw%27);","");
							var defectNum = $(this).text();
							var defectCommentLink = "https://ca--c.na13.visual.force.com/apex/defectComment?CF00Na000000BFxGr=" + defectNum + "&CF00Na000000BFxGr_lkid=" + defectID + "&scontrolCaching=1&retURL=/" + defectID + "?isdtp=vw&nonce=" + SID + "&sfdcIFrameOrigin=https://ca.my.salesforce.com&sfdc.sdnewedit=1&sfdc.override=1&isdtp=vw&nonce=" + SID + "&sfdcIFrameOrigin=https://ca.my.salesforce.com";
							var defectViewLink = "https://ca.my.salesforce.com/" + defectID + "?isdtp=vw&sfdcIFrameOrigin=https://ca.my.salesforce.com";
							var defectRallyLink = "https://rally1.rallydev.com/#/search?keywords=" + defectNum;
							buttGen("defectView" + defectNum, "View "+ defectNum, defectViewLink);
							buttGen("defectRally" + defectNum, "in Rally", defectRallyLink);
							buttGen("defectComment" + defectNum, "Comment on "+ defectNum, defectCommentLink);
							if (enablePeekIt) {
								peekIt(newId,defectViewLink);
							}
						}
					}
				);
				if (squareMonitor) {
					if ($(bodyId + " table.list tr.dataRow").length > 0) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {
							tabGen(2,bodyId);

							cellGen(1, 0, "5%",'rowspan="2"', cellPull('a','',bodyId),bodyId);
							cellGen(1, 1, "95%",'colspan="4"', cellPull(1,'h',bodyId) + ": " + cellPull(3,'',bodyId),bodyId);

							cellGen(2, 1, "20%",'',"<span>Status: </span>" + cellPull(2,'',bodyId),bodyId);
							cellGen(2, 2, "30%",'',"<span>Owner: </span>" + cellPull(4,'',bodyId),bodyId);
							cellGen(2, 3, "15%","","<span>TR #: </span>" + cellPull(5,'',bodyId),bodyId);
							cellGen(2, 4, "15%","","<span>TR date: </span>" + cellPull(6,'',bodyId),bodyId);
						}
						$(bodyId + "_body table.list tr.headerRow").remove();
						$(bodyId + "_body table.list tr.dataRow").remove();
					}
				}
				break;

			case "SFTP File Attachments":
				if ($(bodyId + " table.list tr.dataRow").length > 0) {
					if (convertBytesSFTP) {
						logTrace('Converting bytes...');
						for (var h = 0; h < $(bodyId + " table.list tr.dataRow").length; h++) {
							var formattedSize = formatBytes($(bodyId + " table.list td.dataCell.cellCol3:eq( "+ h +" )").text(),1);
							$(bodyId + " table.list td.dataCell.cellCol3:eq( "+ h +" )").text(formattedSize);
						}
					}
					$(bodyId + " table.list tr.dataRow a").each(
                        function(index) {
                            try {
                                var f = $(this).attr('href');
                                var fSplit = f.split('/');
                                var fType = fSplit[fSplit.length-1].toLowerCase();
                                if (fType.indexOf('.') > -1) {
                                    fSplit = fType.split('.');
                                    fType = fSplit[fSplit.length-1];
                                } else {
                                    fType = 'noextension';
                                }

                                var validTypes = peekSftpTypes.split(',');
                                var bkupTypes = backupFTypes.split(',');

                                // regex test
                                //var re = new RegExp("$.*b[ackup]{2+}.*^",'i');
                                //alert("ftype: " + fType + "match: " + re.test(fType));

                                if (bkupTypes.indexOf(fType) > -1) {
                                    fType = fSplit[fSplit.length-2].toLowerCase();
                                }

                                if (validTypes.indexOf(fType) > -1) {
                                    var newId = 'sftp_link_' + index;
                                    $(this).attr('id', newId);
                                    peekIt(newId,f);
                                }

                            } catch (e) {
                                addAlert(0, "ArrangeSC: PeekIt failed on SFTP file: " + f + ".<br />Additional info: " + e);
							}
						}
					);
					if (squareMonitor) {
						for (i = 0; i < $(bodyId + " table.list tr.dataRow").length; i++) {

							tabGen(2,bodyId);

							cellGen(1, 1, "30%",'',"<span>File: </span>" + cellPull(1,'',bodyId),bodyId);
							cellGen(1, 2, "20%",'',"<span>Size: </span>" + cellPull(3,'',bodyId),bodyId);
							cellGen(1, 3, "50%",'',"<span>Uploaded By: </span>" + cellPull(5,'',bodyId) + ", " + cellPull(6,i,bodyId),bodyId);

							cellGen(2, 1, "100%","colspan='4'",cellPull(2,'h',bodyId),bodyId);
						}
						$(bodyId + " table.list tr.headerRow").remove();
						$(bodyId + " table.list tr.dataRow").remove();
					}
				}
				break;

			default:
				break;
		}
	// } catch(e) { logError('Error Scw33tening ' + boxTitle + ". Additional Info: " + e);}
}




function paintIt() {

}

//--BEGIN: Functions to re-arrange the insides of related lists--
function tabGen(numRows, bodyID) {

	$(bodyID + "_body table.list tbody:eq(0)")
		.append($("<table class='sqTB' id='reworkTable_t" + i + "_" + bodyID.split("_")[1] +"'><tbody></tbody></table>"));

	for (var j = 1; j <= numRows; j++) {
		$("#reworkTable_t" + i + "_" + bodyID.split("_")[1] + " tbody")
			.append("<tr class='sqTR' id='rw_t" + i + "_r" + j + "_" + bodyID.split("_")[1] + "'></tr>"); //<tr class='sqTR' id='rw_t" + i + "_r2_" + bodyID.split("_")[1] + "'></tr><tr class='sqTR' id='rw_t" + i + "_r3_" + bodyID.split("_")[1] + "'></tr>"
	}

	if (i % 2 === 0) {
		$("#reworkTable_t" + i + "_" + bodyID.split("_")[1]).attr("class",'sqTB even');
	} else {
		$("#reworkTable_t" + i + "_" + bodyID.split("_")[1]).attr("class",'sqTB odd');
	}

}

function cellGen(row, col, width, params, inner, bodyID) {

	$("#rw_t" + i + "_r" + row + "_" + bodyID.split("_")[1])
		.append($("<td class='sqTD' id='rw_t" + i + "r" + row + "c" + col + "' width='" + width + "' " + params + ">" + inner  + "</td>"));

}

function cellPull(cell, type, bodyID) {

	if (cell == 'a') {
		return $(bodyID + " table.list .actionColumn:eq( " + (i + 1) + " )").html();
	} else if (type == 'h') {
		return $(bodyID + " table.list .dataCell.cellCol" + cell + ":eq( " + i + " )").html();
	} else {
		return $(bodyID + " table.list .dataCell.cellCol" + cell + ":eq( " + i + " )").text();
	}

}
//--END: Functions to re-arrange the insides of related lists--




function cellPull2(type, name, bodyID,j) {// pass i explicitly??

	if (j) { i = j;}

	if (type == 'a') {
		return $(bodyID + " table.list .actionColumn:eq( " + (i + 1) + " )").html();
	}

	if (bodyID == undefined || bodyID == null || bodyID == "") {
		cell= $("table.list th:contains(" + name + ")").attr('class').split("cellCol")[1].split(' ')[0];
	} else {
		cell= $(bodyID + " table.list th:contains('" + name + "')").attr('class').split("cellCol")[1].split(' ')[0];
	}

	logTrace("cell: " +cell);

	if (type == 'h') {
		return $(bodyID + " table.list .dataCell.cellCol" + cell + ":eq( " + i + " )").html();
	} else if (type == 't') {
		return $(bodyID + " table.list .dataCell.cellCol" + cell + ":eq( " + i + " )").text();
	} else {
		return false;
	}

}
//--







//logTrace('500a_content.js finished.');
function buttGen(pageName, friendlyName, loc, dontKill)
{
    try
    {
        if (enable5050)
        {
            // Create link button under 50/50 dropdown button to open the page in 50/50 IFrame
            var buttonToAdd = $('<a/>').attr({'id': 'open50_' + pageName, 'class': 'btn', 'href': 'javascript:void(0)', 'title': friendlyName})
            .css({'vertical-align': 'middle','margin': '3px', 'height': '17px', 'line-height': '17px', 'padding': '0 3px 0 3px'})
            .text(friendlyName)
            .prop('value', friendlyName).unbind().click(
                function() {
                    if ($('#fiftyFrame').length < 1) {
                        var tabe50 = $('<table id="fiftyTable"><tbody><tr><td id="fiftyRow1" height="25px" margin="0"></td></tr><tr><td id="fiftyRow2" height="100%"></td></tr></tbody></table>');
                        var frame50 = $('<iframe />').attr({'id': 'fiftyFrame', 'frameborder': '1', 'padding': '0px', 'outline': '0 none'});
                        if (needToDismiss) {
                            loc += "&dismiss=1";
                        }

                        //if (removeHoverLinks == "green") { frame50.css({'width': 'inherit', 'height': 'inherit', 'position': 'fixed', 'overflow-y': 'visible','bottom': '57px','margin-top': '57px'}); }
                        //if (removeHoverLinks === false) { frame50.css({'width': '49%', 'height': '-webkit-calc-height(100% - 57px)',  'height': '-moz-calc(100% - 57px)', 'height': 'calc(100% - 57px)', 'position': 'fixed', 'overflow-y': 'visible','top': '57px'}); }
                        //else { frame50.css({'width': '49%', 'height': '-webkit-calc-height(100% - 47px)',  'height': '-moz-calc(100% - 47px)', 'height': 'calc(100% - 47px)', 'position': 'fixed', 'overflow-y': 'visible','top': '47px'}); }

                        //frame50.css({'width': '49%', 'height': 'calc(100% -' + ($("#arrangeTopBar").outerHeight() + "px") + ')', 'position': 'fixed', 'overflow-y': 'visible','top': $("#arrangeTopBar").outerHeight()+'px'});

                        tabe50.css({'width': '50%', 'height': '100%', 'position': 'fixed', 'overflow-y': 'visible','top': $("#arrangeTopBar").outerHeight()+'px'});
                        tabe50.appendTo('body');
                        frame50.css({'width': '100%', 'height': '100%'});
                        frame50.appendTo('body');
                        $('<button>Close 50/50</button>').attr({'id': 'fiftyCloser', 'href': 'javascript:void(0)', 'class': 'btn',
                                                                'title': 'Close 50/50', 'type': 'button', "class": "btn",
                                                                'style': "width: 100%; height: 25px;", "value": "Close 50/50"})
                            .appendTo('#fiftyRow1');

                        //$('#fiftyRow2').css('height','calc(100% - ' + (($("#arrangeTopBar").outerHeight() + 25) + "px") + ')');

                        document.getElementById('fiftyFrame').onload =
						function() {
                            if ($("#fiftyFrame").attr('frameborder') == "0" && (dontKill === undefined || (dontKill !== undefined && $("#fiftyFrame").contents().find('title').text().indexOf(dontKill) == -1))) {
                                if ($("#fiftyFrame").contents().find('title').text() != undefined) {
                                    $("#fiftyTable").remove(); //$("#fiftyFrame").remove();
                                    tableGen(dIndex, dRows, "d"); // Reset to default layout
                                    tableGen(cIndex, cRows, "c"); // Set custom full-page layout
                                }
                            }
                            $("#fiftyFrame").attr({'frameborder': '0'});
                        };

                        document.getElementById('fiftyCloser').onclick =
                        function() {
                            $("#fiftyTable").remove();
                            tableGen(dIndex, dRows, "d"); // Reset to default layout
                            tableGen(cIndex, cRows, "c"); // Set custom full-page layout
                        };

                        tableGen(hIndex, hRows, "h"); // Set customizable half-page layout

                        $('#fiftyFrame').attr({'src': loc});
                        if (fiftyPageOnLeft) {
                            $('#fiftyTable').appendTo($("#arrangeSC_row_11-col1"));
                            $('#fiftyFrame').appendTo('#fiftyRow2'); //.appendTo($("#arrangeSC_row_h1-col1"));
                        } else {
                            $('#fiftyTable').appendTo($("#arrangeSC_row_11-col2"));
                            $('#fiftyFrame').appendTo('#fiftyRow2'); //.appendTo($("#arrangeSC_row_h1-col2"));
                        }
                    } else {
                        alert("A 50/50 page is already open!");
                    } // END: if iframe
                } );      // END: click
            var liToAdd = $('<li/>');                  // Create a list item to add the link button into
            ///*
            if (pageName.indexOf("defectView") > -1) {
                buttonToAdd.css({'display': 'inline', 'width': '50px'});
                buttonToAdd.appendTo(liToAdd);             // Add link to <li> so it shows up properly in 50/50 dropdown
                liToAdd.appendTo($("#fiftyButtonHolder")); // Add button/li to 50/50 dropdown
            } else if (pageName.indexOf("defectRally") > -1) {
                var denu = pageName.split("defectRally")[1];
                buttonToAdd.css({'display': 'inline', 'width': '100px'});
                buttonToAdd.insertAfter($("#open50_defectView" + denu)); // Add button/li to 50/50 dropdown
            } else {
                buttonToAdd.appendTo(liToAdd);             // Add link to <li> so it shows up properly in 50/50 dropdown
                liToAdd.appendTo($("#fiftyButtonHolder")); // Add button/li to 50/50 dropdown
            }

        }

        if (enablePOP) {
            // Create link button under POP! dropdown button to open the page in a pop-up window
            var buttonToAddPOP = $('<a/>').attr({'id': 'openPOP_' + pageName, 'class': 'btn', 'href': 'javascript:void(0)', 'title': friendlyName})
            .css({'vertical-align': 'middle','margin': '3px', 'height': '17px', 'line-height': '17px', 'padding': '0 3px 0 3px'})
            .text(friendlyName)
            .prop('value', friendlyName).unbind().click(
                function() {
                    popIt("framePOP", loc, friendlyName, dontKill);
                }
            );
            var liToAddPOP = $('<li/>');                // Create a list item to add the link button into
            if (pageName.indexOf("defectView") > -1) {
                buttonToAddPOP.css({'display': 'inline', 'width': '50px'});
                buttonToAddPOP.appendTo(liToAddPOP);        // Add link to <li> so it shows up properly in POP! dropdown
                liToAddPOP.appendTo($("#popButtonHolder")); // Add button/li to POP! dropdown
            } else if (pageName.indexOf("defectRally") > -1) {
                var denu = pageName.split("defectRally")[1];
                buttonToAddPOP.css({'display': 'inline', 'width': '100px'});
                buttonToAddPOP.insertAfter($("#openPOP_defectView" + denu)); // Add button/li to 50/50 dropdown
            } else {
                buttonToAddPOP.appendTo(liToAddPOP);        // Add link to <li> so it shows up properly in POP! dropdown
                liToAddPOP.appendTo($("#popButtonHolder")); // Add button/li to POP! dropdown
            }

        }

		if (enableSCTab) {

			// Create link button under POP! dropdown button to open the page in a pop-up window
            var buttonToAddPOP = $('<a/>').attr({'id': 'openSCTab_' + pageName, 'class': 'btn', 'href': 'javascript:void(0)', 'title': friendlyName, 'onclick': "navigateToUrl('"+loc+"');" })
            .css({'vertical-align': 'middle','margin': '3px', 'height': '17px', 'line-height': '17px', 'padding': '0 3px 0 3px'})
            .text(friendlyName);
            // .prop('value', friendlyName).unbind().click(
                // function() { "navigateToUrl('"+loc+"');" }
            // );
            var liToAddPOP = $('<li/>');                // Create a list item to add the link button into
            if (pageName.indexOf("defectView") > -1) {
                buttonToAddPOP.css({'display': 'inline', 'width': '50px'});
                buttonToAddPOP.appendTo(liToAddPOP);        // Add link to <li> so it shows up properly in POP! dropdown
                liToAddPOP.appendTo($("#sctabButtonHolder")); // Add button/li to POP! dropdown
            } else if (pageName.indexOf("defectRally") > -1) {
                var denu = pageName.split("defectRally")[1];
                buttonToAddPOP.css({'display': 'inline', 'width': '100px'});
                buttonToAddPOP.insertAfter($("#openSCTab_defectView" + denu)); // Add button/li to 50/50 dropdown
            } else {
                buttonToAddPOP.appendTo(liToAddPOP);        // Add link to <li> so it shows up properly in POP! dropdown
                liToAddPOP.appendTo($("#sctabButtonHolder")); // Add button/li to POP! dropdown
            }

		}
    } catch(e) {
        addAlert(0, "ArrangeSC: There was a problem adding the " + friendlyName + " button.<br />Additional info: " + e);
    }
} // END: buttgen function


function tableGen(vIndex, iType) {

	var vRows = vIndex.length;
	//console.log(vRows);

    //if ($('#arrangeSC_table').length > -1) { $('#arrangeSC_table').remove(); }
    $("div.efdFields").prepend("<div id='arrangeSC_table_" + iType + "' width='100%' height='100%'></div>"); // Create the initial div; attach it to the page

	// If fiftyPageOnRight != true, switch sides
	// why is iType a number?! h = 1, c = 4, d = undefined?!
	// alert('t: ' + iType + ' -- fifty: ' +fiftyPageOnLeft + ' -- index1: ' + vIndex[1][1]);
    if ((iType == 'h' || iType == 1) && fiftyPageOnLeft && vIndex[1][1] != "50%,empty") {
			// alert('a');
			vIndex[1][2] = vIndex[1][1];
			vIndex[1][1] = ["50%","empty"];
		}

    for (var i = 1; i < vRows; i++) {
        try {
			logTrace('Adding Arrange Row Row: ' + i );
			 // Add the Row
            $("<table width=\"100%\" height='100%'><tbody><tr id='arrangeSC_row_" + iType  + i + "'></tr></tbody></table>").appendTo("#arrangeSC_table_" + iType);
            for (var j = 1; j < vIndex[i].length; j++) {
                try {
					// Add the Coulumns
                    $("<td id='arrangeSC_row_" + iType + i + "-col" + j + "' valign='top' style='height: 100%; width: " + vIndex[i][j][0] + ";'></td>").appendTo("#arrangeSC_row_" + iType + i);
                     // Allows for multiple objects to be put in one cell
					for (var k = 1; k < vIndex[i][j].length; k++) {
						if (vIndex[i][j][k] != "empty") {
								$(theBoxes2[vIndex[i][j][k]].pid).css("width","auto").appendTo("#arrangeSC_row_" + iType + i + "-col" + j);
						}
					}  // Move the object to the cell
                } catch(e) {
					addAlert(0, "ArrangeSC: Arrangement failed at: R: " + i + ", O: " + j + ".<br />Additional info: " + e);
				}
            }
        } catch(e) {
			addAlert(0, "ArrangeSC: Arrangement failed at: R: " + i + ".<br />Additional info: " + e);
		}
    }
    //if (iType == "h" && $('#arrangeSC_table_c').length() > -1) { $('#arrangeSC_table_c').remove(); }
    //else if ($('#arrangeSC_table_h').length() > -1) { $('#arrangeSC_table_h').remove(); }

    //------BEGIN: Object Disable & Collapse code------
    var DisO = [];
	var ColO = [];
	var OpeO = [];

	// Create vars for use in functions below
    if (iType == 'c') {// if full page, set to full page settings
		DisO = cDisabledObjects;
		ColO = cCollapsedObjects;
		OpeO = cOpenObjects;
	} else if (iType == 'h') { // else if half page, set to half page settings
		DisO = hDisabledObjects;
		ColO = hCollapsedObjects;
		OpeO = hOpenObjects;
	}

    try {
        if (DisO.length > 0 && DisO[0] != "") {
			 // Add hidden div to hold objects (in case they are still enabled in a different view)
            if ($("#arrangeSC_hiddenObjects").length === 0) {
				$('<div id="arrangeSC_hiddenObjects" style="display: none;"></div>').appendTo('body');
			}

            for (var i = 0; i < DisO.length; i++) {
				$("#arrangeSC_hiddenObjects").append($(theBoxes2[DisO[i]].pid));
			}
        }
    } catch(e) {
		addAlert(0, "ArrangeSC: Object hiding failed.<br />Additional info: " + e);
	}

    try {
        if (ColO.length > 0 && ColO[0] !== "") {
			console.log('starting collapse ');
            for (var i = 0; i < ColO.length; i++) {
                var key = ColO[i];

				if ($(theBoxes2[key].collapseBtn).attr('class') == 'hideListButton')  {
					logTrace('Collapsing ' + key);
					$(theBoxes2[key].collapseBtn).click();
				}

            }
        }
    } catch(e) {
        addAlert(0, "ArrangeSC: Object collapse failed.<br />Additional info: " + e);
    }

    try {
        if (OpeO.length > 0 && OpeO[0] !== "") {
            for (var i = 0; i < OpeO.length; i++) {
                var key = OpeO[i];

				if ($(theBoxes2[key].collapseBtn).attr('class') == 'showListButton')  {
					logTrace("Expanding " + key);
					$(theBoxes2[key].collapseBtn).click();
				}
            }
        }
    }
    catch(e)
    {
        addAlert(0, "ArrangeSC: Object expansion failed.<br />Additional info: " + e);
    }
    // END: Force objects open
    //------END: Object Disable & Collapse code------

    //BEGIN: Remove old tables
    if (iType == 'h') { $("#arrangeSC_table_d").remove(); $("#arrangeSC_table_c").remove(); }
    else if (iType == 'd') { $("#arrangeSC_table_h").remove(); $ ("#arrangeSC_table_c").remove(); }
    else if (iType == 'c') { $("#arrangeSC_table_d").remove(); $("#arrangeSC_table_h").remove(); }
    //END: Remove old tables

    fixSpecialConditions();

}

// Function to adjust margin between body & top bar
function updateBodyMargin() {
	try {
    logTrace('trying to update body margins..');
		var barHeight = ($("#arrangeTopBar").outerHeight()+20) + "px";
		$('div.pbBody').first().css({'margin-top': barHeight});
		if ($('#fiftyFrame').length == 1) { $("#fiftyFrame").css({'height': 'calc(100% - ' + barHeight + ')','top': barHeight}); }
	} catch(e) {
		addAlert(0, "ArrangeSC: Failed to update body margins.")
	}
}


function pullTextByCellName(args) {

	// If not object formatted, it should just be the name...
	if (args.name == undefined) {
		args = {name: args};
	}

	if (args.box) {
		return $(args.box + " td.labelCol:contains(" + args.name + ")").next('td').find("div").text();
	} else {
		return $("td.labelCol:contains(" + args.name + ")").next('td').find("div").text();
	}
}

function pullHtmlByCellName(args) {

	// If not object formatted, it should just be the name...
	if (args.name == undefined) {
		args = {name: args};
	}

	if (args.box) {
		return $(args.box + " td.labelCol:contains(" + args.name + ")").next('td').find("div").html();
	} else {
		return $("td.labelCol:contains(" + args.name + ")").next('td').find("div").html();
	}
	return $("td.labelCol:contains(" + name + ")").next('td').find("div").html();
}

function pullIdByCellName(args) {

	// If not object formatted, it should just be the name...
	if (args.name == undefined) {
		args = {name: args};
	}

	if (args.box) {
		return $(args.box + " td.labelCol:contains(" + args.name + ")").next('td').find("div").attr('id');
	} else {
		return $("td.labelCol:contains(" + args.name + ")").next('td').find("div").attr('id');
	}
}

function addClassByCellName(args) {
	// args:
	// 	name*	= name of label col
	//		box		= Id (with #) of box where this resides (some will require this, especially small word ones, due to contains being used...)
	//		mod		= modify what level the class is added to, current opts: div (default), td, label, both (=td + label)

	// If not object formatted, it should just be the name...
	if (args.name == undefined) {
		args = {name: args};
	}


	// replace contains type with this?? (would provide more exact matching...)
	//
	// $(((args.box) ? args.box + ' ': '') + "td.labelCol").filter(function() {
    // 	return $(this).text() === args.name;
	// }).css("font-weight", "bold");


	var label = $(((args.box) ? args.box + ' ': '') + "td.labelCol:contains(" + args.name + ")");

	switch (args.mod){
		case "both":
			label.addClass(args.className);
			label.next('td').addClass(args.className);
			label.next('td').find("div").addClass(args.className);
			label.next('td').find("div").css({"border": "none !important"});
			return true;
			break;

		case "label":
			return label.addClass(args.className);
			break;

		case "td":
			return label.next('td').addClass(args.className);
			break;

		default:
			return label.next('td').find("div").addClass(args.className);
			break;
	}

}

							function compareNumber(a,b) {
								if ( (a) < (b) ) { return '<'; }
								else if ( (a) == (b) ) { return '='; }
								else if ((a) > (b) ) { return '>'; }
								else { return false; }
							}


							function compareCBs(a,b) {
								if (a.orig == b.orig) {
									logTrace('a and b are the same');
									return b;
								} else {

									var parts = ['year','month','day','hour','mins'];

									var closest;

									for (var part in parts) {
										if (a[parts[part]] > b[parts[part]]) {
											// a is after b... do nothing
											// logTrace(parts[part] + ': a is after b. b is closest' + ' a: ' +a[parts[part]] +  ' b: ' +b[parts[part]]);
											break;
										} else if (a[parts[part]] == b[parts[part]]) {
											// a = b, keep comparing other parts
											// logTrace(parts[part] + ': a = b'+ ' a: ' +a[parts[part]] +  ' b: ' +b[parts[part]]);
										} else if (a[parts[part]] < b[parts[part]]) {
											// a is earlier, set & stop testing
											closest = a;
											// logTrace(parts[part] + ': a is closest'+ ' a: ' +a[parts[part]] +  ' b: ' +b[parts[part]]);
											break;
										} else {
											// failed to compare
											closest = false;
											logTrace('failed to compare'+ ' a: ' +a[parts[part]] +  ' b: ' +b[parts[part]]);
											break;
										}
									}

									// return soonest CB found by this
									return closest;
								}
							}
