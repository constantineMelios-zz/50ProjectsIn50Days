const API_URL = 'https://api.github.com/users/'
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')


async function getUser(username) {
  try {
    const {data} = await axios(API_URL + username)
    createUserCard(data)
    getRepos(username)
  }
  catch(error) {
    if(error.response.status === 404) {
      createErrorCard(`Oops! There is no user named "${username}"`)
    }
  }
}

async function getRepos(username) {
  try {
    const {data} = await axios(API_URL + username + '/repos?sort=created')
    addReposToCard(data)
  }
  catch(error) {
    createErrorCard("Problem fetching the Repos!!!")
  }
}

function createUserCard({name, avatar_url, bio, followers, following, public_repos}) {
  const cardHTML =`
    <div class="user">
      <div class="user-image">
        <img src=${avatar_url} alt=${name} class="user-avatar">
      </div>
      <div class="user-info">
        <h2 class="user-name">${name}</h2>
        <p class="user-description">${bio}</p>
        <ul class="user-stats">
          <li class="user-followers">${followers} <strong>Followers</strong></li>
          <li class="user-following">${following}<strong>Following</strong></li>
          <li class="user-repos">${public_repos} <strong>Repos</strong></li>
        </ul>

        <div class="user-lastRepos" id='lastRepos'>

        </div>
      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

function createErrorCard(message) {
  main.innerHTML = `<div class="user"><h1>${message}"</h1></div>`
}

function addReposToCard(repos) {
  const reposElement = document.getElementById('lastRepos')
  repos.slice(0,10).forEach(repo => {
    const repoLink = document.createElement('a')
    repoLink.classList.add('user-repoLink')
    repoLink.href = repo.html_url
    repoLink.target = '_blank'
    repoLink.innerText = repo.name
    reposElement.appendChild(repoLink)
  })
}

form.addEventListener('submit',(event) => {
  event.preventDefault()

  const username = search.value
  if(username) {
    getUser(username)

    search.value = ''
  }
})

