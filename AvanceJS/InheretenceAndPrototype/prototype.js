/** @format */



/*
What is inheritance ?: -
inherit other's properties

In JS inheritance properties applies via objects

we can use JS inheritance in two ways: -
1)Function constructor
2) Object.create() method

*/

// Inheritance using Object.create() method:-

// let cat = {
//     type: 'cat',
//     legs: 4,
//     tail:true
// }

// let tiger = {
//     speed:'60k/h',
// }

// How to create new object using parent obj:-

// let tiger = Object.create(cat);

// create() stores the parent properties in [[prototype]]-

// tiger.speed = 70;

// console.log("tiger: ", tiger);

// let lion = Object.create(cat);
// lion.speed = 60;
// console.log('lion: ', lion);

// PRACTICAL USAGE:-

//Creating obj with prototype using form:-

// let web16Batch = {
// 	batch: "web 20",
// 	track: "JS 201",
// 	Instructor: "Ankush", //if I change it to 'Sorya' it will reflect in all the objects.
// 	Unit: "3"            //if I change it to '4' it will reflect in all the objects.
// };

// take the values from form and keep making protype from same object again again:

// let students = [];
// function createStudents() {
// 	let s1 = Object.create(web16Batch);
// 	s1.name = form.name.value;
// 	s1.phone = form.name.value;
// 	s1.address = form.name.value;
// 	students.push(s1);
// }

// so now if I change value of Instructor name in parent object change will reflect in all the prototype objects because
// they were crated using head Object(web16Batch)

// ----------------------------------------------------------------------------------------------------

// creating obj using Custructor fuction and make protype with that:-

// function nikeProduct(n,p) {
//     this.name = n;
//     this.price = p;

//     // nikeProduct.prototype.sale = function () {
// 	// 		console.log("20% off");
// 	// 	};  We can write this inside object but we should write using prototype; I have written this fuction outside in line 81;
// }

// nikeProduct.prototype.brand = 'nike';   //I need to change name here and that will reflect in all the objects protypes made with nikeProduct Object

// nikeProduct.prototype.sale = function () {
//     console.log('20% off');
// }     //I need to change name here and that will reflect in all the objects protypes made with nikeProduct Object

// let n1 = new nikeProduct('Nike', 999);

// let n2 = new nikeProduct('Bata', 569);

// let n3 = new nikeProduct('Flite', 170);
// console.log('n1: ', n1);

// console.log('n2', n2);

// console.log('n3',n3);

// -----------------------------------------------------------------------------------------------------


// Everthing in JS is Object
//Using [.]notation means we are accessing properties of object

// ex: - 
// let arr = [1, 3, 4, 5, 6, 5];
// arr.push(4);  //Using [.]notation
// // key is index in arrays


// let str = 'abcddef';

// // In js= str is written in this way internally in JavaScript:
// let str2 = new String('raju');
// console.log('str2: ', str2);


// str.charAt(0); //USing [.] notation So str is also object bcz methods like charAt like method
// // used on str Object

// Let's try with console
// console.log(console);


// --------------------------------------------------------------------------------------------------

// let arr = [1, 3, 4, 5, 5];
// // Create Custom Array:-

// let arr2 = new Array(1, 2, 3);

// let hobbies=['football', 'codding']
// // I need to create a cunstructor function:-



//-------------------------------------------------------------------------------------------------

// So Array is a cunstructor function because we use bracket after it and new before it

// Array.prototype.namaste = function() {
//     console.log('hello from web 20')
// }

// console.log(arr);
// console.log(hobbies);

// Array.prototype.lelo = function (val) {
//     //where
//     // this.push(val);

//     // we need index and value
//     let index = this.length;
//     this[index] = val;
// };

// let arr3 = [3, 3, 4, 5];
// arr3.lelo(90);
// console.log('arr3: ', arr3);

