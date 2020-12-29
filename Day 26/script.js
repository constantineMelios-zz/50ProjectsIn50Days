const container = document.querySelector('.slider')
const slides = document.querySelectorAll('.slider-side')
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
window.addEventListener('resize', () => changeSlide('resize'))

function changeSlide(change) {
  const windowWidth = window.innerWidth
  const sliderHeight = container.clientHeight

  if(change === 'resize') {
    slides.forEach(slide => slide.style.transition = 'none')
  } else if(change === 'up') {
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

  if(windowWidth > 1200) {
    rightSide.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    leftSide.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
  } else {
    rightSide.style.transform = `translateX(-${activeSlideIndex * windowWidth}px)`
    leftSide.style.transform = `translateX(${activeSlideIndex * windowWidth}px)`
  }
  setTimeout(() => slides.forEach(slide => slide.style.transition = 'transform 0.25s ease-in-out'), 1)
}

