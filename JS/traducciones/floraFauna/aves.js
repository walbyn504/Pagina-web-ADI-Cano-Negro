const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}

window.translations = window.translations || {};

window.translations.aves = {
    es: {
        nav_inicio: "Inicio",
        nav_flora: "Flora y Fauna",
        nav_aves: "Aves",

        hero_chip: "Avistamiento • Biodiversidad • Humedal Ramsar",
        hero_title: "Aves de <br><span>Caño Negro</span>",
        hero_desc: "Caño Negro es uno de los escenarios naturales más valiosos de Costa Rica para la observación de aves. Sus lagunas, bosques inundados, caños y playones brindan refugio, alimento y descanso a numerosas especies residentes y migratorias.",

        intro_label: "Guía visual del humedal",
        intro_title: "Especies destacadas de este paraíso natural",
        intro_subtitle: "Cada una de estas aves refleja la riqueza ecológica de Caño Negro y el valor de conservar un humedal que sostiene vida, turismo responsable y biodiversidad.",

        highlight1_title: "Avistamiento privilegiado",
        highlight1_desc: "El refugio ofrece excelentes condiciones para observar aves durante distintas épocas del año.",

        highlight2_title: "Ambientes diversos",
        highlight2_desc: "Lagunas, canales, bosques inundados y playones crean hábitats ideales para muchas especies.",

        highlight3_title: "Vida residente y migratoria",
        highlight3_desc: "Algunas aves permanecen todo el año y otras visitan el humedal en temporadas específicas.",

        highlight4_title: "Conservación esencial",
        highlight4_desc: "La salud del humedal es clave para el descanso, la alimentación y reproducción de las aves.",

        bird1_name: "Garza Agamí",
        bird1_desc1: "Es una de las aves más llamativas del humedal por su elegancia, su silueta estilizada y la belleza de su plumaje.",
        bird1_desc2: "Suele habitar sectores tranquilos con vegetación densa, donde encuentra refugio y condiciones ideales para alimentarse.",
        bird1_fact: "Su apariencia fina y su coloración distintiva la convierten en una de las favoritas para fotógrafos y observadores de aves.",

        bird2_name: "Jabirú",
        bird2_desc1: "El jabirú es una de las aves más impresionantes de los humedales de Centroamérica, destacando por su gran tamaño y porte majestuoso.",
        bird2_desc2: "Su presencia está estrechamente ligada a la salud de los ecosistemas acuáticos donde encuentra alimento y amplios espacios para desplazarse.",
        bird2_fact: "Es una de las aves más grandes que pueden observarse en Caño Negro y una de las especies más buscadas por los visitantes.",

        bird3_name: "Espátula Rosada",
        bird3_desc1: "Esta especie destaca por su hermoso plumaje rosado y por la forma especial de su pico, adaptado para buscar alimento en aguas poco profundas.",
        bird3_desc2: "Su presencia aporta color y dinamismo al paisaje natural de lagunas, orillas y playones inundados.",
        bird3_fact: "Su pico tiene forma de cuchara y le permite explorar el agua de una manera muy particular mientras se alimenta.",

        bird4_name: "Cigüeñón",
        bird4_desc1: "El cigüeñón es un ave grande vinculada a humedales, lagunas someras y zonas abiertas donde puede desplazarse con facilidad.",
        bird4_desc2: "Su figura robusta y su comportamiento calmado la hacen muy fácil de distinguir durante los recorridos por el refugio.",
        bird4_fact: "Es frecuente verlo caminar lentamente en aguas poco profundas mientras busca alimento con gran paciencia.",

        bird5_name: "Pájaro Serpiente o Pato Aguja",
        bird5_desc1: "Esta ave acuática es conocida por su cuello largo y delgado, que sobresale del agua cuando nada, dándole una apariencia muy singular.",
        bird5_desc2: "Habita lagunas y caños tranquilos, donde suele pescar y luego extender sus alas al sol después de sumergirse.",
        bird5_fact: "Cuando nada, a menudo solo se ve su cuello, por eso parece una serpiente deslizándose sobre el agua.",

        bird6_name: "Garza Blanca",
        bird6_desc1: "Es una de las aves más elegantes y reconocibles de los humedales costarricenses. Su plumaje blanco le da una presencia muy limpia y distinguida.",
        bird6_desc2: "En Caño Negro puede observarse en lagunas, canales y sectores abiertos donde busca peces, insectos y otros pequeños organismos.",
        bird6_fact: "Es una de las especies que más fácilmente pueden verse durante los recorridos de observación en zonas acuáticas.",

        fact_label: "Dato curioso",
        footer_text: "© 2026 ADI Caño Negro - Todos los derechos reservados"
    },

    en: {
        nav_inicio: "Home",
        nav_flora: "Flora & Fauna",
        nav_aves: "Birds",

        hero_chip: "Birdwatching • Biodiversity • Ramsar Wetland",
        hero_title: "Birds of <br><span>Caño Negro</span>",
        hero_desc: "Caño Negro is one of Costa Rica’s most valuable natural settings for birdwatching. Its lagoons, flooded forests, channels, and mudflats provide refuge, food, and rest for numerous resident and migratory species.",

        intro_label: "Wetland visual guide",
        intro_title: "Featured species of this natural paradise",
        intro_subtitle: "Each of these birds reflects the ecological richness of Caño Negro and the value of conserving a wetland that sustains life, responsible tourism, and biodiversity.",

        highlight1_title: "Privileged birdwatching",
        highlight1_desc: "The refuge offers excellent conditions for observing birds during different times of the year.",

        highlight2_title: "Diverse environments",
        highlight2_desc: "Lagoons, channels, flooded forests, and mudflats create ideal habitats for many species.",

        highlight3_title: "Resident and migratory life",
        highlight3_desc: "Some birds remain all year long, while others visit the wetland during specific seasons.",

        highlight4_title: "Essential conservation",
        highlight4_desc: "The health of the wetland is key to the rest, feeding, and reproduction of birds.",

        bird1_name: "Agami Heron",
        bird1_desc1: "It is one of the most striking birds of the wetland because of its elegance, slender silhouette, and beautiful plumage.",
        bird1_desc2: "It usually inhabits quiet areas with dense vegetation, where it finds shelter and ideal feeding conditions.",
        bird1_fact: "Its refined appearance and distinctive coloration make it a favorite among photographers and birdwatchers.",

        bird2_name: "Jabiru",
        bird2_desc1: "The jabiru is one of the most impressive birds of Central American wetlands, standing out for its great size and majestic bearing.",
        bird2_desc2: "Its presence is closely linked to the health of aquatic ecosystems where it finds food and wide open spaces to move around.",
        bird2_fact: "It is one of the largest birds that can be seen in Caño Negro and one of the most sought-after species by visitors.",

        bird3_name: "Roseate Spoonbill",
        bird3_desc1: "This species stands out for its beautiful pink plumage and the special shape of its bill, adapted for finding food in shallow waters.",
        bird3_desc2: "Its presence adds color and dynamism to the natural landscape of lagoons, shores, and flooded mudflats.",
        bird3_fact: "Its spoon-shaped bill allows it to explore the water in a very particular way while feeding.",

        bird4_name: "Wood Stork",
        bird4_desc1: "The wood stork is a large bird linked to wetlands, shallow lagoons, and open areas where it can move around easily.",
        bird4_desc2: "Its robust figure and calm behavior make it very easy to recognize during refuge tours.",
        bird4_fact: "It is often seen walking slowly in shallow water while patiently searching for food.",

        bird5_name: "Snakebird or Anhinga",
        bird5_desc1: "This aquatic bird is known for its long, slender neck, which rises above the water when it swims, giving it a very distinctive appearance.",
        bird5_desc2: "It inhabits calm lagoons and channels, where it often fishes and then spreads its wings in the sun after diving.",
        bird5_fact: "When it swims, often only its neck is visible, which is why it looks like a snake gliding across the water.",

        bird6_name: "Great Egret",
        bird6_desc1: "It is one of the most elegant and recognizable birds of Costa Rican wetlands. Its white plumage gives it a very clean and distinguished presence.",
        bird6_desc2: "In Caño Negro it can be observed in lagoons, channels, and open areas where it looks for fish, insects, and other small organisms.",
        bird6_fact: "It is one of the species most easily seen during birdwatching tours in aquatic areas.",

        fact_label: "Fun fact",
        footer_text: "© 2026 ADI Caño Negro - All rights reserved"
    }
};