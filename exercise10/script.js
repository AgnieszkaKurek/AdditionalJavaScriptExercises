"use strict";

function calculateArea(r) {
    let area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}
const radius = 5.2;
let theArea = calculateArea(radius);

console.log("Wheel area is" + " " + theArea);

