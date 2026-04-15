const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}


const openHelp = document.getElementById("openHelp");
const closeHelp = document.getElementById("closeHelp");
const helpModal = document.getElementById("helpModal");

if (openHelp && closeHelp && helpModal) {

    openHelp.addEventListener("click", (e) => {
        e.preventDefault();
        helpModal.classList.add("active");
    });

    closeHelp.addEventListener("click", () => {
        helpModal.classList.remove("active");
    });

    helpModal.addEventListener("click", (e) => {
        if (e.target === helpModal) {
            helpModal.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const chatIaTab = document.getElementById("chatIaTab");
    const chatIaToggle = document.getElementById("chatIaToggle");

    if (chatIaTab && chatIaToggle) {
        chatIaToggle.addEventListener("click", (e) => {
            e.preventDefault();
            chatIaTab.classList.toggle("open");
        });
    }
});

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