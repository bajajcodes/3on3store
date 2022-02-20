// get header navbar nodes or elements
const hamburger = document.getElementById("hamburger");
const navbarNav = document.getElementById("navbar-nav");

// toggle navbar display on hamburger icon click
hamburger.addEventListener("click", () => {
    navbarNav.classList.toggle("show");
});