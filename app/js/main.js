/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header/header */ "./modules/header/header.js");
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/banner/banner */ "./modules/banner/banner.js");
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/content/content */ "./modules/content/content.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies */ "./js/movies.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie */ "./js/movie.js");







/***/ }),

/***/ "./js/movie.js":
/*!*********************!*\
  !*** ./js/movie.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_watch_movie_watch_movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/watch_movie/watch_movie */ "./modules/watch_movie/watch_movie.js");


/***/ }),

/***/ "./js/movies.js":
/*!**********************!*\
  !*** ./js/movies.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_movie_list_movie_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/movie_list/movie_list */ "./modules/movie_list/movie_list.js");


/***/ }),

/***/ "./modules/banner/banner.js":
/*!**********************************!*\
  !*** ./modules/banner/banner.js ***!
  \**********************************/
/***/ (() => {

// const bannerImg = document.querySelector('.section-banner__img')
// const getData = (url) =>
//   new Promise((resolve, reject) =>
//   fetch(url, {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': '757f6afa-954c-4484-9629-04d0c3a9a842',
//         'Content-Type': 'application/json',
//     },
// })
//     .then(response => response.json())
//     .then(json => resolve(json))
//     .catch(error => reject(error))
//   )
// let link = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=7&order=RATING&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'
// getData(link)
//   .then(data => showMovies(data))
//   .catch(error => console.log(error.message))
//   function showMovies(data) {
//     console.log(data)
//   }

/***/ }),

/***/ "./modules/content/actor/actor.js":
/*!****************************************!*\
  !*** ./modules/content/actor/actor.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842";
var date = new Date();
var month = date.getMonth();
var currentMonth = 'JANUARY';

if (month == 1) {
  currentMonth = 'FEBRUARY';
} else if (month == 2) {
  currentMonth = 'MARCH';
} else if (month == 3) {
  currentMonth = 'APRIL';
} else if (month == 4) {
  currentMonth = 'MAY';
} else if (month == 5) {
  currentMonth = 'JUNE';
} else if (month == 6) {
  currentMonth = 'JULY';
} else if (month == 7) {
  currentMonth = 'AUGUST';
} else if (month == 8) {
  currentMonth = 'SEPTEMBER';
} else if (month == 9) {
  currentMonth = 'OCTOBER';
} else if (month == 10) {
  currentMonth = 'NOVEMBER';
} else if (month == 11) {
  currentMonth = 'DECEMBER';
}

var API_URL_ACTOR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=' + currentMonth;
getActor(API_URL_ACTOR);

function getActor(_x) {
  return _getActor.apply(this, arguments);
}

function _getActor() {
  _getActor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var resp, respData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY
              }
            });

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return resp.json();

          case 5:
            respData = _context.sent;
            showActor(respData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getActor.apply(this, arguments);
}

function showActor(data) {
  var test = document.querySelector('.movies-premier');

  for (var i = 0; i < 6; i++) {
    var el = data.items[i];
    var img = document.createElement('img');
    var link = document.createElement('a');
    var div = document.createElement('div');
    img.src = el.posterUrl;
    link.href = "../movie.html?id=" + el.kinopoiskId; // div.addEventListener('click', function() {
    //   document.location = "../movie.html?id=" + el.kinopoiskId
    // })

    img.classList.add('movies__img');
    link.classList.add('movies__link');
    div.classList.add('movies-item');
    link.append(img);
    div.append(link);
    test.append(div);
  }
}

/***/ }),

/***/ "./modules/content/content.js":
/*!************************************!*\
  !*** ./modules/content/content.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trending_movies_movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trending_movies/movies */ "./modules/content/trending_movies/movies.js");
/* harmony import */ var _trending_movies_movies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trending_movies_movies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trending_twshows_twshows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trending_twshows/twshows */ "./modules/content/trending_twshows/twshows.js");
/* harmony import */ var _genres_genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres/genres */ "./modules/content/genres/genres.js");
/* harmony import */ var _genres_genres__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_genres_genres__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actor_actor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actor/actor */ "./modules/content/actor/actor.js");
/* harmony import */ var _marketing_marketing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing/marketing */ "./modules/content/marketing/marketing.js");
/* harmony import */ var _marketing_marketing__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_marketing_marketing__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _offer_offer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offer/offer */ "./modules/content/offer/offer.js");
/* harmony import */ var _offer_offer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_offer_offer__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./modules/content/genres/genres.js":
/*!******************************************!*\
  !*** ./modules/content/genres/genres.js ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./modules/content/marketing/marketing.js":
/*!************************************************!*\
  !*** ./modules/content/marketing/marketing.js ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./modules/content/offer/offer.js":
/*!****************************************!*\
  !*** ./modules/content/offer/offer.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./modules/content/trending_movies/movies.js":
/*!***************************************************!*\
  !*** ./modules/content/trending_movies/movies.js ***!
  \***************************************************/
/***/ (() => {

var getData = function getData(url) {
  return new Promise(function (resolve, reject) {
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': '757f6afa-954c-4484-9629-04d0c3a9a842',
        'Content-Type': 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      return resolve(json);
    })["catch"](function (error) {
      return reject(error);
    });
  });
};

var link = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
getData(link).then(function (data) {
  return showMovies(data);
})["catch"](function (error) {
  return console.log(error.message);
});

function showMovies(data) {
  var test = document.querySelector('.movies-trendingMovies');

  for (var i = 0; i < 6; i++) {
    var el = data.films[i];
    var img = document.createElement('img');

    var _link = document.createElement('a');

    var div = document.createElement('div');
    img.src = el.posterUrlPreview;
    _link.href = "../movie.html?id=" + el.filmId; // div.addEventListener('click', function() {
    //   document.location = "../movie.html?id=" + el.filmId
    // })

    img.classList.add('movies__img');

    _link.classList.add('movies__link');

    div.classList.add('movies-item');

    _link.append(img);

    div.append(_link);
    test.append(div);
  }
}

/***/ }),

/***/ "./modules/content/trending_twshows/twshows.js":
/*!*****************************************************!*\
  !*** ./modules/content/trending_twshows/twshows.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842";
var API_URL_ACTOR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1';
getActor(API_URL_ACTOR);

function getActor(_x) {
  return _getActor.apply(this, arguments);
}

function _getActor() {
  _getActor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var resp, respData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url, {
              headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY
              }
            });

          case 2:
            resp = _context.sent;
            _context.next = 5;
            return resp.json();

          case 5:
            respData = _context.sent;
            showActor(respData);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getActor.apply(this, arguments);
}

function showActor(data) {
  var test = document.querySelector('.movies-trendingTVShows');

  for (var i = 0; i < 6; i++) {
    var el = data.items[i];
    var img = document.createElement('img');
    var link = document.createElement('a');
    var div = document.createElement('div');
    img.src = el.posterUrl;
    link.href = "../movie.html?id=" + el.kinopoiskId; // div.addEventListener('click', function() {
    //   document.location = "../movie.html?id=" + el.kinopoiskId
    // })

    img.classList.add('movies__img');
    link.classList.add('movies__link');
    div.classList.add('movies-item');
    link.append(img);
    div.append(link);
    test.append(div);
  }
}

/***/ }),

/***/ "./modules/header/header.js":
/*!**********************************!*\
  !*** ./modules/header/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./modules/header/search.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_search__WEBPACK_IMPORTED_MODULE_0__);

var nigth = document.querySelector('.control-btn_createacc');
var body = document.querySelector('body'); // localStorage.setItem('nightMode', true)

console.log(localStorage.getItem('nightMode'));

if (localStorage.getItem('nightMode') == 2) {
  body.style.backgroundColor = '#fff';
  body.style.color = '#000';
  console.log('первая проверка if');
} else {
  body.style.backgroundColor = '#000';
  body.style.color = '#fff';
  console.log('первая проверка else');
  localStorage.setItem('nightMode', 1);
} // nigth.addEventListener('click', function() {
//   if (localStorage.getItem('nightMode') == 2) {
//     body.style.backgroundColor = '#000'
//     body.style.color = '#fff'
//     localStorage.setItem('nightMode', 1)
//     console.log(localStorage.getItem('nightMode'))
//     console.log('клик проверка if')
//   } else {
//     body.style.backgroundColor = '#dddddd'
//     body.style.color = '#000'
//     localStorage.setItem('nightMode', 2)
//     console.log(localStorage.getItem('nightMode'))
//     console.log('клик проверка else')
//   }
// })


var ball = document.querySelector(".toggle-ball");
var toggle = document.querySelector(".toggle"); // const items = document.querySelectorAll(
//   ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
// );

console.log(ball);
ball.addEventListener("click", function () {
  if (localStorage.getItem('nightMode') == 2) {
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
    localStorage.setItem('nightMode', 1);
    console.log(localStorage.getItem('nightMode'));
    console.log('клик проверка if');
    ball.classList.toggle("active");
    toggle.classList.toggle("active");
  } else {
    body.style.backgroundColor = '#dddddd';
    body.style.color = '#000';
    localStorage.setItem('nightMode', 2);
    console.log(localStorage.getItem('nightMode'));
    console.log('клик проверка else');
    ball.classList.toggle("active");
    toggle.classList.toggle("active");
  }
});

/***/ }),

/***/ "./modules/header/search.js":
/*!**********************************!*\
  !*** ./modules/header/search.js ***!
  \**********************************/
/***/ (() => {

var form = document.querySelector('.control-form');
var search = document.querySelector('.control__search');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  window.location.href = 'movieList.html?id=' + search.value;
});

/***/ }),

/***/ "./modules/movie_list/movie_list.js":
/*!******************************************!*\
  !*** ./modules/movie_list/movie_list.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



if (location.href.split('/')[location.href.split('/').length - 1].split('.')[0] == 'movieList') {
  var getMovies = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var resp, respData;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url, {
                headers: {
                  "Content-Type": "application/json",
                  "X-API-KEY": API_KEY
                }
              });

            case 2:
              resp = _context.sent;
              _context.next = 5;
              return resp.json();

            case 5:
              respData = _context.sent;
              console.log(respData);
              showMovies(respData);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getMovies(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var showMovies = function showMovies(data) {
    var moviesEl = document.querySelector('.movieList');
    data.films.forEach(function (movie) {
      var movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      console.log(movie.genres);
      movieEl.innerHTML = "\n        <div class=\"movie__cover-inner\">\n        <a href=\"movie.html?id=".concat(movie.filmId, "\" class=\"movie__link\"> \n          <img\n            src=\"").concat(movie.posterUrlPreview, "\"\n            class=\"movie__img\"\n            alt=\"").concat(movie.nameRu, "\"\n          />\n        </a>\n        </div>\n        <div class=\"movie-info\">\n          <div class=\"movie-info__title\">").concat(movie.nameRu, "</div>\n          <div class=\"movie-info__genre\">").concat(movie.genres.map(function (genre) {
        return "<a href=\"movieList.html?id=".concat(genre.genre, "\" class=\"movie-info__genre-link\"> ").concat(genre.genre, "</a>");
      }), "</div>\n          ").concat(setRating(movie.rating) && "\n          <div class=\"movie-info__average movie-info__average--".concat(getClassByRate(movie.rating), "\">").concat(movie.rating, "</div>\n          "), "\n        </div>");
      moviesEl.append(movieEl);
    });

    function getClassByRate(vote) {
      if (vote >= 7 && vote <= 10) {
        return "green";
      } else if (vote >= 5) {
        return "orange";
      } else if (vote > 0) {
        return "red";
      }
    }
  };

  var setRating = function setRating(vote) {
    if (vote <= 10 && vote >= 0) {
      return true;
    } else {
      return '';
    }
  }; // let id = window.location.href.split("?")[1].split("=")[1];
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


  var API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842";
  var api_url;

  if (location.href.split('?')[1]) {
    api_url = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=' + location.href.split("?")[1].split("=")[1];
  } else {
    api_url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1';
  }

  getMovies(api_url);
}

/***/ }),

/***/ "./modules/watch_movie/description/description.js":
/*!********************************************************!*\
  !*** ./modules/watch_movie/description/description.js ***!
  \********************************************************/
/***/ (() => {

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "movie") {
  var showMovies = function showMovies(data) {
    console.log(data);
    movieImg.src = data.posterUrlPreview;
    movieName.innerHTML = data.nameRu;
    movieCountry.innerHTML = data.countries[0].country;
    movieYear.innerHTML = data.year;
    movieTime.innerHTML = data.filmLength;
    movieAge.innerHTML = data.ratingAgeLimits.replace(/[^\d]/g, "") + "+";
    data.genres.forEach(function (el) {
      var linkGenre = document.createElement("a");
      linkGenre.href = "#";
      linkGenre.classList.add("description-ganres__ganre");
      linkGenre.innerHTML = el.genre;
      movieGanres.append(linkGenre);
    });
    movieRating.innerHTML = data.ratingKinopoisk;
    movieText.innerHTML = data.description;
  };

  var id = window.location.href.split("?")[1].split("=")[1];

  var getData = function getData(url) {
    return new Promise(function (resolve, reject) {
      return fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": "757f6afa-954c-4484-9629-04d0c3a9a842",
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return resolve(json);
      })["catch"](function (error) {
        return reject(error);
      });
    });
  };

  var link = "https://kinopoiskapiunofficial.tech/api/v2.2/films/" + id;
  getData(link).then(function (data) {
    return showMovies(data);
  })["catch"](function (error) {
    return console.log(error.message);
  });
  var movieImg = document.querySelector(".container__img");
  var movieName = document.querySelector(".description__name");
  var movieCountry = document.querySelector(".description-info__country");
  var movieYear = document.querySelector(".description-info__year");
  var movieTime = document.querySelector(".description-info__time");
  var movieAge = document.querySelector(".description-info__age");
  var movieGanres = document.querySelector(".description-ganres");
  var movieRating = document.querySelector(".description-rating__rating");
  var movieText = document.querySelector(".description__text");
}

/***/ }),

/***/ "./modules/watch_movie/player/player.js":
/*!**********************************************!*\
  !*** ./modules/watch_movie/player/player.js ***!
  \**********************************************/
/***/ (() => {

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "movie") {
  var player = document.querySelector(".player");
  var id = window.location.href.split("?")[1].split("=")[1];
  var div = document.createElement("div");
  var script = document.createElement("script");
  script.src = "//yohoho.cc/yo.js";
  div.id = "yohoho";
  div.dataset.kinopoisk = id;
  player.append(div);
  player.append(script);
  console.log(div);
}

/***/ }),

/***/ "./modules/watch_movie/similar_films/similar_films.js":
/*!************************************************************!*\
  !*** ./modules/watch_movie/similar_films/similar_films.js ***!
  \************************************************************/
/***/ (() => {

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "movie") {
  var showMovies = function showMovies(data) {
    console.log(data);
    var test = document.querySelector(".test1");

    var _loop = function _loop(i) {
      var el = data.items[i];
      console.log(el);
      var img = document.createElement("img");
      var link = document.createElement("a");
      var div = document.createElement("div");
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
    };

    for (var i = 0; i < data.total; i++) {
      _loop(i);
    }
  };

  var id = window.location.href.split("?")[1].split("=")[1];

  var getData = function getData(url) {
    return new Promise(function (resolve, reject) {
      return fetch(url, {
        method: "GET",
        headers: {
          "X-API-KEY": "757f6afa-954c-4484-9629-04d0c3a9a842",
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        return resolve(json);
      })["catch"](function (error) {
        return reject(error);
      });
    });
  };

  var link = "https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(id, "/similars");
  getData(link).then(function (data) {
    return showMovies(data);
  })["catch"](function (error) {
    return console.log(error.message);
  });
}

/***/ }),

/***/ "./modules/watch_movie/watch_movie.js":
/*!********************************************!*\
  !*** ./modules/watch_movie/watch_movie.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description/description */ "./modules/watch_movie/description/description.js");
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_description_description__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/player */ "./modules/watch_movie/player/player.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player_player__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _similar_films_similar_films__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./similar_films/similar_films */ "./modules/watch_movie/similar_films/similar_films.js");
/* harmony import */ var _similar_films_similar_films__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_similar_films_similar_films__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_regenerator-runtime_runtime_js"], () => (__webpack_require__("../node_modules/regenerator-runtime/runtime.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_regenerator-runtime_runtime_js"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map