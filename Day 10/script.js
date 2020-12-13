const jokeDisplay = document.getElementById('joke')
const button = document.getElementById('jokeBtn')

async function generateJoke() {
  const config = {
    headers: {'Accept': 'application/json'}
  }
  try {
    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    jokeDisplay.textContent = await data.joke
  }
  catch (error) {
    console.error(error)
  }
}

generateJoke()
button.addEventListener('click', generateJoke)