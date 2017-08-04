"use strict";

const avatar = "general";
const skill = 1.0;
const pointsLevel = 1000;
const userPoints = 2008;

function getAvatar(points) {
    let level = points / pointsPerLevel;
    if (level == 0) {
        return "Bear Jogi";
    } else if (level == 1) {
        return "Cat";
    } else if (level >= 2) {
        return "Gorilla";
    }
}

function updatePoints(bonus, newPoints) {
    const i = 0;
    while (i < bonus) {
        newPoints = newPoints + skill * bonus;
        i = i + 1;
    }
    return newPoints + userPoints;
}

userPoints = updatePoints(2, 100);
avatar = getAvatar(2112);