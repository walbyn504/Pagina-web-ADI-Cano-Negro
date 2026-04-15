const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".main-header");

        if (header) {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }
    });
});