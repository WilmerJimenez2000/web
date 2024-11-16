let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    const sliderContainer = document.querySelector(".slider-container");
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(step) {
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 2 seconds
setInterval(() => {
    moveSlide(1);
}, 2000); // Cambiar cada 2 segundos

