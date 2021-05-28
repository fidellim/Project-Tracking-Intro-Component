const menuButton = document.querySelector(".nav-button");
const mobileNav = document.querySelector(".mobile-nav");
const closeIcon = "./images/icon-close.svg";
const hamburgerIcon = "./images/icon-hamburger.svg";

console.log(menuButton.src);
// event fires when the initial HTML document has been
// completely loaded and parsed, without waiting for stylesheets,
// images, and subframes to finish loading
window.addEventListener("DOMContentLoaded", () => {
	menuButton.addEventListener("click", () => {
		//regex since the source includes port too
		if (menuButton.src.match(closeIcon)) {
			menuButton.src = "./images/icon-hamburger.svg";
			console.log("hamburger");
		} else {
			menuButton.src = "./images/icon-close.svg";
			console.log("close");
		}

		mobileNav.style.visibility =
			getComputedStyle(mobileNav).getPropertyValue("visibility") === "hidden"
				? "visible"
				: "hidden";
		console.log(menuButton.src);
	});
});
