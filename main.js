const searchIcon = document.querySelector("#search");
const hamburgerIcon = document.querySelector(".hamburger-container");
const menuBar = document.querySelector(".menu-bar");
const body = document.querySelector("body");
const searchBox = document.querySelector(".search-box");
const barIcon = document.querySelector(".bar-icon");
const closeicon = document.querySelector(".close-icon");

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
	const input = searchBox.querySelector("input");
	searchBox.classList.toggle("showSearchBox");
	input.focus();

	if (menuBar.classList.contains("open")) {
		menuBar.classList.toggle("open");
		movetoLeft();
	}
};

const openMenuBar = () => {
	//changeHamburgerIcon();
	movetoLeft();
	//setTimeout(activateOverlay,50);
	menuBar.classList.toggle("open");
	barIcon.classList.toggle("hidden");
	closeicon.classList.toggle("show");

	if (searchBox.classList.contains("showSearchBox")) {
		searchBox.classList.toggle("showSearchBox");
	}
};

function changeHamburgerIcon() {
	const hamburgerIcon = document.querySelector(".hamburger-container i");
	const closeicon = document.querySelector(".close-icon");

	hamburgerIcon.style.visibility = "hidden";
	closeicon.style.display = "block";
}

function changeCloseIcon() {
	const hamburgerIcon = document.querySelector(".hamburger-container i");
	const closeicon = document.querySelector("#close-icon");

	hamburgerIcon.style.visibility = "visible";
	closeicon.style.display = "none";
}

function movetoLeft() {
	const bannerSection = document.querySelector(".banner");
	const airbagSection = document.querySelector(".airbag-alert");
	const gallerySection = document.querySelector(".gallery");

	const arraySection = [bannerSection, airbagSection, gallerySection];

	arraySection.forEach((section) => {
		section.classList.toggle("move");
	});

	hideScrollBar();
}
/* function activateOverlay()
{
	const overlayCover = document.querySelector(".overlay-cover");
	overlayCover.classList.toggle("active");
} */

function hideScrollBar() {
	body.classList.toggle("hideScrollBar");
}

const openAccordion = (e) => {
	const isAccordionHeader = e.target.classList.contains("accordion-header");
	let currentActiveAccordionBody = document.querySelector(".activeAccordion");
	const accordionBodyActive = e.target.nextElementSibling;

	if (isAccordionHeader) {
		if (currentActiveAccordionBody === null) {
			currentActiveAccordionBody = accordionBodyActive;
			currentActiveAccordionBody.classList.add("activeAccordion");
			return;
		}

		if (currentActiveAccordionBody === accordionBodyActive) {
			currentActiveAccordionBody.classList.remove("activeAccordion");
			return;
		}

		currentActiveAccordionBody.classList.remove("activeAccordion");
		accordionBodyActive.classList.add("activeAccordion");
	}
};

function spinSearchIcon() {}

// EVENTS

//mobiiltyContainer.addEventListener("mouseover", playVideo);
searchIcon.addEventListener("click", showSearchBox);
hamburgerIcon.addEventListener("click", openMenuBar);
menuBar.addEventListener("click", openAccordion);
