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
el.ComicScreen = cc.Scene.extend({
	//ctor:function (callerScene) {
    //    this._super();
	//},
    onEnter:function () {
        this._super();

        var layer = new el.InitLayer(res.sc_comic_json, false, false, null);		
		this.addChild(layer);
	}
});