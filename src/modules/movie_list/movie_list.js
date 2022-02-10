import 'regenerator-runtime/runtime'

if(location.href.split('/')[location.href.split('/').length - 1].split('.')[0] == 'movieList') {

  const API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842"
  let api_url
  if (location.href.split('?')[1]) {
    api_url = 
    'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=' + location.href.split("?")[1].split("=")[1]
  } else {
    api_url = 
    'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'
  }
  const test = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=20&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'

  getMovies(test)

  async function getMovies(url) {
    const resp = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      }
    })
    const respData = await resp.json()
    showMovies(respData)
  }

  function showMovies(data) {
    let obj = {}
    for(let elem of data.items) {
      for(let elum of elem.genres) {
        let counter = 1
        if (obj[elum.genre]) {
          obj[elum.genre]++
        } else {
          obj[elum.genre] = 1
        }
      }
    }
    console.log(obj)
    // const moviesEl = document.querySelector('.movieList')

    // data.films.forEach(movie => {
    //   const movieEl = document.createElement('div')
    //   movieEl.classList.add('movie')
    //   console.log(movie.genres)
    //   movieEl.innerHTML = `
    //     <div class="movie__cover-inner">
    //     <a href="movie.html?id=${movie.filmId}" class="movie__link"> 
    //       <img
    //         src="${movie.posterUrlPreview}"
    //         class="movie__img"
    //         alt="${movie.nameRu}"
    //       />
    //     </a>
    //     </div>
    //     <div class="movie-info">
    //       <div class="movie-info__title">${movie.nameRu}</div>
    //       <div class="movie-info__genre">${movie.genres.map(
    //         (genre) => `<a href="movieList.html?id=${genre.genre}" class="movie-info__genre-link"> ${genre.genre}</a>`
    //       )}</div>
    //       ${
    //         setRating(movie.rating) &&
    //         `
    //       <div class="movie-info__average movie-info__average--${getClassByRate(
    //         movie.rating
    //       )}">${movie.rating}</div>
    //       `
    //       }
    //     </div>`
    //     moviesEl.append(movieEl)
    // })
    // function getClassByRate(vote) {
    //   if (vote >= 7 && vote <= 10) {
    //     return "green";
    //   } else if (vote >= 5) {
    //     return "orange";
    //   } else if (vote > 0) {
    //     return "red";
    //   }
    // }
  }
  function setRating(vote) {
    if (vote <=10 && vote >= 0) {
      return true
    } else {
      return ''
    }
  }



  // let id = window.location.href.split("?")[1].split("=")[1];

  // const getData = (url) =>
  //   new Promise((resolve, reject) =>
  //     fetch(url, {
  //       method: "GET",
  //       headers: {
  //         "X-API-KEY": "757f6afa-954c-4484-9629-04d0c3a9a842",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((json) => resolve(json))
  //       .catch((error) => reject(error))
  //   );
  // let link = "https://kinopoiskapiunofficial.tech/api/v2.2/films/" + id;

  // getData(link)
  //   .then((data) => showMovies(data))
  //   .catch((error) => console.log(error.message));

}