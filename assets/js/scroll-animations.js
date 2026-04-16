(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const faders = Array.from(document.querySelectorAll(".fade-in"));

  if (!faders.length) {
    return;
  }

  const revealAll = () => {
    faders.forEach((element) => {
      element.classList.add("show");
    });
  };

  const parentGroups = new Map();
  faders.forEach((element) => {
    const parent = element.parentElement;
    if (!parent) {
      return;
    }

    if (!parentGroups.has(parent)) {
      parentGroups.set(parent, []);
    }

    parentGroups.get(parent).push(element);
  });

  parentGroups.forEach((items) => {
    if (items.length < 2) {
      return;
    }

    items.forEach((element, index) => {
      if (!element.style.transitionDelay) {
        const delay = Math.min(index * 90, 420);
        element.style.transitionDelay = `${delay}ms`;
      }
    });
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealAll();
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
    {
      threshold: 0.18,
      rootMargin: "0px 0px -6% 0px"
    }
  );

  faders.forEach((el) => observer.observe(el));
})();
