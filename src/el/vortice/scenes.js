// 
//
//  Generic Screens
//  File: scenes.js
//  Creator : JP
//  Date: 14/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

//
//  Splash screen
//  Creator : JP
//  Date: 20/01/2016
//
el.InitLayer = cc.Layer.extend({
    sprite:null,
    ctor:function (sFile, bPlayAnimation, bLoopAnimation, lastFrameCallFunc) {
        
		//////////////////////////////
        // 1. super init first
        this._super();

		// Get node
		var node;
		var action;
		el.gELLog("ccs.load : " + sFile);
		var json = ccs.load(sFile);
		node = json.node;
        this.addChild(node);

        //ccs.actionManager.playActionByName(sFile, "main_animation");
		
		// If there is an animation
		if ( bPlayAnimation ) {
			var action = json.action;
			if (action) {
				
				// action must be instance of cc.Action
				if ( action instanceof ccs.ActionTimeline ) {
					node.runAction(action);
					
					// If there is a valid function for last frame animation
					if ( !bLoopAnimation && lastFrameCallFunc ) {
						action.setLastFrameCallFunc(lastFrameCallFunc);
					}
					else {
						if ( bLoopAnimation && lastFrameCallFunc ) {
							el.gELLog("Loop will not make possible to play last frame call function for scene in file: " + sFile);
						}
					}

					// Play animation
					action.gotoFrameAndPlay(0, action.getDuration(), bLoopAnimation); //play animation
				}
				else {
					el.gELLog("Animation for scene file: " + sFile + " not a compatible format or type");
				}
			}
			else {
				el.gELLog("Missing animation for scene file: " + sFile);
			}
		}

        return true;
    }
});

//
// Splash screen - First screen for game
// Creator : JP
// Date: 20/01/2016
//
el.SplashScreen = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new el.InitLayer(res.sc_initial_json, true, false, this.nextScene);
        this.addChild(layer);
    },
	nextScene:function(sNextScene) {
		cc.director.runScene(new cc.TransitionFade(1, new el.MainMenuScene()));
	}
});


//
// Main menu - Main menu screen for game
// Creator : JP
// Date: 20/01/2016
//
el.MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new el.InitLayer(res.sc_main_menu_json, true, false );
        this.addChild(layer);
		
		// Config buttons
		this.configMenuButtons();
    },
	
	//
	// Config buttons
	//
	configMenuButtons:function() {
		
		// Buttons
		var sButtons = { 
			"btnStart" 		: "btn_init",
			"btnContinue" 	: "btn_continue",
			"btnExtras"		: "btn_extras",
			"btnOptions"	: "btn_options",
			"btnCredits"	: "btn_credits",
			"btnQuit"		: "btn_quit"
		};
		
		// Get & set start button
		var currentButton = el.gGetButtonInInnerTreeByName(this, sButtons.btnStart);
		if ( currentButton != undefined ) {
			currentButton.addTouchEventListener(this.newGame, this);
			currentButton.setTitleText(el.gLoc("btn_start_game"));
		};

		// Get & set continue button
		var currentButton = el.gGetButtonInInnerTreeByName(this, sButtons.btnContinue);
		if ( currentButton != undefined ) {
			currentButton.addTouchEventListener(this.continueGame, this);
			currentButton.setTitleText(el.gLoc("continue_game"));
		};

		// Get & set quit button
		currentButton = el.gGetButtonInInnerTreeByName(this, sButtons.btnQuit);
		if ( currentButton != undefined ) {
			// Set text
			currentButton.setTitleText(el.gLoc("quit_game"));

			// set disable if in browser
			if ( !cc.sys.isNative ) {
				currentButton.setEnabled(false);
				currentButton.setBright(false);
			}
			// Otherwise allow to "quit" the game (exit program)
			else {
				currentButton.addTouchEventListener(this.quitGame, this);
			}
		}		
		
	},
	
	// Init new game if selected
	newGame:function ( sender, type ) {
		if ( el.gActivationEvent(sender, type) ) {
			cc.director.runScene(new cc.TransitionFade(1, new el.ComicScreen()));
		}
	},
	
	// Continue new game if selected
	continueGame:function ( sender, type ) {
		if ( el.gActivationEvent(sender, type) ) {
			cc.director.runScene(new cc.TransitionFade(1, new el.GenericScreen(this)));
		}
	},
	
	// Quit game if selected
	quitGame:function ( sender, type ) {
		
		// if event activated
		if ( el.gActivationEvent(sender, type) ) {
			if (cc.sys.isNative)
			{
				cc.director.end();
			}
			else {
				window.history && window.history.go(-1);
			}
		}
	}
});


//
// Generic screen - Empty generic screen
// Creator : JP
// Date: 20/01/2016
//
el.GenericScreen = cc.Scene.extend({
	mCallerScene:null,
	ctor:function (callerScene) {
        this._super();
		this.mCallerScene = callerScene;
	},
    onEnter:function () {
        this._super();

		// info variable
        winSize = cc.director.getWinSize();
		
        var layer = new el.InitLayer(res.sc_generic_json, false, false, null);		
		this.addChild(layer);		
		
		// Back button
		var returnButton = ccui.Button.create(res.img_btnButton01_nrm, res.img_btnButton01_psh, res.img_btnButton01_dsb);
		returnButton.addTouchEventListener(this.returnToPreviousScene, this);
		returnButton.x = winSize.width / 2;
	    returnButton.y = winSize.height / 2;
		layer.addChild(returnButton,1);
    },

	// Return to previous scene
	returnToPreviousScene:function ( sender, type ) {		
		// if event activated
		if ( this.mCallerScene != undefined && this.mCallerScene instanceof cc.Scene && el.gActivationEvent(sender, type) ) {
			cc.director.runScene(new cc.TransitionFade(1, this.mCallerScene));
		}
	}	
});