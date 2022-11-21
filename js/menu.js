(() => {

  const header = document.querySelector('#header'),
    hero = document.querySelector('#hero'),
    headerHeight = header.offsetHeight,
    heroHeight = hero.offsetHeight,
    up = document.querySelector('#up'),
    menu = document.querySelector('#menu');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= heroHeight + headerHeight) {
      header.classList.add('header--fixed');
      menu.classList.add('header__nav--bg-down');
      hero.style.marginTop = `${headerHeight}px`;
    } else {
      header.classList.remove('header--fixed');
      menu.classList.remove('header__nav--bg-down');
      hero.style.marginTop = null;
    }

    lastScrollTop = scrollDistance;
  });

  up.addEventListener('click', () => {
    header.classList.remove('header--fixed');
    menu.classList.remove('header__nav--bg-down');
    hero.style.marginTop = null;
  })

})()



