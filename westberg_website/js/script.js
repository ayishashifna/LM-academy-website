const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '✕' : '☰';
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('formNote').textContent =
      'Thank you! This demo form is not connected yet. Add a form service to receive enquiries.';
  });
}