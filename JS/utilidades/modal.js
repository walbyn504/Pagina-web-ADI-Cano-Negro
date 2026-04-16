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