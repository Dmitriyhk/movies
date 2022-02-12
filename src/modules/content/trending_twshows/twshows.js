import 'regenerator-runtime/runtime'

const API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842"
const API_URL_ACTOR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'

getActor(API_URL_ACTOR)
async function getActor(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": API_KEY,
    }
  })
  const respData = await resp.json()
  showActor(respData)
}



function showActor(data) {
  const test = document.querySelector('.movies-trendingTVShows')
  for (let i = 0; i < 20; i++) {
    let el = data.items[i]
    let img = document.createElement('img')
    let link = document.createElement('a')
    let div = document.createElement('div')
    let content = document.createElement('div')
    img.src = el.posterUrlPreview
    link.href = "../movie.html?id=" + el.kinopoiskId
    img.classList.add('movies__img')
    link.classList.add('movies__link')
    div.classList.add('movies-item')
    div.classList.add('swiper-slide')
    content.classList.add('movies__content')
    content.innerHTML = `<p class='movies__title'>${el.nameRu}</p><p class='movies__subTitle'>${el.year}</p>`
    link.append(img)
    link.append(content)
    div.append(link)
    test.append(div)
  }
}
