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
	
	// Private properties
	_dialogs: [],
	_currentDialog: 0,

	// Public properties
	dialog_property_name: "dialog",
	
	// Constructor for level
	ctor:function (bHidden, iCode, content) {
		
		// Run super constructor
		this._super(bHidden, iCode, content);
		
		// Version will depend on children
		this._version = 0;

		// Current dialog
		this._currentDialog = 0;
		
		// Parse dialogues
		this.readAllContent(content);
	},
	
	// Reads and loads the whole content into this object properties
	readAllContent: function(content) {
		
		// dialogue id
		var id = 0;
		
		// check if there are dialogues
		if ( content.dialogs == undefined ) {
			this._dialogs = [];
			el.gELLog("No valid dialogues in comic");
			return false;
		}
		
		// read every dialogue
		for (var property in content.dialogs) {
			// if correct property
			if ( property.substr(0, this.dialog_property_name.length) == this.dialog_property_name) {
				
				// Create an id
				id++;

				// add dialogue
				this._dialogs.push(new el.ComicDialog(id, content.dialogs[property]));
				
				// update current version
				this._version += id;
			}
		}
		
		return true;
	},
	
	// find specific content by ID, returns null if not found
	findContentByCode: function(contentID) {
		
		// if there are no dialogues return null
		if ( this._dialogs.length <= 0 ) {
			return null;
		}
		
		// if this content code is the same as content ID return this content
		for ( dialog of this._dialogs ) {
			
			// if this is the same dialogue, return true and keep a reference 
			if ( dialog.getID() == contentID ) {
				
				// keep track of selected dialogue content
				this._currentDialog = contentID;
				
				// return current content / dialogue
				return this;
			}
		}
		
		// No content found
		return null;
	},
	
	// fill / replace content with current dialog
	parseComicContent: function() {
		
		// here I should replace all elements depending on dialogue
		var currentLevel = el.GameLevelManager.getInstance().getCurrentLoadedGame();
		
		// first check if this is the same dialogue we're looking for
		if ( this.getID() + "." + this._currentDialog != currentLevel ) {
			
			// Alert something might not be right
			el.gELLog("Differences between current dialogue in comics and in GameLevelManager, check saved info or game tree");
		}

		// evaluate every dialogue until reach specific dialogue
		for ( dialog of this._dialogs ) {
		
			// move to next dialogue
			this.moveToNextDialog(dialog);

			// if this is the same dialogue, stop evaluating contents
			if ( this.getID() + "." + dialog.getID() == currentLevel ) {
				// stop evaluating content
				return;
			}
		}
		
		// if this point is reached a problem occurred
		var errorMsg = "During filling comic content, there was an error and no 'dialogue' was found";
		el.gELLog(errorMsg);
		
		// if debug session quit
		if ( cc.game.config.debugMode == 1 ){
			throw new Error(errorMsg);
		}
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

	//private properties
	_id: null,
	background: null,
	bg_cocostudiocontent: null,
	fg_cocostudiocontent: null,
	bg_music: null,
	bg_sound: null,
	chars: [],
	txt_face: null,
	txt_text: null,
		
	// Constructor for level
	ctor: function (id, dialog) {
		
		// get ID
		this._id = id;
		
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
	
	// get dialog ID
	getID: function() {
		return this._id;
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
