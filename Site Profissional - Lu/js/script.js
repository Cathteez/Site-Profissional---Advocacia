/* ==============================================
   SCRIPT.JS – Luiza Maia Advocacia
   Funcionalidades:
   • Dark mode persistente (Local Storage)
   • Controle do Menu Mobile
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* =========================================
     1. DARK MODE (TEMA ESCURO)
     ========================================= */
  const themeSwitch = document.getElementById('theme-switch');
  const body = document.body;

  // Verifica se o usuário já escolheu o tema antes
  const savedTheme = localStorage.getItem('darkmode');
  if (savedTheme === 'enabled') {
    body.classList.add('darkmode');
  }

  themeSwitch.addEventListener('click', () => {
    // Alterna a classe CSS
    body.classList.toggle('darkmode');

    // Salva a escolha na memória do navegador
    if (body.classList.contains('darkmode')) {
      localStorage.setItem('darkmode', 'enabled');
    } else {
      localStorage.setItem('darkmode', 'disabled');
    }
  });

  /* =========================================
     2. MENU MOBILE (HAMBURGUER)
     ========================================= */
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Abrir / Fechar menu ao clicar no botão
  navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Fechar o menu automaticamente ao clicar em um link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // UX: Fechar o menu se clicar FORA dele
  document.addEventListener('click', (e) => {
    // Se o clique NÃO foi no botão E NÃO foi dentro do menu
    if (!navbarToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navbarToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

});