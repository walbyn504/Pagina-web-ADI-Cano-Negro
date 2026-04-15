const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}

window.translations = window.translations || {};

window.translations.puente = {
    es: {
        logo_text: "ADI Caño Negro",
        nav_inicio: "Inicio",
        nav_comunidad: "Comunidad",
        nav_puentes: "Puentes",

        hero_tag: "Conexión con el humedal",
        hero_title: "Puentes en <span>Caño Negro</span>",
        hero_description: "Estructuras que permiten a la comunidad y a los visitantes acercarse al agua, disfrutar del paisaje y vivir de cerca la riqueza natural de Caño Negro.",

        intro_label: "Infraestructura local",
        intro_title: "Los Puentes de la Comunidad",
        intro_subtitle: "En Caño Negro existen estructuras conocidas localmente como puentes, aunque en muchos casos funcionan como pasarelas o pequeños muelles que facilitan el acceso al humedal.",
        intro_text1: "Debido a las características del terreno y a la presencia constante de agua en ciertas áreas, estas estructuras son importantes para acercarse al entorno natural de forma práctica y segura.",
        intro_text2: "Además de su utilidad, forman parte de la identidad visual de la comunidad, ya que conectan a las personas con el paisaje y con muchas de las actividades tradicionales de la zona.",

        uso_label: "Relación con el entorno",
        uso_title: "Uso de los Puentes",
        uso_text1: "Los puentes y muelles de Caño Negro permiten a los habitantes y visitantes acercarse al humedal de forma segura, facilitando actividades como la pesca, los recorridos locales y la observación del paisaje natural.",
        uso_text2: "También son espacios muy valorados por quienes disfrutan de la tranquilidad del lugar, de la observación de aves y del contacto directo con la naturaleza que caracteriza a esta región.",

        importancia_label: "Valor comunitario",
        importancia_title: "Importancia para la Comunidad",
        importancia_text1: "Estas estructuras permiten un mejor acercamiento al agua y al paisaje natural que distingue a Caño Negro, convirtiéndose en puntos de encuentro entre la comunidad y su entorno.",
        importancia_text2: "Además, ayudan a que visitantes y habitantes disfruten de la biodiversidad del humedal, fortaleciendo la relación entre la vida cotidiana, la naturaleza y el valor turístico del lugar.",

        closing_tag: "Caño Negro",
        closing_title: "Los puentes reflejan la conexión entre la comunidad y el humedal",
        closing_description: "Más que simples estructuras, representan una forma de acercarse a la naturaleza, valorar el paisaje y fortalecer el vínculo entre las personas y el entorno que da vida a Caño Negro.",

        footer_text: "© 2026 ADI Caño Negro - Todos los derechos reservados"
    },

    en: {
        logo_text: "ADI Caño Negro",
        nav_inicio: "Home",
        nav_comunidad: "Community",
        nav_puentes: "Bridges",

        hero_tag: "Connection with the wetland",
        hero_title: "Bridges in <span>Caño Negro</span>",
        hero_description: "Structures that allow the community and visitors to get closer to the water, enjoy the landscape, and experience the natural richness of Caño Negro up close.",

        intro_label: "Local infrastructure",
        intro_title: "The Community Bridges",
        intro_subtitle: "In Caño Negro there are structures locally known as bridges, although in many cases they function as walkways or small docks that provide access to the wetland.",
        intro_text1: "Due to the characteristics of the terrain and the constant presence of water in certain areas, these structures are important for approaching the natural environment in a practical and safe way.",
        intro_text2: "In addition to their usefulness, they are part of the community's visual identity, as they connect people with the landscape and many of the area's traditional activities.",

        uso_label: "Relationship with the environment",
        uso_title: "Use of the Bridges",
        uso_text1: "The bridges and docks of Caño Negro allow residents and visitors to approach the wetland safely, making activities such as fishing, local tours, and observation of the natural landscape easier.",
        uso_text2: "They are also highly valued spaces for those who enjoy the tranquility of the place, birdwatching, and direct contact with the nature that characterizes this region.",

        importancia_label: "Community value",
        importancia_title: "Importance for the Community",
        importancia_text1: "These structures allow a better approach to the water and natural landscape that distinguishes Caño Negro, becoming meeting points between the community and its surroundings.",
        importancia_text2: "In addition, they help visitors and residents enjoy the wetland's biodiversity, strengthening the relationship between daily life, nature, and the tourist value of the place.",

        closing_tag: "Caño Negro",
        closing_title: "The bridges reflect the connection between the community and the wetland",
        closing_description: "More than simple structures, they represent a way to get closer to nature, appreciate the landscape, and strengthen the bond between people and the environment that gives life to Caño Negro.",

        footer_text: "© 2026 ADI Caño Negro - All rights reserved"
    }
};