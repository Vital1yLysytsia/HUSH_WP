import Swiper, { Navigation, Pagination } from 'swiper';

// Ініціалізація Swiper
document.addEventListener('DOMContentLoaded', function () {
  const swiper3 = new Swiper('.top-sales__slider', {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
});
