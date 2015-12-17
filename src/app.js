
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

