/** @format */

async function getData(url) {
	try {
		let res = await fetch(url);
		let data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

function appendData(data, container) {
	data.forEach((ele) => {
		let div = document.createElement("div");
		let p = document.createElement("p");
		let img = document.createElement("img");
		let { title, image } = ele;
		p.innerText = title;
		img.src = image;
		div.append(img, p);
		container.append(div);
	});
}

export { getData, appendData };
