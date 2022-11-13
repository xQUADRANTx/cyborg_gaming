const gridCarousel = document.querySelector('.grid-carousel');
const slide = document.querySelector('.slide')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('click', () => {
    let slideWidth = slide.clientWidth;
    gridCarousel.scrollLeft -= slideWidth;
})

right.addEventListener('click', () => {
    let slideWidth = slide.clientWidth;
    gridCarousel.scrollLeft += slideWidth;
    if (true) {
        Autoplay.reset();
    }
})

let Autoplay = {
    timerId: null,
    interval: 4000,

    start: function () {
        this.timerId = setInterval(function () {
            let slideWidth = slide.clientWidth;
            gridCarousel.scrollLeft += slideWidth;
        }, this.interval)
    }
    ,
    reset: function () {
        clearInterval(this.timerId)
        this.start();
    }
}

let autoplay = true;
let autoplayInterval = 1000;
let autoplayTimer = null;
if (autoplay) {
    Autoplay.start()
}