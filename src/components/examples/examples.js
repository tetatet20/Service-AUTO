import { tns } from "tiny-slider"

const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const slider = tns({
    container: '.slider-auto',
    items: 5,
    slideBy: 'page',
    autoplay: false,
    gutter: 20,
    fixedWidth: 400,
    center: true,
    controls: false,
    navPosition: 'bottom',
    autoplayButtonOutput: false,
    autoplayButton: false,
    autoplayHoverPause: true,
    speed: 1000,
    autoplayTimeout: 7000
  });

leftButton.addEventListener('click', function leftSlide() {
    slider.goTo("prev")
})

rightButton.addEventListener('click', function rightSlide() {
    slider.goTo("next")
})

console.log(leftButton);

