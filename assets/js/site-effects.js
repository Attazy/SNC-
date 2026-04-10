(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const injectGlobalEffectsStyle = () => {
    const style = document.createElement("style");
    style.textContent = `
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        transform-origin: left center;
        transform: scaleX(0);
        z-index: 1200;
        background: linear-gradient(90deg, #b88a2f, #25d366);
        box-shadow: 0 4px 12px rgba(26, 39, 54, 0.18);
      }

      .wa-button.pulse-attention {
        animation: waPulse 1.2s ease;
      }

      @keyframes waPulse {
        0% { transform: scale(1); }
        35% { transform: scale(1.14); }
        65% { transform: scale(0.96); }
        100% { transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
  };

  const initScrollProgress = () => {
    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  };

  const initStaggerReveal = () => {
    const groups = [
      ".solutions-grid .fade-in",
      ".services-grid .fade-in",
      ".about-values .about-box.fade-in",
      ".subfeature-content .subfeature-block",
      ".contact-wrap .fade-in"
    ];

    groups.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        const delay = Math.min(index * 90, 360);
        el.style.transitionDelay = `${delay}ms`;
      });
    });
  };

  const initTiltCards = () => {
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const targets = document.querySelectorAll(
      ".solution-item, .service-item, .about-box, .subfeature-block, .partner-item"
    );

    targets.forEach((card) => {
      card.style.willChange = "transform";
      card.style.transition = "transform 0.18s ease";

      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const offsetX = (event.clientX - rect.left) / rect.width;
        const offsetY = (event.clientY - rect.top) / rect.height;

        const rotateY = (offsetX - 0.5) * 8;
        const rotateX = (0.5 - offsetY) * 8;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-3px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
      });
    });
  };

  const initWhatsAppAttention = () => {
    const button = document.querySelector(".wa-button");
    if (!button || prefersReducedMotion) {
      return;
    }

    const triggerPulse = () => {
      button.classList.remove("pulse-attention");
      window.requestAnimationFrame(() => button.classList.add("pulse-attention"));
    };

    window.setTimeout(triggerPulse, 1400);
    window.setInterval(triggerPulse, 9000);
  };

  injectGlobalEffectsStyle();
  initScrollProgress();
  initStaggerReveal();
  initTiltCards();
  initWhatsAppAttention();
})();
