document.addEventListener("DOMContentLoaded", () => {
    const pageName = document.body.dataset.page;
    const pageTranslations = window.translations?.[pageName];

    const elements = document.querySelectorAll("[data-i18n]");
    const languageDropdown = document.querySelector(".language-dropdown");
    const languageToggle = document.getElementById("languageToggle");
    const languageOptions = document.querySelectorAll(".language-option");
    const currentLanguage = document.getElementById("currentLanguage");

    function setLanguage(lang) {
        if (!pageTranslations || !pageTranslations[lang]) return;

        elements.forEach(element => {
            const key = element.getAttribute("data-i18n");

            if (pageTranslations[lang][key] !== undefined) {
                element.innerHTML = pageTranslations[lang][key];
            }
        });

        languageOptions.forEach(option => {
            option.classList.remove("active");
            if (option.dataset.lang === lang) {
                option.classList.add("active");
            }
        });

        if (currentLanguage) {
            currentLanguage.textContent = lang.toUpperCase();
        }

        document.documentElement.lang = lang;
        localStorage.setItem("language", lang);
    }

    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle("open");
        });
    }

    languageOptions.forEach(option => {
        option.addEventListener("click", (e) => {
            e.stopPropagation();

            const selectedLang = option.dataset.lang;
            setLanguage(selectedLang);

            if (languageDropdown) {
                languageDropdown.classList.remove("open");
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (languageDropdown && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove("open");
        }
    });

    const savedLanguage = localStorage.getItem("language") || "es";
    setLanguage(savedLanguage);
});