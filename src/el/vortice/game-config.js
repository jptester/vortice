// 
//
//  Game config file
//  File: game-config.js
//  Creator : JP
//  Date: 20/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

//
// The namespace of current game: Vortice
// @namespace
// @name vortice
//
el.vortice = el.vortice || {};

// Strings
el.vortice.str_DefaultLanguage = "es";
el.vortice.str_LocalizationPathFileName = "res/langs/";
el.vortice.str_LocalizationFileTailName = "_localization.plist";

// Types of content in this game
el.vortice.LEVEL_TYPES = el.vortice.LEVEL_TYPES || {
	COMIC: 0,
	STRATEGY: 1
};

// return a new emtpy scene
el.getDefaultAfterLevelsScene = function () {
	return new el.MainMenuScene();
};

