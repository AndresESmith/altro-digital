// Altro Digital: small helpers. The site works without this file.

// 1. Mobile menu: the button opens and closes the nav.
(function () {
  var button = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!button || !nav) return;
  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      button.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      button.focus();
    }
  });
})();

// 2. Contact form: not connected to anything yet.
// When you connect it on your host (after the privacy policy is live),
// delete this block and add the host's form settings to the <form> tag.
(function () {
  var form = document.querySelector('form[data-not-connected]');
  if (!form) return;
  var status = form.querySelector('.form-status');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (status) {
      status.hidden = false;
      status.focus();
    }
  });
})();
