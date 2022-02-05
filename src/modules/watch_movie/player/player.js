if (
  location.href.split("/")[location.href.split("/").length - 1].split(".")[0] ==
  "movie"
) {
  let player = document.querySelector(".player");

  let id = window.location.href.split("?")[1].split("=")[1];

  let div = document.createElement("div");
  let script = document.createElement("script");
  script.src = "//yohoho.cc/yo.js";
  div.id = "yohoho";
  div.dataset.kinopoisk = id;
  player.append(div);
  player.append(script);
  console.log(div);
}
