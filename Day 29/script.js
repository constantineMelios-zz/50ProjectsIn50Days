const image = document.querySelector('.image')
const times = document.getElementById('times')
let firstClickTime = 0
let loveTimes = 0

image.addEventListener('click', (event) => {
  if(firstClickTime === 0) {
    firstClickTime = event.timeStamp
  } else {
    if((event.timeStamp - firstClickTime) < 800) {
      increaseLoveTimes()
      createHeart(event.clientX - event.target.offsetLeft, event.clientY - event.target.offsetTop)
    } else {
      firstClickTime = 0
    }
  }
})

function increaseLoveTimes() {
  loveTimes++
  times.innerText = loveTimes
}

function createHeart(x, y) {
  console.log(x,y)
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')
  heart.style.left = x +'px'
  heart.style.top = y + 'px'
  image.appendChild(heart)

  clearElement(heart)
}

function clearElement(element) {
  setTimeout(() => element.remove(), 1000)
}