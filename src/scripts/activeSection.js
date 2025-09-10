// src/scripts/activeSection.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  function activateLink() {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 80) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('text-white', 'font-bold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-white', 'font-bold');
      }
    });
  }

  window.addEventListener('scroll', activateLink);
  activateLink(); // Inicializa al cargar
});
