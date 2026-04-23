document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
    const scrollProgress = document.getElementById("scrollProgress");
    const sectionTitles = document.querySelectorAll(".section-title");
    const navLinks = document.querySelectorAll(".section-nav-links a");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.88;

        revealElements.forEach((el) => {
            if (el.getBoundingClientRect().top < triggerBottom) {
                el.classList.add("show");
            }
        });

        sectionTitles.forEach((title) => {
            if (title.getBoundingClientRect().top < triggerBottom) {
                title.classList.add("show");
            }
        });
    };

    const updateScrollProgress = () => {
        if (!scrollProgress) return;

        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.width = (scrollTop / height) * 100 + "%";
    };

    const updateActiveSection = () => {
        let current = null;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (!section) return;

            const rect = section.getBoundingClientRect();

            if (rect.top <= 140 && rect.bottom >= 140) {
                current = link;
            }
        });

        navLinks.forEach(link => link.classList.remove("active-section"));
        if (current) current.classList.add("active-section");
    };

    const handleScroll = () => {
        revealOnScroll();
        updateScrollProgress();
        updateActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    handleScroll();
});