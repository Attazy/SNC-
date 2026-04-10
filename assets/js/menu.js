(() => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");
  const subItems = document.querySelectorAll(".has-sub");

  if (!menuToggle || !navLinks) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  submenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      const parentItem = event.currentTarget.closest(".has-sub");
      const isMobile = window.innerWidth <= 760;

      if (!isMobile || !parentItem) {
        return;
      }

      event.preventDefault();
      parentItem.classList.toggle("open");
    });
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      subItems.forEach((item) => item.classList.remove("open"));
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      subItems.forEach((item) => item.classList.remove("open"));
    }
  });
})();
