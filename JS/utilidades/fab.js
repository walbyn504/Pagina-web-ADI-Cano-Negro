const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}