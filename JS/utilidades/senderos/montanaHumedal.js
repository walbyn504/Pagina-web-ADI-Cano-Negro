document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-zoom");
    const scrollProgress = document.getElementById("scrollProgress");
    const hero = document.querySelector(".album-header");
    const header = document.querySelector(".main-header");
    const lightboxLinks = document.querySelectorAll(".lightbox");

    /* ================= REVEAL ================= */
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${(index % 3) * 120}ms`;
        revealObserver.observe(element);
    });

    /* ================= BARRA DE PROGRESO ================= */
    function updateScrollProgress() {
        if (!scrollProgress) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        scrollProgress.style.width = `${progress}%`;
    }

    /* ================= HEADER SCROLLED ================= */
    function updateHeaderState() {
        if (!header) return;

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    /* ================= PARALLAX HERO ================= */
    function updateParallax() {
        if (!hero) return;

        if (window.innerWidth <= 900) {
            hero.style.backgroundPosition = "center center";
            return;
        }

        const offset = window.scrollY * 0.35;
        hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    }

    /* ================= LIGHTBOX ================= */
    const imageSources = Array.from(lightboxLinks).map(link => link.getAttribute("href"));
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;

        const overlay = document.createElement("div");
        overlay.className = "lightbox-overlay";
        overlay.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <span class="lightbox-arrow lightbox-prev">&#10094;</span>
            <img src="${imageSources[currentIndex]}" alt="Imagen ampliada">
            <span class="lightbox-arrow lightbox-next">&#10095;</span>
        `;

        document.body.appendChild(overlay);
        document.body.style.overflow = "hidden";

        const img = overlay.querySelector("img");

        function updateImage() {
            img.src = imageSources[currentIndex];
        }

        overlay.querySelector(".lightbox-close").addEventListener("click", () => {
            overlay.remove();
            document.body.style.overflow = "";
        });

        overlay.querySelector(".lightbox-prev").addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
            updateImage();
        });

        overlay.querySelector(".lightbox-next").addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % imageSources.length;
            updateImage();
        });

        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.remove();
                document.body.style.overflow = "";
            }
        });
    }

    lightboxLinks.forEach((link, index) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    /* ================= EVENTOS ================= */
    function handleScroll() {
        updateScrollProgress();
        updateHeaderState();
        updateParallax();
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();
});