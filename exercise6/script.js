"use strict";

const temp = 81;
let willRain = true;
let humid = (temp > 80 && willRain == true);
console.log(humid);

const guess = 6;
let isValid = (guess >= 0 && guess <= 6);
console.log(isValid);

const kB = 1287;
let tooBig = (kB > 1000);
let urgent = true;
let sendFile = (urgent == true || tooBig == false);
console.log(sendFile);

const keyPressed = "N";
const points = 142;
let level;
if (keyPressed == "Y" || (points > 100 && points < 200)){
level = 2;
} else {
    level = 1;
}
console.log(level);

const onSale = false;
const inStok = true;
let buyIt = (inStok || onSale);
let buyIt2 = (inStok && onSale);
console.log(buyIt);
console.log(buyIt2);
 

