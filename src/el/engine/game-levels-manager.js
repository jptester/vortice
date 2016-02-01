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
// Game level manager
// Creator : JP
// Date: 25/01/2016
//
el.GameLevelManager = (function () {

	// Private object / singleton instance
	var gameLevelManager;

	// Private properties
	var _gameTree = [];
	var _levelContent;
	var _treeVersion;
	var _firstLevelCode = "1.1";
	var _currentLoadedGame = null;
		
	// Private creation instance function 
    function createInstance() {
		
		// This is the main object
        var gamelevelmanger = new Object();
		
		// Load all game scenes
		if ( !loadTreeGameScenes() ) {
			el.gELLog("No content loaded");
		}

		// Tree version
		el.gELLog("Level content version: " + getGameTreeVersion());

		// Load current scene
		gamelevelmanger.loadCurrentScene = function(currentGame) {
			
			// if there is no main tree level content, exit
			if ( _gameTree.length <= 0 ) {
				el.gELLog("No content available to load from");
				return new el.LevelScene(null);
			}
			
			// if there is no currentPlay assume first level
			currentGame = !currentGame ? _firstLevelCode : currentGame;
			
			// fill a coded array with the current play
			var currentPlayID = currentGame.split(".");
			
			// found branch
			var foundBranch = null;
			
			// After reading gameTree retrieve the current scene for current game
			for( branchLevel of _gameTree) {
				
				// if valid branch
				if ( branchLevel.getID != undefined ) {
					
					// is this the correct branch?
					if ( branchLevel.getID() == currentPlayID[0] ) {
						
						// Get rest of ID except for main branch which is first element
						var contentID = currentPlayID;
						contentID.shift(); // remove first element
												
						// content found
						foundBranch = branchLevel.findContentByCode(contentID);
						
						// stop looking
						break;
					}
				}
			}
			
			// if there is no found branch, log it and restart the search with empty level (first level)
			if ( !foundBranch ) {
				
				// if current game is not first level restart search
				if ( currentGame != _firstLevelCode ) {
					el.gELLog("No saved level found in game content for: " + currentGame + ". Restarting search from first level content");
					return gamelevelmanger.loadCurrentScene(null);
				}
				else {
					el.gELLog("No content available for default first content: " + currentGame + ". Check \"game-level-manager.js file and _firstLevelCode property\"");
					return new el.LevelScene(null);
				}
			}

			this._currentLoadedGame = currentGame;
			el.gELLog("Loaded level: " + this._currentLoadedGame);
			return foundBranch.getNewScene();
		};
		
		gamelevelmanger.getCurrentLoadedGame = function() {
			return this._currentLoadedGame;
		};
		
		// return new object
        return gamelevelmanger;
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