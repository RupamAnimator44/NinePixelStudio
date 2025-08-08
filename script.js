// Year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger?.addEventListener('click', () => {
  const open = menu.classList.toggle('show');
  burger.setAttribute('aria-expanded', String(open));
});

// Close menu on link click (mobile)
document.querySelectorAll('#menu a').forEach(a => {
  a.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});

// Simple form handler (no backend yet)
const form = document.forms['contact'];
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thanks! We'll get back to you shortly.");
  form.reset();
});
