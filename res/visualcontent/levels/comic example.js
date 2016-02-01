// 
//
//  Comic Example
//  File: comic example.js
//  Creator : JP
//  Date: 01/02/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

//
// The namespace of current game: Vortice
// @namespace
// @name vortice
//
el.vortice = el.vortice || {};

/*
	These are not dialogues for current game, just examples of how to use / generate comic content
	
	First: there are 4 possible operations applied to 5 main componentes, this will be the same for everything (same logic)
	
	Add <component>, to add a componente just name the property. Ie: bg_cocostudiocontent : res.<resource>
	Remove <component>, to remove a componente, use the name of the property and the command "stop" for sounds and "remove" for visual content
	Update <component>, just use like the Add component, this will be auto detected when a property has another item
	Keep <component>, just use the component name plus the word 'null', or delete the component. Ie: bg_cocostudiocontent : res.<resource> Ie2: delete bg_cocostudiocontent

	The comic will be read from top to bottom, which means it will load the basic content, then will override every property as it moves forward
	from dialogue to dialogue, changing properties along the way
*/


// Comic
el.vortice.comic_example = {
	type: el.vortice.LEVEL_TYPES.COMIC,
	//background: res.img_bg02,
	//bg_cocostudiocontent: res.sc_comic_json,
	//fg_cocostudiocontent: res.sc_comic2_json,
	bg_sound: res.sound_jungle,
	bg_music: res.music_comic02,
	dialogs: 
	{
		dialog1: {
			//background: res.img_bg03, // possible values = res.<algo>, "remove" or null
			//bg_cocostudiocontent: res.sc_comic2_json, // possible values = res.<algo>, "remove" or null
			//fg_cocostudiocontent: res.sc_comic_json, // possible values = res.<algo>, "remove" or null
			//bg_sound: res.sound_jungle, // possible values = res.<algo>, "stop" or null
			//bg_music: "stop", // possible values = res.<algo>, "stop" or null
			chars:  [
				{
					name: "martha",
					state: "happy",
					x: 0,
					y: 0,
					inTranscitions: [
						"fadeIn",
						"movoToRight"
					],
					outTranscitions: [
						"fadeIn",
						"movoToRight"
					]
				},
				{
					name: "martha",
					state: "angry",
					x: 200,
					y: 300,
					inTranscitions: [
						"fadeIn",
						"movoToRight"
					]
				},
			],
			txt_face : "martha_face_angry.png",
			txt_text : "txt_intro_01",
		},
		dialog2: {
			chars : [
				{
					name: "martha",
					state: "happy",
					x: 100,
					y: 0,
				},
			],
			txt_face: "martha_face_happy.png",
			txt_text: "txt_intro_02",
		}
	}
};