const numbers = document.querySelectorAll('.counter-numbers span')
const counter = document.querySelector('.counter')
const after = document.querySelector('.counter-after')
const replay = document.getElementById('replay')

runAnimation()

function runAnimation() {
  numbers.forEach((number, index) => {
    const nextToLast = numbers.length - 1

    number.addEventListener('animationend',(event) => {
      if(event.animationName === 'rotateIn' && index !== nextToLast) {
        number.classList.remove('counter-current')
        number.classList.add('counter-previous')
      } else if(event.animationName === 'rotateOut' && number.nextElementSibling) {
        number.nextElementSibling.classList.add('counter-current')
      } else {
        counter.classList.add('counter--hide')
        after.classList.add('counter-after--show')
      }
    })
  })
}

function restart() {
  numbers.forEach(number => {
    number.classList.remove('counter-current')
    number.classList.remove('counter-previous')
  })
  numbers[0].classList.add('counter-current')
  counter.classList.remove('counter--hide')
  after.classList.remove('counter-after--show')
  runAnimation()
}

replay.addEventListener('click', restart)