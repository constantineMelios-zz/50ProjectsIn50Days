const resultElement = document.getElementById('result')
const lengthElement = document.getElementById('length')
const lowercaseElement = document.getElementById('lowercase')
const uppercaseElement = document.getElementById('uppercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const copyButton = document.getElementById('copy-btn')
const generateButton = document.getElementById('generate-btn')
const toast = document.getElementById('toast')

const randomFunctions = {
  lower: getRandomLowercaseLetter,
  upper: getRandomUppercaseLetter,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

copyButton.addEventListener('click', () => {
  const textarea = document.createElement('textarea')
  const password = resultElement.innerText
  if(!password) {
    return
  }

  textarea.value = password
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  textarea.remove()
  createNotification('Password copied to clipboard!')
})

generateButton.addEventListener('click', () => {
  const length = +lengthElement.value
  const hasLower = lowercaseElement.checked
  const hasUpper = uppercaseElement.checked
  const hasNumber = numbersElement.checked
  const hasSymbol = symbols.checked
  resultElement.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const types = [{lower}, {upper}, {number}, {symbol}].filter(type => Object.values(type)[0]).map(type => Object.keys(type)[0])
  
  if (types.length === 0) {
    return ''
  }

  for(let i =0; i < length; i+=types.length) {
    types.forEach(type => {
      generatedPassword += randomFunctions[type]()
    })
  }
  
  const finalPassword = randomizeString(generatedPassword).slice(0,length)
  return finalPassword
}

function randomizeString(string) {
  return string.split('').sort(function(){return 0.5-Math.random()}).join('')
}

function getRandomCharacter(startingCharacter, range) {
  return String.fromCharCode(Math.floor(Math.random() * range)+ startingCharacter)
}

function getRandomLowercaseLetter() {
  return getRandomCharacter(97,26) //97 --> 'a'
}

function getRandomUppercaseLetter() {
  return getRandomCharacter(65,26) //65 --> 'A'
}

function getRandomNumber() {
  return getRandomCharacter(48,10) //48 --> '0'
}

function getRandomSymbol() {
  return getRandomCharacter(33, 15)
}

function createNotification(message) {
  const notification = document.createElement('div')
  notification.classList.add('toast-element')
  notification.innerText = message
  toast.appendChild(notification)
  setTimeout(() => {
    notification.remove()
  }, 2000)
}