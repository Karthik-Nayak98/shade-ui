const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const sidenav = document.querySelector('.sidenav');

hamburger.addEventListener('click', function () {
  sidenav.classList.add('show');
  sidenav.classList.remove('hide');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
});

close.addEventListener('click', function name() {
  sidenav.classList.remove('show');
  sidenav.classList.add('hide');
  close.classList.add('hide');
  hamburger.classList.remove('hide');
});
