(() => {

  const burger = document.querySelector('#burger'),
    headerNav = document.querySelector('#menu');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('open');
    const isOpen = burger.getAttribute('aria-expanded') === "false";
    burger.setAttribute('aria-expanded', isOpen);
    headerNav.classList.toggle('header__nav--active');
  });

  document.addEventListener('click', (e) => {
    if ((!e.target.closest('.nav__list')) && (burger.classList.contains('open')) && (e.target != burger) && (!e.target.closest('.burger'))) {
      burger.classList.remove('open');
      headerNav.classList.remove('header__nav--active');
    }
  });

})();