/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/watch_movie/description/description.js":
/*!********************************************************!*\
  !*** ./modules/watch_movie/description/description.js ***!
  \********************************************************/
/***/ (() => {

var id = window.location.href.split("?")[1].split("=")[1];

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

var link = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/' + id;
getData(link).then(function (data) {
  return showMovies(data);
})["catch"](function (error) {
  return console.log(error.message);
});
var movieImg = document.querySelector('.container__img');
var movieName = document.querySelector('.description__name');
var movieCountry = document.querySelector('.description-info__country');
var movieYear = document.querySelector('.description-info__year');
var movieTime = document.querySelector('.description-info__time');
var movieAge = document.querySelector('.description-info__age');
var movieGanres = document.querySelector('.description-ganres');
var movieRating = document.querySelector('.description-rating__rating');
var movieText = document.querySelector('.description__text');

function showMovies(data) {
  console.log(data);
  movieImg.src = data.posterUrlPreview;
  movieName.innerHTML = data.nameRu;
  movieCountry.innerHTML = data.countries[0].country;
  movieYear.innerHTML = data.year;
  movieTime.innerHTML = data.filmLength;
  movieAge.innerHTML = data.ratingAgeLimits.replace(/[^\d]/g, '') + '+';
  data.genres.forEach(function (el) {
    var linkGenre = document.createElement('a');
    linkGenre.href = '#';
    linkGenre.classList.add('description-ganres__ganre');
    linkGenre.innerHTML = el.genre;
    movieGanres.append(linkGenre);
  });
  movieRating.innerHTML = data.ratingKinopoisk;
  movieText.innerHTML = data.description;
}

/***/ }),

/***/ "./modules/watch_movie/player/player.js":
/*!**********************************************!*\
  !*** ./modules/watch_movie/player/player.js ***!
  \**********************************************/
/***/ (() => {

var player = document.querySelector('.player');
var id = window.location.href.split("?")[1].split("=")[1];
var div = document.createElement('div');
var script = document.createElement('script');
script.src = '//yohoho.cc/yo.js';
div.id = 'yohoho';
div.dataset.kinopoisk = id;
player.append(div);
player.append(script);
console.log(div);

/***/ }),

/***/ "./modules/watch_movie/similar_films/similar_films.js":
/*!************************************************************!*\
  !*** ./modules/watch_movie/similar_films/similar_films.js ***!
  \************************************************************/
/***/ (() => {

var id = window.location.href.split("?")[1].split("=")[1];

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

var link = "https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(id, "/similars");
getData(link).then(function (data) {
  return showMovies(data);
})["catch"](function (error) {
  return console.log(error.message);
});

function showMovies(data) {
  console.log(data);
  var test = document.querySelector('.test1');

  var _loop = function _loop(i) {
    var el = data.items[i];
    console.log(el);
    var img = document.createElement('img');
    var link = document.createElement('a');
    var div = document.createElement('div');
    img.src = el.posterUrlPreview;
    link.href = "../movie.html?id=" + el.filmId;
    div.addEventListener('click', function () {
      document.location = "../movie.html?id=" + el.filmId;
    });
    img.classList.add('movies__img');
    link.classList.add('movies__link');
    div.classList.add('movies-item');
    link.append(img);
    div.append(link);
    test.append(div);
  };

  for (var i = 0; i < data.total; i++) {
    _loop(i);
  }
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./js/movie.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_watch_movie_watch_movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/watch_movie/watch_movie */ "./modules/watch_movie/watch_movie.js");

})();

/******/ })()
;
//# sourceMappingURL=movie.js.map