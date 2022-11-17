/** @format */

//------------------------------------------------------------

//Stack:-->

// class Stack {
// 	constructor() {
// 		this.length = 0;
// 		this.stack_content = []; //stack is an array internally.
// 	}

// 	myPush(...val) {
// 		val.forEach((ele) => {
// 			this.stack_content.push(ele);
// 			this.length++;
// 		});
// 		return this.stack_content;
// 	}

// 	myPop() {
// 		let ele = this.stack_content.pop();
// 		this.length--;
// 		return ele;
// 	}
// }

// let st1 = new Stack();
// // console.log(st1);

// st1.myPush(34, 34, 23, 56);

// st1.myPop();

// console.log(st1);

//--------------------------------------------------------------------------------------------------------------

//Custom array using .prototype:--->

// function myArray(...val) {
// 	// this.length = 0;
// 	Object.defineProperty(this, "length", {
// 		value: 0,
// 		enumerable: false,
// 		writable: true,
// 	});
// 	val.forEach((ele) => {
// 		this[this.length] = ele;
// 		this.length++;
// 	});
// }

// myArray.prototype.mypush = function (...val) {
// 	val.forEach((ele) => {
// 		this[this.length] = ele;
// 		this.length++;
// 	});
// 	return this.length;
// };

// myArray.prototype.mypop = function () {
// 	let el = this[this.length - 1];
// 	delete this[this.length - 1];
// 	this.length--;
// 	return el;
// };

// let arr = new myArray(1, 4, 5, 6);
// console.log(arr);

// arr.mypush(3, 4, 5, 7);
// arr.mypop();
// arr.mypop();
// arr.mypop();

//queue functions-----------------------------------------------------------------------

// function queue() {
// 	this.length = 0;
// 	this.queue = [];
// }

// queue.prototype.enQueue = function (...args) {
// 	args.forEach((ele) => {
// 		this.queue.push(ele);
// 		this.length++;
// 	});
// };

// queue.prototype.deQueue = function () {
// 	let el = this.queue.shift();
// 	this.length--;
// 	return el;
// };

// queue.prototype.deQueueThree = function () {
// 	for (let i = 0; i < 3; i++) {
// 		this.queue.shift();
// 		this.length--;
// 	}
// };

// let q1 = new queue();

// q1.enQueue(3, 4, 5, 6);

// q1.deQueue();
// q1.deQueueThree();

// console.log(q1);

///--------------------------------------------------------------------------------------------------------

// ES6 class is a cunstructure function :--->

let users = [];
class User {
	#password;
	constructor(n) {
		this.organisation = "Masai School";
	}

	#validateUsername(username) {
		// if username include symbol# we will not allow him
		let val = username.includes("#") ? false : true;
		return val;
	}

	#validatePassword(password) {
		let val = password.includes("123") ? false : true;
		return val;
	}
	login(username, password) {
		if (username === this.username && password === this.#password) {
			console.log("Login Successful");
		} else {
			console.log("Login Failed");
		}
	}
	signUp(username, password) {
		//we need to validate user data.
		let isValidated = false;
		//to validate we need to check(username, password)
		isValidated =
			this.#validateUsername(username) && this.#validatePassword(password);

		if (isValidated) {
			this.username = username;
			this.#password = password;
			console.log("success");
			users.push(this);
		} else {
			console.log("error");
		}
	}
}

let u2 = new User("Anmol");

u2.signUp("Anmol", "12Anmol");
// console.log(u1, u2);

// // console.log(u1.password); //undefined

// u2.login("Anmol", "12Anmol");

// I want to inherit properties from User class

class Student extends User {
	constructor() {
		super();
		this.numOfAssignments = 0;
	}
	submitAssignment() {
		this.numOfAssignments++;
		console.log("%cAccepted", "color:green");
	}
}

class Admin extends User {
	constructor() {
		super();
	}
	removeUser(username) {
		users = users.filter((ele) => {
			return ele.username !== username;
		});
	}
}

let s1 = new Student();

s1.signUp("Karan", "12karan");
// s1.login("Shrikant", "12anmol");

s1.submitAssignment();
s1.submitAssignment();
console.log(s1.numOfAssignments);

let a1 = new Admin();

console.log(users);
a1.removeUser("Anmol");

console.log(users);
