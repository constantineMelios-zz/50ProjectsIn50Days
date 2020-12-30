const toastsContainer = document.querySelector('.toast')
const button = document.getElementById('btn')

const MESSAGES = [
  {text: 'Success', color: 'green'},
  {text: 'Error', color: 'red'},
  {text: 'Info', color: '#00dbde'},
  {text: 'Warning', color: 'orange'},
]

button.addEventListener('click', createNotification)


function createNotification() {
  const notification = document.createElement('div')
  notification.classList.add('toast-element')
  const message = getRandomMessage()
  notification.innerText = message.text
  notification.style.color = message.color
  
  toastsContainer.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 2000)
}

function getRandomMessage() {
  const message =  MESSAGES[Math.floor(Math.random() * MESSAGES.length)]
  return {text: message.text, color: message.color}
}
