"use strict";

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    milage: 1021
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "pale blue",
    passengers: 2,
    convertible: false,
    milage: 88000
};

var taxi = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    milage: 281341
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "light brown",
    passengers: 5,
    convertible: false,
    milage: 12892
};

function prequal(car) {
    if (car.milage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var worthALook = prequal(taxi);
if (worthALook) {
    console.log("You should be interested in this " + taxi.make + " " + taxi.model);
} else {
    console.log("This " + taxi.make + taxi.model + " you can forgive this purchase");
}

var worthALook = prequal(cadi);
if (worthALook) {
    console.log("You should be interested in this " + cadi.make + " " + cadi.model);
} else {
    console.log("This " + cadi.make + " " + cadi.model + " you can forgive this purchase");
}

var worthALook = prequal(fiat);
if (worthALook) {
    console.log("You should be interested in this " + fiat.make + " " + fiat.model);
} else {
    console.log("This " + fiat.make + " " + fiat.model + " you can forgive this purchase");
}

var worthALook = prequal(chevy);
if (worthALook) {
    console.log("You should be interested in this " + chevy.make + " " + chevy.model);
} else {
    console.log("This " + chevy.make + " " + chevy.model + " you can forgive this purchase");
}

//console.log(fiat);