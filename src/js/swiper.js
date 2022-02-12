// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
let swipers = document.querySelectorAll('.swiper')
swipers.forEach(el => {
  const swiper = new Swiper(el, {
    modules: [Navigation, Pagination],
    slidesPerView: 6,
    slidesPerGroup: 3,
    spaceBetween: 35,
    navigation: {
      nextEl: el.previousSibling.firstChild.querySelector('.swiper-button-next'),
      prevEl: el.previousSibling.firstChild.querySelector('.swiper-button-prev'),
    },
  });
})

