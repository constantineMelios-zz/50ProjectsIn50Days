const content = document.querySelectorAll('.content')
const wraps = document.querySelectorAll('.wrap')

function observed(payload) {
  payload.forEach(entry => {
    if(entry.intersectionRatio !== 0) {
      entry.target.classList.add('scrolled')
    } else if (entry.intersectionRatio === 0) {
      entry.target.classList.remove('scrolled')
    }
  })
  wraps.forEach(wrap => {
    if(wrap.classList.contains('scrolled')){
      wrap.children[0].classList.add('show')
    } else {
      wrap.children[0].classList.remove('show')
    }
  })
}

const observer = new IntersectionObserver(observed, {threshold: [0, 0.9]})

wraps.forEach(box => observer.observe(box))