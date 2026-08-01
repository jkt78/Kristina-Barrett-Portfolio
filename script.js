// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll-triggered "draw-on" reveal for the technical drawing plates.
// Adds .revealed to each project card the first time it enters the viewport,
// which triggers the stroke-dashoffset transition defined in styles.css.
const cards = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });

  cards.forEach((card) => observer.observe(card));
} else {
  // No IntersectionObserver support: just show everything immediately.
  cards.forEach((card) => card.classList.add('revealed'));
}
