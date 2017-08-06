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
function getBestResult(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}
var highScore = printAndGetHighScore(scores);
console.log("Number of tests: " + scores.length);
console.log("The largest number of bubbles produced: " + highScore);

var bestSolutions = getBestResult(scores, highScore);
console.log("Liquids with the best result: " + bestSolutions);

function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.lengt; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }

    }
    return index;
}
var mostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Liquid number " + mostEffective + " is most profitable.");
