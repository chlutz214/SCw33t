/////////////////////////////////////     email_content.js    //////////////////////////////////////
//                                                     
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: /email_content.js
//
// Description: Main content script for email pages.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
logTrace('email_content.js initializing.');

// General
var popUpWidth;
var popUpHeight;

// Email Page Specific Options
var disableOriginalSendButtons;
var forceCAEmail;
var includeToInfo;
var includeSubjet;
var includeEmailBody;

logTrace('email_content.js collecting settings.');

var requestVars = JSON.stringify(['disableOriginalSendButtons','forceCAEmail','includeToInfo','includeSubjet','includeEmailBody']);
getVars(requestVars,init_email);

logTrace('email_content.js finished assigning vars.');

// Per-case vars
var fiveHunID;
/*
chrome.storage.sync.get(
    {
		// General
		'popUpWidth': '800',
        'popUpHeight': '675',
		
		// Email Page Specific Options
        'disableOriginalSendButtons': false,
        'forceCAEmail': true,
        'includeToInfo': true,
        'includeSubjet': true,
        'includeEmailBody': true

    },
    function(items) {
		logTrace('email_content.js settings collected, listing:');
        for (var key in items)
        {
            logTrace("var: " + key + " = " + items[key]);
        }
		logTrace('email_content.js assigning vars.');
		
		//General
		popUpWidth = items.popUpWidth;
		popUpHeight = items.popUpHeight;
		
		// Email Page Specific Options
        disableOriginalSendButtons = items.disableOriginalSendButtons;
        forceCAEmail = items.forceCAEmail;
		includeToInfo = items.includeToInfo;
		includeSubjet = items.includeSubjet;
		includeEmailBody = items.includeEmailBody;

		


    }
);
*/
function init_email() {
	
        // Collect 500 id

        try {
            fiveHunID = $("#cancelURL").val().split("/")[1].split("?")[0].slice(0,-3);
            logTrace("Generate Email Comments: 500 ID = " + fiveHunID);
        }
        catch(e) {
            logError("Generate Email Comments: Error: Unable to get 500 ID...");
        }

        var caseNum = null;

        // BEGIN: Post comment on Email
        // Make a new button with the prefills passed in the header
        var newSendBtn = '<input id="send-gce" value="Send + Comment" class="btn" name="send-gce" title="Send + Comment" type="button">';
        $(newSendBtn).prependTo("#topButtonRow");
        var newBotSendBtn = '<input id="send-gce-bot" value="Send + Comment" class="btn" name="send-gce-bot" title="Send + Comment" type="button">';
        $(newBotSendBtn).prependTo("#bottomButtonRow");
        //$(newSendBtn).clone.prependTo("#topButtonRow");

        // Hide the old buttons?
        if (disableOriginalSendButtons)
        {
            $("input[name=send]").css('display', 'none');
        }

        // Modify new Send buttons onclick functionality
        document.getElementById("send-gce").addEventListener('click', emailSendModified, false);
        document.getElementById("send-gce-bot").addEventListener('click', emailSendModified, false);

        // end post comment on email



        if (forceCAEmail) { $("#p26").val("0D2a0000000L0ak:catechnicalsupport@ca.com:CA Technical Support"); } // if forceCAEmail enabled, change email
		
		// BEGIN: Send & dismiss code
		/*
		if (window.location.href.indexOf("&dismiss=1") > -1) // if dismiss was passed
		{
				$("<input id='send-dismiss' value='Send & Dismiss' title='Send & Dismiss' type='button' class='btn'></input>")
				.click( 
				function() {
						var fiveHunID = $("#cancelURL").val().replace("/","").split("?")[0];
						var caseNum = $("#p3_lkold").val();
						//alert(caseNum);
						popIt("framePOP", "https://ca--c.na13.visual.force.com/apex/Dismiss_selected_Callbacks?caseId=" + fiveHunID, "Dismiss Callbacks");
						//$("input[value='Cancel']").click();
						$("input[value=' Send ']").click();
				} 
				).appendTo("#topButtonRow").clone().appendTo("#bottomButtonRow");
		}
		// END: Send & dismiss code
		*/

        logTrace('email_content.js finished.');

}

function emailSendModified() {
    // New lines are really 2 chars when SC counts... treat them that way!
    var nlen = 2;
    // Collect total length (so we don't overrun the 4000 char comment limit)
    var currLength = 0;
    currLength += commentStart.length + nlen;

    // Start Generating URI String
    var myURI = 'https://ca.my.salesforce.com/00a/e?parent_id=' + fiveHunID + '&retURL=/' + fiveHunID + '&isdtp=vw' + '&email2Comment=true';

    if (includeToInfo)
    { //alert('a');
     // Collect To
     var emailTo = $("#p2").val();
     if (emailTo !== '')
     {
         myURI += '&emailTo=' + lzw_encode(emailTo);
         currLength += emailTo.length + labelTo.length + nlen;
     }

     // Collect AdditionalTo
     var emailADD = $("#p24").val();
     if (emailADD !== '')
     {
         myURI += '&emailADD=' + lzw_encode(emailADD);
         currLength += emailADD.length + labelADD.length + nlen;
     }

     // Collect CC
     var emailCC = $("#p4").val();
     if (emailCC !== '')
     {
         myURI += '&emailCC=' + lzw_encode(emailCC);
         currLength += emailCC.length + labelCC.length + nlen;
     }

     // Collect BCC
     var emailBCC = $("#p5").val();
     if (emailBCC !== '')
     {
         myURI += '&emailBCC=' + lzw_encode(emailBCC);
         currLength += emailBCC.length + labelBCC.length + nlen;
     }
    }

    if (includeSubjet)
    {
        // Collect Subject
        var emailSub = $("#p6").val();
        if (emailSub !== '')
        {
			 if (emailSub.length <= 100)
			{
				myURI += '&emailSub=' + lzw_encode(emailSub);
				currLength += emailSub.length + labelSub.length + nlen;
			} else {
				alert("Subject is longer than SC allows (>100 chars). Please shorten before sending.");
				return; 
			}
		}
    }

    if (includeEmailBody)
    {
        // Collect Email Body, truncate?
        var emailBody = $("#p7").val();
        if (emailBody.length > 0)
        {
            var numLineReturns = emailBody.split("\n").length;
            currLength += labelBody.length + nlen;

            if (emailBody.length + numLineReturns > 3995 - currLength)
            {
                currLength += truncatedMessage.length + nlen;
                emailBody = emailBody.substr(0, (3995 - currLength));
                numLineReturns = emailBody.split("\n").length;
                if (emailBody.length + numLineReturns >= 3995 - currLength)
                {
                    emailBody = emailBody.substr(0, (3995 - currLength - numLineReturns));
                    numLineReturns = emailBody.split("\n").length;
                }
                emailBody += "\n" + truncatedMessage;
            }
            myURI += '&emailBody=' + lzw_encode(emailBody);
        }
        else
        {
            // Email Body is empty... Confirm the email should be sent
            var response = confirm("Are you sure you want to send a blank email!?");
            // If yes clicked (WHO WOULD SEND A BLANK EMAIL ON PURPOSE?!), continue...
            if (response === true) {}
            // else break out of this function to stop email & comment from being genereated
            else { return; }
        }
    }


    // POP IT!
    popIt("framePOP", encodeURI(myURI), "Adding email comment...", "Comments", false);

    // Click Send to send email
    //$("input[name='cancel']").click(); // Click Cancel (for testing)
    $("input[name='send']").first().click(); // Click send
}