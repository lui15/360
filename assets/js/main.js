/**
 * Función que devuelve el enlace basado en el tipo solicitado.
 * @param {string} type - 'whatsapp', 'email', 'audita', 'demo', 'ficha', 'talento', 'unete_club', 'impacto_form'...
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

    // ENLACES ACTUALIZADOS:
    // Audita tu empresa gratis (HERO) y Súmate al Impacto (IMPACTO)
    audita:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWib3s7-dB9pR-rFlQzIUvqQiHzfloxciDYgWpzcG_GU-q1g/viewform?usp=sharing&ouid=101029110610181042140",
    impacto_form:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWib3s7-dB9pR-rFlQzIUvqQiHzfloxciDYgWpzcG_GU-q1g/viewform?usp=sharing&ouid=101029110610181042140",

    // Demo y Ficha Técnica del Dashboard (Ambos apuntan al Looker Studio)
    demo: "https://lookerstudio.google.com/reporting/2d35ad3f-d02b-46af-acbd-91387bd3c82d",
    ficha:
      "https://lookerstudio.google.com/reporting/2d35ad3f-d02b-46af-acbd-91387bd3c82d",

    // Postúlate o Envía tu Idea (TALENTO)
    talento:
      "https://docs.google.com/forms/d/e/1FAIpQLScMPyAPWuUVP45TiAK30kZLwXmB7JRWzP84j-l9YLlHWpegLg/viewform?usp=dialog",

    // Enlace Club Verde 360 (ACTUALIZADO)
    unete_club:
      "https://docs.google.com/forms/d/e/1FAIpQLSeWib3s7-dB9pR-rFlQzIUvqQiHzfloxciDYgWpzcG_GU-q1g/viewform?usp=sharing&ouid=101029110610181042140",

    contacto: "#contacto",
  };

  return contactLinks[type] || "#";
}

document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const menuButton = document.getElementById("menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuButton ? menuButton.querySelector("i") : null;

  if (menuButton && mobileMenu && menuIcon) {
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      // Lógica para cambiar el icono (fa-bars <-> fa-xmark)
      if (mobileMenu.classList.contains("hidden")) {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      } else {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
      }
    });

    // Cerrar menú móvil después de hacer clic en un enlace o botón
    mobileMenu.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("click", () => {
        // Pequeño retraso para que la navegación sea visible antes de cerrar
        setTimeout(() => {
          mobileMenu.classList.add("hidden");
          menuIcon.classList.remove("fa-xmark");
          menuIcon.classList.add("fa-bars");
        }, 300);
      });
    });
  }
});
