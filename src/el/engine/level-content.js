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
	_version: 0,
	_bHidden: null,
	_background: null,
	_bg_sound: null,
	_bg_music: null,
	
	// Constructor for level
	ctor:function (bHidden, id, content) {
				
		// Set private properties
		this._bHidden = bHidden;
		this._id = id;
		
		// Get image background
		if ( content.background != undefined && content.background.length > 0) {
			this._background = content.background;
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
	getContentCode: function() {
		return this._id;
	},
	
	// Get version
	getVersion: function() {
		return this._version;
	}
});