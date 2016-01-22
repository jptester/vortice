/** 
*
*  Generic Utilities
*  File: utilities.js
*  Creator : JP
*  Date: 20/01/2016
*/

/**
 * The namespace of Entretenimiento Lobo
 * @namespace
 * @name el
*/
var el = el || {};

//
// Global definitions
//
el.gELmsg = "EL_MSG: ";
el.gELLog = function(sString) {
	cc.log( el.gELmsg + sString);
}

//
// This function searches for the first child inside a node's tree of children and returns it
// IMPORTANT: This functions will dig deep into the node's structure first
//
el.gFindFirstChildInInnerTreeByName = function ( node, sName ) {
	
	// if there is a name and it is not empty
	if ( sName === undefined || sName === "" ) {
		el.gELmsg("No name to look for in gFindFirstChildInInnerTreeByName function");
	}
	
	// lets see if this node has children
	if ( node != undefined && node instanceof cc.Node ) {
		var locChildren = node.getChildren();
		for(var i = 0, len = locChildren.length; i < len; i++){
			if(locChildren[i].getName() === sName) {
				return locChildren[i];
			}
			else if ( locChildren[i].getChildrenCount() > 0 ) {
				return el.gFindFirstChildInInnerTreeByName(locChildren[i], sName);
			}
		}
	}
	
	return null;
}


//
// This function searches for a button and returns it
// IMPORTANT: This functions will dig deep into the node's structure first
//
el.gGetButtonInInnerTreeByName = function ( node, sName) {
	// Config every button, so firts we get each button
	var currentButton = el.gFindFirstChildInInnerTreeByName (node, sName );
	if ( currentButton != undefined ) {
		// Check for button
		if ( currentButton instanceof ccui.Button ) {
			return currentButton;
		}
		else {
			el.gELLog ("Not a valid button: " + sName );
		}
	}
	else { 
		el.gELLog("No " + sName + " button found in scene");
	}
}

//
// This function classifies an event depending on platform
//
el.gActivationEvent = function ( sender, type ) {
	
	// if event means activation return true
	return type === ccui.Widget.TOUCH_ENDED;

	/*
	// Activation
	var bActivation = false;
	
	switch (type) {
		case ccui.Widget.TOUCH_BEGAN:
			//this._topDisplayLabel.setString("Touch Down");
			break;

		case ccui.Widget.TOUCH_MOVED:
			//this._topDisplayLabel.setString("Touch Move");
			break;

		case ccui.Widget.TOUCH_ENDED:
			//this._topDisplayLabel.setString("Touch Up");
			bActivation = true;
			break;

		case ccui.Widget.TOUCH_CANCELED:
			//this._topDisplayLabel.setString("Touch Cancelled");
			break;

		default:
			break;
	}
	return bActivation;
	*/
}


//
// This function prints an object
//
el.gPrintObject = function ( object ) {
	var output = 'Object ->\n' ;
	for (var property in object) {
	  output += property + ': ' + object[property]+'; \n';
	}
	el.gELLog(output);
}
