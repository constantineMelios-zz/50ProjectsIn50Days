const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d779b35ea8ac6876755637cb4dd84d83&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d779b35ea8ac6876755637cb4dd84d83&&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach(({title, poster_path, vote_average, overview}) => {
    const  movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        ${overview}
      </div>
    `
    main.appendChild(movieEl)
  })
}

function getClassByRate(vote) {
  if(vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)

      search.value = ''
  } else {
      window.location.reload()
  }
})

getMovies(API_URL)
