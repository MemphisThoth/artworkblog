document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  if (!toggle || !nav) return; // safety

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});
