// report_content.js

console.log('init report_content.js');
javascript:function AutoRefresh()
{
  $("[name='run']").click();
}

/* refresh every 5 minutes - value is in milliseconds
 * # of minutes * 60 seconds * 1000 milliseconds = proper value for setInterval
 * change minutes value as desired.
 */
var minutes = 5;
var millis = minutes*60*1000;
var interval = setInterval(function(){AutoRefresh();}, millis);

// $(window).unload(function(){clearInterval(interval);}) ;

var colNum = 0;
var sloFound = false;
$(".headerRow th").each(
	function() {
		//alert(colNum + ' - ' + $(this).text())
		if (sloFound == false && $(this).text() == "Due Date (SLO)") {
			sloFound = true;
			colNum++;
			return colNum;
		} else if (sloFound == false) {
			colNum++;
		}
	}
);

function checkCallBacks() {
console.log('a');// tr .odd
$(".even, .odd").each(
	function() {
		// alert($(this).children("td:eq("+(colNum)+")").text());
		if  (sloFound) { 
			var compared = compareDTNow($(this).children("td:eq("+(colNum)+")").text()); 

			if (compared.tense == 'today' && compared.hourDif == 0 && compared.minsDif < 20) {
				alert('Callback expiring in < 20 mins');
			} else if (compared.tense == 'today' && compared.hourDif == 0 && compared.minsDif < (20 + minutes)) {
				alert('Callback expiring in < ' + (20 + minutes) + ' mins');
			} else {
				
			}
		}
	}
);
}



        var loopTime = 200; // Set time between loops (ms)
        var loops = 50;     // Set max loops to avoid overrun
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

                // if ($(".x-grid3-row-last").length > 0) { // If "table.list tr.dataRow" exists, ensure page is ready
				console.log($(".even").length);
                if ($(".even").length > 0) { // If "table.list tr.dataRow" exists, ensure page is ready
					foundIt = 1; 
					//alert('b');
                    //if (FIAHold === 0) {} // For initial page load, if not a "Show More" re-check page is ready
                    //else if ($("table.list tr.dataRow").lenth > FIAHold) { foundIt = 1; } // For re-check when Show-more button is clicked, if additioanl dataRows have been added page is ready
                }

                if (foundIt) { 

					checkCallBacks();
				}
			}
		}