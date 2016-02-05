var res = {
    //HelloWorld_png : "res/HelloWorld.png",
	
	// Scenes files
    sc_initial_json : "res/sc_initial.json",
    sc_main_menu_json : "res/sc_main_menu.json",
    sc_generic_json : "res/sc_generic.json",
    sc_comic_json : "res/sc_comic.json",
    sc_comic2_json : "res/sc_comic2.json",
    sc_comic_ui_json : "res/sc_comic_ui.json",
	
	//
	// Images
	//
	img_btnButton01_nrm : "res/visualcontent/ui/button3.png",
	img_btnButton01_psh : "res/visualcontent/ui/button3_pressed.png",
	img_btnButton01_dsb : "res/visualcontent/ui/button3_disabled.png",
	img_bg02 : "res/visualcontent/backgrounds/bg2.jpg",
	img_bg03 : "res/visualcontent/backgrounds/bg3.jpg",
	// Faces
	martha_happy_face : "res/visualcontent/comic_characters/martha_happy_face.png",
	martha_angry_face : "res/visualcontent/comic_characters/martha_angry_face.png",

	// Sounds: fx and music
	music_comic01 : "res/sounds/music_comic01.mp3",
	music_comic02 : "res/sounds/music_comic02.mp3",
	music_init : "res/sounds/music_init01.mp3",
	sound_jungle : "res/sounds/sound_jungle.mp3",
	
	// Levels 
	strategy_level_01 : "res/visualcontent/levels/level01.tmx",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}