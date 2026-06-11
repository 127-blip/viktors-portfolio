// Nav active state on scroll
const sections = [
  { id: 'nav-home',    target: document.getElementById('hero') },
  { id: 'nav-work',    target: document.getElementById('work') },
  { id: 'nav-about',   target: document.getElementById('about') },
  { id: 'nav-contact', target: document.getElementById('contact') },
];

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  const atBottom = (window.innerHeight + window.scrollY) >= document.body.scrollHeight - 60;
  let current = 'nav-home';
  sections.forEach(({ id, target }) => {
    if (target && target.offsetTop <= scrollY) current = id;
  });
  if (atBottom) current = 'nav-contact';
  document.querySelectorAll('.nav__pill a').forEach(a => a.classList.remove('active'));
  const el = document.getElementById(current);
  if (el) el.classList.add('active');
}
window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();

// Counter animation
function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Intersection observer for counters + timeline
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    // Counter
    if (entry.target.dataset.count) {
      animateCounter(entry.target, parseInt(entry.target.dataset.count));
      observer.unobserve(entry.target);
    }

    // Timeline fade-in
    if (entry.target.classList.contains('timeline__item')) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
document.querySelectorAll('.timeline__item').forEach(el => observer.observe(el));
