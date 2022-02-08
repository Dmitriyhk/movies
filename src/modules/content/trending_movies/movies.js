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
let link = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

getData(link)
  .then(data => showMovies(data))
  .catch(error => console.log(error.message))
  

function showMovies(data) {
  const test = document.querySelector('.movies-trendingMovies')
  for (let i = 0; i < 6; i++) {
    let el = data.films[i]
    let img = document.createElement('img')
    let link = document.createElement('a')
    let div = document.createElement('div')
    let content = document.createElement('div')
    img.src = el.posterUrlPreview
    link.href = "../movie.html?id=" + el.filmId
    // div.addEventListener('click', function() {
    //   document.location = "../movie.html?id=" + el.filmId
    // })
    img.classList.add('movies__img')
    link.classList.add('movies__link')
    div.classList.add('movies-item')
    content.classList.add('movies__content')
    content.innerHTML = `<p class='movies__title'>${el.nameRu}</p><p class='movies__subTitle'>${el.year}</p>`
    link.append(img)
    link.append(content)
    div.append(link)
    test.append(div)
  }
}


  

