const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target') //+ make JS count it as type: number
    const currentText = +counter.innerText
    const step = Math.ceil(target / 100)

    if(currentText < target) {
      counter.innerText = `${currentText + step}`
      setTimeout(updateCounter, 1)//divides the process in steps
    } else {
      counter.innerText = target
    }
  }
  updateCounter()
})