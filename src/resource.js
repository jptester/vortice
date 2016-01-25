var res = {
    //HelloWorld_png : "res/HelloWorld.png",
	
	// Scenes files
    sc_initial_json : "res/sc_initial.json",
    sc_main_menu_json : "res/sc_main_menu.json",
    sc_generic_json : "res/sc_generic.json",
    sc_comic_json : "res/sc_comic.json",
	
	// Images
	img_btnButton01_nrm : "res/visualcontent/ui/button3.png",
	img_btnButton01_psh : "res/visualcontent/ui/button3_pressed.png",
	img_btnButton01_dsb : "res/visualcontent/ui/button3_disabled.png",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
