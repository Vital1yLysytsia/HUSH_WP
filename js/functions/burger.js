
document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu__item');
  const productCards = document.querySelectorAll('.product-cards');
  const burger = document.querySelector('.header__burger');
  const burgerContent = document.querySelector('.header__burger-content');

  if (burger) {
    // Функція для активації певної категорії
    function activateCategory(item) {
      menuItems.forEach(menu => menu.classList.remove('active'));
      item.classList.add('active');
      productCards.forEach(card => card.classList.remove('active'));

      const category = item.getAttribute('data-category');
      const selectedProductCards = document.querySelector(`.product-cards[data-category="${category}"]`);
      if (selectedProductCards) {
        selectedProductCards.classList.add('active');
      }
    }

    burger.addEventListener('click', function () {
      this.classList.toggle('active');
      if (burgerContent) {
        burgerContent.classList.toggle('active');
      }

      if (this.classList.contains('active') && menuItems[0]) {
        activateCategory(menuItems[0]);
      }
    });

    menuItems.forEach(item => {
      item.addEventListener('click', function () {
        activateCategory(item);
      });
    });
  }
});