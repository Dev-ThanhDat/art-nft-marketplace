// Menu
const toggleMenu = document.querySelector('.js-bar');
const menu = document.querySelector('.js-menu');
const close = document.querySelector('.js-close');

toggleMenu.addEventListener('click', function () {
  menu.classList.add('active');
});

close.addEventListener('click', function () {
  menu.classList.remove('active');
});

document.body.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !e.target.matches('.js-bar')) {
    menu.classList.remove('active');
  }
});
