(() => {
  const faders = document.querySelectorAll(".fade-in");

  if (!faders.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach((el) => observer.observe(el));
})();
