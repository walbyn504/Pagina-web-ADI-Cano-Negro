document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        es: {
            nav_inicio: "Inicio",
            nav_senderos: "Senderos",
            nav_comunidad: "Comunidad",
            nav_flora: "Flora y Fauna",
            nav_emprendedores: "Emprendedores",
            nav_videos: "Videos",
            nav_bandera: "Bandera Azul Ecológica",

            hero_tag: "Naturaleza, cultura y conservación",
            hero_title: "Descubre la belleza de <span>Caño Negro</span>",
            hero_description: "Un destino único en el norte de Costa Rica, rodeado de biodiversidad, paisajes impresionantes y una comunidad comprometida con la protección de su riqueza natural.",
            hero_location: "Caño Negro, Los Chiles, Alajuela",

            about_label: "Sobre el refugio",
            about_title: "Refugio de Vida Silvestre Caño Negro",
            about_text_1: "El Refugio de Vida Silvestre Caño Negro es uno de los humedales más importantes de Costa Rica y Centroamérica. Su riqueza ecológica lo convierte en un lugar esencial para la protección de aves, reptiles, mamíferos y una amplia diversidad de flora.",
            about_text_2: "Además de su valor ambiental, Caño Negro representa una oportunidad para el ecoturismo, la investigación y el fortalecimiento de la comunidad a través de un desarrollo vinculado con la naturaleza.",
            about_credit: "Foto: Juan Pérez",

            stats_label: "Nuestra riqueza natural",
            stats_title: "Caño Negro en cifras",
            stats_subtitle: "Un destino que destaca por su biodiversidad, su importancia ecológica y el valor de su entorno natural.",
            stats_1: "Especies de aves",
            stats_2: "Compromiso con la conservación",
            stats_3: "Humedal de gran importancia ecológica",

            explore_label: "Explora más",
            explore_title: "Nuestra comunidad y sus espacios",
            explore_subtitle: "Conoce algunos de los elementos que forman parte de la identidad natural, social y cultural de Caño Negro.",

            card_tag_1: "Naturaleza",
            card_title_1: "Flora y Fauna",
            card_desc_1: "Descubre especies emblemáticas y la riqueza biológica que distingue a la zona.",

            card_tag_2: "Aventura",
            card_title_2: "Senderos Naturales",
            card_desc_2: "Recorre espacios llenos de vegetación, paisajes y conexión con el entorno.",

            card_tag_3: "Sostenibilidad",
            card_title_3: "Bandera Azul Ecológica",
            card_desc_3: "Conoce iniciativas ambientales que fortalecen el compromiso de la comunidad.",

            card_tag_4: "Comunidad",
            card_title_4: "Emprendedores",
            card_desc_4: "Apoya iniciativas locales y conoce proyectos impulsados por la comunidad.",

            card_link: "Ver más información",

            banner_tag: "Caño Negro",
            banner_title: "Un lugar donde la naturaleza y la comunidad conviven en armonía",
            banner_desc: "Vive la esencia de un destino lleno de vida, tradición y paisajes que inspiran a valorar y proteger nuestro entorno.",

            footer_text: "© 2026 ADI Caño Negro - Todos los derechos reservados",

            // ================= SENDEROS =================
            senderos_hero_tag: "Naturaleza, senderismo y conservación",
            senderos_hero_title: "Senderos Naturales de <span>Caño Negro</span>",
            senderos_hero_desc: "Recorre senderos rodeados de bosque, humedales y vida silvestre, en un entorno donde cada paso invita a descubrir la riqueza natural de Caño Negro.",

            senderos_nav_info: "Información General",
            senderos_nav_trails: "Senderos",

            senderos_info_label: "Explora con responsabilidad",
            senderos_info_title: "Información acerca de los senderos",
            senderos_info_subtitle: "Antes de iniciar tu recorrido, toma en cuenta algunas recomendaciones para disfrutar de una experiencia segura, consciente y respetuosa con la naturaleza.",

            senderos_box1_title: "Recomendaciones",
            senderos_box1_desc: "Utiliza calzado cómodo, lleva agua, protector solar y ropa adecuada para caminar en un entorno natural.",

            senderos_box2_title: "Conservación",
            senderos_box2_desc: "Respeta la flora y la fauna, no dejes residuos y ayuda a proteger el equilibrio del ecosistema.",

            senderos_box3_title: "Observación",
            senderos_box3_desc: "Lleva cámara o binoculares para disfrutar mejor del paisaje, las aves y los detalles del entorno.",

            senderos_section_label: "Rutas disponibles",
            senderos_section_title: "Nuestros Senderos",
            senderos_section_subtitle: "Cada sendero ofrece una experiencia distinta, conectando a los visitantes con paisajes, humedales, bosques y una biodiversidad única.",

            senderos_card1_tag: "Bosque",
            senderos_card1_title: "Sendero La Montaña",
            senderos_card1_desc: "Recorrido de 2 km rodeado de bosque primario, vegetación abundante y miradores naturales ideales para contemplar el paisaje.",
            senderos_card1_time: "1.5 horas",

            senderos_card2_tag: "Humedal",
            senderos_card2_title: "Sendero El Humedal",
            senderos_card2_desc: "Ideal para la observación de aves, fotografía natural y una experiencia tranquila en uno de los ecosistemas más valiosos de la zona.",
            senderos_card2_time: "2 horas",

            senderos_closing_tag: "Caño Negro",
            senderos_closing_title: "Cada sendero es una oportunidad para conectar con la naturaleza y aprender a conservarla",
            senderos_closing_desc: "Caminar por estos espacios permite descubrir la vida que habita en cada rincón, valorar la biodiversidad y fortalecer el compromiso con su protección"
        },

        en: {
            nav_inicio: "Home",
            nav_senderos: "Trails",
            nav_comunidad: "Community",
            nav_flora: "Flora & Fauna",
            nav_emprendedores: "Entrepreneurs",
            nav_videos: "Videos",
            nav_bandera: "Blue Ecological Flag",

            hero_tag: "Nature, culture and conservation",
            hero_title: "Discover the beauty of <span>Caño Negro</span>",
            hero_description: "A unique destination in northern Costa Rica, surrounded by biodiversity, breathtaking landscapes, and a community committed to protecting its natural wealth.",
            hero_location: "Caño Negro, Los Chiles, Alajuela",

            about_label: "About the refuge",
            about_title: "Caño Negro Wildlife Refuge",
            about_text_1: "The Caño Negro Wildlife Refuge is one of the most important wetlands in Costa Rica and Central America. Its ecological richness makes it an essential place for the protection of birds, reptiles, mammals, and a wide diversity of flora.",
            about_text_2: "In addition to its environmental value, Caño Negro represents an opportunity for ecotourism, research, and community strengthening through development linked to nature.",
            about_credit: "Photo: Juan Pérez",

            stats_label: "Our natural wealth",
            stats_title: "Caño Negro in numbers",
            stats_subtitle: "A destination that stands out for its biodiversity, ecological importance, and the value of its natural surroundings.",
            stats_1: "Bird species",
            stats_2: "Commitment to conservation",
            stats_3: "Wetland of great ecological importance",

            explore_label: "Explore more",
            explore_title: "Our community and its spaces",
            explore_subtitle: "Learn about some of the elements that are part of Caño Negro's natural, social, and cultural identity.",

            card_tag_1: "Nature",
            card_title_1: "Flora & Fauna",
            card_desc_1: "Discover emblematic species and the biological richness that distinguishes the area.",

            card_tag_2: "Adventure",
            card_title_2: "Nature Trails",
            card_desc_2: "Walk through spaces full of vegetation, landscapes, and connection with the environment.",

            card_tag_3: "Sustainability",
            card_title_3: "Blue Ecological Flag",
            card_desc_3: "Learn about environmental initiatives that strengthen the community's commitment.",

            card_tag_4: "Community",
            card_title_4: "Entrepreneurs",
            card_desc_4: "Support local initiatives and discover projects driven by the community.",

            card_link: "See more information",

            banner_tag: "Caño Negro",
            banner_title: "A place where nature and community live in harmony",
            banner_desc: "Experience the essence of a destination full of life, tradition, and landscapes that inspire us to value and protect our environment.",

            footer_text: "© 2026 ADI Caño Negro - All rights reserved",

            // ================= SENDEROS =================
            senderos_hero_tag: "Nature, hiking and conservation",
            senderos_hero_title: "Nature Trails of <span>Caño Negro</span>",
            senderos_hero_desc: "Walk through trails surrounded by forest, wetlands, and wildlife, in an environment where every step invites you to discover the natural richness of Caño Negro.",

            senderos_nav_info: "General Information",
            senderos_nav_trails: "Trails",

            senderos_info_label: "Explore responsibly",
            senderos_info_title: "Information about the trails",
            senderos_info_subtitle: "Before starting your tour, keep in mind some recommendations to enjoy a safe, conscious, and respectful experience with nature.",

            senderos_box1_title: "Recommendations",
            senderos_box1_desc: "Wear comfortable shoes, bring water, sunscreen, and suitable clothing for walking in a natural environment.",

            senderos_box2_title: "Conservation",
            senderos_box2_desc: "Respect flora and fauna, do not leave waste, and help protect the balance of the ecosystem.",

            senderos_box3_title: "Observation",
            senderos_box3_desc: "Bring a camera or binoculars to better enjoy the landscape, birds, and the details of the environment.",

            senderos_section_label: "Available routes",
            senderos_section_title: "Our Trails",
            senderos_section_subtitle: "Each trail offers a different experience, connecting visitors with landscapes, wetlands, forests, and unique biodiversity.",

            senderos_card1_tag: "Forest",
            senderos_card1_title: "Mountain  Trail",
            senderos_card1_desc: "A 2 km route surrounded by primary forest, abundant vegetation, and natural viewpoints ideal for enjoying the landscape.",
            senderos_card1_time: "1.5 hours",

            senderos_card2_tag: "Wetland",
            senderos_card2_title: "Wetland Trail",
            senderos_card2_desc: "Ideal for birdwatching, nature photography, and a peaceful experience in one of the area’s most valuable ecosystems.",
            senderos_card2_time: "2 hours",

            senderos_closing_tag: "Caño Negro",
            senderos_closing_title: "Each trail is an opportunity to connect with nature and learn how to conserve it",
            senderos_closing_desc: "Walking through these spaces allows you to discover the life that inhabits every corner, value biodiversity, and strengthen the commitment to its protection"
        }
    };

    const elements = document.querySelectorAll("[data-i18n]");
    const languageDropdown = document.querySelector(".language-dropdown");
    const languageToggle = document.getElementById("languageToggle");
    const languageOptions = document.querySelectorAll(".language-option");
    const currentLanguage = document.getElementById("currentLanguage");

    function setLanguage(lang) {
        elements.forEach(element => {
            const key = element.getAttribute("data-i18n");

            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
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
        languageToggle.addEventListener("click", () => {
            languageDropdown.classList.toggle("open");
        });
    }

    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
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