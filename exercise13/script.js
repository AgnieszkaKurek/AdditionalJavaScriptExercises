"use strict";

function makePhrases() {
    var words1 = ["continued", "multilayer", "a thousand meters", "business", "unchecked"];
    var words2 = ["supported", "valuable", "oriented", "focused", "aligned"];
    var words3 = ["processes", "solutions", "points", "strategy", "visions"];

    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);

    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    alert(phrase);
}
makePhrases();