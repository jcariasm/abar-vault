/* share-button.js — vault-wide share button
   Reads /share-map.json, checks if current page has a share URL.
   If yes: shows a floating "Share" button that copies the full share URL. */

(function () {
  // Don't run on /share/ pages themselves
  if (location.pathname.startsWith('/share')) return;

  fetch('/share-map.json')
    .then(function (r) { return r.json(); })
    .then(function (map) {
      var path = location.pathname;
      // Normalize: ensure trailing slash
      if (path.charAt(path.length - 1) !== '/') path += '/';

      var sharePath = map[path];
      if (!sharePath) return; // No share for this page

      var origin = location.origin;
      var shareURL = origin + sharePath;

      // Create button
      var btn = document.createElement('button');
      btn.id = 'vault-share-btn';
      btn.setAttribute('aria-label', 'Copiar share URL');
      btn.innerHTML =
        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M10 2a2 2 0 1 1 .87 1.65L5.71 6.83a2 2 0 0 1 0 2.34l5.16 3.18A2 2 0 1 1 10 14a2 2 0 0 1 .87-1.65L5.71 9.17a2 2 0 0 1 0-2.34l5.16-3.18A2 2 0 0 1 10 2z" fill="currentColor"/>' +
        '</svg>' +
        '<span>Share</span>';

      // Styles
      var s = btn.style;
      s.position = 'fixed';
      s.bottom = '24px';
      s.right = '24px';
      s.zIndex = '9999';
      s.display = 'inline-flex';
      s.alignItems = 'center';
      s.gap = '7px';
      s.padding = '0 16px';
      s.height = '42px';
      s.border = '1px solid rgba(16,24,32,0.14)';
      s.borderRadius = '0';
      s.background = '#101820';
      s.color = '#ffffff';
      s.fontFamily = 'Inter, ui-sans-serif, system-ui, sans-serif';
      s.fontSize = '13px';
      s.fontWeight = '800';
      s.textTransform = 'uppercase';
      s.cursor = 'pointer';
      s.letterSpacing = '0.02em';
      s.transition = 'background 0.15s';
      s.boxShadow = '0 2px 8px rgba(0,0,0,0.12)';

      btn.onmouseenter = function () { s.background = '#146c94'; };
      btn.onmouseleave = function () { s.background = '#101820'; };

      btn.onclick = function () {
        navigator.clipboard.writeText(shareURL).then(function () {
          var orig = btn.innerHTML;
          btn.innerHTML =
            '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '<path d="M13.5 4.5L6 12l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
            '<span>Copiado</span>';
          s.background = '#7aa95c';
          setTimeout(function () {
            btn.innerHTML = orig;
            s.background = '#101820';
          }, 1800);
        });
      };

      document.body.appendChild(btn);
    })
    .catch(function () { /* silently fail — no share available */ });
})();
