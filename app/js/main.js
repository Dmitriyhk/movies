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
/* harmony import */ var _swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swiper */ "./js/swiper.js");




 // import './movie'



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
 // import Swiper and modules styles



 // init Swiper:
// const swiper = new Swiper('.swiper-container', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   loop: true,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
// let swiperContainerMovies = document.querySelector('.container-trendingMovies')
// let swiperContainer = document.querySelector('.swiper-container')
// let swiperBtnNext = document.querySelector('.swiper-button-next')
// swiperContainerMovies.addEventListener('mouseover', function() {
//   swiperBtnNext.style.opacity = 1
// })
// swiperContainerMovies.addEventListener('mouseout', function() {
//   swiperBtnNext.style.opacity = 0
// })

var swipers = document.querySelectorAll('.swiper');
swipers.forEach(function (el) {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination],
    slidesPerView: 6,
    slidesPerGroup: 3,
    spaceBetween: 35,
    navigation: {
      nextEl: el.previousSibling.firstChild.querySelector('.swiper-button-next'),
      prevEl: el.previousSibling.firstChild.querySelector('.swiper-button-prev')
    }
  });
});

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



if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "index") {
  var getActor = /*#__PURE__*/function () {
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
              showActor(respData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getActor(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var showActor = function showActor(data) {
    var test = document.querySelector('.movies-premier');

    for (var i = 0; i < 20; i++) {
      var el = data.items[i];
      var img = document.createElement('img');
      var link = document.createElement('a');
      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrl;
      link.href = "../movie.html?id=" + el.kinopoiskId;
      img.classList.add('movies__img');
      link.classList.add('movies__link');
      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");
      link.append(img);
      link.append(content);
      div.append(link);
      test.append(div);
    }
  };

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

if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "index") {
  var showMovies = function showMovies(data) {
    var test = document.querySelector('.movies-trendingMovies');

    for (var i = 0; i < 20; i++) {
      var el = data.films[i];
      var img = document.createElement('img');

      var _link = document.createElement('a');

      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrlPreview;
      _link.href = "../movie.html?id=" + el.filmId;
      img.classList.add('movies__img');

      _link.classList.add('movies__link');

      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");

      _link.append(img);

      _link.append(content);

      div.append(_link);
      test.append(div);
    }
  };

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



if (location.href.split("/")[location.href.split("/").length - 1].split(".")[0] == "index") {
  var getActor = /*#__PURE__*/function () {
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
              showActor(respData);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getActor(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var showActor = function showActor(data) {
    var test = document.querySelector('.movies-trendingTVShows');

    for (var i = 0; i < 20; i++) {
      var el = data.items[i];
      var img = document.createElement('img');
      var link = document.createElement('a');
      var div = document.createElement('div');
      var content = document.createElement('div');
      img.src = el.posterUrlPreview;
      link.href = "../movie.html?id=" + el.filmId;
      img.classList.add('movies__img');
      link.classList.add('movies__link');
      div.classList.add('movies-item');
      div.classList.add('swiper-slide');
      content.classList.add('movies__content');
      content.innerHTML = "<p class='movies__title'>".concat(el.nameRu, "</p><p class='movies__subTitle'>").concat(el.year, "</p>");
      link.append(img);
      link.append(content);
      div.append(link);
      test.append(div);
    }
  };

  var API_KEY = "757f6afa-954c-4484-9629-04d0c3a9a842";
  var API_URL_ACTOR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SHOW&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1';
  getActor(API_URL_ACTOR);
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
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
              showMovies(respData);

            case 7:
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
    var obj = {};

    var _iterator = _createForOfIteratorHelper(data.items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var elem = _step.value;

        var _iterator2 = _createForOfIteratorHelper(elem.genres),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var elum = _step2.value;
            var counter = 1;

            if (obj[elum.genre]) {
              obj[elum.genre]++;
            } else {
              obj[elum.genre] = 1;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    console.log(obj); // const moviesEl = document.querySelector('.movieList')
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

  var test = 'https://kinopoiskapiunofficial.tech/api/v2.2/films?genres=20&order=RATING&type=ALL&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1';
  getMovies(test);
}

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
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_swiper_modules_navigation_navigation_min_css-node_modules_swiper_modules-d99b48"], () => (__webpack_require__("../node_modules/regenerator-runtime/runtime.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_swiper_modules_navigation_navigation_min_css-node_modules_swiper_modules-d99b48"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map