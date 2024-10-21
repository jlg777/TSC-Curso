class CarS {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCarS extends CarS {
    make = 'Electric Car';
    doors = 4
}
class Truck extends CarS {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends CarS> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}

let myElectricCar = new ElectricCarS;
accelerate<ElectricCarS>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);