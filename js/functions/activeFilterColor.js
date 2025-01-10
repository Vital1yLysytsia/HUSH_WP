document.addEventListener('DOMContentLoaded', () => {
    const colorItems = document.querySelectorAll('.filter-color__color-item');
    colorItems.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  });