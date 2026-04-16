(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const supportsTranslateProperty = Boolean(window.CSS && window.CSS.supports && window.CSS.supports("translate", "1px"));
  const METRICS_STORAGE_KEY = "snc-cta-metrics-v1";

  const CARD_SELECTOR = [
    ".solution-item",
    ".service-item",
    ".about-box",
    ".product-box",
    ".why-card",
    ".mini-card",
    ".contact-box",
    ".subfeature-block"
  ].join(", ");

  const MAGNETIC_SELECTOR = [
    ".hero-cta a",
    ".subfeature-cta",
    ".brief-cta-link",
    ".mini-card a",
    ".solution-item a",
    ".service-item a",
    ".wa-button"
  ].join(", ");

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

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
    if (document.getElementById("snc-global-effects-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "snc-global-effects-style";
    style.textContent = `
      .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        transform-origin: left center;
        transform: scaleX(0);
        opacity: 0.35;
        z-index: 1200;
        background: linear-gradient(90deg, #b88a2f 0%, #34d399 45%, #3b82f6 100%);
        box-shadow: 0 4px 14px rgba(26, 39, 54, 0.22);
        transition: opacity 0.25s ease, filter 0.25s ease;
      }

      .hero {
        --spot-x: 50%;
        --spot-y: 35%;
      }

      .hero-spotlight-layer {
        position: absolute;
        inset: -12%;
        pointer-events: none;
        z-index: 1;
        background: radial-gradient(
          620px circle at var(--spot-x) var(--spot-y),
          rgba(255, 255, 255, 0.22),
          rgba(255, 255, 255, 0) 58%
        );
        opacity: 0.68;
      }

      .hero-content {
        transition: translate 0.28s ease;
      }

      .js-premium-card {
        position: relative;
        isolation: isolate;
        transform-style: preserve-3d;
        will-change: transform;
        transition:
          transform 0.22s cubic-bezier(0.22, 0.61, 0.36, 1),
          box-shadow 0.22s ease,
          border-color 0.22s ease;
      }

      .js-premium-card::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: radial-gradient(
          340px circle at var(--mx, 50%) var(--my, 50%),
          rgba(255, 255, 255, 0.32),
          rgba(255, 255, 255, 0) 64%
        );
        opacity: 0;
        transition: opacity 0.22s ease;
      }

      .js-premium-card.is-hovered {
        border-color: rgba(184, 138, 47, 0.38);
        box-shadow: 0 18px 36px rgba(12, 30, 22, 0.18);
      }

      .js-premium-card.is-hovered::after {
        opacity: 1;
      }

      .js-magnetic {
        transition: translate 0.18s ease, box-shadow 0.22s ease, filter 0.22s ease;
        will-change: translate;
      }

      .js-magnetic.is-engaged {
        filter: saturate(1.08);
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

      @media (prefers-reduced-motion: reduce) {
        .js-premium-card,
        .js-magnetic,
        .hero-content {
          transition: none !important;
        }
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
      progress.style.opacity = ratio > 0.01 ? "1" : "0.35";
      progress.style.filter = `saturate(${(1 + ratio * 0.45).toFixed(2)})`;
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

  const initHeroSpotlight = () => {
    const heroes = document.querySelectorAll(".hero");
    if (!heroes.length || prefersReducedMotion) {
      return;
    }

    heroes.forEach((hero) => {
      if (!hero.querySelector(".hero-spotlight-layer")) {
        const spotlight = document.createElement("div");
        spotlight.className = "hero-spotlight-layer";
        spotlight.setAttribute("aria-hidden", "true");
        hero.appendChild(spotlight);
      }

      const content = hero.querySelector(".hero-content");
      if (!supportsFinePointer) {
        return;
      }

      let rafPending = false;
      let nextX = 50;
      let nextY = 35;

      const applySpotlight = () => {
        hero.style.setProperty("--spot-x", `${nextX}%`);
        hero.style.setProperty("--spot-y", `${nextY}%`);

        if (content && supportsTranslateProperty) {
          const offsetX = ((nextX - 50) / 50) * 8;
          const offsetY = ((nextY - 40) / 60) * 6;
          content.style.translate = `${offsetX.toFixed(2)}px ${offsetY.toFixed(2)}px`;
        }

        rafPending = false;
      };

      const scheduleSpotlight = () => {
        if (rafPending) {
          return;
        }

        rafPending = true;
        window.requestAnimationFrame(applySpotlight);
      };

      hero.addEventListener("pointermove", (event) => {
        const rect = hero.getBoundingClientRect();
        const px = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const py = clamp((event.clientY - rect.top) / rect.height, 0, 1);

        nextX = px * 100;
        nextY = py * 100;
        scheduleSpotlight();
      });

      hero.addEventListener("pointerleave", () => {
        nextX = 50;
        nextY = 35;
        scheduleSpotlight();
      });
    });
  };

  const initCardTilt = () => {
    const cards = document.querySelectorAll(CARD_SELECTOR);
    if (!cards.length) {
      return;
    }

    cards.forEach((card) => {
      card.classList.add("js-premium-card");
    });

    if (prefersReducedMotion || !supportsFinePointer) {
      return;
    }

    cards.forEach((card) => {
      let rafPending = false;
      let pointerX = 0;
      let pointerY = 0;
      let hovering = false;

      const applyTilt = () => {
        const rotateX = (-pointerY * 4.5).toFixed(2);
        const rotateY = (pointerX * 6).toFixed(2);
        const lift = hovering ? -6 : 0;
        card.style.transform = `perspective(980px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${lift}px)`;
        rafPending = false;
      };

      const scheduleTilt = () => {
        if (rafPending) {
          return;
        }

        rafPending = true;
        window.requestAnimationFrame(applyTilt);
      };

      card.addEventListener("pointerenter", () => {
        hovering = true;
        card.classList.add("is-hovered");
        scheduleTilt();
      });

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = clamp(event.clientX - rect.left, 0, rect.width);
        const y = clamp(event.clientY - rect.top, 0, rect.height);

        pointerX = (x / rect.width - 0.5) * 2;
        pointerY = (y / rect.height - 0.5) * 2;

        card.style.setProperty("--mx", `${x.toFixed(2)}px`);
        card.style.setProperty("--my", `${y.toFixed(2)}px`);
        scheduleTilt();
      });

      card.addEventListener("pointerleave", () => {
        hovering = false;
        pointerX = 0;
        pointerY = 0;
        card.classList.remove("is-hovered");
        scheduleTilt();
      });
    });
  };

  const initMagneticButtons = () => {
    const buttons = document.querySelectorAll(MAGNETIC_SELECTOR);
    if (!buttons.length) {
      return;
    }

    buttons.forEach((button) => {
      button.classList.add("js-magnetic");
    });

    if (prefersReducedMotion || !supportsFinePointer || !supportsTranslateProperty) {
      return;
    }

    buttons.forEach((button) => {
      let rafPending = false;
      let offsetX = 0;
      let offsetY = 0;

      const applyTranslate = () => {
        button.style.translate = `${offsetX.toFixed(2)}px ${offsetY.toFixed(2)}px`;
        rafPending = false;
      };

      const scheduleTranslate = () => {
        if (rafPending) {
          return;
        }

        rafPending = true;
        window.requestAnimationFrame(applyTranslate);
      };

      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = clamp(event.clientX - rect.left, 0, rect.width);
        const y = clamp(event.clientY - rect.top, 0, rect.height);

        const intensity = clamp(Math.min(rect.width, rect.height) * 0.15, 6, 12);
        offsetX = ((x / rect.width) - 0.5) * intensity;
        offsetY = ((y / rect.height) - 0.5) * intensity;

        button.classList.add("is-engaged");
        scheduleTranslate();
      });

      button.addEventListener("pointerleave", () => {
        offsetX = 0;
        offsetY = 0;
        button.classList.remove("is-engaged");
        scheduleTranslate();
      });

      button.addEventListener("blur", () => {
        offsetX = 0;
        offsetY = 0;
        button.classList.remove("is-engaged");
        scheduleTranslate();
      });
    });
  };

  const parseMetricValue = (text) => {
    if (typeof text !== "string") {
      return null;
    }

    const normalized = text.trim();
    if (!normalized || normalized.includes("/")) {
      return null;
    }

    const match = normalized.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return null;
    }

    const target = Number.parseFloat(match[1]);
    if (!Number.isFinite(target)) {
      return null;
    }

    return {
      target,
      suffix: match[2] || "",
      decimals: Number.isInteger(target) ? 0 : 1
    };
  };

  const initMetricCounters = () => {
    const counters = Array.from(document.querySelectorAll(".hero-metrics strong, [data-count-up]"));
    if (!counters.length) {
      return;
    }

    const items = counters
      .map((element) => {
        const sourceText = element.getAttribute("data-count-up") || element.textContent || "";
        const parsed = parseMetricValue(sourceText);

        if (!parsed) {
          return null;
        }

        return {
          element,
          ...parsed
        };
      })
      .filter(Boolean);

    if (!items.length) {
      return;
    }

    const runCounter = ({ element, target, suffix, decimals }) => {
      if (element.dataset.counted === "true") {
        return;
      }

      const duration = clamp(Math.round(900 + target * 8), 900, 2200);
      const startTime = performance.now();

      const tick = (timestamp) => {
        const progress = clamp((timestamp - startTime) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        const value = decimals ? current.toFixed(decimals) : String(Math.round(current));
        element.textContent = `${value}${suffix}`;

        if (progress < 1) {
          window.requestAnimationFrame(tick);
          return;
        }

        const finalValue = decimals ? target.toFixed(decimals) : String(Math.round(target));
        element.textContent = `${finalValue}${suffix}`;
        element.dataset.counted = "true";
      };

      window.requestAnimationFrame(tick);
    };

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach(runCounter);
      return;
    }

    const counterObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const item = items.find(({ element }) => element === entry.target);
          if (item) {
            runCounter(item);
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.45 }
    );

    items.forEach(({ element }) => {
      counterObserver.observe(element);
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
  initHeroSpotlight();
  initCardTilt();
  initMagneticButtons();
  initMetricCounters();
  initCtaTracking();
  initSubfeatureViewTracking();

  if (!prefersReducedMotion) {
    initConversionCtaFocus();
  }
})();
