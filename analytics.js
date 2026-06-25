/* ControlParental.cl — Google Analytics 4 (carga centralizada)
 *
 * CÓMO ACTIVARLO (una sola vez, en este archivo):
 *   1. Entra a https://analytics.google.com y crea una propiedad GA4 para controlparental.cl
 *   2. Copia el "ID de medición" (tiene formato G-XXXXXXXXXX)
 *   3. Pégalo abajo entre las comillas de GA_ID y guarda.
 *      Queda activo en TODO el sitio (todas las páginas cargan este archivo).
 *
 * Mientras GA_ID esté vacío, no se carga nada ni se hace ninguna llamada: es inerte.
 */
(function () {
  var GA_ID = "G-FM2L6ERF5X"; // ControlParental.cl — propiedad GA4
  if (!GA_ID) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });
})();
