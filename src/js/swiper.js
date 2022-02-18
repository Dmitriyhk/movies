// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swipers = document.querySelectorAll('.swiper')
swipers.forEach(el => {
  const swiper = new Swiper(el, {
    modules: [Navigation, Pagination],
    slidesPerView: 1.6,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: el.previousSibling.firstChild.querySelector('.swiper-button-next'),
      prevEl: el.previousSibling.firstChild.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
      400: {
        slidesPerView: 2.2,
      },
      600: {
        slidesPerView: 3.2,
      },
      800: {
        slidesPerView: 4.2,
        spaceBetween: 15,
      },
      1000: {
        slidesPerView: 5.2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 35,
        slidesPerGroup: 3,
      },
    }
  });
})

