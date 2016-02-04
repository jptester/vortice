// 
//
//  Comic Level
//  File: comic-level.js
//  Creator : JP
//  Date: 27/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

//
// Comic level content - Will load content, version, etc
// Creator : JP
// Date: 27/01/2016
//
el.ComicContent = el.LevelContent.extend({
	
	// Properties
	_dialogs: null,
	dialog_property_name: "dialog",
	
	// Constructor for level
	ctor:function (bHidden, iCode, content) {
		
		// Run super constructor
		this._super(bHidden, iCode, content);
		
		// Parse dialogues
		this.readAllContent(content);
	},
	
	// Reads and loads the whole content into this object properties
	readAllContent: function(content) {
		
		// dialogue id
		var id = 0;
		
		// check if there are dialogues
		if ( !content.dialogs ) {
			this._dialogs = null;
			el.gELLog("No valid dialogues in comic");
			return false;
		}
		
		// Set dialogues
		this._dialogs = [];

		// read every dialogue
		for (var property in content.dialogs) {
			// if correct property
			if ( property.substr(0, this.dialog_property_name.length) == this.dialog_property_name) {
				
				// add dialogue
				this._dialogs.push(new el.ComicDialog(content.dialogs[property]));
				
				// set new dialog id
				id++;
			}
		}
				
		return true;
	},
	
	// set sub level key
	setSubLevelKey: function (subLevelKey) {

		// run super
		this._super();
		
		// Go to the sub level
		parseComicContentUntilKey ( subLevelKey );
	},

		
	// fill / replace content with current dialog
	parseComicContentUntilKey: function(subLevelKey) {
		
		// if point is unreachable
		if ( this._dialogs.length <= subLevelKey ) {
			// if this point is reached a problem occurred
			var errorMsg = "During parsing comic content, there was an error and no 'dialogue' was found: " + subLevelKey;
			el.gELLog(errorMsg);
			
			// if debug session quit
			if ( cc.game.config.debugMode == 1 ){
				throw new Error(errorMsg);
			}
		}
	
		// evaluate every dialogue until reach specific dialogue
		for ( var i = 0; i <= subLevelKey; i++ ) {
		
			// get dialogue
			var dialog = this._dialogs[i];
			
			// check dialogue
			if ( dialog ) {
				
				// move to next dialogue
				this.moveToNextDialog(dialog);

				// keep track of sub level key
				this._subLevelKey = i;
			}
		}
	},
	
	// returns true if there are more level content
	isThereNextContent: function () {
		return this._dialogs[this._subLevelKey + 1] != undefined;
	},
	

	// Get next content
	getNextContent: function () {
		
		// if there is next content move to next dialogue
		if ( this.isThereNextContent() ) {
		
			// move to next dialogue
			this._subLevelKey++;
			this.moveToNextDialog(this._dialogs[this._subLevelKey]);
			
			// return true
			return true;
		}
		
		// if there are no more dialogues
		this._subLevelKey = 0;
		return false;
	},

	
	// Moves content to next content
	// which means every element will be evaluated and if there are changes, get the new state
	moveToNextDialog: function(nextDialog) {

		// Parse dialogues
		this._background = this.checkEvolution( this._background, nextDialog.background );
		this._bg_cocostudiocontent = this.checkEvolution( this._bg_cocostudiocontent, nextDialog.bg_cocostudiocontent );
		this._fg_cocostudiocontent = this.checkEvolution( this._fg_cocostudiocontent, nextDialog.fg_cocostudiocontent );
		this._bg_music = this.checkEvolution( this._bg_music, nextDialog.bg_music );
		this._bg_sound = this.checkEvolution( this._bg_sound, nextDialog.bg_sound );
		this._chars = this.checkEvolution( this._chars, nextDialog.chars );
		this._txt_face = this.checkEvolution( this._txt_face, nextDialog.txt_face );
		this._txt_text = this.checkEvolution( this._txt_text, nextDialog.txt_text );
	},
	
	// check current property for evolution - this will change the property to next state if needed
	checkEvolution: function(oldObj, newObj) {
		// first check if changes
		return ( newObj != null && oldObj != newObj ) ? newObj : oldObj;
	},
	
	// returns a corresponding scene type
	getNewScene: function() {
		// if this content code is the same as content ID return this content
		return new el.ComicScene(this);
	}	
});

//
// Comic level content - Will load content, version, etc
// Creator : JP
// Date: 27/01/2016
//
el.ComicDialog = el.Class.extend({

	// properties
	background: null,
	bg_cocostudiocontent: null,
	fg_cocostudiocontent: null,
	bg_music: null,
	bg_sound: null,
	chars: [],
	txt_face: null,
	txt_text: null,
		
	// Constructor for level
	ctor: function (dialog) {
		
		// Parse dialogues
		this.background = this.checkProperty(dialog.background);
		this.bg_cocostudiocontent = this.checkProperty(dialog.bg_cocostudiocontent);
		this.fg_cocostudiocontent = this.checkProperty(dialog.fg_cocostudiocontent);
		this.bg_music = this.checkProperty(dialog.bg_music);
		this.bg_sound = this.checkProperty(dialog.bg_sound);
		this.chars = this.checkProperty(dialog.chars);
		this.txt_face = this.checkProperty(dialog.txt_face);
		this.txt_text = this.checkProperty(dialog.txt_text);
	},
	
	// check for empty properties which is possible for comic content
	checkProperty: function(obj){
		
		// if no object return null
		if ( !obj ) {
			return null;
		}
		
		// if it is a string, being empty means null property
		if ( typeof(obj) == "string" && obj == "" ) {
			return null;
		}
		
		// otherwise return the object itself
		return obj;
	}
	/*
	dialogs: 
	{
		dialog1: {
			chars:  [
				{
					name: "martha",
					state: "happy",
					x: 0,
					y: 0,
					inTranscitions: [
						"fadeIn",
						"movoToRight"
					],
					outTranscitions: [
						"fadeIn",
						"movoToRight"
					]
				},
				{
					name: "martha",
					state: "angry",
					x: 200,
					y: 300,
					inTranscitions: [
						"fadeIn",
						"movoToRight"
					]
				},
			],
			txt_face : "martha_face_angry.png",
			txt_text : "txt_intro_01",
		},
		dialog2: {
			chars : [
				{
					name: "martha",
					state: "happy",
					x: 100,
					y: 0,
				},
			],
			txt_face: "martha_face_happy.png",
			txt_text: "txt_intro_02",
		}
	}	
	*/
});
