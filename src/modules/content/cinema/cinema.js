const API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842"
let date = new Date()
let month = date.getMonth()
let currentMonth = 'JANUARY'
if(month == 1) {
  currentMonth = 'FEBRUARY'
} else if(month == 2) {
  currentMonth = 'MARCH'
} else if(month == 3) {
  currentMonth = 'APRIL'
} else if(month == 4) {
  currentMonth = 'MAY'
} else if(month == 5) {
  currentMonth = 'JUNE'
} else if(month == 6) {
  currentMonth = 'JULY'
} else if(month == 7) {
  currentMonth = 'AUGUST'
} else if(month == 8) {
  currentMonth = 'SEPTEMBER'
} else if(month == 9) {
  currentMonth = 'OCTOBER'
} else if(month == 10) {
  currentMonth = 'NOVEMBER'
} else if(month == 11) {
  currentMonth = 'DECEMBER'
}
const API_URL_ACTOR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=' + currentMonth

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
  const moviesPremier = document.querySelector('.movies-premier')
  if (moviesPremier) {
    for (let i = 0; i < 20; i++) {
      let el = data.items[i]
      let img = document.createElement('img')
      let link = document.createElement('a')
      let div = document.createElement('div')
      let content = document.createElement('div')
      img.src = el.posterUrl
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
      moviesPremier.append(div)
    }
  }
}
