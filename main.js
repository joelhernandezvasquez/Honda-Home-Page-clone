const searchIcon = document.querySelector("#search");

const mobiiltyContainer = document.querySelector(".mobility");

// METHODS

const playVideo = () => {
	const content = document.querySelector(".content");
	const video = document.querySelector(".video-container video");

	console.log(video);

	content.style.background = "none";
	video.play();
};

const showSearchBox = () => {
	const searchBox = document.querySelector(".search-box");
	searchBox.classList.toggle("showSearchBox");
};

function spinSearchIcon() {}

// EVENTS

//mobiiltyContainer.addEventListener("mouseover", playVideo);
searchIcon.addEventListener("click", showSearchBox);
