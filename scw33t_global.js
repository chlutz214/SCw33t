/////////////////////////////////////       scw33t_global.js     //////////////////////////////////////
//
// VeRsIoN: 0.1
// Last updated: 03/27/2017
// Full Path: scw33t_global.js
//
// Description: Holds globally required functions.
//
// Notes:
//
///////////////////////////////////////////////////////////////////////////////////////////////////////
// TODO limit the scope of Globally applied scripts (for speed & mem)
// TODO console style for search bar & tab colorings
console.log("SCw33t_Global loaded... HREF: "+ window.location.href);


var debugLevel = 4;
// 0 = ERROR
// 1 = ERROR + WARNING
// 2 = ERROR + WARNING + INFO
// 3 = ERROR + WARNING + INFO + DEBUG
// 4 = ERROR + WARNING + INFO + DEBUG + TRACE
var logTitle = "SCw33tLog";
logTrace('scw33t_global.js initializing.');

//var removePullDownBar = true;
//var boostTextSize = "75%"; // SC Default = 75%
//var peekItHeight = 300;
// BEGIN: Browser ID
var isFirefox = false; // typeof InstallTrigger !== 'undefined';
var isChrome = true; // !!window.chrome && !!window.chrome.webstore;
//alert("FF: " + isFirefox + ". Chrome: " + isChrome);
// END: Browser ID

var boostTextSize = '75%';
var removePullDownBar = true;
var caseNum = null;
var fiveHunId = null;
var needToDismiss = null;


// CSS Theme
var myTheme = [
"console_top_color",
"console_bottom_color",
"console_text_color",
"tabstrip_bg_color",
"tabstrip_alt_bg_color",
"tabstrip_text_color",
'body_bg_color',
'body_text_color',
'body_text_modified_color',
'body_link_hover_color',
'body_link_color',
'body_label_text_color',
'alert_background_color',
'alert_text_color',
'alert_border_style',
'warning_background_color',
'warning_text_color',
'warning_border_style',
'percent_bar_color',
'percent_bar_bg_color',
'tb_bg_color',
'tb_text_color',
'tb_link_color',
'tb_border_style',
'box_h_text_color',
'box_h_bg_color',
'box_h_border_style',
'box_body_bg_color',
'box_body_border_style',
'cell_label_border_style',
'cell_data_border_style',
'row_color_even',
'row_color_odd',
'row_color_highlight',
'btn_text_color',
'btn_bg_color',
'btn_border_style',
'btn_alt_text_color',
'btn_alt_bg_color',
'btn_alt_border_style',
'txtfield_text_color',
'txtfield_bg_color',
'txtfield_border_style'];
var console_top_color;
var console_bottom_color;
var console_text_color;
var tabstrip_bg_color;
var tabstrip_alt_bg_color;
var tabstrip_text_color;

var body_bg_color;
var body_text_color;
var body_text_modified_color;
var body_link_hover_color;
var body_link_color;
var body_label_text_color;
var alert_background_color;
var alert_text_color;
var alert_border_style;
var warning_background_color;
var warning_text_color;
var warning_border_style;
var percent_bar_color;
var percent_bar_bg_color;
var tb_bg_color;
var tb_text_color;
var tb_link_color;
var tb_border_style;
var box_h_text_color;
var box_h_bg_color;
var box_h_border_style;
var box_body_bg_color;
var box_body_border_style;
var cell_label_border_style;
var cell_data_border_style;
var row_color_even;
var row_color_odd;
var row_color_highlight;
var btn_text_color;
var btn_bg_color;
var btn_border_style;
var txtfield_text_color;
var txtfield_bg_color;
var txtfield_border_style;

var requestVars = ['boostTextSize','removePullDownBar'].concat(myTheme);
// var requestVars ='myTheme';
// Sets Global Theme
getVars(JSON.stringify(requestVars), setTheme);
function setTheme() { setStyle(myTheme); }


////////////////////////////////////////////////
// BOOST text size
////////////////////////////////////////////////
$('body').css('font-size', boostTextSize);

////////////////////////////////////////////////
// SCw33t Logger v1.0
////////////////////////////////////////////////
// TODO add confirmbox..... why?!
// TODO colorize more:
//      console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
function logError(message, type) {
	logSCweet('ERROR', message, type, 'background: pink; color: black');
}

function logWarning(message, type) {
	if (debugLevel >= 1) {
		logSCweet('WARNING', message, type);
	}
}

function logInfo(message, type) {
	if (debugLevel >= 2) {
		logSCweet('INFO', message, type);
	}
}

function logDebug(message, type) {
	if (debugLevel >= 3){
		logSCweet('DEBUG', message, type);
	}
}

function logTrace(message, type) {
	if (debugLevel >= 4) {
		logSCweet('TRACE', message, type);
	}
}

function logSCweet(level, message, type, color) {
	if (type === undefined) {
		type = 0;
	}
	message = '%c' + logTitle + "." + level + " " + makeTimestamp() + "-> " + message;
	switch(type) {

		// Only Console Log
		case 0:
			console.log(message, color);
			break;

		// Only Alert
		case 1:
			alert(message);
			break;

		// Alert & Console Log
		case 2:
			console.log(message, color);
			alert(message);
			break;

	}
}

function makeTimestamp() {
    var date = new Date();

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;
    var stamp = date.getFullYear() + "-" + month + "-" + day + "_" +  hour + ":" + min + ":" + sec;

    return stamp;
}

var alertLevels = [
	"! ERROR !",
	"<span class=\'alertText\'>Alert</span>",
	"<span class=\'warningText\'>Warning</span>",
	"Info"
 ];
function addAlert(level, details) {
	if (level == 0) {
		logError(details);
	}
	if ($("#arrangeSC-alertBox-No-Alerts").css('display') != 'none' ) {
		$("#arrangeSC-alertBox-No-Alerts").css('display','none');
	}
	var numAlerts = parseInt($("#numAlerts").text()) +1;
	$("#numAlerts").text(numAlerts);
	$("<tr><td align='right' class='labelCol' style='word-wrap: break-word;'>"
	+ "<span class='labelSpan'>" + alertLevels[level] + "<span></td>"
	+ "<td class='data2Col' style='width:100% !important; word-wrap: break-word;' colspan='3'>" + details + "</td></tr>")
	.appendTo("#arrangeSC-alertBox-table-" + level);
}

////////////////////////////////////////////////
// Message Handling
////////////////////////////////////////////////
chrome.extension.onMessage.addListener(
	function(msg, sender, sendResponse) {
		if (msg.action == 'insert_scnippet') {
			logDebug("Posting SCnippet to '" + document.activeElement.id + "', payload: "+ msg.value);
			insertAtCaret(document.activeElement.id , msg.value);
		} //else if (msg.action == '') {}
	}
);

function getVars(requestedVars, func) {
	logTrace('Retreiving vars from background_vars.js.')
	chrome.runtime.sendMessage({action: "get_vars",varList: requestedVars}, function(response) {
		if (requestedVars != 'all') {
			// console.log(JSON.parse(response));
			try {
				response = JSON.parse(response);
			} catch (e) {}

		}
		for (var vari in response) {
			logTrace("getVars: Setting " + vari + " to: " + response[vari]);
			try {
				window[vari] = JSON.parse(response[vari]);
			} catch (e) {
				window[vari] = response[vari];
			}
			logDebug(vari + " = " + window[vari]);
		}
		func();
		//return true;
		// init();
		// eval(post);
	});
}

function setVars(varsToSet) {
	logTrace('Setting var(s) via background_vars.js.')
	chrome.runtime.sendMessage({action: "set_vars",varList: JSON.stringify(varsToSet)}, function(response) {
		// if (requestedVars != 'all') {

			// try {
				//response = JSON.parse(response);
				console.log(response.response);
				if (response.response == 'true') {
					alert("Settings saved!");
				} else {
					alert("Settings may not have saved... please reload to check.");
				}
			// } catch (e) { console.log("Problem receiving response from background " + e); }
		// }
		/*for (var vari in response) {
			logTrace("getVars: Setting " + vari + " to: " + response[vari]);
			try {
				window[vari] = JSON.parse(response[vari]);
			} catch (e) {
				window[vari] = response[vari];
			}
			logDebug(vari + " = " + window[vari]);
		}
		func();*/
	});
}

function clearSettings() {
	chrome.storage.sync.clear();
}

function setStyle(args) {
	for (var arg in args){
		logTrace("Setting css var: --" + args[arg] + " to : " + window[args[arg]]);
		document.documentElement.style.setProperty('--' + args[arg], window[args[arg]]);
	}
	// for (var arg in args){
		// logTrace("Setting css var: " + arg + " to : " + args[arg]);
		// document.documentElement.style.setProperty('--' + arg, args[arg]);
	// }
}



////////////////////////////////////////////////
// Shared Functions
////////////////////////////////////////////////
var windowLocation = window.location.href;

function getUrlSub(url,sub) {
	if (url.indexOf(sub) > -1) {
		console.log("url = " + url);
		console.log("sub = " + sub);
		console.log("beg = " + url.split(new RegExp("[\&\?]"+sub+"="))[1]);
		console.log("finRes = " + url.split(new RegExp("[\&\?]"+sub+"="))[1].split(/\&?.*$/)[0]);
		return url.split(new RegExp("[\&\?]"+sub+"="))[1].split('&')[0];
	} else { return false; }
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
    return decodeURIComponent(escape(s));
}


// LZW-compress a string
// Email2Comment: Used to compress email body so >2000 chars body can be sent through url
function lzw_encode(s) {
    s = b64EncodeUnicode(s);
    var dict = {};
    var data = (s + "").split("");
    var out = [];
    var currChar;
    var phrase = data[0];
    var code = 256;
    for (var i=1; i<data.length; i++) {
        currChar=data[i];
        if (dict['_' + phrase + currChar] != null) {
            phrase += currChar;
        }
        else {
            out.push(phrase.length > 1 ? dict['_'+phrase] : phrase.charCodeAt(0));
            dict['_' + phrase + currChar] = code;
            code++;
            phrase=currChar;
        }
    }
    out.push(phrase.length > 1 ? dict['_'+phrase] : phrase.charCodeAt(0));
    for (var i=0; i<out.length; i++) {
        out[i] = String.fromCharCode(out[i]);
    }
    return out.join("");
}

// Decompress an LZW-encoded string
function lzw_decode(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i=1; i<data.length; i++) {
        var currCode = data[i].charCodeAt(0);
        if (currCode < 256) {
            phrase = data[i];
        }
        else {
            phrase = dict['_'+currCode] ? dict['_'+currCode] : (oldPhrase + currChar);
        }
        out.push(phrase);
        currChar = phrase.charAt(0);
        dict['_'+code] = oldPhrase + currChar;
        code++;
        oldPhrase = phrase;
    }
    //return decode_utf8(out.join(""));
    return b64DecodeUnicode(out.join(""));
}

function addTemplateByClass(templateHTML, className, elNumber) {
	//try {
    if (elNumber === undefined) { elNumber = 0; }
    //var templateHTML = "<span>SC SETTINGS</span>";
    var template = document.createElement('template');
    template.innerHTML = templateHTML;
    return document.getElementsByClassName(className)[elNumber].appendChild(template.content);//.firstChild
	//} catch(e) {return false;}
}

// POP-UP creation
function popIt(frameName, loc, friendlyName, dontKill, refresh) {
    try {
        // Center Pop-up
        var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
        var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
        width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
        var left = ((width / 2) - (popUpWidth / 2)) + dualScreenLeft;
        var top = ((height / 2) - (popUpHeight / 2)) + dualScreenTop;
        // End: Center Pop-up

        if (refresh != false) {
			refresh = true;
		}

        var title;
		if (caseNum !== null) {
			title = caseNum + ": " + friendlyName;
		} else {
			title = friendlyName;
		}

        var popScript1 = '<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>'; // Script to include JQuery libraries
        // Script to handle the automatic closing of window when action finishes (instead of leaving pop-up open and letting it re-direct to case page)
        var popScript2 = '<script type="text/javascript"> \n';
        popScript2    += '    $( document ).ready(function() { \n';
        popScript2    += '        document.getElementById("' + frameName + '").onload = function() { \n';
        popScript2    += '        if ($("#' + frameName + '").attr("frameborder") == "0" && ("' + dontKill + '" === undefined || ("' + dontKill + '" !== undefined && $("#' + frameName + '").contents().find("title").text().indexOf("' + dontKill + '") == -1))) \n';
        if (refresh) {
            popScript2 += '        { try { window.opener.location.reload(); } catch(e) {} parent.window.close(); } \n';
        } else {
            popScript2 += '        { parent.window.close(); } \n';
        }
        popScript2    += '        $("#' + frameName + '").attr({"frameborder": "0"});  \n';
        popScript2    += '    }});';
        popScript2    += '</script>';

        var popFrame = '<iframe id="' + frameName + '" scrolling="auto" frameborder="1" src="' + loc;
        if (needToDismiss) { popFrame += "&dismiss=1"; }
        //else alert(needToDismiss + " - not needed");
        popFrame += '" style="width: 100%; height: 100%; padding: 0; border: 0px none; position: absolute; top:0; left:0;"> </iframe>';

        // Chrome and FF handle the pop-up creation differently
        if (isChrome) {
            //var newWindow = window.open($(popFrame).attr('src'), '', 'height=' + popUpHeight + ',width=' + popUpWidth + 'resizable=yes, location=no'); // Create pop-up window
            var newWindow = window.open($(popFrame).attr('src'), '', 'height=' + popUpHeight + ',width=' + popUpWidth + 'resizable=yes, location=no'+ ', top=' + top + ', left=' + left); // Create pop-up window
            newWindow.document.write($(popFrame)[0].outerHTML + popScript1 + popScript2); // Add scripts and iFrame to page
            newWindow.document.title = title;        // Change pop-up window name to caseNumber: User Readable Page Name
            newWindow.document.close();              // Stop editing pop-up window document
            if (window.focus) { newWindow.focus(); } // Change focus to pop-up
        } else if (isFirefox) {
            // Create html doc to be loaded into pop-up, including iframe and supporing scripts
            var htmlDoc = 'data:text/html,<html><head><title>' + title + '</title>' + popScript1 + popScript2.replace(/#/g,"%23") + '</head><body style="margin: 0;">' + popFrame + '</body></html>'; // Create html doc to load into pop-up
            var newWindow = window.open(htmlDoc, '', 'height=' + popUpHeight + ',width=' + popUpWidth + 'resizable=yes, location=no'); // Create pop-up window
            if (window.focus) { newWindow.focus(); } // Change focus to pop-up
        }
    } catch(e) {
        if ($('#alertHider').length > 0) {
			addAlert(0, "ArrangeSC: There was a problem with POP! '" + friendlyName + "'.<br />Additional info: " + e);
		} else {
			logError("There was a problem with POP! '" + friendlyName + "'. Additional info: " + e);
		}
    }
}

function formatBytes(bytes,decimals)
{
    try
    {
        bytes= bytes.replace(/,/g, '');
        if(bytes === 0) return '0 Byte';
        var k = 1000;
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
    catch(e)
    {
        if ($('#alertHider').length > 0) {
			addAlert(0, "ArrangeSC: There was a problem with formatBytes.<br />Additional info: " + e);
		} else {
			logError("There was a problem with formatBytes. Additional info: " + e);
		}
    }
}

//Changelog review
function reviewChanges()
{
    $("<div id='changesDiv' style='height:100%; width:100%; background-color: rgba(0, 0, 0, 0.8); position:fixed; top:0px; left:0px; z-index: 102;'></div>").appendTo($('body'));//'div.efObjectDetails'
    $("<table id='changesTab' border='0' padding='0' style='position:absolute; top:calc(32%); left:calc(37.5%); background-color:#FFFFFF; width:25%; height: 35%;'><tbody></tbody></table>").appendTo($('#changesDiv'));
    $("<tr id='changesTab-r1' style='border:1px solid rgb(216, 221, 230); height:28px; background-color: rgb(244, 246, 249);'><td id='changesTab-r1-c1' width='25%'><h3>What's New?<h3></td><td id='changesTab-r1-c2' width='65%'></td><td id='changesTab-r1-c3' width='10%'></td></tr>").appendTo($('#changesTab'));
    $("<a href='javascript:void(0)'>Close</a>").click(function() { $('#changesDiv').remove(); }).appendTo($('#changesTab-r1-c3')); //add .click(function() {})
    $("<tr id='changesTab-r2'></tr>").appendTo($('#changesTab'));

    $("<select id='changesSelect'></select>").change(
        function()
        {
            $('#changesList').children().remove();
            var verVal = $('#changesSelect option:selected').val();
            for (var i = 2; i < changeLog[verVal].length; i++)
            {
                var bolden = changeLog[verVal][i].split(':');
                $("<li><b>" + bolden[0]+ ":</b>" + bolden[1] + "</li>").appendTo($("#changesList"));
            }
        }).appendTo($('#changesTab-r1-c2'));

    for (var i = 0; i < changeLog.length; i++)
    {
        $("<option id='change" + i + "' value='" + i + "'>" + changeLog[i][0] + " - " + changeLog[i][1] + "</option>").appendTo($('#changesSelect'));
    }

    $("<td colspan='3'><ul id='changesList' style='height:90%; width:90%; overflow:auto;'></ul></td>").appendTo($('#changesTab-r2'));
    //On change function:
    $('#changesList').children().remove();
    var verVal = $('#changesSelect option:selected').val();
    for (var i = 2; i < changeLog[verVal].length; i++)
    {
        var bolden = changeLog[verVal][i].split(':');
        $("<li><b>" + bolden[0]+ ":</b>" + bolden[1] + "</li>").appendTo($("#changesList"));
    }
    //$('#changesDiv').children().css('opacity', '1');
}

// TODO remove me?
var peekItHeight = 300;
var peekItWidth = 450;
//BEGIN: PeekIt
//BEGIN: HoverBox Style
$('<style id="Arrange_Hover_Box_Style">'+
  ".hoverBox {"+
  "padding: 0;"+
  //"position: absolute;"+
  "position: fixed;"+
  "overflow: hidden;"+
  "top: 0;"+
  "left: 0;"+
  "border: 3px solid #0070d2;"+
  "height: " + peekItHeight + "px;"+
  "width: " + peekItWidth + "px;"+
  "z-index: 70;"+
  "background-color: rgb(255, 255, 255);"+
  "box-shadow: rgba(0, 0, 0, 0.156863) 0px 2px 3px;"+
  "border-radius: 4px;"+
  "}"+
  ".hoverFrame {"+
  "padding: 0;"+
  "position: absolute;"+
  "overflow: auto;"+
  "top: 0;"+
  "left: 0;"+
  "border: 0px none;"+
  "height: " + peekItHeight + "px;"+
  "width: " + peekItWidth + "px;"+
  //"height: 100%;"+
  //"width: 100%;"+
  //"z-index: 71;"+
  "}"+
  "</style>")
    .appendTo($('body'));
//END: peekit Style

function peekIt(attachTo, insides) {
    try {
        //testing... peek?
        // TODO FIX DISAPPEARING SCROLL BARS, only a problem on chrome...
        // TODO look into mimicing default SC style
        // TODO add peeks for: ??
        // TODO add header with PopIt link
        // TODO keep open & x buttons?
        // TODO movable???
        // TODO FIX WHOLE PAGE over-SCROLL!!!
        // TODO FF cant do files (Content Security Policy Violation, ftp instead of HTTPS)

        /*
        var hoverBox2 = '<div id="hoverBox_' + attachTo + '" class="hoverBox individualPalette lookupHoverDetail lookupHoverDetailOverridable" style="height:300px, width:300px;display: none;"'+
            " onmouseover=\"var hb = getElementById('hoverBox_" + attachTo + "'); hb.style.display='block';\"" +
            " onmouseout=\"getElementById('hoverBox_" + attachTo + "').style.display='none';\">" +
            '<div class="userProfileHoverUserBlock setupBlock topLeft">'+
            '<div class="bPageBlock brandSecondaryBrd secondaryPalette">'+
            '<div class="pbHeader brandSecondaryBrd"></div>'+
            '<div id="hoverBox_' + attachTo + '_content" class="userProfileHoverBody pbBody"></div>'+
            '<div class="pbFooter secondaryPalette">'+
            '<div class="bg"></div>'+
            '</div> </div> </div> </div>';
*/
        var hoverBox = '<div id="hoverBox_' + attachTo + '" class="hoverBox" style="display: none;"' +
            " onmouseover=\"var hb = getElementById('hoverBox_" + attachTo + "'); hb.style.display='block';\"" +
            " onmouseout=\"getElementById('hoverBox_" + attachTo + "').style.display='none';\"" +
            '></div>';
        var hoverFrame =  '<iframe id="hoverFrame_' + attachTo + '" class="hoverFrame"></iframe>';

        var hb = $(hoverBox).appendTo("body");
        //var hbc = $("#hoverBox_" + attachTo + "_content");
        var hf = $(hoverFrame).appendTo(hb);

        if (highlightPeeks) {
            document.getElementById(attachTo).style.background = peekHighlightColor;
        }

		// Add eyes to identify as peekable
		var image = document.createElement("img");
		image.src = chrome.extension.getURL("images/eyes_40x20.png");
		image.alt = "PeekIT!";
		image.style = "height: 10px;";
		document.getElementById(attachTo).prepend(" ");
		document.getElementById(attachTo).prepend(image);



        document.getElementById(attachTo)
            .addEventListener("mouseover",
                              function(e) {
            e = e || window.event;
            var mx = e.clientX;
            var my = e.clientY;
            window.mytimeout = setTimeout(
                function() {
                    try {
                        var hb = document.getElementById('hoverBox_' + attachTo);
                        hb.style.display = 'block';
                        var wx = document.documentElement.clientWidth;
                        var wy = document.documentElement.clientHeight;
                        var modY = -15;
                        var modX = -15;
                        //alert(wx - mx + " vs " + peekItWidth);

                        var dx = wx - mx;
                        var dy = wy - my;

                        var buffer = 10;
                        var safeSizeX = parseInt(peekItWidth) + buffer;
                        var safeSizeY = parseInt(peekItHeight) + buffer;

                        // Mod X
                        if (dx >= safeSizeX)                         // if mouse right has room, use it (looks better)
                        {
                            modX = -15;
                        }
                        else if (dx < safeSizeX && mx >= safeSizeX)  // if mouse to right too small, & left OK, check left
                        {
                            modX = -safeSizeX + 5;
                        }
                        else                                         // very small window..., hitting bounds on both sides
                        {
                            modX = dx - safeSizeX;
                        }

                        // Mod Y
                        if (dy >= safeSizeY) {
                            modY = -15;
                        }
                        else if (dy < safeSizeY && my >= safeSizeY) {
                            modY =  -safeSizeY + 5;
                        }
                        else // very small window..., hitting bounds on both sides
						{
                            modY = dy - safeSizeY;
                        }

                        hb.style.top = my + modY + 'px';
                        hb.style.left = mx + modX + 'px';
                        var ifr = document.getElementById('hoverFrame_' + attachTo);
                        if (ifr.src === '' || ifr.src === undefined) {
                            ifr.src = insides;
                        }
                    }
                    catch(e) {
                        logError("Failed to load Hoverframe page. Additional info: " + e);
                    }
                }, peekDelay);
        }
                             );

        document.getElementById(attachTo)
            .addEventListener("mouseout", function()
                              {
            clearTimeout(window.mytimeout);
            document.getElementById('hoverBox_' + attachTo).style.display = 'none';
        }
                             );

        document.getElementById(attachTo)
            .addEventListener("blur", function()
                              {
            clearTimeout(window.mytimeout);
            document.getElementById('hoverBox_' + attachTo).style.display = 'none';
        }
                             );

    }
    catch(e)
    {
		if ($('#alertHider').length > 0) {
			addAlert(0, "ArrangeSC: Failed to create Hover Box: " + attachTo + ". <br />Additional info: " + e);
		} else {
			logError("Failed to create Hover Box: " + attachTo + ". Additional info: " + e);
		}
    }
}
//END: PeekIt

function prependZero(s)
{
    if(s && s.indexOf("null") == -1)
    {
        s = s.toString().trim();
        if(s.toString().length == 6)
        {
            s = "0" + s;
        }
    }
    return s;
}

function addConvButton(pageName,friendlyName,type,arg)
{
    // Types:
    // - c = click button, arg = button jQuery selector statement
    // - l = link, open a link with target _blank, arg = link
    // - m = link, open a link with default target, arg = link
    try
    {
        var buttonToAddCONV = $('<a/>').attr({'id': 'openCONV_' + pageName, 'class': 'btn', 'href': 'javascript:void(0)', 'title': friendlyName})
        .css({'vertical-align': 'middle','margin': '3px', 'height': '17px', 'line-height': '17px', 'padding': '0 3px 0 3px'})
        .text(friendlyName).prop('value', friendlyName);
        if (type == 'c') buttonToAddCONV.unbind().click( function() { $(arg).click(); } );
        else if (type == 'l') buttonToAddCONV.attr({'href': arg, 'target': '_blank'});
        else if (type == 'm') buttonToAddCONV.attr({'href': arg});
        var liToAddCONV = $('<li/>');                // Create a list item to add the link button into
        buttonToAddCONV.appendTo(liToAddCONV);             // Add link to <li> so it shows up properly in CONV dropdown
        liToAddCONV.appendTo($("#convButtonHolder")); // Add button/li to CONV dropdown
        //$("a#dismissLink").on("click", function() { $("[name='dismiss_the_selected_call_backs']").click(); });
        //<li><a id=\"caCommentLink\" href=\"#\">Comment</a></li>\
    }
    catch(e)
    {
		if ($('#alertHider').length > 0) {
			addAlert(0, "ArrangeSC: There was a problem adding the " + friendlyName + " Convenience button.<br />Additional info: " + e);
		} else {
			logError("There was a problem adding the " + friendlyName + " Convenience button. Additional info: " + e);
		}
    }
}

function addDropDown(id, text, target)
{
    try
    {
        if (target === undefined)
        {
            target = $("#topButtonRow");
        }
        var popDropdownButton = "<button class=\"btn ca-button\" type=\"button\" id=\"" + id + "\" data-jq-dropdown=\"#BTNS-BTN-GRP-" + id + "\">" + text + "<span class=\"caret\"></span></button>";
        var popDropdownDiv = "<div class=\"jq-dropdown\" id=\"BTNS-BTN-GRP-" + id + "\"><ul id=\"" + id + "ButtonHolder\" class=\"jq-dropdown-menu\"></ul></div>";
        $("body").append(popDropdownDiv);             // POP: Add the div that contains the magic - it can go anywhere within body, so just stick it at the end... It's not visable.
        target.append(popDropdownButton); // POP: Add the button to top bar.
    }
    catch(e)
    {

		if ($('#alertHider').length > 0) {
			addAlert(0, "ArrangeSC: Failed to add " + text + " drop-down button.<br />Additional info: " + e);
		} else {
			logError("Failed to add " + text + " drop-down button. Additional info: " + e);
		}
    }
}

function emailAdjustment(x)
{
    x.each(
        function()
        {
            var tt = $(this).text();
            var skipVals = ["Reply","To All", "Del"];
            if (skipVals.indexOf(tt) == -1) //(tt != "Reply" && tt != "To All" && tt != "Del")
            {
                var oldMailID = $(this).attr("href").replace("javascript:srcUp(%27%2F","").replace("%3Fisdtp%3Dvw%27);","");
                var oldMailLink = "https://ca.my.salesforce.com/" + oldMailID + "?isdtp=vw&nonce=" + /*SID +*/ "&sfdcIFrameOrigin=https%3A%2F%2Fca.my.salesforce.com";

                $(this).attr("id", oldMailID);

                if (enablePeekIt)
                {
                    peekIt(oldMailID,oldMailLink+"#ToAddress_ilecell");
                }
                if (popUpEmails)
                {
                    $(this).click(
                        function()
                        {
                            newwindow=window.open(oldMailLink,'','height=' + popUpHeight + ',width=' + popUpWidth);
                            if (window.focus) { newwindow.focus(); }
                            return false;
                        }
                    );
                }
            }
        }
    );
}

function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    if (!txtarea) { return; }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
	// DONE remove browser check... only chrome here
    // var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false ) );
			  // alert(br);
    // if (br == "ie") {
        // txtarea.focus();
        // var range = document.selection.createRange();
        // range.moveStart ('character', -txtarea.value.length);
        // strPos = range.text.length;
    // } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    // }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    // if (br == "ie") {
        // txtarea.focus();
        // var ieRange = document.selection.createRange();
        // ieRange.moveStart ('character', -txtarea.value.length);
        // ieRange.moveStart ('character', strPos);
        // ieRange.moveEnd ('character', 0);
        // ieRange.select();
    // } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    // }

    txtarea.scrollTop = scrollPos;
}



/* Shared functions for Service Cloud User Scripts.
 *
 * This file originally written by kaise01
 * Some functions may have been written by other authors and should be noted below
 *
 * Referece: http://cawiki.ca.com/display/CASupport/Service+Cloud+User+Scripts
 *
 * Release Notes:
 * 1.4 - 7/27/2015
 * - Added decodeString()
 *
 * 1.3 - 7/15/2015
 * - Added getCaseOwner()
 * - Removed createLocalDirs checks as these are no longer needed
 *
 * 1.2 - 6/23/2015
 * - Added formatString(), getSiteAssociation(), getSubject() to be available for other calling scripts
 *
 * 1.1 - 4/9/2015
 * - Added wait4ele
 *
 * 1.0 - 4/2/2015
 * - Initial Release
 */
function getCaseNum()
{
	var temp = $("div#cas2_ileinner").text().substring(0,8);
	if(temp)
	{
		return temp;
	}
	else
	{
		return null;
	}
}

function formatString(s)
{
    // Need to strip invalid characters - currently removing chars that are not valid in Windows file names
    // '.' sometimes causes a problem too...
    s = s.replace(/[<>:\"\/\\\|\?\*\.\']/g, "");

    // percent encode the string -- MUST be decoded by the protocol handler!!!
    return encodeURIComponent(s);
}

function decodeString(s)
{
	return decodeURIComponent(s);
}

function getSiteAssociation()
{
    // Always use the 1st one for the "Site Association" name. Some cases have "Project Site Association" populated. We don't want that.
    var temp = $("td.labelCol").find(".helpButton:contains(Site Association)").first().closest('td').next('td').find("div").text().trim();
    if (temp)
    {
        return formatString(temp);
    }
    else
    {
        return null;
    }
}

function getSubject()
{
    var temp = $("td.labelCol:contains(Subject)").next('td').find("div").text();
    if (temp)
    {
        return formatString(temp);
    }
    else
    {
        return null;
    }
}

function prependZero(s)
{
	if(s && s.indexOf("null") == -1)
	{
		s = s.toString().trim();

		if(s.toString().length == 6)
		{
			s = "0" + s;
		}
	}
	return s;
}

function getId()
{
	var s = $("div.efObjectDetails").prop("id");
	//console.log("s = " + s);
	var t = s.split("_");
	var id = t[1];
	//console.log("found id: " + id);
	return id;
}

// wait4ele (box,sel,mil,max,f)
// returns: nothing
// args
// 	box - 	jQuery object that holds some other thing we're looking for.
//		This could be $(document), $("iframe"), $("table"), etc.
//		It's the starting point for where we want to find the thing
//		we're actually interested in.  Ideally this object should
//		have a non-empty 'selector' member.
//	sel -	String; this is the jQuery selector string for the thing
//		within 'box' we are trying to find.
//	mil -	Number of milliseconds we should wait between iterations.
//		This is passed to setInterval()
//	max -	Max number of iterations to look for 'sel'.  So the max time
//		we'll waste looking for 'sel' is (mil*max)/1e3 seconds.
//	f   -	Function.  It will be executed as f(ele,sel,box) if we find
//		a jQuery object described by selector 'sel'.  ('ele' is
//		the object we found.)
//
// Some funny brownies required for this one.  The idea is to wait for an
// element, given by jQuery selector 'sel', to apear within container 'box' (a
// jQuery object).  We check every 'mil' milliseconds, for a max of 'max'
// interations.  If we find it, we run function 'f', passing it the jQuery
// object 'ele', the selector string 'sel' and the container 'box'.  And of
// course we clear the interval.
//
// This all may not even be necessary for this particular page but it's here
// for paranoia.
function wait4ele(box,sel,mil,max,f) {
	var count = 0, id = setInterval(function() {
		var ele;
		if (count >= max) {
			console.log("wait4ele(): Iteration count hit max ("+max+"; "+
				(count*mil)+"ms) without finding element "+sel+" in "+
				"container "+box.selector);
			clearInterval(id);
			return false;
		}
		ele = box.contents().find(sel); // Should it be $(box)?
		if (ele.length) { // Yay! Found it.
			clearInterval(id);
			if (f) f(ele,sel,box);
			console.log("wait4ele(): Found element "+sel+" in container "+
				box.selector+" at iteration "+(count+1)+" of max "+
				max+" ("+((count+1)*mil)+"ms/"+(max*mil)+"ms)");
			return true;
		}
		++count;
		return false;
	},mil);
}

function getCaseOwner()
{
	var getCaseOwner = $("div#cas1_ileinner").text();
	return getCaseOwner.substring(0,(getCaseOwner.length-9));
}


							function compareDTNow(a) {
								// Accepted format: M/D/YYYY H:mm AMPM
								var d = new Date();
								var now = { };

								now.date = d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
								now.time = ((d.getHours() > 11) ? d.getHours() - 12 : d.getHours()) + ':' +  ((d.getMinutes() > 10) ? d.getMinutes() : '0' + d.getMinutes());
								now.ampm = (d.getHours() > 11) ? "PM" : "AM";

								now.orig = now.date + ' ' + now.time + ' ' + now.ampm;

								now.month = parseInt(now.date.split('/')[0]);
								now.day = parseInt(now.date.split('/')[1]);
								now.year = parseInt(now.date.split('/')[2]);

								now.hour = parseInt(now.time.split(':')[0]);
								now.mins = parseInt(now.time.split(':')[1]);

								if (now.ampm == "PM" && now.hour != 12) {
									now.hour += 12;
								} else if  (now.ampm == "AM" && now.hour == 12) {
									now.hour = 0;
								}

								// checkTypes:
								// 		closest to now?
								//		is today?
								// 		return difference
								//		isPast?
								//		isFuture?

								var tense = false;

								var dtObj = {};

								var splitDT= a.split(' ');

								dtObj.orig = a;

								dtObj.date = splitDT[0];
								dtObj.time = splitDT[1];
								dtObj.ampm = splitDT[2];

								dtObj.month = parseInt(dtObj.date.split('/')[0]);
								dtObj.day = parseInt(dtObj.date.split('/')[1]);
								dtObj.year = parseInt(dtObj.date.split('/')[2]);

								dtObj.hour = parseInt(dtObj.time.split(':')[0]);
								dtObj.mins = parseInt(dtObj.time.split(':')[1]);


								// Convert to 24 hrs
								// Does this work on the 12's????
								if (dtObj.ampm == "PM" && dtObj.hour != 12) {
									dtObj.hour += 12;
								} else if  (dtObj.ampm == "AM" && dtObj.hour == 12) {
									dtObj.hour = 0;
								}


								console.log('now: ' + now.orig + ' - NA: ' + dtObj.orig);
								if (dtObj.orig == now.orig) {
									tense == "now";
								} else if (dtObj.year == now.year && dtObj.month == now.month && dtObj.day == now.day) { // present day...
									logTrace('NA is today');
									tense = "today";
									if (dtObj.hour <= now.hour && dtObj.mins < now.mins)  {
										// tense += ':exp';
									} else if ((dtObj.hour  > now.hour) || dtObj.hour  <= now.hour && dtObj.mins >= now.mins)  {

									} else { tense+= ':false'; }
								} else  if (((dtObj.year < now.year) ? true : (dtObj.month < now.month)) ? true : (dtObj.year == now.year && dtObj.month == now.month && dtObj.day < now.day)) { // past day...
									logTrace('NA is past');
									tense = 'past';
								} else if (((dtObj.year >= now.year) ? true : (dtObj.month >= now.month)) ? true : (dtObj.day > now.day)) { // future day...
									logTrace('NA is in the future');
									tense = 'future';
								}  else { alert('fail'); tense = false; }

								dtObj.tense = tense;

								// dtObj.yearDif = (dtObj.year > now.year) ? (dtObj.year - now.year) : (now.year > dtObj.year);
								dtObj.yearDif = (dtObj.year - now.year);
								dtObj.monthDif = (dtObj.month - now.month);
								dtObj.dayDif = (dtObj.day - now.day);

								dtObj.hourDif = (dtObj.hour - now.hour);
								dtObj.minsDif = (dtObj.mins - now.mins);

								dtObj.daysByMonth = getDaysByMonth(dtObj.year);

								if (dtObj.tense != 'past') {
                  // Make some adjustments to report positive numbers...
                  if (dtObj.minsDif  < 0) {
                    dtObj.hourDif -= 1;
                    dtObj.minsDif  = 60 + dtObj.minsDif;
                  }

                  if (dtObj.hourDif  < 0) {
                    dtObj.dayDif -= 1;
                    dtObj.hourDif  = 24 + dtObj.hourDif;
                  }

                  if (dtObj.dayDif  < 0) {
                    dtObj.monthDif -= 1;
                    dtObj.dayDif  = dtObj.daysByMonth[dtObj.month] + dtObj.dayDif;
                  }

                  if (dtObj.monthDif  < 0) {
                    dtObj.yearDif -= 1;
                    dtObj.monthDif  = 12 + dtObj.monthDif;
                  }
                } else if (dtObj.tense == 'past') {
                  // for (dif in difs) {
                  //   if (dif < 0) {
                  //
                  //   } else {
                  //
                  //   }
                  // }
                  // Make some adjustments to report positive numbers...
                  if (dtObj.minsDif < 0) {
                    dtObj.minsDif == Math.abs(dtObj.minsDif);
                  } else {
                    // dtObj.hourDif -= 1;
                    // dtObj.minsDif  = 60 + dtObj.minsDif;
                  }

                  if (dtObj.hourDif < 0) {
                    dtObj.hourDif == Math.abs(dtObj.hourDif);
                  } else {
                    // dtObj.dayDif -= 1;
                    // dtObj.hourDif  = 24 + dtObj.hourDif;
                  }

                  if (dtObj.dayDif < 0) {
                    dtObj.dayDif == Math.abs(dtObj.dayDif);
                  } else {
                    // dtObj.monthDif -= 1;
                    // dtObj.dayDif  = dtObj.daysByMonth[dtObj.month] + dtObj.dayDif;
                  }

                  if (dtObj.monthDif < 0) {
                    dtObj.monthDif == Math.abs(dtObj.monthDif);
                  } else {
                    // dtObj.yearDif -= 1;
                    // dtObj.monthDif  = 12 + dtObj.monthDif;
                  }

                  dtObj.yearDif == Math.abs(dtObj.yearDif);

                }

								dtObj.timeLeft = ((dtObj.yearDif == 0) ? '': dtObj.yearDif + ' Yrs, ')
													+ ((dtObj.yearDif == 0 && dtObj.monthDif == 0) ? '' : dtObj.monthDif + ' Mos, ' )
													+ ((dtObj.yearDif == 0 && dtObj.monthDif == 0 && dtObj.dayDif == 0) ? '' : dtObj.dayDif + ' Days, ')
													+ ((dtObj.yearDif == 0 && dtObj.monthDif == 0 && dtObj.dayDif == 0 && dtObj.hourDif  == 0) ? '' : dtObj.hourDif + ' Hrs, ')
													+ dtObj.minsDif + ' Mins';

								dtObj.now = now;
								console.log(JSON.stringify(dtObj));
								return dtObj;
							}

							function getDaysByMonth(year) {
								// var daysByMonth = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
								var daysByMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
								if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
									daysByMonth[2] += 1;
								}
								return daysByMonth;
							}

							function bgPercent(thisVal,maxVal,cell) {

								var percent = (thisVal/maxVal) * 100;
								console.log('percent: ' + percent);

								if (thisVal >= maxVal) {
									cell.css({"background": "var(--percent_bar_color)"});
								} else {
									 /*#00FFFF 0%,*/
									cell.css({"background": "linear-gradient(90deg, var(--percent_bar_color) " + (percent-10) + "%, var(--percent_bar_bg_color) " + (percent+10) + "%"});//, rgba(0,0,0,0)
								}
							}


////////////////////////////////////////////////
// Global Vars
////////////////////////////////////////////////
// Post comment on email
// What text will be put into the start of the update?
var commentStart = "An email was sent via the e-mail feature.";
// Label text
var labelTo = "To: ";
var labelADD = "Addt'l To: ";
var labelCC = "CC: ";
var labelBCC = "BCC: ";
var labelSub = "Subject: ";
var labelBody = "Email Body:";
// What should be shown when the message is truncated? Currently the same as when SC default...
var truncatedMessage = "(message truncated)";
// Common File Types
// Currently used with PeekIt options for SFTP files.
var emailFTypes = "eml,p7m";
// note: noextension below is for UNIX style text files that have no extension, but may also highlight things like UNIX binaries if on the list...
var textFTypes = "noextension,txt,log,out,trace,pdf,ini,cfg,conf,cnf,csv,htm,html,php,xml";
var scriptFtypes = "bat,cmd,sh,reg,js,pl,py";
var imageFTypes = "png,jpg,jpeg,bmp,gif";
var videoFTypes = "avi,mp4,webm"; // Do I want to do this? will this work?
// This may work with html5 <video>, but only mp4, webm, or ogg...
// TODO add video capability to peekIt
// https://www.w3schools.com/html/html5_video.asp
// Will other files work some other way?
var backupFTypes = "bak,backup,bkup,orig,original,old";

// "noextension,txt,log,out,trace,pdf,ini,cfg,conf,cnf,csv,htm,html,php,xml,avi,mp4,webm,png,jpg,jpeg,bmp,gif,bat,cmd,sh,reg,js,pl,py,eml,p7m"


////////////////////////////////////////////////
// Other JS
////////////////////////////////////////////////

    /*///////////////////////////////////////////////////////////////////////
 * Search Highlighting code
 * Found @: http://www.the-art-of-web.com/javascript/search-highlight/
 * Minified by: https://jscompress.com/
 * Original JavaScript code by Chirp Internet: www.chirp.com.au
/*///////////////////////////////////////////////////////////////////////
    function Hilitor(a,b){function l(a){return retval=a,retval=retval.replace(/([ao])e/gi,"$1"),retval=retval.replace(/\\u00E[024]/gi,"a"),retval=retval.replace(/\\u00E7/gi,"c"),retval=retval.replace(/\\u00E[89AB]/gi,"e"),retval=retval.replace(/\\u00E[EF]/gi,"i"),retval=retval.replace(/\\u00F[46]/gi,"o"),retval=retval.replace(/\\u00F[9BC]/gi,"u"),retval=retval.replace(/\\u00FF/gi,"y"),retval=retval.replace(/\\u00DF/gi,"s"),retval=retval.replace(/a/gi,"([aàâä]|ae)"),retval=retval.replace(/c/gi,"[cç]"),retval=retval.replace(/e/gi,"[eèéêë]"),retval=retval.replace(/i/gi,"[iîï]"),retval=retval.replace(/o/gi,"([oôö]|oe)"),retval=retval.replace(/u/gi,"[uùûü]"),retval=retval.replace(/y/gi,"[yÿ]"),retval=retval.replace(/s/gi,"(ss|[sß])"),retval}function m(a){var b=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");return b[a>>12&15]+b[a>>8&15]+b[a>>4&15]+b[15&a]}function n(a,b){for(var d,e,c=0,g="",h=0;h<a.length;h++){var i=a.charCodeAt(h);if((i<0||i>65535)&&(g+="!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc="+i+"!"),0!=c){if(56320<=i&&i<=57343){if(d=65536+(c-55296<<10)+(i-56320),b){for(e=d.toString(16);e.length<8;)e="0"+e;g+="\\U"+e}else d-=65536,g+="\\u"+m(55296|d>>10)+"\\u"+m(56320|1023&d);c=0;continue}g+="Error in convertCharStr2UTF16: low surrogate expected, cc="+i+"!",c=0}if(55296<=i&&i<=56319)c=i;else switch(i){case 0:g+="\\0";break;case 8:g+="\\b";break;case 9:g+="\\t";break;case 10:g+="\\n";break;case 13:g+="\\r";break;case 11:g+="\\v";break;case 12:g+="\\f";break;case 34:g+='\\"';break;case 39:g+="\\'";break;case 92:g+="\\\\";break;default:if(i>31&&i<127)g+=String.fromCharCode(i);else{for(e=i.toString(16).toUpperCase();e.length<4;)e="0"+e;g+="\\u"+e}}}return g}var c=document.getElementById(a)||document.body,d=b||"EM",e=new RegExp("^(?:"+d+"|SCRIPT|FORM)$"),f=["#ff6","#a0ffff","#9f9","#f99","#f6f"],g=[],h=0,i="";this.setMatchType=function(a){switch(a){case"left":this.openLeft=!1,this.openRight=!0;break;case"right":this.openLeft=!0,this.openRight=!1;break;case"open":this.openLeft=this.openRight=!0;break;default:this.openLeft=this.openRight=!1}},this.setRegex=function(a){if(a=a.replace(/\\([^u]|$)/g,"$1"),a=a.replace(/[^\w\\\s']+/g,"").replace(/\s+/g,"|"),a=a.replace(/^\||\|$/g,""),a=l(a)){var b="("+a+")";return this.openLeft||(b="(?:^|[\\b\\s])"+b),this.openRight||(b+="(?:[\\b\\s]|$)"),i=new RegExp(b,"i"),!0}return!1},this.getRegex=function(){var a=i.toString();return a=a.replace(/(^\/|\(\?:[^\)]+\)|\/i$)/g,"")},this.hiliteWords=function(a){if(void 0!==a&&a&&i&&!e.test(a.nodeName)){if(a.hasChildNodes())for(var b=0;b<a.childNodes.length;b++)this.hiliteWords(a.childNodes[b]);if(3==a.nodeType&&(nv=a.nodeValue)&&(regs=i.exec(nv))){g[regs[1].toLowerCase()]||(g[regs[1].toLowerCase()]=f[h++%f.length]);var c=document.createElement(d);c.appendChild(document.createTextNode(regs[1])),c.style.backgroundColor=g[regs[1].toLowerCase()],c.style.fontStyle="inherit",c.style.color="#000";var j;j=regs[0].match(/^\s/)?a.splitText(regs.index+1):a.splitText(regs.index),j.nodeValue=j.nodeValue.substring(regs[1].length),a.parentNode.insertBefore(c,j)}}},this.remove=function(){for(var a=document.getElementsByTagName(d);a.length&&(el=a[0]);){var b=el.parentNode;b.replaceChild(el.firstChild,el),b.normalize()}},this.apply=function(a){this.remove(),void 0!==a&&(a=a.replace(/(^\s+|\s+$)/g,""))&&(a=n(a),this.setRegex(a)&&this.hiliteWords(c))}}
    //function Hilitor(a,b){var c=document.getElementById(a)||document.body,d=b||"EM",e=new RegExp("^(?:"+d+"|SCRIPT|FORM|SPAN)$"),f=["#ff6","#a0ffff","#9f9","#f99","#f6f"],g=[],h=0,i="",l=new RegExp("^[^\\w]+|[^\\w]+$","g"),m=new RegExp("[^\\w'-]+","g");this.setMatchType=function(a){switch(a){case"left":this.openLeft=!1,this.openRight=!0;break;case"right":this.openLeft=!0,this.openRight=!1;break;case"open":this.openLeft=this.openRight=!0;break;default:this.openLeft=this.openRight=!1}},this.setRegex=function(a){if(a=a.replace(l,""),a=a.replace(m,"|"),a=a.replace(/^\||\|$/g,"")){var b="("+a+")";return this.openLeft||(b="\\b"+b),this.openRight||(b+="\\b"),i=new RegExp(b,"i"),!0}return!1},this.getRegex=function(){var a=i.toString();return a=a.replace(/(^\/(\\b)?|\(|\)|(\\b)?\/i$)/g,""),a=a.replace(/\|/g," ")},this.hiliteWords=function(a){if(void 0!==a&&a&&i&&!e.test(a.nodeName)){if(a.hasChildNodes())for(var b=0;b<a.childNodes.length;b++)this.hiliteWords(a.childNodes[b]);if(3==a.nodeType&&(nv=a.nodeValue)&&(regs=i.exec(nv))){g[regs[0].toLowerCase()]||(g[regs[0].toLowerCase()]=f[h++%f.length]);var c=document.createElement(d);c.appendChild(document.createTextNode(regs[0])),c.style.backgroundColor=g[regs[0].toLowerCase()],c.style.fontStyle="inherit",c.style.color="#000";var j=a.splitText(regs.index);j.nodeValue=j.nodeValue.substring(regs[0].length),a.parentNode.insertBefore(c,j)}}},this.remove=function(){for(var a=document.getElementsByTagName(d);a.length&&(el=a[0]);){var b=el.parentNode;b.replaceChild(el.firstChild,el),b.normalize()}},this.apply=function(a){this.remove(),void 0!==a&&a&&this.setRegex(a)&&this.hiliteWords(c)}}


    // Dropdown Code, wiki require is un-reliable
    /* jQuery jq-dropdown: A simple jq-dropdown plugin
     * Copyright A Beautiful Site, LLC. (http://www.abeautifulsite.net/)
     * Licensed under the MIT license: http://opensource.org/licenses/MIT
     */
    jQuery&&function(t){function o(o,n){var d=o?t(this):n,a=t(d.attr("data-jq-dropdown")),s=d.hasClass("jq-dropdown-open");if(o){if(t(o.target).hasClass("jq-dropdown-ignore"))return;o.preventDefault(),o.stopPropagation()}else if(d!==n.target&&t(n.target).hasClass("jq-dropdown-ignore"))return;r(),s||d.hasClass("jq-dropdown-disabled")||(d.addClass("jq-dropdown-open"),a.data("jq-dropdown-trigger",d).show(),e(),a.trigger("show",{jqDropdown:a,trigger:d}))}function r(o){var r=o?t(o.target).parents().addBack():null;if(r&&r.is(".jq-dropdown")){if(!r.is(".jq-dropdown-menu"))return;if(!r.is("A"))return}t(document).find(".jq-dropdown:visible").each(function(){var o=t(this);o.hide().removeData("jq-dropdown-trigger").trigger("hide",{jqDropdown:o})}),t(document).find(".jq-dropdown-open").removeClass("jq-dropdown-open")}function e(){var o=t(".jq-dropdown:visible").eq(0),r=o.data("jq-dropdown-trigger"),e=r?parseInt(r.attr("data-horizontal-offset")||0,10):null,n=r?parseInt(r.attr("data-vertical-offset")||0,10):null;0!==o.length&&r&&o.css(o.hasClass("jq-dropdown-relative")?{left:o.hasClass("jq-dropdown-anchor-right")?r.position().left-(o.outerWidth(!0)-r.outerWidth(!0))-parseInt(r.css("margin-right"),10)+e:r.position().left+parseInt(r.css("margin-left"),10)+e,top:r.position().top+r.outerHeight(!0)-parseInt(r.css("margin-top"),10)+n}:{left:o.hasClass("jq-dropdown-anchor-right")?r.offset().left-(o.outerWidth()-r.outerWidth())+e:r.offset().left+e,top:r.offset().top+r.outerHeight()+n})}t.extend(t.fn,{jqDropdown:function(e,n){switch(e){case"show":return o(null,t(this)),t(this);case"hide":return r(),t(this);case"attach":return t(this).attr("data-jq-dropdown",n);case"detach":return r(),t(this).removeAttr("data-jq-dropdown");case"disable":return t(this).addClass("jq-dropdown-disabled");case"enable":return r(),t(this).removeClass("jq-dropdown-disabled")}}}),t(document).on("click.jq-dropdown","[data-jq-dropdown]",o),t(document).on("click.jq-dropdown",r),t(window).on("resize",e)}(jQuery);


logTrace('scw33t_global.js finished.');
