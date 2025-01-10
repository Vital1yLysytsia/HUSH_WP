document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.product-category__mobile-list-item');
    items.forEach(function (item) {
      item.addEventListener('click', function () {
        items.forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });