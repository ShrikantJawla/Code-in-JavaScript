/** @format */
let id;

async function main() {
	let query = document.getElementById("query").value;

	// what kind of data we need
	//we need to get data from omdb

	try {
		let res = await fetch(`http://www.omdbapi.com/?apikey=ee681166&s=${query}`);
		let data = await res.json();
		let d = data.Search;
		if (d !== undefined) {
			console.log(d);
			display(d);
		} else {
			document.getElementById("movies").innerHTML = null;
		}
	} catch (er) {
		console.log(er);
	}
}

function display(res) {
	let con = document.getElementById("movies");
	con.innerHTML = null;

	res.forEach((ele) => {
		let box = document.createElement("p");
		box.innerText = ele.Title;
		con.append(box);
	});
}

function debounce(func, delay) {
	if (id) {
		clearTimeout(id);
	}
	id = setTimeout(function () {
		func(); //main()
	}, delay);
}
