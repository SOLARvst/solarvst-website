// ── NAV scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav toggle ──
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── Gumroad links (fill in when ready) ──
const LINKS = {
  solar303:   'https://solarvst.gumroad.com/l/solar303',
  solarLadder: 'https://solarvst.gumroad.com/l/solarladderfilter',
};

document.getElementById('btn303').addEventListener('click', e => {
  if (LINKS.solar303) { window.open(LINKS.solar303, '_blank'); }
  else { e.preventDefault(); }
});

document.getElementById('btnLadder').addEventListener('click', e => {
  if (LINKS.solarLadder) { window.open(LINKS.solarLadder, '_blank'); }
  else { e.preventDefault(); }
});
