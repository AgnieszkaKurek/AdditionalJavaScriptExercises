"use strict";

const drink = "bottles of beer";
let count = 99;
while (count > 0) {
    console.log(count + " " + drink + " on the wall ");
    console.log(count + " " + drink + " ");
    console.log(" Take one down and pass it around ");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + drink + " on the wall ");
    }
    else {
        console.log("No more " + drink + " on the wall ");
        console.log("No more " + drink);
    }

}