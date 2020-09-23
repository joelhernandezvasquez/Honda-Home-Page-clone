const searchIcon = document.querySelector("#search");
const hamburgerIcon = document.querySelector(".hamburger-container");
const menuBar = document.querySelector(".menu-bar");
const body = document.querySelector("body");
const searchBox = document.querySelector(".search-box");


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
	
	changeSearchIcon();

	const input = searchBox.querySelector("input");
	searchBox.classList.toggle("showSearchBox");
	input.focus();

	if (menuBar.classList.contains("open")) {
		menuBar.classList.toggle("open");
		movetoLeft();
	}
};

function changeSearchIcon()
{
  const search = document.querySelector(".search-icon");
  const close = document.querySelector(".close-icon-search");
  
   search.classList.toggle("hidden");
   close.classList.toggle("show");
}

const openMenuBar = () => {
	changeHamburgerIcon();
	movetoLeft();
	//setTimeout(activateOverlay,50);
	menuBar.classList.toggle("open");

	if (searchBox.classList.contains("showSearchBox")) {
		searchBox.classList.toggle("showSearchBox");
	}
};

function changeHamburgerIcon() {
	const barIcon = document.querySelector(".bar-icon");
	const closeicon = document.querySelector(".close-icon");

	barIcon.classList.toggle("hidden");
	closeicon.classList.toggle("show");
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
	let currentBar = document.querySelector(".rotate");
	const bar = e.target.firstElementChild.firstElementChild;
	

	if (isAccordionHeader) {
		if (currentActiveAccordionBody === null) {
			
			
		   currentBar = bar;
		   currentBar.classList.add("rotate");
			currentActiveAccordionBody = accordionBodyActive;
			currentActiveAccordionBody.classList.add("activeAccordion");

			return;
		}

		if (currentActiveAccordionBody === accordionBodyActive) {
			
			
			currentBar.classList.toggle("rotate");
			currentActiveAccordionBody.classList.remove("activeAccordion");
			return;
		}

		
	   currentBar.classList.remove("rotate");
	   bar.classList.add("rotate");
		currentActiveAccordionBody.classList.remove("activeAccordion");
		accordionBodyActive.classList.add("activeAccordion");
		
	}
};

function setMenuBar()
{
	const bar = document.querySelector("#default-bar");
	bar.classList.add("rotate");
}

// EVENTS

//mobiiltyContainer.addEventListener("mouseover", playVideo);
window.addEventListener("load",setMenuBar);
searchIcon.addEventListener("click", showSearchBox);
hamburgerIcon.addEventListener("click", openMenuBar);
menuBar.addEventListener("click", openAccordion);
