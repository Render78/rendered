let slideIndex = 0;
const slide = document.querySelector('.carousel-slide');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveSlide(direction) {
    slideIndex += direction;

    if (slideIndex < 0) {
        slideIndex = totalItems - 1;
    } else if (slideIndex >= totalItems) {
        slideIndex = 0;
    }

    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}