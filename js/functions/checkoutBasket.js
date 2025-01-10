import Swiper, { Navigation, Pagination } from 'swiper';

// Ініціалізація Swiper
const swiper = new Swiper('.swiper-container-1', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next-1',
    prevEl: '.swiper-button-prev-1',
  },
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
});
