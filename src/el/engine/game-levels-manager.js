// 
//
//  Game Scene
//  File: game-scenes.js
//  Creator : JP
//  Date: 25/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//

var el = el || {};

//
// Game scene manager - Game scenes manager
// Creator : JP
// Date: 25/01/2016
//
el.GameLevelManager = (function () {

	// Private object / singleton instance
	var gameLevelManager;

	// Private properties
	var _gameTree = [];
	var _currentGameScene;
	var _treeVersion;
		
	// Private creation instance function 
    function createInstance() {
		
		// This is the main object
        var gamescenemanger = new Object();
		
		// Load all game scenes
		if ( !loadTreeGameScenes() ) {
			el.gELLog("No content loaded");
		}

		// Tree version
		el.gELLog("Level content version: " + getGameTreeVersion());

		// Load current scene
		gamescenemanger.loadCurrentScene = function(bLoad) {
			
			// TODO: after reading gameTree retrieve the current scene for current game
			if ( !bLoad ) {
				return new el.ComicScene();
			}
			
			return new el.ComicScene();
		};
		
		// return new object
        return gamescenemanger;
    };
	
	// Get game tree version
	function getGameTreeVersion() {
		
		// return tree version
		return _treeVersion;		
	};
 	
	// Private creation instance function 
    function loadTreeGameScenes() {
		
		// Codes for each level
		var id = 0;
		
		// Content version 
		// Calculated as x.y, where x will be calculated as sum of all ids for levels and y will be the sum of all contents
		var levelVersion = 0;
		var contentLevelVersion = 0;
		
		// Read tree game
		for ( var i = 0; i < el.vortice.levels.length; i++) {
			
			var content = el.vortice.levels[i]["content"];
			var bHidden = el.vortice.levels[i]["hidden"];
			
			// Check to see if there is a problem or empty content
			if ( content === undefined || bHidden === undefined ) {
				el.gELLog("No valid level tree branch");
				_gameTree = [];
				return false;
			}
			
			// Level content must be valid
			if ( content.type === undefined ) {
				el.gELLog("No valid level content");
				_gameTree = [];
				return false;
			}
			
			// Create a new code
			id++;
			
			// Create level content
			var levelContent;
			switch(content.type) {
				case el.vortice.LEVEL_TYPES.COMIC:
					levelContent = new el.ComicContent(bHidden, id, content);
					break;
				case el.vortice.LEVEL_TYPES.STRATEGY:
					levelContent = new el.LevelContent(bHidden, id, content);
					break;
				default:
					levelContent = new el.LevelContent(bHidden, id, content);
			};
			
			// Update level version
			levelVersion += id;
			contentLevelVersion += levelContent.getVersion();
			
			// Level content
			_gameTree.push(levelContent);
		};
		
		// Update level version
		_treeVersion = levelVersion.toString() + "." + contentLevelVersion.toString();

		return true;
    };

	// Public method
    return {
        getInstance: function () {
            if (gameLevelManager === undefined) {
                gameLevelManager = createInstance();
            }
            return gameLevelManager;
        }
    };
})();