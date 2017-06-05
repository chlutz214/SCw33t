//cases_page_content.js


var unlockRolodex;
// Team
var myself;
var myTeam;

var requestVars = ['myself','myTeam','unlockRolodex'];
getVars(JSON.stringify(requestVars), casesPageInit);

// x-grid3-td-LIST_RECORD_ID = 500id.. Can build links and stuff with this
//div.waitingSearchDiv
// on change in table dom do alerts...x-grid3-row-last
// var mySelf = {
// 	name: "Christian Lutz",
// 	alias: "lutch01",
// 	color: '#e6e6fa',
// 	startHour: 8,
// 	endHour: 17,
// };
//
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
var casePageEvenOddRowColors = true;

function casesPageInit() {
	console.log('myTeam: ' + myTeam);
	if (unlockRolodex) {
		// $('div.rolodex').attr('visibility','');
	}
	console.log('cases_page_content initialized');
	// var bound = 0;
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
                if ($("div.waitingSearchDiv").css('display') == 'none') { // If "table.list tr.dataRow" exists, ensure page is ready
					foundIt = 1;
                    //if (FIAHold === 0) {} // For initial page load, if not a "Show More" re-check page is ready
                    //else if ($("table.list tr.dataRow").lenth > FIAHold) { foundIt = 1; } // For re-check when Show-more button is clicked, if additioanl dataRows have been added page is ready
                }

                if (foundIt) {
					// if (bound = 0) {
						// $(".x-grid3-scroller").unbind("DOMSubtreeModified").bind("DOMSubtreeModified",
						$(".x-grid3-scroller").unbind("DOMNodeInserted DOMNodeRemoved DOMNodeRemovedFromDocument DOMNodeInsertedIntoDocument")
							.bind("DOMNodeInserted DOMNodeRemoved DOMNodeRemovedFromDocument DOMNodeInsertedIntoDocument",
						// $(".waitingSearchDiv").unbind("DOMAttrModified").bind("DOMAttrModified",
							function(e) {console.log("change! "+ e);
								 lps=1; foundIt=0; loop1();
							}
						);
					// }
					evenOddRows();
					getCellsByHeader();
				}
			}
		}

		function evenOddRows() {
			if (casePageEvenOddRowColors)  {
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
			}
		}

		function getCellsByHeader() {
			$('.x-grid3-hd-inner').each(
				function() {
					logTrace("header: "+this.title);
					// logTrace("class: "+this.className.replace(/x-grid3-hd|x-grid3-cell| |ASC|DESC|-inner/ig,''));
					var cssClass = this.className.replace(/x-grid3-hd|x-grid3-cell| |ASC|DESC|-inner/ig,'');
					doAlerts({"cssClass": 'div.x-grid3-col' + cssClass, "title": this.title});//, "column": $(this)
					//filterColumn({"cssClass": cssClass, "title": this.title, "column": $(this)});
					return ({"cssClass": 'div.x-grid3-col' + cssClass, "title": this.title});
				}
			);
		}

		// TODO fix this or find a different way to display alerts that is NOT color based...
		function addToAction(row,txt) {
			console.log('adding to action: ' + txt + ' - row: ' + row);
			var act = document.getElementById(row.split('_')[0] + '_checkbox');

			try { console.log('origtext = ' + act.text); act.text = act.text + ' ' + txt; }
			catch(e) { logError('Error with addToAction: ' + e); }
		}

		function doAlerts(args) {
			switch (args.title) {

				case "Age of a case":
					console.log('length '+ $(args.cssClass).length);
					$(args.cssClass).each(function() {
						// TODO make colors modifiable by selecting anchor colors like: g y o r
						var alpha = 0.75;
						var age = parseInt($(this).text().trim());
						if (age == 0) {
							$(this).parent().css({"background-color": "rgba(0,112,210,"+alpha+")"});
						} else if (age > 0 && age <= 30) {
							$(this).parent().css({"background-color": "rgba(" + Math.round(8.53*age) + ",255,0,"+alpha+")"}); // 255 (max) / 30(range) = ~8.53
						} else if (age > 30 && age <= 60) {
							// $(this).css({"background-color": 'yellow'});
							$(this).parent().css({"background-color": "rgba(255," + Math.round(255-3*(age-30)) + ",0,"+alpha+")"}); // 255 - 165 (yello - orange) / 30 (range) = 3
						} else if (age > 60 && age <= 90) {
							// $(this).css({"background-color": 'orange'});
							$(this).parent().css({"background-color": "rgba(255," + (Math.round(165-5.5*(age-60))) + ",0,"+alpha+")"}); // 165 (orange max - yellow...0) / 30 = 5.5
							if (age >= 75) {
								// starts to get hard to read black after the bg color 75 generates...
								$(this).parent().css({"color":"white"});
							}
						} else if (age > 90 && age < 365) {
							var a =  255 - Math.round((age - 90)*0.93);// 256/275 = 0.93
							$(this).parent().css({"background-color": "rgba("+a+",0,0,"+alpha+")", "color":"white", "font-weight":"bold"});
						} else {
							$(this).parent().css({"background-color": "rgba(0,0,0,"+alpha+")","color":"white", "font-weight":"bold"});
						}
					});
					break;

				case "Case Owner Alias":
					console.log('length '+ $(args.cssClass).length);

					$(args.cssClass).each(
						function() {
							//var teamMate = $(this).text().trim();
							// console.log(teamMate);
							for (var teamMate in myTeam) {
								if (myTeam[teamMate].alias == $(this).text().trim()) {
									$(this).parent().css({"background-color": myTeam[teamMate].color});
								}
							}

						}
					);
					break;

				case "Next Action Due Date":
					logTrace("Checking Next action due dates " + $(args.cssClass).length);
					$(args.cssClass).each(function() {
						var NA = $(this);
						if (NA.text().indexOf('M') > -1) {
							try{
						console.log("Next Action: " + NA.text());

						var compared = compareDTNow(NA.text());
						if (compared.tense == 'today') {
							$(this).parent().addClass('warningCell');
							// addToAction(this.id,"NA");
							console.log(myself.endHour - compared.now.hour);
							if (myself.endHour - compared.now.hour < 2) {
								$(this).parent().addClass('blink_me');
							}
						} else if (compared.tense == 'future') {
							$(this).css({"background-color": 'blue'});

						}else if (compared.tense == 'past') {
							// $(this).css({"background-color": 'red'});
							$(this).parent().addClass('alertCell');

						}
							} catch(e) {console.log("error " + e)}
						}
						// console.log('id: '+$(this).attr('id'));
					// console.log('id2: '+this);
					// console.log('id3: '+this.id);
					// addToAction(this.id,"NA")
					});

					break;

				case "Open CB":
					$(args.cssClass).each(
						function() {
							var txt = $(this).text().trim();
							if (txt == 'Y') {
								$(this).addClass('alertCell');
								// $(this).css({"background-color": 'red'});
							} else if (txt == 'N') {
								// $(this).css({"background-color": 'blue'});
							}
							// console.log('id: '+$(this).attr('id'));
							// console.log('id2: '+this);
							// console.log('id3: '+this.id);
							// addToAction($(this).attr('id'),"CB")
						}
					);

					break;

				case "Owner Name":
					console.log('length '+ $(args.cssClass).length);

					$(args.cssClass).each(
						function() {
							//var teamMate = $(this).text().trim();
							// console.log(teamMate);
							for (var teamMate in myTeam) {
								var commaName = myTeam[teamMate].name.split(' ')[1] + ', ' + myTeam[teamMate].name.split(' ')[0];
								if (commaName == $(this).text().trim()) {
									$(this).parent().css({"background-color": myTeam[teamMate].color});
								}
							}

						}
					);
					break;

				case "Severity":
					$(args.cssClass).each(
						function() {
							var sev = parseInt($(this).text().trim());
							if (sev == 1) {
								$(this).css({"color": "var(--alert_text_color)", "font-weight": "bold"});
							}
							// else if (sev == 2) {
								// $(this).css({"color": "--warning_text_color", "font-weight": "bold"});
							// } else if (sev == 3) {
								// $(this).css({"color": "#FFFF00", "font-weight": "bold"});
							// } else if (sev == 4) {
								// $(this).css({"color": "#00FF00", "font-weight": "bold"});
							// } else {}
						}
					);

					break;

				case "Special Conditions":
					$(args.cssClass).each(
						function() {
							var cond = parseInt($(this).text().trim());
							if (cond > 0) {
								$(this).css({"color": "var(--alert_text_color)","font-weight": "bold"});//"background-color": "#FFECEC",
							}
						}
					);
					// addToAction(this.id,"SC")
					break;

				case "Troubleshooting Stage":
					$(args.cssClass).each(
						function() {
							var stgNum = parseInt($(this).text().trim().split('. ')[0]);
							bgPercent(stgNum,7,$(this));
							// var percent = (stgNum/6) * 100;
							// console.log('stage: ' + stgNum);
							// console.log('percent: ' + percent);

							// if (stgNum == 7) {
								// $(this).css({"background": "#00FFFF"});
							// } else {
								// $(this).css({"background": "linear-gradient(90deg, #00FFFF 0%, #00FFFF " + (percent-10) + "%, rgba(0,0,0,0) " + (percent+10) + "%, rgba(0,0,0,0)"});
							// }
															// $(this).css({"background": "linear-gradient(90deg, #00FFFF 0%, #00FFFF " + (percent-10) + "%, #FFFFFF " + (percent+10) + "%, #FFFFFF"});

						}
					);
					// addToAction(this.id,"SC")
					break;


				default:
					break;
			}
		}

}
		function filterColumn(args) {
			// console.log(args.column);
			//.prepend();
			// addDropDown(args.cssClass,$('<img width="10px" height="10px" src="' + chrome.extension.getURL("images/filter.png") + '"></img>'),args.column);

			var id = args.cssClass + '_filter';
			var ddImg = $('<a  data-jq-dropdown="#BTNS-BTN-GRP-' + id + '" onclick="function(e) { console.log(\'click\'); e.stopPropagation();}"><img width="10px" height="10px" src="' + chrome.extension.getURL("images/filter.png") + '"></img><a>');// "<button class=\"btn ca-button\" type=\"button\" id=\"" + id + "\" data-jq-dropdown=\"#BTNS-BTN-GRP-" + id + "\">" + text + "</button>";
			var popDropdownDiv = $("<div class=\"jq-dropdown\" id=\"BTNS-BTN-GRP-" + id + "\"><ul id=\"" + id + "ButtonHolder\" class=\"jq-dropdown-menu\"></ul></div>");
			$("body").append(popDropdownDiv);             // POP: Add the div that contains the magic - it can go anywhere within body, so just stick it at the end... It's not visable.
			args.column.parent().prepend(ddImg); // POP: Add the button to top bar.
			console.log('image adding');



			var options = [];
			$(args.cssClass).each(
				function() {
					// console.log('1');
				}
			);
			//$('#filter_"' +  args.columnId).append('<option value=""></option>');

		}

		/*
function findParentNodeByClass(childObj, parentClass) {
        console.log("checking for parent by class");
    var testObj = childObj.parentNode;
    try { console.log(testObj.className); }
    catch(e) { console.log("no class name"); }
    var count = 1;
    while(testObj.className.contains(parentClass) == -1 && count < 15) {
		try { console.log(testObj.className); }
		catch(e) { console.log("no class name"); }
        testObj = testObj.parentNode;
        count++;
    }
    return testObj;
}       */
