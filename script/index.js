const sliderLine = document.querySelector('.carousel__slider-line');
const prev = document.querySelector('.carousel__prev');
const next = document.querySelector('.carousel__next');
const img = document.querySelectorAll('.carousel__slider-line-img')

let position = 0;

const nextSlider = () => {
    if (position < (img.length - 1) * 595) {
        position += 595
    } else {
        position = 0;
    }
    sliderLine.style.left = -position + 'px'
}

const prevSlider = () => {
    if (position > 0) {
        position -= 595
    } else {
        position = (img.length - 1) * 595;
    }
    sliderLine.style.left = -position + 'px'
}

next.addEventListener('click', nextSlider)
prev.addEventListener('click', prevSlider)


setInterval(() => {
    nextSlider()
}, 3000)