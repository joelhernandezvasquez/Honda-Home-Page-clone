const mobiiltyContainer = document.querySelector(".mobility");

const playVideo = () => {
	const content = document.querySelector(".content");
	const video = document.querySelector(".video-container video");

	console.log(video);

	content.style.background = "none";
	video.play();
};

//mobiiltyContainer.addEventListener("mouseover", playVideo);
