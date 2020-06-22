console.log('Hello! Welcome to my site! If you see something funky, let me know so I can fix it. :-)');

function menuToggle() {
  var menuClick = document.getElementById('myNavtoggle');
  if (menuClick.className === 'navtoggle') {
    menuClick.className += ' responsive';
  } else {
    menuClick.className = 'navtoggle';
  }
}

function menuIcon(x) {
  x.classList.toggle('menu-close');
}

/* exported menuToggle */
/* exported menuIcon */
