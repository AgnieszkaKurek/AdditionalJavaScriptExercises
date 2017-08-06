"use strict";

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var highScore = 0;
var output = 0;
function printAndGetHighScore(scores) {
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble liquid number " + i + " score: " + scores[i];
        console.log(output);

        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
var highScore = printAndGetHighScore(scores);
console.log("Number of tests: " + scores.length);
console.log("The largest number of bubbles produced: " + highScore);

var bestSolutions = [];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Liquids with the best result: " + bestSolutions);
