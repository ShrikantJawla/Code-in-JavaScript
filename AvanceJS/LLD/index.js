/** @format */

// class Vehicle {
// 	constructor(type, regNumber) {
// 		this.type = type;
// 		this.regNumber = regNumber;
// 	}
// }

// // Inherit properties from Vehicle:-

// class Car extends Vehicle {
// 	constructor(type, regNumber) {
// 		super(type, regNumber);
// 	}
// }

// class Truck extends Vehicle {
// 	constructor(type, regNumber) {
// 		super(type, regNumber);
// 	}
// }

// let c1 = new Car("Maruti", "s201");
// // console.log(c1);

// let t1 = new Truck("Tsp", "s201");
// // console.log(t1);

// // slot-->floor-->parking lot

// class Slot {
// 	constructor(number, type) {
// 		this.number = number;
// 		this.type = type;
// 		this._isBooked = false; //we need to change this value based on booking
// 	}

// 	get _isBooked() {
// 		return `Booked situation: ${this.isBooked}`;
// 	}
// 	//which is the value we need to set?--> isBooked.
// 	set _isBooked(bool) {
// 		this.isBooked = bool;
// 	}
// }

// let s1 = new Slot(1, "Bike");

// s1._isBooked = true;

// // console.log(s1);
// // {
// //     "number": 1,
// //     "type": "Bike",
// //     "isBooked": true
// // }

// console.log(s1._isBooked); //true

// //sir yesterday when we used # on password and push obj in array then password is not pushed in array then how can we check pass in login validation. plz tell sir...

// //Each parking floor has 3 slots , we need to create these 3 slots and pushed it to PF:->
// class ParkingFloor {
// 	constructor(floorNumber, maxSlots) {
// 		this.floorNumber = floorNumber;
// 		this.parkingSpots = [];
// 		for (let i = 0; i < maxSlots; i++) {
// 			if (i === 0) {
// 				this.parkingSpots.push(new Slot(i, "Truck"));
// 			} else if (i === 1) {
// 				this.parkingSpots.push(new Slot(i, "Bike"));
// 			} else {
// 				this.parkingSpots.push(new Slot(i, "Car"));
// 			}
// 		}
// 	}
// }

// let pf = new ParkingFloor(1, 3);
// // console.log(pf);
// /*
// {
//     "floorNumber": 1,
//     "parkingSpots": [
//         {
//             "number": 0,
//             "type": "Truck",
//             "isBooked": false
//         },
//         {
//             "number": 1,
//             "type": "Bike",
//             "isBooked": false
//         },
//         {
//             "number": 2,
//             "type": "Car",
//             "isBooked": false
//         }
//     ]
// }
// */

// class ParkingLot {
// 	constructor(numOfFloors) {
// 		this.numOfFloors = numOfFloors;
// 		this.floors = [];
// 		for (let i = 0; i < numOfFloors; i++) {
// 			this.floors.push(new ParkingFloor(i, numOfFloors));
// 		}
// 	}

// 	//We need to first check if slots is empty/(isBooked is empty);

// 	findSlot(type) {
// 		//how many slots we have? -9
// 		//each floor -3 slots.
// 		// do I need to check each floor?
// 		// Do I need to check each slot of that floor?
// 	}
// }

// let Pl = new ParkingLot(3);
// // console.log(Pl);
// /*

// {
//     "numOfFloors": 3,
//     "floors": [
//         {
//             "floorNumber": 0,
//             "parkingSpots": [
//                 {
//                     "number": 0,
//                     "type": "Truck",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 1,
//                     "type": "Bike",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 2,
//                     "type": "Car",
//                     "isBooked": false
//                 }
//             ]
//         },
//         {
//             "floorNumber": 1,
//             "parkingSpots": [
//                 {
//                     "number": 0,
//                     "type": "Truck",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 1,
//                     "type": "Bike",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 2,
//                     "type": "Car",
//                     "isBooked": false
//                 }
//             ]
//         },
//         {
//             "floorNumber": 2,
//             "parkingSpots": [
//                 {
//                     "number": 0,
//                     "type": "Truck",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 1,
//                     "type": "Bike",
//                     "isBooked": false
//                 },
//                 {
//                     "number": 2,
//                     "type": "Car",
//                     "isBooked": false
//                 }
//             ]
//         }
//     ]
// }

// */

//First I will create a vehicle:--with its type and regNumber:----->

class Vehicle {
	constructor(type, regNumber) {
		this.type = type;
		this.regNumber = regNumber;
	}
}

let c1 = new Vehicle("Car", "Mh300");
// console.log(c1);
/*
{
    "type": "Car",
    "regNumber": "Mh300"
}

*/
//Inherit properties from Vehicle:-->

class Car extends Vehicle {
	constructor(type, regNumber) {
		super(type, regNumber);
	}
}

class Truck extends Vehicle {
	constructor(type, regNumber) {
		super(type, regNumber);
	}
}
class Bike extends Vehicle {
	constructor(type, regNumber) {
		super(type, regNumber);
	}
}
class Van extends Vehicle {
	constructor(type, regNumber) {
		super(type, regNumber);
	}
}

let b1 = new Bike("Bike", "hj5600");
// console.log(b1);
/*
{
    "type": "Bike",
    "regNumber": "hj5600"
}
*/

class Slot {
	#isBooked;
	constructor(num, type) {
		this.number = num;
		this.type = type;
		this.#isBooked = false;
	}
	get _isBooked() {
		//Get is a property and not a method.
		return this.#isBooked;
	}
	set _isBooked(bool) {
		this.#isBooked = bool;
	}
}

let sl1 = new Slot("Bike", 2);
sl1._isBooked = true;

// console.log(sl1.isBooked);//Undefined bcz of # we have made it private;

// console.log(sl1._isBooked); //true;

//Each ParkingFloor has 3 slots , we need to create these 3 slots and push it in ParkingFloor.
class ParkingFloor {
	constructor(floorNumber, maxSlots) {
		this.floorNumber = floorNumber;
		this.parkingSpots = [];
		for (let i = 0; i < maxSlots; i++) {
			if (i === 0) {
				this.parkingSpots.push(new Slot(1, "Truck"));
			} else if (i === 1) {
				this.parkingSpots.push(new Slot(2, "Car"));
			} else if (i === 2) {
				this.parkingSpots.push(new Slot(3, "Van"));
			} else if (i === 3) {
				this.parkingSpots.push(new Slot(4, "Bike"));
			}
		}
	}
}

let pF = new ParkingFloor(1, 4);
// console.log(pF);
/*
{
    "floorNumber": 1,
    "parkingSpots": [
        {
            "number": 1,
            "type": "Truck"
        },
        {
            "number": 2,
            "type": "Car"
        },
        {
            "number": 3,
            "type": "Van"
        },
        {
            "number": 4,
            "type": "Bike"
        }
    ]
}

*/

class ParkingLot {
	constructor(numOfParkingFloors) {
		this.numOfParkingFloors = numOfParkingFloors;
		this.parkingFloors = [];
		for (let i = 0; i < numOfParkingFloors; i++) {
			this.parkingFloors.push(new ParkingFloor(i, 4));
		}
	}

	//We need to check if slot is empty or _isBooked=false;
	findSlot(type) {
		//How many slots we have?
		//Each floor -3 slots
		//Do I need to check each floor?
		//Do I need to check each slots of that floors;
		for (let i = 0; i < this.numOfParkingFloors; i++) {
			for (let slot of this.parkingFloors[i].parkingSpots) {
				if (slot.type === type && !slot._isBooked) {
					return { floorNumber: i, found_slot: slot };
				}
			}
		}
	}

	parkVehicle(vehicle) {
		let slot = this.findSlot(vehicle.type);
		// console.log(slot);
		slot.found_slot._isBooked = true;
	}
}

let c4 = new Car("Car", "Mh300");
let pl = new ParkingLot(2);
pl.parkVehicle(c4);
console.log(pl);
// console.log(pl);
/*
{
    "numOfParkingFloors": 2,
    "parkingFloors": [
        {
            "floorNumber": 0,
            "parkingSpots": [
                {
                    "number": 1,
                    "type": "Truck"
                    "#isBooked": false; //It is hidden because of #;
                },
                {
                    "number": 2,
                    "type": "Car"
                },
                {
                    "number": 3,
                    "type": "Van"
                },
                {
                    "number": 4,
                    "type": "Bike"
                }
            ]
        },
        {
            "floorNumber": 1,
            "parkingSpots": [
                {
                    "number": 1,
                    "type": "Truck"
                },
                {
                    "number": 2,
                    "type": "Car"
                },
                {
                    "number": 3,
                    "type": "Van"
                },
                {
                    "number": 4,
                    "type": "Bike"
                }
            ]
        }
    ]
}

*/
