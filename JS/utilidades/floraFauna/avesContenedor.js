document.addEventListener("DOMContentLoaded", () => {
    /* ================= REVEAL ================= */
    const revealElements = document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-zoom"
    );
    const sectionTitles = document.querySelectorAll(".section-title");
    const scrollProgress = document.getElementById("scrollProgress");

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14
    });

    revealElements.forEach((el) => revealObserver.observe(el));
    sectionTitles.forEach((title) => revealObserver.observe(title));

    /* ================= BARRA DE PROGRESO ================= */
    function updateScrollProgress() {
        if (!scrollProgress) return;

        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        scrollProgress.style.width = `${progress}%`;
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    /* ================= SLIDERS ================= */
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((sliderContainer) => {
        const slides = sliderContainer.querySelectorAll(".bird-slider img");
        const prevBtn = sliderContainer.querySelector(".slider-btn.prev");
        const nextBtn = sliderContainer.querySelector(".slider-btn.next");

        if (!slides.length || !prevBtn || !nextBtn) return;

        let currentIndex = 0;

        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === 0);
        });

        function showSlide(index) {
            slides.forEach((slide) => slide.classList.remove("active"));
            slides[index].classList.add("active");
        }

        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });

        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    });
});