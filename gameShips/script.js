"use strict";

let randomLoc = Math.floor(Math.random()*5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk ==  false) {
    guess = prompt("Ready!!!Set the target!!!Shoot!!!(Enter a number between 0 and 6)");
    if (guess < 0 || guess > 6){
        alert("Enter a number between 0 and 6 only!!!")
    } else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3)
        alert("Guess!!!");
        hits = hits + 1;
        if(hits == 3){
            isSunk;
            alert("Hit and sink!!!")
        }
     else { 
        alert("You missed!!!")
    }
    } 
}
const stats = " You needed " + guesses + " guesses, to sink the ship. "+ " That is your efficiency is "+ (guesses) + ".";
alert(stats);
