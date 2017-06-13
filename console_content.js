// console_content.js

var replaceCloud;

var requestVars = JSON.stringify(['replaceCloud']);
getVars(requestVars,init_console);

var curVersion = "3.0 BETA";
var pblink = "https://cawiki.ca.com/display/CASupport/ArrangeSC+v2";
var changeLog = [
    ['3.0BETA', 'today',
     'Converted from UserScripts to Extension: Now known as SCw33t, previously ArrangeSC.',
     'Initial Release: First release as an extension.'
    ]
];

function init_console() {
  console.log('console_content.js initializing...');


  // if (replaceCloud) {
    $("[title='Console']:eq(0)").attr('src', chrome.extension.getURL("images/rainbow_cloud_64x40.png"));
    console.log($("img [title='Console']").length);
  // }




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
      if ($('#serviceDeskFooter').length > 0) { foundIt = 1; } // If "table.list tr.dataRow" exists, ensure page is ready
      if (foundIt) { //  If Page is ready execute, otherwise skip and loop again

        // Add footer
        try {
            $("<table width=\"100%\" height='15px'><tbody><tr id='SCw33t_footer'" +
              ";'><td id='arrangeFooterText'>&nbsp;&nbsp;Sweetened by <a href='" + pblink +
              "' target='_blank' style='text-decoration: underline;'>SCw33t v" + curVersion + "</a> - </td></tr></tbody></table>")
                .prependTo("div.x-box-inner");

            $("<a href='javascript:void(0)' style='text-decoration: underline;'>What's New?</a>").click(
                function() {
                    reviewChanges();
                }
            ).appendTo($('#arrangeFooterText'));
            console.log('added footer')
        } catch(e) {
            logError("Failed to add footer to console bottom.<br />Additional info: " + e);
        }
      }
    } // end foundit 0
  }// end loops

  console.log('console_content.js done...');
}
