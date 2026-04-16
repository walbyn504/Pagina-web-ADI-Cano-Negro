document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    const counters = document.querySelectorAll(".counter");
    const scrollProgress = document.getElementById("scrollProgress");
    const hero = document.querySelector(".hero");

    /* ================= REVEAL ================= */
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* ================= CONTADORES ================= */
    function animateCounter(counter) {
        const target = Number(counter.dataset.target) || 0;
        const suffix = counter.dataset.suffix || "";
        const duration = 1600;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(target * easeOut);

            counter.textContent = `${currentValue}${suffix}`;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = `${target}${suffix}`;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    /* ================= BARRA DE PROGRESO ================= */
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollProgress) {
            scrollProgress.style.width = `${progress}%`;
        }
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    /* ================= PARALLAX SUAVE HERO ================= */
    function updateParallax() {
        if (!hero || window.innerWidth <= 900) return;

        const offset = window.scrollY * 0.35;
        hero.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    }

    window.addEventListener("scroll", updateParallax);
    updateParallax();
});