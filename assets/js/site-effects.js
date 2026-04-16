(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const METRICS_STORAGE_KEY = "snc-cta-metrics-v1";

  const getCurrentPage = () => window.location.pathname.split("/").pop() || "index.html";

  const getElementContext = (element) => {
    if (element.closest(".nav-links")) {
      return "navigation";
    }

    if (element.closest(".hero")) {
      return "hero";
    }

    if (element.closest(".site-footer")) {
      return "footer";
    }

    if (element.closest("#subfeature-detail")) {
      return "subfeature-content";
    }

    return "content";
  };

  const persistMetric = (eventName, payload) => {
    try {
      const rawMetrics = window.localStorage.getItem(METRICS_STORAGE_KEY);
      const metrics = rawMetrics ? JSON.parse(rawMetrics) : {};
      const page = payload?.page || getCurrentPage();
      const label = payload?.context || payload?.destination || "general";
      const metricKey = `${eventName}|${page}|${label}`;

      metrics[metricKey] = (metrics[metricKey] || 0) + 1;
      metrics.lastUpdatedAt = new Date().toISOString();

      window.localStorage.setItem(METRICS_STORAGE_KEY, JSON.stringify(metrics));
    } catch {
      // Ignore localStorage unavailability or JSON parsing errors.
    }
  };

  const trackEvent = (eventName, payload = {}) => {
    if (typeof eventName !== "string" || !eventName) {
      return;
    }

    const eventPayload = {
      page: getCurrentPage(),
      ...payload
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventPayload);
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...eventPayload });
    }

    persistMetric(eventName, eventPayload);
  };

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

      .subfeature-cta.is-focused {
        animation: ctaFocusPulse 0.9s ease;
      }

      @keyframes ctaFocusPulse {
        0% { transform: scale(1); }
        35% { transform: scale(1.04); }
        65% { transform: scale(0.99); }
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

    let rafPending = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
      rafPending = false;
    };

    const scheduleProgressUpdate = () => {
      if (rafPending) {
        return;
      }

      rafPending = true;
      window.requestAnimationFrame(updateProgress);
    };

    scheduleProgressUpdate();
    window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });
    window.addEventListener("resize", scheduleProgressUpdate);
  };

  const initStaggerReveal = () => {
    const groups = [
      ".solutions-grid .fade-in",
      ".services-grid .fade-in",
      ".about-values .about-box.fade-in",
      ".subfeature-kpi-grid .subfeature-kpi-card.fade-in",
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

  const initConversionCtaFocus = () => {
    const ctaButton = document.querySelector(".subfeature-cta");
    if (!ctaButton || prefersReducedMotion) {
      return;
    }

    const ctaObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctaButton.classList.add("is-focused");
            ctaObserver.disconnect();
          }
        });
      },
      { threshold: 0.45 }
    );

    ctaObserver.observe(ctaButton);
  };

  const initCtaTracking = () => {
    document.addEventListener("click", (event) => {
      const clickedElement = event.target.closest("a, button");
      if (!clickedElement) {
        return;
      }

      const href = clickedElement.getAttribute("href") || "";

      if (clickedElement.matches(".subfeature-cta")) {
        trackEvent("subfeature_conversion_click", {
          destination: href || "contact.html",
          context: getElementContext(clickedElement),
          ctaText: clickedElement.textContent?.trim() || "subfeature-cta"
        });
      }

      const isContactClick =
        href === "contact.html" ||
        href === "../contact.html" ||
        href === "#contact" ||
        href.startsWith("mailto:");

      if (isContactClick) {
        trackEvent("contact_click", {
          destination: href,
          context: getElementContext(clickedElement),
          linkText: clickedElement.textContent?.trim() || "contact-link"
        });
      }
    });
  };

  const initSubfeatureViewTracking = () => {
    if (!document.querySelector(".subfeature-cta")) {
      return;
    }

    trackEvent("subfeature_page_view", {
      context: "page-load"
    });
  };

  injectGlobalEffectsStyle();
  initScrollProgress();
  initCtaTracking();
  initSubfeatureViewTracking();

  if (!prefersReducedMotion) {
    initStaggerReveal();
    initConversionCtaFocus();
  }
})();
