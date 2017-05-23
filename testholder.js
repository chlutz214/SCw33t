function makeOption(args) { // Make a switch
// TODO change to makeInput with type arg????
// Accepted args:
// * = REQUIRED
//
//		varId* 			= T/F Variable this will control
//		targetId* 		= id of where to place the switch
//		type*			= header!!, switch, textBox, textArea!!, colorPicker!!, 
//		preFunc?			= execute before testFunc
//		testFunc		= execute onclick for sample actions...
//		postFunc?		= execute after testFunc
//		autoSave		= auto save on click/leaveing tb
//		saveBtn			= include save button
//		labelText		= Text for the label (if empty = "Toggle " + args.varId)
//		title 			= Title/Tool Tip/alt text for switch (if empty = args.labelText + "Toggle Switch"
//		displayStyle	= How to display the switch: br, tableRow, tableCell
//
// Add left/right side options?
	// try {
		//Check for Required args: {varId:'',targetId:''}
		if (args.varId == undefined | args.targetId == undefined) {
			logError("Unable to create switch. varId or targetId = undefined");
			return false;
		}
		
		logTrace("Adding toggle switch for: " + args.varId)
		
		// Create defaults
		if (args.labelText == undefined) {
			args.labelText = "Toggle " + args.varId;
		}
		
		if (args.title == undefined) {
			args.title = args.labelText + "Toggle Switch";
		}
		
		if (args.autoSave == undefined) {
			args.autoSave = false;
		}
		
		// Create template
		// TODO add * for modified, but not saved...
		var switchTemplate = 
			'<div><label class="switchLabel" id="switchLabel_' + args.varId + '"> ' + args.labelText + ':	\n'+
			'	<label class="switch"> \n'+
			'		<input type="checkbox" id="switch_' + args.varId + '"> \n' +
			'		<div class="slider round" title="' + args.title + '"></div> \n' +
			'	</label> \n' +
			'</label><br /></div>\n';
			
			var optionTemplate {};
			
			var optionTemplate.Label = '<label class="optionLabel" id="optionLabel_' + args.varId + '"> ' + args.labelText + '</label>\n';
			
			var optionTemplate.Switch = '<div class="optionDiv"> \n'+
			'	<input type="checkbox" id="switch_' + args.varId + '"> \n' +
			'	<div class="slider round" title="' + args.title + '"></div> \n' +
			'</div>';
			
			var optionTemplate.textBox = '<div class="optionDiv"> \n'+
			'	<input type="text" id="textbox_' + args.varId + '"> \n' +
			'	<div class="slider round" title="' + args.title + '"></div> \n' +
			'</div>';
			
			//var optionTableStyle
			
		// Modify template based on requested display style
		if (args.displayStyle == 'br') {
			switchTemplate += '<br /> \n';
			append(switchTemplate,args.targetId);
		} else if (args.displayStyle == 'tableRow') {
			var newRow = insertRowX(args.targetId);
			var lblCell = insertColX(args.targetId,newRow);
			var dtaCell = insertColX(args.targetId,newRow);
			//append('<tr id="' + "row_switch_" + args.varId + '"/>',args.targetId);
			append(switchTemplateCellLabel,lblCell);
			append(switchTemplateCellSwitch,dtaCell);
		} else if (args.displayStyle == 'tableRow') {
			append(switchTemplateCellLabel,args.targetId);
			append(switchTemplateCellSwitch,args.targetId);
		} else {
			// use default template setup
			append(switchTemplate,args.targetId);
		}
		
		// Append Template
		// append(switchTemplate,args.targetId);
		
		// Apply Additional args
		var mySwitch = document.getElementById("switch_" + args.varId);
		var myLabel = document.getElementById("switchLabel_" + args.varId);
		
		try {
			mySwitch.checked = window[args.varId];
			logTrace("Setting checked set to: " + window[args.varId]);
		} catch (e) { 
			logError("Problem setting checked attribute of "+ mySwitch.id + ". Additional Info: " + e); 
		}
		try {
			// mySwitch.onclick = args.action; // Use this?
			mySwitch.addEventListener('click', args.onclick, false); // I think this works better
		} catch (e) { 
			logError("Problem adding onclick to "+ mySwitch.id + ". Additional Info: " + e); 
		}
		try {
			// var toggleFunc = "function() { }";
			var saveArgs = {  };
			//saveArgs[args.varId] = mySwitch.checked;
			//logTrace("saveArgs: " + JSON.stringify(saveArgs));
			mySwitch.addEventListener('click',  function() { saveArgs[args.varId] = mySwitch.checked; setVars(saveArgs); } , false); // I think this works better
			logTrace("event listener added...");
		} catch (e) { 
			logError("Problem adding save func to onclick with "+ mySwitch.id + ". Additional Info: " + e); 
		}
				try {
			
		} catch (e) { 
			logError("Problem <problem here> with "+ mySwitch.id + ". Additional Info: " + e); 
		}
	// } catch (e) {
		//logError("Problem making switch for "+ args.varId + ". Additional Info: " + e);
	// }

    return mySwitch;
}