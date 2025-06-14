// Lógica de navegação entre páginas
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const paginaAlvo = e.target.getAttribute('data-page');

    document.querySelectorAll('.pagina').forEach(sec => {
      sec.classList.remove('ativa');
    });

    document.getElementById(paginaAlvo).classList.add('ativa');
  });
});


const toggleBtn = document.getElementById("toggleSubmenu");
const submenu = document.querySelector(".submenu-anos");

toggleBtn.addEventListener("click", () => {
  submenu.classList.toggle("show");
});

// Fecha o menu se clicar fora
document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !submenu.contains(e.target)) {
    submenu.classList.remove("show");
  }
});

