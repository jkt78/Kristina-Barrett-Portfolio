(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector("#site-nav");

  const closeNavigation = () => {
    if (!navToggle || !siteNav) return;
    navToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const willOpen = navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(willOpen));
      siteNav.classList.toggle("is-open", willOpen);
      document.body.classList.toggle("nav-open", willOpen);
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeNavigation);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
        navToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeNavigation();
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const contactForm = document.querySelector("[data-contact-form]");
  const formStatus = document.querySelector("[data-form-status]");

  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      if (formStatus) formStatus.textContent = "Sending your inquiry…";
      window.dispatchEvent(new CustomEvent("portfolio:conversion", {
        detail: { action: "submit_inquiry", source: "contact_form" }
      }));
    });
  }

  document.querySelectorAll("[data-conversion]").forEach((link) => {
    link.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("portfolio:conversion", {
        detail: {
          action: link.dataset.conversion,
          source: link.dataset.conversionSource || "page"
        }
      }));
    });
  });
})();
