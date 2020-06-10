console.log("Hello! Welcome to my site! If you see something funky, let me know so I can fix it. :-)")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
