window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const overlay = document.getElementById("overlayAnos");
        overlay?.classList.remove("fade-hidden");
        overlay?.classList.add("fade-visible");
        overlay?.setAttribute("aria-hidden", "false");
    }, 3000); // 10 segundos
});