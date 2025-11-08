/**
 * Función que devuelve el enlace basado en el tipo solicitado.
 * @param {string} type - 'whatsapp', 'email', 'audita', 'demo', 'ficha', 'talento', 'unete_club'...
 * @returns {string} URL correspondiente
 */
function getLink(type) {
  // Datos oficiales
  const WHATSAPP_NUMBER = "18294300225"; // formato internacional
  const EMAIL_ADDRESS = "proyectos@transformaverde360.com";
  const WHATSAPP_TEXT =
    "Hola, estoy interesado en sus soluciones de sostenibilidad.";

  const contactLinks = {
    whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_TEXT
    )}`,
    email: `mailto:${EMAIL_ADDRESS}?subject=Consulta%20sobre%20Soluciones%20de%20Sostenibilidad`,

    // Sustituye estos por tus formularios reales:
    audita: "https://forms.gle/AUDITA_FORM_LINK",
    demo: "https://forms.gle/SOLICITAR_DEMO_FORM_LINK",
    talento: "https://forms.gle/TALENTO_FORM_LINK",
    unete_club: "https://forms.gle/UNETE_CLUB_FORM_LINK",

    // PDF ficha técnica
    ficha: "Brochure.pdf",

    contacto: "#contacto",
  };

  return contactLinks[type] || "#";
}

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Cerrar menú móvil después de hacer clic en un enlace o botón
    mobileMenu.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("click", () => {
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
        }, 300);
      });
    });
  }
});
