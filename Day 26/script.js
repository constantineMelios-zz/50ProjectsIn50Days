const slider = document.querySelector('.slider')
const rightSide = document.querySelector('.slider-side--right')
const leftSide = document.querySelector('.slider-side--left')
const slidesContent = document.querySelectorAll('.slider-content')
const slidesImages = document.querySelectorAll('.slider-image')
const upBtn = document.querySelector('.slider-button--up')
const downBtn = document.querySelector('.slider-button--down')
const slidesLength = slidesImages.length

slidesContent.forEach(slide => slide.style.backgroundColor = slide.dataset.background)

slidesImages.forEach(image => image.style.backgroundImage = `url(${image.dataset.url})` )

let activeSlideIndex = 0

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))


function changeSlide(direction) {
  const sliderHeight = slider.clientHeight
  if(direction === 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0
    }
  } else {
    activeSlideIndex--
    if(activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1
    }
  }

  rightSide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
  leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}