(() => {
  const viewport = document.getElementById("partnersViewport");
  const track = document.getElementById("partnersTrack");
  const prevBtn = document.querySelector(".partners-prev");
  const nextBtn = document.querySelector(".partners-next");
  const items = track ? Array.from(track.querySelectorAll(".partner-item")) : [];

  if (!viewport || !track || !prevBtn || !nextBtn || !items.length) {
    return;
  }

  let currentIndex = 0;

  const getStep = () => {
    const first = items[0];
    if (!first) {
      return 0;
    }
    const gap = parseFloat(window.getComputedStyle(track).gap || "0");
    return first.getBoundingClientRect().width + gap;
  };

  const getVisibleCount = () => {
    if (window.innerWidth <= 760) {
      return 2;
    }
    if (window.innerWidth <= 980) {
      return 3;
    }
    return 4;
  };

  const slide = (direction) => {
    const step = getStep();
    if (!step) {
      return;
    }

    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, items.length - visibleCount);

    if (direction > 0) {
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }

    viewport.scrollTo({ left: currentIndex * step, behavior: "smooth" });
  };

  prevBtn.addEventListener("click", () => slide(-1));
  nextBtn.addEventListener("click", () => slide(1));

  window.addEventListener("resize", () => {
    const step = getStep();
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, items.length - visibleCount);
    currentIndex = Math.min(currentIndex, maxIndex);
    viewport.scrollTo({ left: currentIndex * step, behavior: "auto" });
  });

  let touchStartX = 0;
  let touchEndX = 0;

  viewport.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
      touchEndX = touchStartX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchmove",
    (event) => {
      touchEndX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  viewport.addEventListener(
    "touchend",
    () => {
      const distance = touchStartX - touchEndX;
      if (Math.abs(distance) < 40) {
        return;
      }
      if (distance > 0) {
        slide(1);
      } else {
        slide(-1);
      }
    },
    { passive: true }
  );
})();
