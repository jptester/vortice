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
	_chars: null,
	_sc_text_face: null,
	_sc_text_text: null,
	
	// Constructor for ComicScene
	ctor: function(currentLevel) {
        this._super(currentLevel);
		
		// fill scene
		this._levelContent.parseComicContentUntilKey(this._initSubLevelContent);
	},

	// Call super method
    onEnter:function () {
        this._super();

		// Fill comic specific ui
		el.gGetCCSContent(res.sc_comic_ui_json, this._uiLayer);
		
		// Set UI functionality
		this.setUpUI();
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
	},
		
	// this method will set up UI functionality for comics
	setUpUI: function() {
		
		// get label text
		this._sc_text_text = el.gFindFirstChildInInnerTreeByName(this._uiLayer, "txt_dialog");
		if ( !this._sc_text_text || !(this._sc_text_text instanceof ccui.Text) ) {
			// There must be a text dialogue
			el.gELLog("No text dialogue box found in UI");
			if ( cc.game.config.debugMode == 1 ) {
				throw new Error("No valid dialogue in UI, cannot continue");
			}
		}
		
		// Update text
		this.updateText();
		
		// get face node
		this._sc_text_face = el.gFindFirstChildInInnerTreeByName(this._uiLayer, "txt_face");
		if ( !this._sc_text_face ) {
			// There must be a face box
			el.gELLog("No face box found in UI");
			if ( cc.game.config.debugMode == 1 ) {
				throw new Error("No valid face box in UI, cannot continue");
			}
		}
		
		// Update face
		this.updateFace();
		
		// add listener
		var btn_next = el.gFindFirstChildInInnerTreeByName(this._uiLayer, "btn_next");
		if ( btn_next ) {
			btn_next.addTouchEventListener(this.nextContent, this);
		}

		// add listener
		var btnSkip = el.gFindFirstChildInInnerTreeByName(this._uiLayer, "btn_skip");
		if ( btnSkip ) {
			btnSkip.addTouchEventListener(this.skipContent, this);
		}		
	},
	
	// This function will CRUD all elements in scene 
	fillLevelContentForScene: function() {

		// call super method
		this._super();
		
		// update face (talking person or animal or thing)
		this.updateFace();
		
		// if there is a valid text dialogue
		this.updateText();
	},
	
	// this method will update text
	updateText: function() {

		// if there is a valid text
		if ( this._sc_text_text ) {

			// Get text and update it
			var text = this._levelContent.getTxtText();
			if ( text !== undefined && this._sc_text_text.setString ) {
				this._sc_text_text.setString(el.gLoc(text));
			}
		}
	},
	
	// Update face
	updateFace: function() {

		// there must be a face box
		if ( !this._sc_text_face ) {
			return;
		}
	
		// Get background and update it
		var face = this._levelContent.getTxtFace();
		if ( face ) {
			
			// first remove children
			this._sc_text_face.removeAllChildren();

			// if remove command
			if ( face != el.Game.removeCommand ) {
				var faceSprite = new cc.Sprite(face);
				this._sc_text_face.addChild(faceSprite);
			}
		}		
	}
});