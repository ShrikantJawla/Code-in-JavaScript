/** @format */


/*

// Now we will mimic with tool setTieout

// we are getting Data,wait, show loading img
//after 4 seconds , data is there and  we will show done

let img = document.getElementById("img");

//mimicking getting data and returning true;
function getdata() {
	//nature of data

	return true;
	// return false;
}

// let myPromise = new Promise((resolve, reject) => {

// });

let myPromise = new Promise(function (resolve, reject) {
	let data = false; //initially we don't have data

	// we are waiting for data
	setTimeout(function () {
		data = getdata();
		if (data) {
			resolve("sweet");
		} else {
			reject("chappal");
		}
	}, 3000);
});

//If want to handle sucess value;
myPromise.then(function (res) {
	img.src = "https://i.giphy.com/media/Q81NcsY6YxK7jxnr4v/200w.webp";
	console.log(res);
});

//If want to handle reject value

myPromise.catch(function (err) {
	console.log(err);
});


// happen finally when the promise is resolved or rejected.

myPromise.finally(function () { 
    console.log('success');
});

// console.log(myPromise);
// console.log('I am happenig even now');
//1st parameter to Promise- callback function

//resolve - success
//reject - failure


*/