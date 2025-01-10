document.addEventListener('DOMContentLoaded', () => {
  const svgElements = document.querySelectorAll('.product__image-like');
  svgElements.forEach(svg => {
    svg.addEventListener('click', () => {
      svg.classList.toggle('active');
    });
  });
});