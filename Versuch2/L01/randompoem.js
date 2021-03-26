"use strict";
var L01;
(function (L01) {
    let subject = ["Jeder", "Es", "Niemand", "Sie", "Er", "Man"];
    let predicate = ["kennt", "mag", "liebt", "hasst", "findet", "braucht"];
    let object = ["EIA 2", "Furtwangen", " die HFU", "Haferbrei", "Sand im Schuh", "Kneifzangen"];
    for (let i = object.length; i > 0; i--) {
        // console.log(i);
        let randomLine = subject[Math.floor(Math.random() * 6)] + " " + predicate[Math.floor(Math.random() * 6)] + " " + object[Math.floor(Math.random() * 6)] + ".";
        console.log(randomLine);
    }
})(L01 || (L01 = {}));
//# sourceMappingURL=randompoem.js.map