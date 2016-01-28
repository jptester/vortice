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

	// Public properties
	dialog_property_name: "dialog",
	
	// Constructor for level
	ctor:function (bHidden, iCode, content) {
		
		// Run super constructor
		this._super(bHidden, iCode, content);
		
		// Parse dialogues
		this.parseContent(content);
	},
	
	// Parse the whole content into this object properties
	parseContent: function(content) {
		
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
});

//
// Comic level content - Will load content, version, etc
// Creator : JP
// Date: 27/01/2016
//
el.ComicDialog = el.Class.extend({

	//private properties
	_id: null,
	_background: null,
	_bg_sound: null,
	_bg_music: null,
	_bg_fx: null,
	_chars: [],
	_txt_face: null,
	_txt_text: null,
	
	// Constructor for level
	ctor: function (id, dialog) {
		
		// get ID
		this._id = id;
		
		// Parse dialogues
		this._background = this.checkProperty(dialog.background);
		this._bg_sound = this.checkProperty(dialog.bg_sound);
		this._bg_music = this.checkProperty(dialog.bg_music);
		this._bg_fx = this.checkProperty(dialog.bg_fx);
		this._chars = this.checkProperty(dialog.chars);
		this._txt_face = this.checkProperty(dialog.txt_face);
		this._txt_text = this.checkProperty(dialog.txt_text);
	},
	
	// check for empty properties which is possible for comic content
	checkProperty: function(obj){
		
		// if no object return null
		if ( obj == null ) {
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
