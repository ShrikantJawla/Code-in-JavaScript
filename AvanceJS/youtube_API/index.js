/** @format */

const api = "AIzaSyBLaw-CE0wJRMzzP_pxj3rmjhOgtNlK2yw";
const videoId = `https://youtube.googleapis.com/youtube/v3/videos?id=5aB_J0icrmc&key=${api}`;

let getApiData = async () => {
	let searchedData = document.querySelector("#query").value;
	try {
		let res = await fetch(
			`https://youtube.googleapis.com/youtube/v3/search?q=${searchedData}&key=${api}&part=snippet&maxResults=10`
		);
		let data = await res.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};

let getData = async () => {
	let res = await getApiData();
	// console.log(res);
	let { items } = res;
	let arr_of_videos = items;
	console.log(arr_of_videos);
	appendVideos(arr_of_videos);
};

let appendVideos = (arr) => {
	let box = document.querySelector(".searchResult");
	box.innerHTML = null;
	arr.forEach(({ snippet, snippet: { title }, id: { videoId } }) => {
		console.log(snippet);
		let div = document.createElement("div");
		let iframe = document.createElement("iframe");
		iframe.src = `https://www.youtube.com/embed/${videoId}`;
		iframe.width = "100%";
		iframe.height = "80%";
		iframe.allow = "fullscreen";
		let p1 = document.createElement("p");
		p1.innerText = title;
		div.append(iframe, p1);
		box.append(div);
	});
};
