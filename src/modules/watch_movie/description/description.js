let id = window.location.href.split("?")[1].split("=")[1]

const getData = (url) =>
  new Promise((resolve, reject) =>
  fetch(url, {
    method: 'GET',
    headers: {
        'X-API-KEY': '757f6afa-954c-4484-9629-04d0c3a9a842',
        'Content-Type': 'application/json',
    },
})
    .then(response => response.json())
    .then(json => resolve(json))
    .catch(error => reject(error))
  )
let link = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id

getData(link)
  .then(data => showMovies(data))
  .catch(error => console.log(error.message))
  

const movieImg = document.querySelector('.container__img')
const movieName = document.querySelector('.description__name')
const movieCountry = document.querySelector('.description-info__country')
const movieYear = document.querySelector('.description-info__year')
const movieTime = document.querySelector('.description-info__time')
const movieAge = document.querySelector('.description-info__age')
const movieGanres = document.querySelector('.description-ganres')
const movieRating = document.querySelector('.description-rating__rating')
const movieText = document.querySelector('.description__text')


function showMovies(data) {
  console.log(data)
  movieImg.src = data.posterUrlPreview
  movieName.innerHTML = data.nameRu
  movieCountry.innerHTML = data.countries[0].country
  movieYear.innerHTML = data.year
  movieTime.innerHTML = data.filmLength
  movieAge.innerHTML = data.ratingAgeLimits.replace(/[^\d]/g, '') + '+'
  data.genres.forEach(el => {
    let linkGenre = document.createElement('a')
    linkGenre.href = '#'
    linkGenre.classList.add('description-ganres__ganre')
    linkGenre.innerHTML = el.genre
    movieGanres.append(linkGenre)
  })
  movieRating.innerHTML = data.ratingKinopoisk
  movieText.innerHTML = data.description
}