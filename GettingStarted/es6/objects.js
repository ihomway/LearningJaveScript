// const SYM = Symbol();
// const o = {a: 1, b: 2, c: 3, [SYM]: 4};
// for(let prop in o) {
//     if (!o.hasOwnProperty(prop)) {
//         continue;
//     }
//     console.log(`${prop}: ${o[prop]}`);
// }

// Object.keys(o).forEach(prop => console.log(`${prop} : ${o[prop]}`));

// class Car {
//     static getNextVin() {
//         return Car.nextVin++;
//     }
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//         this.vin = Car.getNextVin();
//     }
//     static areSimilar(car1, car2) {
//         return car1.make === car2.make && car1.model === car2.model;
//     }
//     static areSame(car1, car2) {
//         return car1.vin === car2.vin;
//     }
//     get userGear(){return this._userGear;}
//     set userGear(value) {
//         if (this._userGears.indexOf(value) < 0) {
//             throw new Error(`Invalid gear: ${value}`);
//         }

//         this._userGear = gear;
//     }
//     shift(gear) {
//         this.userGear = gear;
//     }
// }

// const car1 = new Car();
// const car2 = new Car();

// console.log(car1 instanceof Car);
// console.log(car2 instanceof Array);
// Car.nextVin = 0;
// const car1 = new Car("Tesla", "Model S");
// const car2 = new Car("Mazda", "3i");
// const car3 = new Car("Mazda", "3i");
// car1.shift('D');
// car2.shift('R');
// console.log(car1.userGear);
// console.log(car2.userGear);

class Vehicle {
    constructor() {
        this.passenger = [];
        console.log("Vehicle created");
    }

    addPassenger(p) {
        this.passenger.push(p);
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }

    deployAirbags() {
        console.log("BWOOSH!");
    }
}

// const v = new Vehicle()
// v.addPassenger("Frank");
// v.addPassenger("Judy");
// console.log(v.passenger);

// const c = new Car()
// c.addPassenger("Alice");
// c.addPassenger("Cameron");
// console.log(c.passenger);

// v.deployAirbags();
// c.deployAirbags();

// class Super {
//     constructor() {
//         this.name = "Super";
//         this.isSuper = true;
//     }
// }

// Super.prototype.sneaky = "not recommended";

// class Sub extends Super {
//     constructor() {
//         super();

//         this.name = "Sub";
//         this.isSub = true;
//     }

//     // toString() {
//     //     return `${this.name}`;
//     // }
// }

// const obj = new Sub();
// for(let p in obj) {
//     console.log(`${p} : ${obj[p]}` + (obj.hasOwnProperty(p) ? '' : '(inherited)'));
// }

// console.log(obj);

class InsurancePolicy{}
function makeInsurable(o) {
    o.addInsurancePolicy = function(p) {
        this.insurancePolicy = p;
    }

    o.getInsurancePolicy = function(){
        return this.insurancePolicy;
    }

    o.isInsured = function() {
        return !!this.insurancePolicy;
    }
}

// makeInsurable(Car)
// const car1 = new Car();
// car1.addInsurancePolicy(new InsurancePolicy());
// const car1 = new Car()
// makeInsurable(car1);
// car1.addInsurancePolicy(new InsurancePolicy());

makeInsurable(Car.prototype);
const car1 = new Car();
car1.addInsurancePolicy(new InsurancePolicy());

console.log(car1.isInsured());