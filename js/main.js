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
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const data = new FormData(contactForm);
      const subject = String(data.get("subject") || "Portfolio inquiry").trim();
      const inquiryType = String(data.get("inquiry-type") || "General inquiry").trim();
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const body = [
        message,
        "",
        "—",
        `Inquiry type: ${inquiryType}`,
        `From: ${name}`,
        `Reply to: ${email}`
      ].join("\n");

      if (formStatus) formStatus.textContent = "Opening your email application…";
      window.dispatchEvent(new CustomEvent("portfolio:conversion", {
        detail: { action: "compose_email", source: "contact_form" }
      }));
      window.location.href = `mailto:kristinaryanbarrett@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
