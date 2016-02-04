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
	
	// Initial sub level content
	_initSubLevelContent: 0,
	
	// Constructor for ComicScene
	ctor: function(currentLevel) {
        this._super(currentLevel);
		
		// fill scene
		this._levelContent.parseComicContentUntilKey(this._initSubLevelContent);
	},
	
	// Add additional elements to ComicScene (comic control and UI)
    onEnter:function () {
		
        // run super method 
		this._super();
		
		// add listener
		var btn_next = el.gFindFirstChildInInnerTreeByName(this, "btn_next");
		if ( btn_next ) {
			btn_next.removeFromParent(false);
			btn_next.addTouchEventListener(this.nextContent, this);
			this._uiLayer.addChild(btn_next);
		}
		// add listener
		var btnSkip = el.gFindFirstChildInInnerTreeByName(this, "btn_skip");
		if ( btnSkip ) {
			btnSkip.removeFromParent(false);
			btnSkip.addTouchEventListener(this.skipContent, this);
			this._uiLayer.addChild(btnSkip);
		}
	},

	// next content
	nextContent: function(sender, type) {
		if ( el.gActivationEvent(sender, type) ) {
			// get next scene
			var nextScene = el.GameLevelManager.getInstance().getNextContentScene();
			if ( !nextScene ) {
				this.updateAllElements();
			}
			else {
				cc.director.runScene(new cc.TransitionFade(1, nextScene));
			}
		}
	},
	
	// skip content
	skipContent: function(sender, type) {
		if ( el.gActivationEvent(sender, type) ) {
			// get next scene
			var nextScene = el.GameLevelManager.getInstance().getNextLevelScene();
			if ( !nextScene ) {
				this.updateAllElements();
			}
			else {
				cc.director.runScene(new cc.TransitionFade(1, nextScene));
			}
		}
	}

});