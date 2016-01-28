// 
//
//  Comic level
//  File: comic01.js
//  Creator : JP
//  Date: 26/01/2016
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

// Comic
el.vortice.comic_01 = {
	type: el.vortice.LEVEL_TYPES.COMIC,
	background: "",
	bg_sound: "",
	bg_music: "",
	dialogs: 
	{
		dialog1: {
			background: "",
			bg_sound: "",
			bg_fx: "",
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