const loadText = document.querySelector('.loading-text')
const background = document.querySelector('.background')

function scale (num, inMin, inMax, outMin, outMax) {
  return (num - inMin) * (outMax - outMin) / (inMax -inMin) + outMin
} //maps a range of numbers to another range

let loading = 0

function blurring() {
  loading++
  if(loading > 99) {
    clearInterval(interval)
  }
  
  loadText.innerText = `${loading}%`
  loadText.style.opacity = scale(loading, 0, 100, 1, 0)
  background.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`
  console.log(loading)
}

let interval = setInterval(blurring, 10)