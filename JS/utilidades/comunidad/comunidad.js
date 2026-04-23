document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
    const scrollProgress = document.getElementById("scrollProgress");
    const sectionTitles = document.querySelectorAll(".section-title");
    const navLinks = document.querySelectorAll(".section-nav-links a");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.88;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add("show");
            }
        });

        sectionTitles.forEach((title) => {
            const titleTop = title.getBoundingClientRect().top;

            if (titleTop < triggerBottom) {
                title.classList.add("show");
            }
        });
    };

    const updateScrollProgress = () => {
        if (!scrollProgress) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        scrollProgress.style.width = `${progress}%`;
    };

    const updateActiveSection = () => {
        if (!navLinks.length) return;

        let currentSection = null;

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            const section = document.querySelector(href);
            if (!section) return;

            const rect = section.getBoundingClientRect();

            if (rect.top <= 140 && rect.bottom >= 140) {
                currentSection = link;
            }
        });

        navLinks.forEach((link) => link.classList.remove("active-section"));

        if (currentSection) {
            currentSection.classList.add("active-section");
        }
    };

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
            link.addEventListener("click", (e) => {
                const target = document.querySelector(href);
                if (!target) return;

                e.preventDefault();

                const headerOffset = 110;
                const elementPosition = target.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            });
        }
    });

    const handleScrollEffects = () => {
        revealOnScroll();
        updateScrollProgress();
        updateActiveSection();
    };

    window.addEventListener("scroll", handleScrollEffects);
    window.addEventListener("load", handleScrollEffects);
    window.addEventListener("resize", handleScrollEffects);

    handleScrollEffects();
});