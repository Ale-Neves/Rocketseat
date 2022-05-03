function onScroll() {
  if (scrollY > 0) {
    idNavigation.classList.add('scroll')
  } else {
    idNavigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function clouseMenu() {
  document.body.classList.remove('menu-expanded')
}
