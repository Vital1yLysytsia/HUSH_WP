document.addEventListener('DOMContentLoaded', () => {
    const colorItems = document.querySelectorAll('.filter-color__color-item');
    const expandButton = document.querySelector('.filter-color__expand-btn');
    const expandButtonText = expandButton ? expandButton.querySelector('.expand-btn-text') : null;
  
    const updateFilterState = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth > 900) {
        colorItems.forEach(item => item.classList.remove('hidden'));
        if (expandButton) expandButton.style.display = 'none';
      } else {
        if (colorItems.length > 6) {
          colorItems.forEach((item, index) => {
            if (index >= 6 && !expandButton?.classList.contains('active')) {
              item.classList.add('hidden');
            }
          });
          if (expandButton) {
            expandButton.style.display = 'flex';
            if (!expandButton.classList.contains('active') && expandButtonText) {
              expandButtonText.textContent = `Ще ${colorItems.length - 6}`;
            }
          }
        } else {
          if (expandButton) expandButton.style.display = 'none';
        }
      }
    };
  
    updateFilterState();
    window.addEventListener('resize', updateFilterState);
  
    if (expandButton) {
      expandButton.addEventListener('click', () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 900) {
          const hiddenItems = document.querySelectorAll('.filter-color__color-item.hidden');
          const isHidden = hiddenItems.length > 0;
          if (isHidden) {
            hiddenItems.forEach(item => item.classList.remove('hidden'));
            if (expandButtonText) expandButtonText.textContent = 'Згорнути';
            expandButton.classList.add('active');
          } else {
            colorItems.forEach((item, index) => {
              if (index >= 6) {
                item.classList.add('hidden');
              }
            });
            if (expandButtonText) expandButtonText.textContent = `Ще ${colorItems.length - 6}`;
            expandButton.classList.remove('active');
          }
        }
      });
    }
  });