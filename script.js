// ── NAV scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Product buttons ──
document.getElementById('btn303').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://solarvst.gumroad.com/l/solar303', '_blank');
});
document.getElementById('btnLadder').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://solarvst.gumroad.com/l/solarladderfilter', '_blank');
});
document.getElementById('btnDrive').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://solarvst.gumroad.com/l/SOLARDRIVE', '_blank');
});
document.getElementById('btnBass').addEventListener('click', function(e) {
  e.preventDefault();
  window.open('https://solarvst.gumroad.com/l/SOLARBASS', '_blank');
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

