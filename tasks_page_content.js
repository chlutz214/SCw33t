

// Team
var myself;
var myTeam;

var requestVars = ['myself','myTeam'];
getVars(JSON.stringify(requestVars), addEvenOdd);

// x-grid3-td-LIST_RECORD_ID = 500id.. Can build links and stuff with this

function addEvenOdd() {
  var loopTime = 200; // Set time between loops (ms)
  var loops = 50;     // Set max loops to avoid overrun
  var lps = 1;        // Starting at loop 1
  loop1();            // Run the loop
  var myInterval = setInterval(function() { loop1(); }, loopTime); // Continue running on interval
  var foundIt = 0;    // Haven't found the info we are waiting for
  var FIAHold = 0;    // For use with Show More >> & squareMonitor/popup emails, needs to re-do changes.

  function loop1(argss) {
      if (foundIt === 0) { // If foundIt = 0, page is not ready to execute the following code, loop again
	      lps += 1; // Add to loop counter (to avoid endless loop)
        if (lps >= loops) { clearInterval(myInterval); } // If there have been more loops than max, stop trying to loop
        //alert($("table.list tr.dataRow").length +" - "+ FIAHold);

        	if ($("div.waitingSearchDiv").css('display') == 'none') { // If "table.list tr.dataRow" exists, ensure page is ready
						foundIt = 1;
              //if (FIAHold === 0) {} // For initial page load, if not a "Show More" re-check page is ready
              //else if ($("table.list tr.dataRow").lenth > FIAHold) { foundIt = 1; } // For re-check when Show-more button is clicked, if additioanl dataRows have been added page is ready
          }
          if (foundIt) {
						console.log('found it');
						$(".x-grid3-scroller").unbind("DOMNodeInserted DOMNodeRemoved DOMNodeRemovedFromDocument DOMNodeInsertedIntoDocument")
							.bind("DOMNodeInserted DOMNodeRemoved DOMNodeRemovedFromDocument DOMNodeInsertedIntoDocument",
								function(e) {console.log("change! "+ e);
									lps=1; foundIt=0; loop1();
								}
							);
							var eo = 0;
							$('.x-grid3-row').each(
								function() {
									if (eo % 2 == 0) {
										//console.log('eo: ' + eo);
										this.className = "x-grid3-row even";
									} else {
										this.className = "x-grid3-row odd";
									}
									eo++;
								}
							);
							//getCellsByHeader();
						}
					}
				}

		// function evenOddRows() {
		// 	var eo = 0;
		// 	$('.x-grid3-row').each(
		// 		function() {
		// 			if (eo % 2 == 0) {
		// 				//console.log('eo: ' + eo);
		// 				this.className = "x-grid3-row even";
		// 			} else {
		// 				this.className = "x-grid3-row odd";
		// 			}
		// 			eo++;
		// 		}
		// 	);
		// }

		// function getCellsByHeader() {
		// 	$('.x-grid3-hd-inner').each(
		// 		function() {
		// 			logTrace("header: "+this.title);
		// 			// logTrace("class: "+this.className.replace(/x-grid3-hd|x-grid3-cell| |ASC|DESC|-inner/ig,''));
		// 			var cssClass = this.className.replace(/x-grid3-hd|x-grid3-cell| |ASC|DESC|-inner/ig,'');
		// 			doAlerts({"cssClass": 'div.x-grid3-col' + cssClass, "title": this.title});//, "column": $(this)
		// 			//filterColumn({"cssClass": cssClass, "title": this.title, "column": $(this)});
		// 			return ({"cssClass": 'div.x-grid3-col' + cssClass, "title": this.title});
		// 		}
		// 	);
		// }

		function doAlerts(args) {
			switch (args.title) {

				case "xxx":


				default:
					break;
			}
		}

}
