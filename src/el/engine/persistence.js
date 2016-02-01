//
//  Persistence interface for Entretenimiento Lobo games
//  File: persistence.js
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
// Abstract Persistence class
//
el.Persistence = el.Class.extend({
	
	// private properties
	_fullScreen: false,
	_bg_music_volume: 0.5,
	_fx_volume: 0.5,
	_email: "",
	_currentLevel: "",
	_gameInfo: "",

	// Private key names for items to be saved
	_sFullScreenKey: "fullScreen",
	_sBgMusicVolumeKey: "bg_music_volume",
	_sFxVolumeKey: "fx_volume",
	_sEmailKey: "email",
	_sCurrentLevelKey: "currentLevel",
	_sGameInfoKey: "gameInfo",

	
	// Constructor / initializer of all options
	ctor: function() {
		
		// Abstract class
		if ( this.constructor === el.Persistence ) {
			throw new Error("Can't instantiate abstract class!: el.Persistence");
		}
		
		// default values
		this._fullScreen = false;
		this._bg_music_volume = 0.5;
		this._fx_volume = 0.5;
		this._email = "";
		this._currentLevel = "1.1";
		this._gameInfo = "";

	},
	
	// save game
	saveGame: function() {
		throw new Error("Can't execute abstract method!: el.Persistence.saveGame");
	},
	
	// load game
	loadGame: function() {
		throw new Error("Can't execute abstract method!: el.Persistence.saveGame");
	},
	
	// get current saved level
	getSavedLevel: function() {
		return this._currentLevel;
	},
	
	// replace any incurrance of "=" char
	clearString: function(sString) {
		return sString.trim().replace(/=/g, "");
	},
	
	// This code is buggy but nothing can be done right now since code / encode are not my algorithms
	// so, this is a patch, not the best one though
	// The problem appears once a string has been encoded and then decoded, sometimes 1 or 2 extra chars with
	// Char Code = 0 are added to the resulting string, this code will erase those chars and return a clean string
	fixCodeDecodeBug: function(sString) {
		// remove 0 coded chars at the end of the string
		while ( sString.length > 0 && sString.charCodeAt(sString.length - 1) == 0 ){
			sString = sString.substr(0, sString.length - 1);
		}
		return sString;
	},
	
	getFullScreen: function(){
		return this._fullScreen;
	}
});


//
// Local Persistence class
//
el.LocalPersistence = el.Persistence.extend({
	
	// private properties
	_localStorage: null,
	
	// Constructor / initializer of all options
	ctor: function() {
		
		// Run prototype or super class constructor
		this._super();
		
		// Saving object 
		this._localStorage = cc.sys.localStorage;

	},
	
	// save game
	saveGame: function() {
		
		// local storage object
		if ( !this._localStorage ) {
			return false;
		}

		this._localStorage.setItem(this._sFullScreenKey, String(this._fullScreen));
		this._localStorage.setItem(this._sBgMusicVolumeKey, String(this._bg_music_volume));
		this._localStorage.setItem(this._sFxVolumeKey, String(this._fx_volume));
		this._localStorage.setItem(this._sEmailKey, el.gBase64.encode(this.clearString(this._email)));
		this._localStorage.setItem(this._sCurrentLevelKey, el.gBase64.encode(this._currentLevel));
		this._localStorage.setItem(this._sGameInfoKey, el.gBase64.encode(this._gameInfo));

		return true;
	},
	
	// load game
	loadGame: function() {

		// local storage object
		if ( !this._localStorage ) {
			return false;
		}

		// parse cookie
		this._fullScreen = Boolean(this._localStorage.getItem(this._sFullScreenKey));
		this._bg_music_volume = Number(this._localStorage.getItem(this._sBgMusicVolumeKey));
		this._fx_volume = Number(this._localStorage.getItem(this._sFxVolumeKey));
		this._email = this.fixCodeDecodeBug(el.gBase64.decode(this._localStorage.getItem(this._sEmailKey)));
		this._currentLevel = this.fixCodeDecodeBug(el.gBase64.decode(this._localStorage.getItem(this._sCurrentLevelKey)));
		this._gameInfo = this.fixCodeDecodeBug(el.gBase64.decode(this._localStorage.getItem(this._sGameInfoKey)));

		return true;
	},
	
});


//
// Web Persistence class
//
el.WebPersistence = el.Persistence.extend({
	
	// private properties
	_file: null,
	
	// Constructor / initializer of all options
	ctor: function() {
		
		// Run prototype or super class constructor
		this._super();
	},
	
	// save game
	saveGame: function() {
		return true;
	},
	
	// load game
	loadGame: function() {
		return true;
	}
});