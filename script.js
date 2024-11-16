let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slider = document.querySelector(".slider");
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
