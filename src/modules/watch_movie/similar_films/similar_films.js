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
    console.log(data);
    const test = document.querySelector(".test1");
    for (let i = 0; i < data.total; i++) {
      let el = data.items[i];
      console.log(el);
      let img = document.createElement("img");
      let link = document.createElement("a");
      let div = document.createElement("div");
      img.src = el.posterUrlPreview;
      link.href = "../movie.html?id=" + el.filmId;
      div.addEventListener("click", function () {
        document.location = "../movie.html?id=" + el.filmId;
      });
      img.classList.add("movies__img");
      link.classList.add("movies__link");
      div.classList.add("movies-item");
      link.append(img);
      div.append(link);
      test.append(div);
    }
  }
}
