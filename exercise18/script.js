"use strict";

function addSong() {
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");

    song1.innerHTML = "Sad suede strings - Elvis Pagelya";
    song2.innerHTML = "Big objects in the fire - Jerry JSON Lewis";
    song3.innerHTML = "The first line of code - Johny JavaScript";
}

window.onload = addSong;