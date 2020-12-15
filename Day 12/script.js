const buttons = document.querySelectorAll('.faq__toggle')


buttons.forEach(btn => btn.addEventListener('click', (event) => {
  btn.parentNode.classList.toggle('active')
}))