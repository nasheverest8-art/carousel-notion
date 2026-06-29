const slidesContainer = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const carousel = document.querySelector(".carousel");
const fullscreenBtn = document.querySelector(".fullscreen-btn");

let currentIndex = 0;

function showSlide(index) {

    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    slidesContainer.style.transform =
        `translateX(-${currentIndex * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
    showSlide(currentIndex - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });

    fullscreenBtn.addEventListener("click", () => {

    if (!document.fullscreenElement) {

        carousel.requestFullscreen();

    } else {

        document.exitFullscreen();

    }

});
});

showSlide(0);
