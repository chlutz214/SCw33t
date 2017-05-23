/////////////////////////////////////   case_review_content.js   //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /case_review_content.js
//
// Description: Main content script for Case Review pages.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('case_review_content.js initializing.');

// Case Review Specific
/* Here are a few variables you can use to customize the email for Send & Email:
      <enter> = New line --- This is needed to make multi-line emails!!
      <engineer> = Engineer's full name
      <engineerFirst> = Engineer's first name
      <caseNumber> = Case number
      <caseLink> = Direct link to case
      <reviewScore> = Score = earned points / total points (5 * # of sections filled in)
*/
var caseRevTestMode; // This should be enabled while you test your email settings; Set to false when done testing!!!
var caseRevSubject;      // The Subject that will be populated on Save & Email.
var caseRevBody;      // The Subject that will be populated on Save & Email.
var caseRevCC;  // Always CC this (these) email(s); semicolon separated addresses
var caseRevBCC; // Always BCC this (these) email(s); semicolon separated addresses
var caseRevDefaultToAssisted;
var defaultAssType;

// General
var boostTextSize;

// Top Bar
var lockTopBar;
var topBarBG;
var topBarFontColor;


logTrace('case_review_content.js collecting settings.');
chrome.storage.sync.get(
    {
		// General
		'boostTextSize': '75%',
		
		// Top Bar
        'lockTopBar': true,
        'topBarBG': '#0070D2',
        'topBarFontColor': '#FFFFFF',

		// case review page specific		
		'caseRevTestMode': true,
		'caseRevSubject': 'You case #<caseNumber> has been reviewed!',
		'caseRevBody': "Hello <engineerFirst>,<enter>I have reviewed your case, Case #: <caseNumber><enter>Here is a direct link to the case: <caseLink><enter>You scored: <reviewScore><enter><enter>Thanks, <enter>-Your Manager",
		'caseRevCC': '',
		'caseRevBCC': '',
		'caseRevDefaultToAssisted': true,
		'defaultAssType': 'Manager'

    },
    function(items) {
		logTrace('case_review_content.js settings collected, listing:');
		for (var key in items)
        {
            logTrace("var: " + key + " = " + items[key]);
        }
		logTrace('case_review_content.js assigning vars.');
		
		// General
		boostTextSize = items.boostTextSize;
		
		// Top Bar
        lockTopBar = items.lockTopBar;
        topBarBG = items.topBarBG;
		topBarFontColor = items.topBarFontColor;
		
		// Case Review Specific
		caseRevTestMode = items.caseRevTestMode;
		caseRevSubject = items.caseRevSubject;
		caseRevBody = items.caseRevBody;
		caseRevCC = items.caseRevCC;
		caseRevBCC = items.caseRevBCC;
		
		caseRevDefaultToAssisted = items.caseRevDefaultToAssisted;
		defaultAssType = items.defaultAssType;
		
		logTrace('case_review_content.js finished assigning vars.');
		
		init();
		logTrace('case_review_content.js finished.');
	}
);


//Globals

var caseNumber;
var fiveHunID;
var engineerEmail = '';
var engineerName;
var engineerFirst;
var caseLink;
var searchLink;
var subjectOfEmail;
var bodyOfEmail;

function init() {
	
	//var caseRevDefaultToAssisted = true; // Remove this hard code in 2.1!
	// --None-- Chat Assisted
	var isTypePage = ($("h3:eq(0)").text()== 'Select Case Review Record Type');
	
	// Top Bar lock & color
	if (lockTopBar) {
		//$("h2.mainTitle").css({'color': topBarFontColor, 'font-weight': 'bold'});
		$("div.pbHeader").first().css({'z-index': '1', 'position': 'fixed', 'background': topBarBG, 'margin': '-5px 0px 0px 0px', 'width': 'inherit'});
		$("div.pbBody").css('margin-top', '45px');
		$("div.pbHeader").children().first().css('table-layout', 'fixed');
		$("td.topButtonRow").css({'overflow': 'hidden', 'width': 'inherit'});
		//updateBodyMargin();
	}
	
	if (isTypePage === false) {
		// set defaultAssType
		// --None-- Manager Self Peer
		$('div.pbSubsection:eq(0) select:eq(0)').val(defaultAssType);
		// TODO mouseover not working
		// engineerEmail = '';
		var questions = $('div.pbBody').children("div");
		//$('#j_id0\\:j_id1\\:j_id36\\:j_id65\\:j_id77 a:eq(0)').mouseover(); // Mouse over Engineers name to initiate thej_id0:j_id1:j_id36:j_id65:j_id77
		var ffx = $('table.detailList th.labelCol:contains("Engineer\'s Name")').next().find('a:eq(0)');
		//var ffx =$('#' + questions[0].id.replace(/:/g,'\\:') + ' a:eq(0)').trigger( "mouseover" );
		alert(ffx.text());
		ffx.mouseover();
		
		var loopTime = 200; // Set time between loops (ms)
		var loops = 30;     // Set max loops to avoid overrun
		var lps = 1;        // Starting at loop 1
		loop1();            // Run the loop
		var myInterval = setInterval(function() { loop1(); }, loopTime); // Continue running on interval
		var foundIt = 0;    // Haven't found the info we are waiting for
		
		function loop1(argss) {
			if (foundIt == 0) { // If foundIt = 0, page is not ready to execute the following code, loop again
				lps += 1; // Add to loop counter (to avoid endless loop)
				if (lps >= loops) { clearInterval(myInterval); }  // If there have been more loops than max, stop trying to loop
				if ($("div.userProfileHoverBody div.userProfileHoverContent table.detailList tr").length > 0) { foundIt = 1; } // If "table.list tr.dataRow" exists, ensure page is ready
				if (foundIt) { //  If Page is ready execute, otherwise skip and loop again
					engineerEmail = $("div.userProfileHoverBody div.userProfileHoverContent table.detailList tr:eq(1) td.dataCol a:eq(0)").text();
					alert(engineerEmail);
					$('table.detailList th.labelCol:contains("Engineer\'s Name")').next().find('a:eq(0)').mouseout();
				}
			} // end foundit 0
		}// end loops
		
		//"https://ca.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&str=" + caseNumber + "&isdtp=vw&isWsVw=true"
		
		// Variables for "Save & Email" button
		caseNumber = $('table.detailList th.labelCol:contains("Case Number")').next().text();

		// var fiveHunID;
		try {
			fiveHunID = window.location.href.split("caseId=")[1].split("&")[0];
		} catch(e) {
			fiveHunID = false;
		}
		engineerName =  $('table.detailList th.labelCol:contains("Engineer\'s Name")').next().text();
		engineerFirst = engineerName.split(" ")[0];
		
		engineerEmail = engineerName.replace(/ /g, ".") + "@ca.com"; // if email not found, improvise using name
		logTrace("Engineer's Email = " + engineerEmail);
		
		caseLink = encodeURIComponent('https://ca.my.salesforce.com/' + fiveHunID + '?nooverride=1');
		searchLink = encodeURIComponent("https://ca.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=500&str=" + caseNumber + "&isdtp=vw&isWsVw=true#!/fen=500&initialViewMode=detail&str=" + caseNumber);
		subjectOfEmail = caseRevUnTag(caseRevSubject);//caseRevSubject.replace(/\<enter\>/ig, "%0D%0A").replace(/\<caseNumber\>/ig, caseNumber).replace(/\<engineer\>/ig, engineerName).replace(/\<caseLink\>/ig, caseLink).replace(/\<engineerFirst\>/ig, engineerFirst);
		bodyOfEmail = caseRevUnTag(caseRevBody); //caseRevBody.replace(/\<enter\>/ig, "%0D%0A").replace(/\<caseNumber\>/ig, caseNumber).replace(/\<engineer\>/ig, engineerName).replace(/\<caseLink\>/ig, caseLink).replace(/\<engineerFirst\>/ig, engineerFirst);
		// var genmailhelp = genMail(engineerEmail,caseRevCC,caseRevBCC,subjectOfEmail,bodyOfEmail);

		// Add "Save & Email" Button
		var mailing = $('<input/>').attr({'id': 'saveAndMail', 'class': 'btn', 'href': 'javascript:void(0)',
                                              'display': 'inline', 'title': 'Save & Email', 'type': 'button'})
		.css({'vertical-align': 'middle','margin': '5px 5px 5px 5px', 'height': '21px'})
		.prop('value', 'Save & Email').unbind();
		if (caseRevTestMode) {
			mailing.attr('title', 'Launch Test Email').prop('value', 'Launch Test Email');
			mailing.click(
				function() {
					window.open(genMail(bodyOfEmail), "_top");
				}
			);
		} else {
			mailing.click(
				function() {
					window.open(genmailhelp, "_top");
					$("input[value='Save']").click();
				}
			);
		}
		mailing.appendTo($("td.pbButton"));
		// future use: collect and add values to get score... make scorecard?
		//var totalPos = 0; var totalEarned = 0; for (var i=0; i < $("select").length; i++) { if ($("select")[i].value !== '' || undefined) { totalEarned+=parseInt($("select")[i].value); totalPos+=5; alert(totalEarned + "/" + totalPos)}}

            var wi = 0;
            questions.each(
                function() {
                    var thisQ = '#' + this.id.replace(/:/g,'\\:');

                    if (thisQ.split(':').length > 4) {
                        wkon = $("tr", thisQ); // Get rows
                        $("<tr id='arrangeScore" + wi + "'></tr>").insertAfter(wkon[0]);         // Add new row below first row
                        $("textarea", thisQ).css({"width": "500px", "height": "250px"}); // Change textarea size
                        $("#arrangeScore" + wi).append($(".labelCol", thisQ)[3]); // Move score label to new row
                        $("#arrangeScore" + wi).append($(".dataCol", thisQ)[3]);  // Move score box to new row
                        var expla = $(".dataCol", thisQ)[1].textContent; // Hold the explanation (In case they ever change)
                        // Create a new button to pop up explanations:
                        var buttonToAdd = $('<input/>').attr({'id': 'showExplanation', 'class': 'btn', 'href': 'javascript:void(0)',
                                                              'display': 'inline', 'title': 'Explanation', 'type': 'button'})
                        .css({'vertical-align': 'middle','margin': '5px 5px 5px 5px', 'height': '21px'})
                        .prop('value', 'Explanation').unbind().click(
                            function() {
                                alert(expla);
                            }
                        );
                        buttonToAdd.insertAfter($(thisQ + " select:eq(0)")); // Add new explanation button next to score
                        //j_id0:j_id1:j_id36:j_id83:0:j_id85:j_id87
                        $(".labelCol", thisQ)[1].remove(); // Remove explanation label
                        $(".dataCol", thisQ)[1].remove();  // Remove explanation text
                        wi++;
                    }
                } // END: for
            );
        } else {
            if (caseRevDefaultToAssisted) {
                $("select:eq(0)").val('Assisted');
            }
        }
//logTrace('case_review_content.js finished.');
}


function caseRevUnTag(s) {
	
	try {
		
		s = s.replace(/\<enter\>/ig, "%0D%0A");
		s = s.replace(/\<caseNumber\>/ig, caseNumber);
		s = s.replace(/\<engineer\>/ig, engineerName);
		
		if (fiveHunID != false) {
			s = s.replace(/\<caseLink\>/ig, caseLink);
		} else {
			s = s.replace(/\<caseLink\>/ig, searchLink);
		}
		
		s = s.replace(/\<engineerFirst\>/ig, engineerFirst);

		} catch(e) {
			logTrace("There was a problem with caseRevUnTag. Additional Info: " +e);
		}
		
	return s;
	
}

function genMail(bodyOfEmail) {
	
	var score = 0, outOf = 0;
	
	for (var i = 1; i < $("select").length; i++) {
		if ($("select:eq(" + i + ") option:selected").text() != "--None--" && $("select:eq(" + i + ") option:selected").text() != "NR") {
			outOf += 5;
			score += parseInt($("select:eq(" + i + ") option:selected").text());
		}
	}
	
	var mailTo = "mailto:" + engineerEmail + "?";
	
	if (caseRevCC !== "") { 
		mailTo += "cc=" + caseRevCC + "&";
	}
	
	if (caseRevBCC !== "") {
		mailTo += "bcc=" + caseRevBCC + "&";
	}
	
	mailTo += "subject=" + subjectOfEmail  + "&body=" + bodyOfEmail.replace(/\<reviewScore\>/ig, score +"/"+ outOf);
	
	return mailTo;
}

// Function to adjust margin between body & top bar
function updateBodyMargin() {
    var barHeight = $("div.pbHeader").outerHeight() + "px";
    $('div.pbBody').first().css({'margin-top': barHeight});
    //if ($('#fiftyFrame').length == 1) { $("#fiftyFrame").css({'height': 'calc(100% - ' + barHeight + ')','top': barHeight}); }
}