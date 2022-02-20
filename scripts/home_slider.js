//get all slides, left and right arrow
const sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

//initilalizing
let current = 0;

// by default all slides will be having display none
const reset = () => {
for (let i = 0; i < sliderImages.length; i++) {
	sliderImages[i].style.display = "none";
}
}

// set initial slide, default slide
const startSlide = () => {
reset();
sliderImages[0].style.display = "block";
}

// slideLeft function, goes to previous slide in list
const slideLeft = () => {
reset();
sliderImages[current - 1].style.display = "block";
current--;
}

//slideRight function, goes to next slide in list
const slideRight = () => {
reset();
sliderImages[current + 1].style.display = "block";
current++;
}

// left arrow click
arrowLeft.addEventListener("click",  () => {
if (current === 0) {
	current = sliderImages.length;
}
slideLeft();
});

// right arrow click
arrowRight.addEventListener("click",  ()  => {
if (current === sliderImages.length - 1) {
	current = -1;
}
slideRight();
});

startSlide();
