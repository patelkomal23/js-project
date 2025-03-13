let slideIndex = 1;
let slideItem = document.querySelectorAll(".slider-item");
let currSlideInd = document.getElementById("current-slide");
let totalSlideInd = document.getElementById("total-slide");
let dots=document.querySelectorAll(".dot");

totalSlideInd.textContent = slideItem.length;

let currSlide = (n) => {
    displaySlide((slideIndex += n));
};

let displaySlide = (n) => {
    if (n > slideItem.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slideItem.length;
    }

    slideItem.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot)=>dot.classList.remove("active"));

    slideItem[slideIndex - 1].classList.add("active");
    dots[slideIndex-1].classList.add("active");

    currSlideInd.textContent = slideIndex;
};


displaySlide(slideIndex);

setInterval(() => {
    currSlide(1);
}, 2000);