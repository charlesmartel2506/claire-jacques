/* =========================================================================
   CLAIRE JACQUES — script de démo (autonome, sans dépendance)
   ========================================================================= */
(function () {
  'use strict';

  // Défilement doux vers les ancres internes (ex. "Adresse et horaires")
  document.addEventListener('click', function (e) {
    var lien = e.target.closest && e.target.closest('a[href^="#"]');
    if (!lien) { return; }
    var id = lien.getAttribute('href');
    if (!id || id === '#') { return; }
    var cible = document.querySelector(id);
    if (!cible) { return; }
    e.preventDefault();
    cible.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

})();
