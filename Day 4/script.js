const search = document.querySelector('.search');
const button = document.querySelector('.button')
const input = document.querySelector('.input')


button.addEventListener('click', () => {
  if (search.classList.contains('active')) {
    input.value = ''
  }
  search.classList.toggle('active')
  input.focus()
})

input.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    search.classList.remove('active')
    input.value = ''
  }
})

window.addEventListener('click', (event) => {
  if(!event.target.closest('.search')) {
    search.classList.remove('active')
  }
  
})