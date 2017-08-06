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

var miles = fiat.milage;
if (miles < 2000){
    buyIt();
}