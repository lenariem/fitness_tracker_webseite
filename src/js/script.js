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
    

//Timer
const deadline = '2021-08-20';

    function getTimeRemaining(endtime) {
        //miliseconds left
        const timeLeft = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        //% -modulo to leave only necessary value
        const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const seconds = Math.floor((timeLeft / 1000) % 60);

        return {
            'total': timeLeft,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    //to receive format with 0
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num
        }
    }


    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        
        const timeInterval = setInterval(updateClock, 1000);

        //to fix bug with blinking timer
        updateClock();


        function updateClock() {
            const timeLeftNow = getTimeRemaining(endtime);

            days.innerHTML = getZero(timeLeftNow.days);
            hours.innerHTML = getZero(timeLeftNow.hours);
            minutes.innerHTML = getZero(timeLeftNow.minutes);
            seconds.innerHTML = getZero(timeLeftNow.seconds);

            //to stop counting after deadline
            if(timeLeftNow <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);