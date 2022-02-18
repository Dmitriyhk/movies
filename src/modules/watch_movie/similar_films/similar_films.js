if (
  location.href.split("/")[location.href.split("/").length - 1].split(".")[0] ==
  "movie"
) {
  let id = window.location.href.split("?")[1].split("=")[1];
  const getData = (url) =>
    new Promise((resolve, reject) =>
      fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": "757f6afa-954c-4484-9629-04d0c3a9a842",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error))
    );
  let link = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`;

  getData(link)
    .then((data) => showMovies(data))
    .catch((error) => console.log(error.message));

  function showMovies(data) {
    const test = document.querySelector(".movies-recomendation");
    let counter = 0
    if(data.items.length <= 6 && data.items.length > 0) {
      counter = data.items.length
    } else if(data.items.length === 0) {
      document.querySelector('.container-recomendation').hidden = true
    } else {
      counter = 6
    }
    for(let i = 0; i < counter;i++) {
      let el = data.items[i]
      let img = document.createElement('img')
      let link = document.createElement('a')
      let div = document.createElement('div')
      let content = document.createElement('div')
      img.src = el.posterUrlPreview
      link.href = "movie.html?id=" + el.filmId
      img.classList.add('movies-recomendation__img')
      link.classList.add('movies-recomendation__link')
      div.classList.add('movies-recomendation-item')
      content.classList.add('movies-recomendation__content')
      content.innerHTML = `<p class='movies__title'>${el.nameRu}</p>`
      link.append(img)
      link.append(content)
      div.append(link)
      test.append(div)
    }
  }
}
