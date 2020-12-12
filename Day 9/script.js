
function stopSongs() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}


const sounds = Array.from(document.querySelectorAll('audio')).map(sound => {
  //creates an array from audio elements on DOM
  const button = document.createElement('button') //creates a button for each one
  button.classList.add('button')

  button.innerText = sound.id //adds button text based on audio's id

  button.addEventListener('click', () => {
    stopSongs() //stop previous sounds
    sound.play()
  })// add click event
  
  document.getElementById('buttons').appendChild(button) //add buttons to container
  return sound.id
})
