"use strict";
//! namespace (using method inside namespace)
var Utils;
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color};`);
        }
    }
    log("Salom dunyo", "blue", "32px");
})(Utils || (Utils = {}));
//! namespace (using method outside namespace)
(function (Utils) {
    function log(text, color, fontSize) {
        if (fontSize) {
            console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize}`);
        }
        else {
            console.log(`%c${text}`, `color: ${color};`);
        }
    }
    Utils.log = log;
})(Utils || (Utils = {}));
Utils.log("Salom dunyo", "green", "24px");
