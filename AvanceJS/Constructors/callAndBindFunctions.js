/** @format */

// let name = "Shrikant";
// let price = 34;

// console.log(`Hello ${name} how are ${price}`);

// call , apply, bind -function / methods

const kitchen = {
	name: "kitchen",
	purpose: "cooking",

	cookFood(order) {
		console.log(`Serving ${order} in ${this.name} `);
	}
};

const bedroom = {
    name: "bedroom",
    purpose: 'rest',
};

// kitchen.cookFood('samosa');

//Now I want to cook food method in bedroom:-

// kitchen.cookFood.call(bedroom, 'maggie');

//Now i want cookFood method in living room:---

const livingRoom={
    name:'lr',
    purpose:'hangout'
}

// kitchen.cookFood.call(livingRoom, 'maggie');

// apply function

// kitchen.cookFood.apply(livingRoom, ['maggie']);

// Bind fuction:--
// bind function is used to bind that function in new function and you can use it anytime later:---

let newFunt = kitchen.cookFood.bind(livingRoom, 'maggie');

newFunt();