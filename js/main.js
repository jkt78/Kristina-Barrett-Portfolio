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
  const googleFormPanel = document.querySelector("[data-google-form-panel]");
  const googleFormLink = document.querySelector("[data-google-form-link]");
  const configuredGoogleFormUrl = String(window.PORTFOLIO_CONTACT_CONFIG?.googleFormUrl || "").trim();
  let googleFormUrl = "";

  if (configuredGoogleFormUrl) {
    try {
      const candidate = new URL(configuredGoogleFormUrl);
      const isGoogleForm = candidate.protocol === "https:" &&
        (candidate.hostname === "docs.google.com" || candidate.hostname === "forms.gle");
      if (isGoogleForm) googleFormUrl = candidate.href;
    } catch {
      googleFormUrl = "";
    }
  }

  if (googleFormUrl && contactForm && googleFormPanel && googleFormLink) {
    googleFormLink.href = googleFormUrl;
    googleFormPanel.hidden = false;
    contactForm.hidden = true;
  }

  if (contactForm && !googleFormUrl) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const data = new FormData(contactForm);
      const subject = String(data.get("Message subject") || "Portfolio inquiry").trim();
      const inquiryType = String(data.get("Inquiry type") || "General inquiry").trim();
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();
      const body = [
        message,
        "",
        "—",
        `Inquiry type: ${inquiryType}`,
        `From: ${name}`,
        `Reply email: ${email}`
      ].join("\n");

      if (formStatus) formStatus.textContent = "Opening your email app…";
      window.dispatchEvent(new CustomEvent("portfolio:conversion", {
        detail: { action: "compose_direct_email", source: "contact_form" }
      }));
      window.location.href = `mailto:kristinabarrett@kristinabarrett.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  document.querySelectorAll("[data-conversion]").forEach((link) => {
    link.addEventListener("click", () => {
      if (link.dataset.inquiryType && contactForm && !contactForm.hidden) {
        const inquiryType = contactForm.querySelector("#inquiry-type");
        const subject = contactForm.querySelector("#subject");
        if (inquiryType) inquiryType.value = link.dataset.inquiryType;
        if (subject && !subject.value) subject.value = link.dataset.inquirySubject || "Portfolio inquiry";
        window.setTimeout(() => inquiryType?.focus(), 0);
      } else if (link.dataset.inquiryType && googleFormLink && !googleFormPanel?.hidden) {
        window.setTimeout(() => googleFormLink.focus(), 0);
      }

      window.dispatchEvent(new CustomEvent("portfolio:conversion", {
        detail: {
          action: link.dataset.conversion,
          source: link.dataset.conversionSource || "page"
        }
      }));
    });
  });
})();
