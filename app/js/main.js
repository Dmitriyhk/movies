/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/***/ (() => {



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
/* harmony import */ var _genres_genres__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genres/genres */ "./modules/content/genres/genres.js");
/* harmony import */ var _genres_genres__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_genres_genres__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actor_actor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actor/actor */ "./modules/content/actor/actor.js");
/* harmony import */ var _actor_actor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_actor_actor__WEBPACK_IMPORTED_MODULE_3__);
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
  var test = document.querySelector('.test');

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
/***/ (() => {



/***/ }),

/***/ "./modules/header/header.js":
/*!**********************************!*\
  !*** ./modules/header/header.js ***!
  \**********************************/
/***/ (() => {

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
}

nigth.addEventListener('click', function () {
  if (localStorage.getItem('nightMode') == 2) {
    body.style.backgroundColor = '#000';
    body.style.color = '#fff';
    localStorage.setItem('nightMode', 1);
    console.log(localStorage.getItem('nightMode'));
    console.log('клик проверка if');
  } else {
    body.style.backgroundColor = '#dddddd';
    body.style.color = '#000';
    localStorage.setItem('nightMode', 2);
    console.log(localStorage.getItem('nightMode'));
    console.log('клик проверка else');
  }
});

/***/ }),

/***/ "./modules/watch_movie/watch_movie.js":
/*!********************************************!*\
  !*** ./modules/watch_movie/watch_movie.js ***!
  \********************************************/
/***/ (() => {

// import './description/description'
// import './player/player'
// import './similar_films/similar_films'

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
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/header/header */ "./modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/banner/banner */ "./modules/banner/banner.js");
/* harmony import */ var _modules_banner_banner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_banner_banner__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_content_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/content/content */ "./modules/content/content.js");
/* harmony import */ var _modules_watch_movie_watch_movie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/watch_movie/watch_movie */ "./modules/watch_movie/watch_movie.js");
/* harmony import */ var _modules_watch_movie_watch_movie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_watch_movie_watch_movie__WEBPACK_IMPORTED_MODULE_4__);




 // import '../modules/movie_list/movie_list'
})();

/******/ })()
;
//# sourceMappingURL=main.js.map