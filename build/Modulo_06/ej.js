"use strict";
class CarS {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCarS extends CarS {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck extends CarS {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCarS;
accelerate(myElectricCar);
let myTruck = new Truck;
accelerate(myTruck);
