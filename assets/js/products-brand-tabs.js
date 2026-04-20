(() => {
  const cards = Array.from(document.querySelectorAll(".product-brand-card"));
  const panels = Array.from(document.querySelectorAll(".product-panel"));

  if (!cards.length || !panels.length) {
    return;
  }

  const setActiveBrand = (brand) => {
    cards.forEach((card) => {
      const isActive = card.dataset.brand === brand;
      card.classList.toggle("is-active", isActive);
      card.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.brand === brand;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
      panel.setAttribute("aria-hidden", isActive ? "false" : "true");
    });
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      setActiveBrand(card.dataset.brand);
    });
  });

  const firstActiveBrand = cards.find((card) => card.classList.contains("is-active"))?.dataset.brand || cards[0].dataset.brand;
  setActiveBrand(firstActiveBrand);
})();
