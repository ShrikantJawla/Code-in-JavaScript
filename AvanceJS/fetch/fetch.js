/** @format */

//fetch is going to take time to complete
//it should not block other code
//fetch needs to be a promise
//this is async call

//.then & .catch & .finally
//async await

//protoype is a tool
//Inheritence is a concept
//Inheritence is implemented using protoype
//API is  used using a tool called fetch();

// let x = fetch();
// console.log(x);//tells it is a promise

// fetch("https://fakestoreapi.com/products/category/jewelery")
// 	.then(function (res) {
// 		return res.json(); //collecting stream; it is also a promise because it is going to take time to complete
// 	})
// 	.then(function (res) {
// 		console.log(res);
// 		let img = document.createElement("img");
// 		img.src = res[3].image;
// 		document.getElementById("add").append(img);
// 	})
// 	.catch(function (err) {
// 		console.log(err);
//     });

//convert it to into async await

async function getData() {
	try {
		let res = await fetch(
			"https://fakestoreapi.com/products/category/jewelery"
		);

		//convert the stream into a actual data
		let data = await res.json();
		console.log(data);
	} catch (err) {
		console.log("error");
	}
}

getData();
