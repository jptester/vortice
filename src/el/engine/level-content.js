// 
//
//  Level content
//  File: level-content.js
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
// Level content
//
el.LevelContent = el.Class.extend({
	// private properties
	_id: null,
	_version: 1,
	_bHidden: null,
	_background: null,
	_bg_cocostudiocontent: null,
	_fg_cocostudiocontent: null,
	_bg_sound: null,
	_bg_music: null,
	_currentGame: null,
	
	// Constructor for level
	ctor:function (bHidden, id, content) {
				
		// Set private properties
		this._bHidden = bHidden;
		this._id = id;
		
		// Get image background
		if ( content.background != undefined && content.background.length > 0) {
			this._background = content.background;
		}

		// Get background cocos studio content
		if ( content.bg_cocostudiocontent != undefined && content.bg_cocostudiocontent.length > 0) {
			this._bg_cocostudiocontent = content.bg_cocostudiocontent;
		}

		// Get front content cocos studio content
		if ( content.fg_cocostudiocontent != undefined && content.fg_cocostudiocontent.length > 0) {
			this._fg_cocostudiocontent = content.fg_cocostudiocontent;
		}

		// Get music and sound background
		if ( content.bg_sound != undefined && content.bg_sound.length > 0) {
			this._bg_sound = content.bg_sound;
		}

		// Get music and sound background
		if ( content.bg_music != undefined && content.bg_music.length > 0) {
			this._bg_music = content.bg_music;
		}
	},

	// Returns true if content is hidden false otherwise
	isHidden: function() {
		return this._bHidden;
	},
	
	// Return content ID
	getID: function() {
		return this._id;
	},
	
	// Get version
	getVersion: function() {
		return this._version;
	},
	
	// level content does not have content
	findContentByCode: function(contentID) {
		// if this content code is the same as content ID return this content
		return null;
	},
	
	// returns a corresponding scene type
	getNewScene: function(currentGame) {		
		// if this content code is the same as content ID return this content
		return new el.LevelScene(this);
	},
		
	// Get info from content
	getBackground: function () {
		return this._background;
	},

	// Get info from cocos studio content
	getBgCocosStudioContent: function () {
		return this._bg_cocostudiocontent;
	},
	
	// Get info from cocos studio content
	getFgCocosStudioContent: function () {
		return this._fg_cocostudiocontent;
	},

	// Get info from content
	getBGMusic: function () {
		return this._bg_music;
	},

	// Get info from content
	getBgFxSound: function () {
		return this._bg_sound;
	},
});