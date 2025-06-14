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
