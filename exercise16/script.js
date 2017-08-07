"use strict";

var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    milage: 1021,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " move!!!")
        } else {
            alert("First you have to turn on the engine!!!")
        }
    },
};

var fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "pale blue",
    passengers: 2,
    convertible: false,
    milage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " move!!!")
        } else {
            alert("First you have to turn on the engine!!!")
        }
    }
};

var taxi = {
    make: "SieMoCorp",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    milage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " move!!!")
        } else {
            alert("First you have to turn on the engine!!!")
        }
    }
};

var cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "light brown",
    passengers: 5,
    convertible: false,
    milage: 12892,
    fuel: 0,
    started: false,
    start: function () {
        if (this.fuel == 0) {
            alert("Bak is empty!!Beat off before driving!!")
        } else {
        this.started = true;
        }
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if(this.started) {
            if(this.fuel > 0){
                alert(this.make + " " + this.model + " move!!!");
                this.fuel = this.fuel - 1;
            } else {
                alert("No fuel!!");
                this.stop();
            } 
        }
    },
    addFuel: function(amount){
        this.fuel = this.fuel + amount;
    }
};

// chevy.start();
// chevy.drive();
// chevy.stop();

// fiat.start();
// fiat.drive();
// fiat.stop();

// taxi.start();
// taxi.drive();
// taxi.stop();

cadi.start();
cadi.drive();
cadi.stop();
cadi.addFuel();
