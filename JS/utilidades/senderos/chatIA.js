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