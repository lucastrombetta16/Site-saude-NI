// Menu responsivo: botão "Menu" no celular e submenus por clique/toque
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu');
  var dropdowns = document.querySelectorAll('.dropdown');

  function closeDropdowns(except) {
    dropdowns.forEach(function (d) {
      if (d !== except) {
        d.classList.remove('open');
        d.querySelector('.dropdown-button').setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  dropdowns.forEach(function (d) {
    var btn = d.querySelector('.dropdown-button');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = d.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      closeDropdowns(d);
    });
  });

  // Fecha ao clicar em um link do menu ou fora dele
  document.addEventListener('click', function (e) {
    if (e.target.closest('.dropdown-menu a, .main-nav > a')) {
      if (nav) nav.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      closeDropdowns(null);
    } else if (!e.target.closest('.dropdown')) {
      closeDropdowns(null);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDropdowns(null);
  });
})();
