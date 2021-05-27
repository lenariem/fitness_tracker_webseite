//Slider 
let offset = 0;
let slideIndex = 1;

const slides = document.querySelectorAll('.offer__slide'),
    slider = document.querySelector('.offer__slider'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    width = window.getComputedStyle(slidesWrapper).width,
    slidesField = document.querySelector('.offer__slider-inner');


showSlides(slideIndex);

if(slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

function showSlides(n) {
    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach(item => item.style.display = 'none');

    slides[slideIndex - 1].style.display = 'block';

    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1)
})

next.addEventListener('click', () => {
    plusSlides(1)
})


/* document.addEventListener('keydown', (e) => {
    if (e.code == "37") {
        plusSlides(-1);
    } else if (e.code == 39) {
        plusSlides(1);
    }
});
 */
    