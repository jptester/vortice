/** Default
var InitdLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var initial_scene = ccs.load(res.sc_initial_json);
        this.addChild(initial_scene.node);

        return true;
    }
});

var InitScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new InitdLayer();
        this.addChild(layer);
    }
});
*/ // End of default code

//------------------------------------------------------------------
//
// BackgroundComponentTest
//
//------------------------------------------------------------------
/*
var InitScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var node,
            file = "sc_initial_json";
		var cocoStudioOldApiFlag = 0;
        if(cocoStudioOldApiFlag == 0){
            cc.log("ccs.load : %s", file);
            var json = ccs.load(file);
            node = json.node;
        }else{
            //ccs.sceneReader only supports 1.x file
            cc.log("ccs.sceneReader.createNodeWithSceneFile : %s", file);
            node = ccs.sceneReader.createNodeWithSceneFile(file);
        }
        this.addChild(node);
        ccs.actionManager.playActionByName(file, "main_animation");

        //var audio = node.getComponent("CCBackgroundAudio");
        //audio.playBackgroundMusic();

        //this.initSize(node);
    },
    onExit: function() {
        ccs.actionManager.releaseActions();
        this._super();
    },
    title: function () {
        return "Background Component Test";
    }
});
*/

var InitdLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var node,
            file = "res/sc_initial.json";
		var action;
		cc.log("ccs.load : %s", file);
		var json = ccs.load(file);
		node = json.node;
        this.addChild(node);
		
        //ccs.actionManager.playActionByName(file, "main_animation");
		
		var action = json.action;
		if (action) {
			node.runAction(action);
			action.gotoFrameAndPlay(0, 240, false); //play animation
		}
		cc.log(node);
		//node.playActionByName(file,"main_animation");
		//node.playAction("main_animation");

        return true;
    }
});

var InitScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new InitdLayer();
        this.addChild(layer);
    }
});
/*
        var node,
            file = "sc_initial_json";
		var cocoStudioOldApiFlag = 0;
        if(cocoStudioOldApiFlag == 0){
            cc.log("ccs.load : %s", file);
            var json = ccs.load(file);
            node = json.node;
        }else{
            //ccs.sceneReader only supports 1.x file
            cc.log("ccs.sceneReader.createNodeWithSceneFile : %s", file);
            node = ccs.sceneReader.createNodeWithSceneFile(file);
        }
        this.addChild(node);
        ccs.actionManager.playActionByName(file, "main_animation");

        //var audio = node.getComponent("CCBackgroundAudio");
        //audio.playBackgroundMusic();
*/
