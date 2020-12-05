const progressBar = document.querySelector('.progress__bar')
const circles = document.querySelectorAll('.circle')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let currentActive = 1

function prevStep() {
  currentActive--
  if(currentActive < 1) {
    currentActive = 1
  }
  update()
}

function nextStep() {
  currentActive++
  if(currentActive > circles.length) {
    currentActive = 1
  }
  update()
}

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const currentActives = document.querySelectorAll('.active')
  console.log(currentActives)
  progressBar.style.width = (currentActives.length - 1) / (circles.length -1) * 100 + '%'
  if(currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}

prevBtn.addEventListener('click', prevStep)
nextBtn.addEventListener('click', nextStep)