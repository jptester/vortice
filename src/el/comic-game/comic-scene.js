// 
//
//  Comic Scene
//  File: comic-scene.js
//  Creator : JP
//  Date: 22/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

//
// Generic screen - Empty generic screen
// Creator : JP
// Date: 20/01/2016
//
el.ComicScene = el.LevelScene.extend({
	
	// Constructor for ComicScene
	ctor: function(currentLevel) {
        this._super(currentLevel);
	},
	
	parseLevelContentForScene: function() {
		
		// we need to parse generic level content first
		this._super();
		
		// fill scene
		this._levelContent.parseComicContent();
	}
});