document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".product-tabs__tab");
  const panels = document.querySelectorAll(".product-tabs__panel");
  const accordionItems = document.querySelectorAll(".product-tabs__accordion-item");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const content = tab.dataset.content;
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(panel => panel.classList.remove("active"));
      tab.classList.add("active");
      const targetPanel = document.querySelector(`.product-tabs__panel[data-content="${content}"]`);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });

  accordionItems.forEach(item => {
    const title = item.querySelector(".product-tabs__accordion-title");
    const content = item.querySelector(".product-tabs__accordion-content");
    const icon = title ? title.querySelector(".accordion-icon") : null;
    if (!title || !content) return;

    title.addEventListener("click", () => {
      const isActive = content.classList.contains("active");
      accordionItems.forEach(otherItem => {
        const otherContent = otherItem.querySelector(".product-tabs__accordion-content");
        const otherTitle = otherItem.querySelector(".product-tabs__accordion-title");
        const otherIcon = otherTitle ? otherTitle.querySelector(".accordion-icon") : null;
        if (otherContent) otherContent.classList.remove("active");
        if (otherTitle) otherTitle.classList.remove("active");
        if (otherIcon) otherIcon.classList.remove("open");
        otherItem.classList.remove("active");
      });

      if (!isActive) {
        content.classList.add("active");
        title.classList.add("active");
        if (icon) icon.classList.add("open");
        item.classList.add("active");
      } else {
        content.classList.remove("active");
        title.classList.remove("active");
        if (icon) icon.classList.remove("open");
        item.classList.remove("active");
      }
    });
  });
});