const textElement = document.querySelector('.text')
const speedEl = document.getElementById('speed')
const text = 'Be at war with your vices, at peace with your neighbors, and let every new year find you a better man.\n― Benjamin Franklin'

let index = 1
let speed = 200 / speedEl.value

function writeText() {
  textElement.innerText = text.slice(0, index)
  index++
  if(index > text.length) {
    index = 1
  }
  setTimeout(writeText, speed)
}

function changeSpeed() {
  speed = 300 / speedEl.value
}

speedEl.addEventListener('change', changeSpeed)

writeText()