const toggleBtn = document.getElementById("toggleSubmenu");
const submenu = document.querySelector(".submenu-anos");

// Alterna a classe 'show' ao clicar no botão para abrir/fechar submenu
toggleBtn.addEventListener("click", () => {
    submenu.classList.toggle("show");
});

// Fecha o submenu ao clicar fora dele ou do botão
document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !submenu.contains(e.target)) {
        submenu.classList.remove("show");
    }
});







