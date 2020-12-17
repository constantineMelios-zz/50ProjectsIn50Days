const button = document.querySelector('.nav__btn')
const nav = document.querySelector('nav')

button.addEventListener('click', () => {
  nav.classList.toggle('active')
})