// 
//
//  Localizator
//  File: localizator.js
//  Creator : JP
//  Date: 22/01/2016
//

//
// The namespace of Entretenimiento Lobo
// @namespace
// @name el
//
var el = el || {};

// Global Variables
el.defaultLanguage = "es";
el.localizationPathFileName = "res/langs/";
el.localizationFileTailName = "_localization.plist";
el.noTranslationFoundText = "<unknown text>";
el.emptyTranslationText = "<empty text>";

el.Localizator = (function () {

    var localization;

    function createInstance() {
		
		// This is the main object
        var object = new Object();
		
		// It has a keyMap property which contains the whole translation
		object.keyMap = null;
		
		// This function loads a language into the keyMap property
		object.loadLocalization = function (sLanguage) {
			
				// Get language or default language
				sLanguage = sLanguage || el.defaultLanguage;
				
				// if string is not empty
				if ( sLanguage.length <= 0 ) {
					el.gELLog("Empty localization language");
					return false;
				}

				// Get file with language
				var sFile = el.localizationPathFileName + sLanguage + el.localizationFileTailName;

				// Load file content
				cc.loader.loadTxt(sFile, function(err, data) {
					
					// If there is an error
					if (err) {
						el.gELLog("Fail to load file: " + sFile);
						return false;
					} else {
						
						// Once loaded file parse it
						this.keyMap = cc.plistParser.parse(data);
												
						// if empty map
						if ( Object.keys(this.keyMap).length == 0 ) {
							el.gELLog("No valid structure/data in localization file: " + sFile);
							return false;
						}
						else {
							cc.log("Successfully localization \"" + sLanguage + "\": " + sFile + " file loaded")
						}
					}
				});
				
				return true;
			};
			
		// this function localizates a string
		object.localizate = function(sString) {
			
				// if string is not empty
				if ( sString.length > 0 ) {
			
					// if there is a valid key
					if ( keyMap[sString] != undefined ) {
						return keyMap[sString];
					}
					// Else write into the log the error and return standard text
					else {
						el.gELLog("No translation for: " + sString);
					}
					return el.noTranslationFoundText;
				}
				// if empty string
				else {
					el.gELLog("Empty string - no translation");
				}
				return "";
			};

        return object;
    };
 	
    return {
        getInstance: function () {
            if (localization === undefined) {
                localization = createInstance();
            }
            return localization;
        }
    };
})();


// Global functions for convenience
el.gLoc 		= el.Localizator.getInstance().localizate;
el.gLoadLoc 	= el.Localizator.getInstance().loadLocalization;
