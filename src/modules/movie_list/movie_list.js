import { elementScrollIntoView } from "seamless-scroll-polyfill";

if(location.href.split('/')[location.href.split('/').length - 1].split('.')[0] == 'movieList') {
  const ID_GENRES = {
    'биография': 8,
    'боевик': 11,
    'вестерн': 10,
    'военный': 14,
    'детектив': 5,
    'детский': 33,
    'для взрослых': 28,
    'документальный': 22,
    'драма': 2,
    'игра': 31,
    'история': 15,
    'комедия': 13,
    'концерт': 27,
    'короткометражка': 23,
    'криминал': 3,
    'мелодрама': 4,
    'музыка': 16,
    'мультфильм': 24,
    'аниме': 24,
    'мюзикл': 20,
    'новости': 26,
    'приключения': 7,
    'реальное ТВ': 30,
    'семейный': 19,
    'спорт': 21,
    'ток-шоу': 32,
    'триллер': 1,
    'ужасы': 17,
    'фантастика': 6,
    'фильм-нуар': 9,
    'фэнтези': 12,
    'церемония': 29,
    }
  const movieListBtn = document.querySelector('.movieList-btn')
  const API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842"
  const blockLoading = document.querySelector('.block-loading')
  let apiUrl
  let pagesCount
  let pageNumber = 1
  if (localStorage.getItem('nightMode') == 2) {
    blockLoading.style.backgroundColor = '#dddddd'
  } else {
    blockLoading.style.backgroundColor = '#000'
  }
  if (location.href.split('?')[1] === undefined) {
    apiUrl = 
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page='
  } else if (location.href.split('?')[1].split('=')[0] === 'id') {
    apiUrl = 
    `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${location.href.split("?")[1].split("=")[1]}&page=`
  } else if (location.href.split('?')[1].split('=')[0] === 'genre') {
    apiUrl = `https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=${ID_GENRES[decodeURI(location.href.split("?")[1].split("=")[1])]}&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=`
  } else if (location.href.split('?')[1].split('=')[0] === 'tv') {
    apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page='
  }

  getMovies(apiUrl)

  async function getMovies(url) {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      }
    })
    const respData = await resp.json()
    if(respData.items) {
      showMoviesByGenre(respData)
      pagesCount = respData.totalPages
    } else {
      showMoviesById(respData)
      pagesCount = respData.pagesCount
    } 
    if (pageNumber >= pagesCount) {
      movieListBtn.hidden = true
    }
  }

  function showMoviesById(data) {
    const moviesEl = document.querySelector('.movieList')
    data.films.forEach(movie => {
      if (movie.nameRu !== null && movie.nameRu) {
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
          <div class="movie__cover-inner">
          <a href="movie.html?id=${movie.filmId}" class="movie__link"> 
            <img
              src="${movie.posterUrlPreview}"
              class="movie__img"
              alt="${movie.nameRu}"
            />
          </a>
          </div>
          <div class="movie-info">
            <div class="movie-info__title">${movie.nameRu}</div>
            <div class="movie-info__genre">${movie.genres.map(
              (genre) => `<a href="movieList.html?genre=${genre.genre}" class="movie-info__genre-link"> ${genre.genre}</a>`
            )}</div>
            ${
              setRating(movie.rating) &&
              `
            <div class="movie-info__average movie-info__average--${getClassByRate(
              movie.rating
            )}">${movie.rating}</div>
            `
            }
          </div>`
          moviesEl.append(movieEl)
      }
    }) 
    blockLoading.hidden = true
  }
  
  function showMoviesByGenre(data) {
    const moviesEl = document.querySelector('.movieList')
    data.items.forEach(movie => {
      if (movie.nameRu !== null && movie.nameRu) {
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
          <div class="movie__cover-inner">
          <a href="movie.html?id=${movie.kinopoiskId}" class="movie__link"> 
            <img
              src="${movie.posterUrlPreview}"
              class="movie__img"
              alt="${movie.nameRu}"
            />
          </a>
          </div>
          <div class="movie-info">
            <div class="movie-info__title">${movie.nameRu}</div>
            <div class="movie-info__genre">${movie.genres.map(
              (genre) => `<a href="movieList.html?genre=${genre.genre}" class="movie-info__genre-link"> ${genre.genre}</a>`
            )}</div>
            ${
              setRating(movie.rating) &&
              `
            <div class="movie-info__average movie-info__average--${getClassByRate(
              movie.rating
            )}">${movie.rating}</div>
            `
            }
          </div>`
          moviesEl.append(movieEl)
      }
    }) 
    blockLoading.hidden = true
  }

  function getClassByRate(vote) {
    if (vote >= 7 && vote <= 10) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else if (vote > 0) {
      return "red";
    }
  }

  function setRating(vote) {
    if (vote <=10 && vote >= 0 && vote !== null) {
      return true
    } else {
      return ''
    }
  }
  
  movieListBtn.addEventListener('click', function() {
    pageNumber++
    let newUrl = apiUrl + pageNumber
  
    getMovies(newUrl)
  
  })
  
const btnUp = document.querySelector('.container-movie__btnUp')
const header = document.querySelector('.header')
btnUp.addEventListener('click', function() {
  elementScrollIntoView(header, {
    behavior: "smooth",
    block: 'start',
  })
})
}


