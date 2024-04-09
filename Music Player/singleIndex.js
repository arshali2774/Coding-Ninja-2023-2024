/* --------------------------------- navbar --------------------------------- */
const menu = document.getElementById('right_navbar');
const open_nav = document.getElementById('open_menu');
const close_nav = document.getElementById('close_menu');

window.addEventListener('resize', () => {
  let mediaQuery2 = window.matchMedia('(max-width: 670px)');
  if (mediaQuery2.matches) {
    menu.classList.add('toggle_menu');
    open_nav.addEventListener('click', () => {
      menu.classList.remove('toggle_menu');
    });
    close_nav.addEventListener('click', () => {
      menu.classList.add('toggle_menu');
    });
  } else {
    menu.classList.remove('toggle_menu');
  }
});

window.addEventListener('load', () => {
  let mediaQuery2 = window.matchMedia('(max-width: 670px)');
  if (mediaQuery2.matches) {
    menu.classList.add('toggle_menu');
    open_nav.addEventListener('click', () => {
      menu.classList.remove('toggle_menu');
    });
    close_nav.addEventListener('click', () => {
      menu.classList.add('toggle_menu');
    });
  } else {
    menu.classList.remove('toggle_menu');
  }
});
