document.addEventListener('DOMContentLoaded', () => {
    const pagination = document.querySelector('.woocommerce-pagination');
    if (!pagination) return;
    const prevBtn = pagination.querySelector('.woocommerce-pagination__prev');
    const nextBtn = pagination.querySelector('.woocommerce-pagination__next');
    const pageLinks = pagination.querySelectorAll('.woocommerce-pagination__link');
    let currentPage = 1;
    const totalPages = pageLinks.length;
  
    const updateActivePage = newPage => {
      if (newPage < 1 || newPage > totalPages) return;
      pageLinks.forEach(link => link.classList.remove('active'));
      pageLinks[newPage - 1].classList.add('active');
      currentPage = newPage;
    };
  
    if (prevBtn) {
      prevBtn.addEventListener('click', e => {
        e.preventDefault();
        updateActivePage(currentPage - 1);
      });
    }
  
    if (nextBtn) {
      nextBtn.addEventListener('click', e => {
        e.preventDefault();
        updateActivePage(currentPage + 1);
      });
    }
  
    pageLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const page = parseInt(link.textContent, 10);
        if (!isNaN(page)) {
          updateActivePage(page);
        }
      });
    });
  });