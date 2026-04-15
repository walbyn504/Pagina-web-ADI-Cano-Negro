const fabToggle = document.getElementById("fabToggle");
const fabContainer = document.querySelector(".fab-container");

if (fabToggle && fabContainer) {
    fabToggle.addEventListener("click", () => {
        fabContainer.classList.toggle("open");
    });
}

window.translations = window.translations || {};

window.translations.vidaComunitaria = {
    es: {
        logo_text: "ADI Caño Negro",

        nav_inicio: "Inicio",
        nav_comunidad: "Comunidad",
        nav_vida: "Vida Comunitaria",

        hero_tag: "Tradición, identidad y convivencia",
        hero_title: "Vida Comunitaria en <span>Caño Negro</span>",
        hero_description: "Descubre la cultura, las actividades económicas, las tradiciones y la organización social que dan vida a la comunidad de Caño Negro.",

        intro_label: "Información general",
        intro_title: "La Comunidad de Caño Negro",
        intro_subtitle: "Caño Negro es una comunidad que destaca por su cercanía con la naturaleza, la cooperación entre vecinos y la preservación de tradiciones que fortalecen su identidad cultural.",
        intro_text1: "Caño Negro es una comunidad ubicada en la zona norte de Costa Rica, reconocida por su cercanía con el Refugio Nacional de Vida Silvestre y por la fuerte relación que sus habitantes mantienen con la naturaleza.",
        intro_text2: "La vida en esta comunidad se caracteriza por la cooperación entre vecinos, el respeto por el entorno natural y la preservación de costumbres que forman parte de su identidad.",
        intro_text3: "A lo largo de los años, las familias han desarrollado diversas actividades económicas que les permiten vivir en armonía con el ambiente y aprovechar los recursos naturales de forma responsable.",

        economia_label: "Desarrollo local",
        economia_title: "Actividades Económicas",
        economia_text1: "Entre las principales actividades económicas de Caño Negro se encuentran la pesca, la agricultura y el turismo rural. Estas actividades representan una fuente importante de ingresos para muchas familias de la comunidad.",
        economia_text2: "El turismo también ha crecido en la zona gracias a la riqueza natural del refugio, atrayendo visitantes interesados en la observación de aves, paseos en bote y experiencias culturales.",

        cultura_label: "Identidad cultural",
        cultura_title: "Cultura y Tradiciones",
        cultura_text1: "La cultura de Caño Negro está marcada por tradiciones que se han transmitido de generación en generación. Las celebraciones comunitarias, las actividades religiosas y las festividades locales son espacios donde los habitantes se reúnen para fortalecer los lazos sociales y mantener viva su identidad.",
        cultura_text2: "La gastronomía local también forma parte importante de la cultura, destacándose platillos tradicionales elaborados con productos de la región.",

        organizacion_label: "Participación social",
        organizacion_title: "Organización Comunitaria",
        organizacion_text1: "La comunidad cuenta con organizaciones locales que trabajan por el bienestar y el desarrollo del lugar. Estas organizaciones promueven proyectos sociales, educativos y ambientales que buscan mejorar la calidad de vida de los habitantes.",
        organizacion_text2: "Además, los vecinos participan activamente en actividades comunitarias, colaborando en iniciativas que fortalecen la convivencia y la protección de los recursos naturales.",

        valores_label: "Fortaleza comunitaria",
        valores_title: "Valores de la Vida Comunitaria",
        valores_subtitle: "La convivencia en Caño Negro se apoya en principios que fortalecen la identidad, la cooperación y el respeto por el entorno.",

        valor1_title: "Cooperación",
        valor1_text: "Los vecinos participan en actividades y proyectos que benefician a la comunidad y fortalecen la unión entre familias.",

        valor2_title: "Identidad cultural",
        valor2_text: "Las tradiciones, celebraciones y costumbres locales forman parte esencial del sentido de pertenencia de la comunidad.",

        valor3_title: "Respeto por la naturaleza",
        valor3_text: "La relación con el entorno natural es parte de la vida diaria y guía muchas de las prácticas de la comunidad.",

        closing_tag: "Caño Negro",
        closing_title: "La vida comunitaria refleja la unión entre cultura, trabajo y naturaleza",
        closing_description: "Conocer la comunidad de Caño Negro es valorar su historia, sus tradiciones y el compromiso de sus habitantes con el desarrollo local y la conservación del entorno.",

        footer_text: "© 2026 ADI Caño Negro - Todos los derechos reservados"
    },

    en: {
        logo_text: "ADI Caño Negro",

        nav_inicio: "Home",
        nav_comunidad: "Community",
        nav_vida: "Community Life",

        hero_tag: "Tradition, identity and coexistence",
        hero_title: "Community Life in <span>Caño Negro</span>",
        hero_description: "Discover the culture, economic activities, traditions, and social organization that bring life to the community of Caño Negro.",

        intro_label: "General information",
        intro_title: "The Community of Caño Negro",
        intro_subtitle: "Caño Negro is a community known for its closeness to nature, cooperation among neighbors, and the preservation of traditions that strengthen its cultural identity.",
        intro_text1: "Caño Negro is a community located in the northern region of Costa Rica, recognized for its proximity to the National Wildlife Refuge and for the strong relationship its inhabitants maintain with nature.",
        intro_text2: "Life in this community is characterized by cooperation among neighbors, respect for the natural environment, and the preservation of customs that form part of its identity.",
        intro_text3: "Over the years, families have developed various economic activities that allow them to live in harmony with the environment and make responsible use of natural resources.",

        economia_label: "Local development",
        economia_title: "Economic Activities",
        economia_text1: "Among the main economic activities in Caño Negro are fishing, agriculture, and rural tourism. These activities represent an important source of income for many families in the community.",
        economia_text2: "Tourism has also grown in the area thanks to the refuge’s natural richness, attracting visitors interested in birdwatching, boat rides, and cultural experiences.",

        cultura_label: "Cultural identity",
        cultura_title: "Culture and Traditions",
        cultura_text1: "The culture of Caño Negro is marked by traditions passed down from generation to generation. Community celebrations, religious activities, and local festivities are spaces where residents gather to strengthen social ties and keep their identity alive.",
        cultura_text2: "Local gastronomy is also an important part of the culture, featuring traditional dishes made with products from the region.",

        organizacion_label: "Social participation",
        organizacion_title: "Community Organization",
        organizacion_text1: "The community has local organizations that work for the well-being and development of the area. These organizations promote social, educational, and environmental projects aimed at improving residents’ quality of life.",
        organizacion_text2: "In addition, neighbors actively participate in community activities, collaborating in initiatives that strengthen coexistence and protect natural resources.",

        valores_label: "Community strength",
        valores_title: "Values of Community Life",
        valores_subtitle: "Coexistence in Caño Negro is based on principles that strengthen identity, cooperation, and respect for the environment.",

        valor1_title: "Cooperation",
        valor1_text: "Neighbors participate in activities and projects that benefit the community and strengthen unity among families.",

        valor2_title: "Cultural identity",
        valor2_text: "Traditions, celebrations, and local customs are an essential part of the community’s sense of belonging.",

        valor3_title: "Respect for nature",
        valor3_text: "The relationship with the natural environment is part of daily life and guides many of the community’s practices.",

        closing_tag: "Caño Negro",
        closing_title: "Community life reflects the union between culture, work, and nature",
        closing_description: "Getting to know the community of Caño Negro means appreciating its history, traditions, and the commitment of its residents to local development and environmental conservation.",

        footer_text: "© 2026 ADI Caño Negro - All rights reserved"
    }
};