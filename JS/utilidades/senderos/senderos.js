// Animación simple al cargar
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".sendero-card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";

        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});

// ================= ANIMACIÓN CARDS =================
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".sendero-card");

    cards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.6s ease";

        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200);
    });

    initLightbox(); // ← IMPORTANTE
});


// ================= LIGHTBOX PRO =================
function initLightbox() {

    const links = document.querySelectorAll('.lightbox');
    let currentIndex = 0;

    function showLightbox(index) {
        currentIndex = index;

        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';

        const img = document.createElement('img');
        img.src = links[index].href;

        const closeBtn = document.createElement('div');
        closeBtn.className = 'lightbox-close';
        closeBtn.innerHTML = '&times;';

        const prevBtn = document.createElement('div');
        prevBtn.className = 'lightbox-arrow lightbox-prev';
        prevBtn.innerHTML = '&#10094;';

        const nextBtn = document.createElement('div');
        nextBtn.className = 'lightbox-arrow lightbox-next';
        nextBtn.innerHTML = '&#10095;';

        overlay.appendChild(img);
        overlay.appendChild(closeBtn);
        overlay.appendChild(prevBtn);
        overlay.appendChild(nextBtn);
        document.body.appendChild(overlay);

        function updateImage() {
            img.src = links[currentIndex].href;
        }

        prevBtn.onclick = () => {
            currentIndex = (currentIndex - 1 + links.length) % links.length;
            updateImage();
        };

        nextBtn.onclick = () => {
            currentIndex = (currentIndex + 1) % links.length;
            updateImage();
        };

        closeBtn.onclick = () => overlay.remove();

        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };

        // Swipe móvil
        let startX = 0;

        overlay.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        });

        overlay.addEventListener('touchend', e => {
            let endX = e.changedTouches[0].clientX;
            let diff = startX - endX;

            if (diff > 50) nextBtn.onclick();
            if (diff < -50) prevBtn.onclick();
        });

        // Teclado
        document.onkeydown = (e) => {
            if (e.key === "ArrowLeft") prevBtn.onclick();
            if (e.key === "ArrowRight") nextBtn.onclick();
            if (e.key === "Escape") overlay.remove();
        };
    }

    links.forEach((link, index) => {
        link.addEventListener('click', e => {
            e.preventDefault();
            showLightbox(index);
        });
    });
}



