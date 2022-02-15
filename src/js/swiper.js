// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

