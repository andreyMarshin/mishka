var toggle = document.querySelector('.main-nav__toggle'),
    navList = document.querySelector('.main-nav');

navList.classList.remove('main-nav--no-js');

toggle.addEventListener('click', function() {
  if (navList.classList.contains('main-nav--closed')) {
    navList.classList.remove('main-nav--closed');
    navList.classList.add('main-nav--opened');
  } else {
    navList.classList.add('main-nav--closed');
    navList.classList.remove('main-nav--opened');
  }
});



var modal = document.querySelector('.modal'),
    overlay = document.querySelector('.modal-overlay'),
    showBtns = document.querySelectorAll('.show-modal'),
    btnSubmit = document.querySelector('.modal__btn');

for(var i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', function() {
    modal.classList.contains('modal--hide') ? modal.classList.remove('modal--hide') :  modal.classList.add('modal--hide');
    overlay.classList.contains('modal-overlay--hide') ? overlay.classList.remove('modal-overlay--hide') : overlay.classList.add('modal-overlay--hide');
  })
}

overlay.addEventListener('click', function() {
  modal.classList.add('modal--hide');
  overlay.classList.add('modal-overlay--hide');
})
