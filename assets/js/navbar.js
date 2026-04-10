(() => {
  const navbar = document.getElementById("navbar");
  if (!navbar) {
    return;
  }

  const updateNavbar = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
    }
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);
})();
