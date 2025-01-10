import Swiper, { Navigation } from 'swiper';

// Ініціалізація Swiper
document.addEventListener('DOMContentLoaded', function () {
  const swiper1 = new Swiper('.related-products__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });
});
