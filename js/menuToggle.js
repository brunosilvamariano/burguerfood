const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const menuLinks = document.querySelectorAll('.menu li a');

// Função para fechar o menu
function closeMenu() {
  sideMenu.classList.remove('active');
  overlay.classList.remove('active');
}

// Abrir menu
menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
  overlay.classList.add('active');
});

// Fechar com botão ou clique no overlay
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Clicar nos links do menu
menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      closeMenu();

      // Aguarda o menu sumir antes de rolar suavemente
      setTimeout(() => {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }, 300);
    }
  });
});
