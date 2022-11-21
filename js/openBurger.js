(() => {

  const burger = document.querySelector('#burger'),
    headerNav = document.querySelector('#menu'),
    navList = document.querySelector('.nav__list')

  burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    headerNav.classList.toggle('header__nav--active')
  })

})()