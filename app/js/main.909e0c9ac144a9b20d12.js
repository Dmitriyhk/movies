/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/header/header */ "./modules/header/header.js");
/* harmony import */ var _modules_content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/content/content */ "./modules/content/content.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies */ "./js/movies.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movie */ "./js/movie.js");
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");








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

/***/ "./js/swiper.js":
/*!**********************!*\
  !*** ./js/swiper.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "../node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css/navigation */ "../node_modules/swiper/modules/navigation/navigation.min.css");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "../node_modules/swiper/modules/pagination/pagination.min.css");
// core version + navigation, pagination modules:




var swipers = document.querySelectorAll('.swiper');
swipers.forEach(function (el) {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: el.previousSibling.firstChild.querySelector('.swiper-button-next'),
      prevEl: el.previousSibling.firstChild.querySelector('.swiper-button-prev')
    },
    breakpoints: {
      500: {
        slidesPerView: 3
      },
      750: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 2
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 35,
        slidesPerGroup: 3
      }
    }
  });
});

/***/ }),

/***/ "./modules/content/cinema/cinema.js":
/*!******************************************!*\
  !*** ./modules/content/cinema/cinema.js ***!
  \******************************************/
/***/ (() => {

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
  var moviesPremier = document.querySelector('.movies-premier');

  if (moviesPremier) {
    for (var i = 0; i < 20; i++) {
      var el = data.items[i];
      var img = document.createElement('img');
      var link = document.createElement('a');
      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrl;
      link.href = "movie.html?id=" + el.kinopoiskId;
      img.classList.add('movies__img');
      link.classList.add('movies__link');
      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");
      link.append(img);
      link.append(content);
      div.append(link);
      moviesPremier.append(div);
    }
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
/* harmony import */ var _trending_twshows_twshows__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trending_twshows_twshows__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cinema_cinema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cinema/cinema */ "./modules/content/cinema/cinema.js");
/* harmony import */ var _cinema_cinema__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_cinema_cinema__WEBPACK_IMPORTED_MODULE_2__);




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
  var trendingMovies = document.querySelector('.movies-trendingMovies');

  if (trendingMovies) {
    for (var i = 0; i < 20; i++) {
      var el = data.films[i];
      var img = document.createElement('img');

      var _link = document.createElement('a');

      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrlPreview;
      _link.href = "movie.html?id=" + el.filmId;
      img.classList.add('movies__img');

      _link.classList.add('movies__link');

      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");

      _link.append(img);

      _link.append(content);

      div.append(_link);
      trendingMovies.append(div);
    }
  }
}

/***/ }),

/***/ "./modules/content/trending_twshows/twshows.js":
/*!*****************************************************!*\
  !*** ./modules/content/trending_twshows/twshows.js ***!
  \*****************************************************/
/***/ (() => {

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
  var trendingTVShows = document.querySelector('.movies-trendingTVShows');

  if (trendingTVShows) {
    for (var i = 0; i < 20; i++) {
      var el = data.items[i];
      var img = document.createElement('img');
      var link = document.createElement('a');
      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrlPreview;
      link.href = "movie.html?id=" + el.kinopoiskId;
      img.classList.add('movies__img');
      link.classList.add('movies__link');
      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");
      link.append(img);
      link.append(content);
      div.append(link);
      trendingTVShows.append(div);
    }
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

var iconBurger = document.querySelector('.header-burger');
var body = document.querySelector('body');

if (localStorage.getItem('nightMode') == 2) {
  body.style.backgroundColor = '#fff';
  body.style.color = '#000';
} else {
  body.style.backgroundColor = '#000';
  body.style.color = '#fff';
  localStorage.setItem('nightMode', 1);
}

var ball = document.querySelector(".toggle-ball");
var toggle = document.querySelector(".toggle");
ball.addEventListener("click", function () {
  if (localStorage.getItem('nightMode') == 2) {
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
    localStorage.setItem('nightMode', 1);
    ball.classList.toggle("active");
    toggle.classList.toggle("active");
  } else {
    body.style.backgroundColor = '#dddddd';
    body.style.color = '#000';
    localStorage.setItem('nightMode', 2);
    ball.classList.toggle("active");
    toggle.classList.toggle("active");
  }
});
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var control = document.querySelector(".control");
iconBurger.addEventListener('click', function () {
  header.classList.toggle('-active');
  nav.classList.toggle('-active');
  control.classList.toggle('-active');
});

/***/ }),

/***/ "./modules/header/search.js":
/*!**********************************!*\
  !*** ./modules/header/search.js ***!
  \**********************************/
/***/ (() => {

var form = document.querySelector('.control-form');
var search = document.querySelector('.control__search');
var searchBtn = document.querySelector('.control-btn_search');
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
/* harmony import */ var seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! seamless-scroll-polyfill */ "../node_modules/seamless-scroll-polyfill/lib/scrollIntoView.js");
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

              if (respData.items) {
                showMoviesByGenre(respData);
                pagesCount = respData.totalPages;
              } else {
                showMoviesById(respData);
                pagesCount = respData.pagesCount;
              }

              if (pageNumber >= pagesCount) {
                movieListBtn.hidden = true;
              }

              movieListBtn.innerHTML = 'Загрузить еще';

            case 9:
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

  var showMoviesById = function showMoviesById(data) {
    var moviesEl = document.querySelector('.movieList');
    data.films.forEach(function (movie) {
      if (movie.nameRu !== null && movie.nameRu) {
        var movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = "\n          <div class=\"movie__cover-inner\">\n          <a href=\"movie.html?id=".concat(movie.filmId, "\" class=\"movie__link\"> \n            <img\n              src=\"").concat(movie.posterUrlPreview, "\"\n              class=\"movie__img\"\n              alt=\"").concat(movie.nameRu, "\"\n            />\n          </a>\n          </div>\n          <div class=\"movie-info\">\n            <div class=\"movie-info__title\">").concat(movie.nameRu, "</div>\n            <div class=\"movie-info__genre\">").concat(movie.genres.map(function (genre) {
          return "<a href=\"movieList.html?genre=".concat(genre.genre, "\" class=\"movie-info__genre-link\"> ").concat(genre.genre, "</a>");
        }), "</div>\n            ").concat(setRating(movie.rating) && "\n            <div class=\"movie-info__average movie-info__average--".concat(getClassByRate(movie.rating), "\">").concat(movie.rating, "</div>\n            "), "\n          </div>");
        moviesEl.append(movieEl);
      }
    });
    blockLoading.hidden = true;
  };

  var showMoviesByGenre = function showMoviesByGenre(data) {
    var moviesEl = document.querySelector('.movieList');
    data.items.forEach(function (movie) {
      if (movie.nameRu !== null && movie.nameRu) {
        var movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = "\n          <div class=\"movie__cover-inner\">\n          <a href=\"movie.html?id=".concat(movie.kinopoiskId, "\" class=\"movie__link\"> \n            <img\n              src=\"").concat(movie.posterUrlPreview, "\"\n              class=\"movie__img\"\n              alt=\"").concat(movie.nameRu, "\"\n            />\n          </a>\n          </div>\n          <div class=\"movie-info\">\n            <div class=\"movie-info__title\">").concat(movie.nameRu, "</div>\n            <div class=\"movie-info__genre\">").concat(movie.genres.map(function (genre) {
          return "<a href=\"movieList.html?genre=".concat(genre.genre, "\" class=\"movie-info__genre-link\"> ").concat(genre.genre, "</a>");
        }), "</div>\n            ").concat(setRating(movie.rating) && "\n            <div class=\"movie-info__average movie-info__average--".concat(getClassByRate(movie.rating), "\">").concat(movie.rating, "</div>\n            "), "\n          </div>");
        moviesEl.append(movieEl);
      }
    });
    blockLoading.hidden = true;
  };

  var getClassByRate = function getClassByRate(vote) {
    if (vote >= 7 && vote <= 10) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else if (vote > 0) {
      return "red";
    }
  };

  var setRating = function setRating(vote) {
    if (vote <= 10 && vote >= 0 && vote !== null) {
      return true;
    } else {
      return '';
    }
  };

  var ID_GENRES = {
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
    'церемония': 29
  };
  var movieListBtn = document.querySelector('.movieList-btn');
  var API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842";
  var blockLoading = document.querySelector('.block-loading');
  var apiUrl;
  var pagesCount;
  var pageNumber = 1;

  if (localStorage.getItem('nightMode') == 2) {
    blockLoading.style.backgroundColor = '#dddddd';
  } else {
    blockLoading.style.backgroundColor = '#000';
  }

  if (location.href.split('?')[1] === undefined) {
    apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=';
  } else if (location.href.split('?')[1].split('=')[0] === 'id') {
    apiUrl = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=".concat(location.href.split("?")[1].split("=")[1], "&page=");
  } else if (location.href.split('?')[1].split('=')[0] === 'genre') {
    apiUrl = "https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=".concat(ID_GENRES[decodeURI(location.href.split("?")[1].split("=")[1])], "&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=");
  } else if (location.href.split('?')[1].split('=')[0] === 'tv') {
    apiUrl = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=';
  }

  getMovies(apiUrl);
  movieListBtn.addEventListener('click', function () {
    movieListBtn.innerHTML = 'Загрузка...';
    pageNumber++;
    var newUrl = apiUrl + pageNumber;
    getMovies(newUrl);
  });
  var btnUp = document.querySelector('.container-movie__btnUp');
  var header = document.querySelector('.header');
  btnUp.addEventListener('click', function () {
    (0,seamless_scroll_polyfill__WEBPACK_IMPORTED_MODULE_0__.elementScrollIntoView)(header, {
      behavior: "smooth",
      block: 'start'
    });
  });
}

/***/ }),

/***/ "./modules/watch_movie/description/description.js":
/*!********************************************************!*\
  !*** ./modules/watch_movie/description/description.js ***!
  \********************************************************/
/***/ (() => {

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "movie") {
  var showMovies = function showMovies(data) {
    document.title = data.nameRu;
    movieImg.src = data.posterUrlPreview;
    movieName.innerHTML = data.nameRu;
    movieCountry.innerHTML = data.countries[0].country;
    movieYear.innerHTML = data.year;
    movieTime.innerHTML = getTimeFromMins(data.filmLength);

    if (data.ratingAgeLimits) {
      movieAge.innerHTML = data.ratingAgeLimits.replace(/[^\d]/g, "") + "+";
    } else {
      document.querySelector('.description-info__age').hidden = true;
    }

    if (data.genres) {
      data.genres.forEach(function (el) {
        var linkGenre = document.createElement("a");
        linkGenre.href = "movieList.html?genre=".concat(el.genre);
        linkGenre.classList.add("description-ganres__ganre");
        linkGenre.innerHTML = el.genre;
        movieGanres.append(linkGenre);
      });
    } else {
      document.querySelector('.description-ganres__title').hidden = true;
    }

    if (data.ratingKinopoisk) {
      movieRating.innerHTML = data.ratingKinopoisk;
    } else {
      document.querySelector('.description-rating').style.opacity = 0;
    }

    movieRating.innerHTML = data.ratingKinopoisk;
    movieText.innerHTML = data.description;
  };

  var getTimeFromMins = function getTimeFromMins(mins) {
    var hours = Math.floor(mins / 60);
    var minutes = mins % 60;

    if (hours === 0) {
      return minutes + '&nbspмин';
    }

    if (minutes === 0) {
      return hours + '&nbspч';
    }

    return hours + 'ч&nbsp' + minutes + 'мин';
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
  div.dataset.resize = 1;
  div.dataset.kinopoisk = id;
  player.append(div);
  player.append(script);
}

/***/ }),

/***/ "./modules/watch_movie/similar_films/similar_films.js":
/*!************************************************************!*\
  !*** ./modules/watch_movie/similar_films/similar_films.js ***!
  \************************************************************/
/***/ (() => {

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "movie") {
  var showMovies = function showMovies(data) {
    var test = document.querySelector(".movies-recomendation");
    var counter = 0;

    if (data.items.length <= 6 && data.items.length > 0) {
      counter = data.items.length;
    } else if (data.items.length === 0) {
      document.querySelector('.container-recomendation').hidden = true;
    } else {
      counter = 6;
    }

    for (var i = 0; i < counter; i++) {
      var el = data.items[i];
      var img = document.createElement('img');

      var _link = document.createElement('a');

      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrlPreview;
      _link.href = "movie.html?id=" + el.filmId;
      img.classList.add('movies-recomendation__img');

      _link.classList.add('movies-recomendation__link');

      div.classList.add('movies-recomendation-item');
      content.classList.add('movies-recomendation__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p>");

      _link.append(img);

      _link.append(content);

      div.append(_link);
      test.append(div);
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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_swiper_modules_navigation_navigation_min_css-node_modules_swiper_modules-b18fe7"], () => (__webpack_require__("../node_modules/regenerator-runtime/runtime.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_modules_navigation_navigation_min_css-node_modules_swiper_modules-b18fe7"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;