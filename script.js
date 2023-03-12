"use strict"

//search

let searchOpen = document.querySelector('.search__btn');
let search = document.querySelector('.search__form');
let searchClose = document.querySelector('.search__close');

searchOpen.addEventListener('click', function () {
  search.classList.add('search__show');
});

searchClose.addEventListener('click', function () {
  search.classList.remove('search__show');
});

//burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link')

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
});

//accordion

let accordions = document.querySelectorAll('.accordion');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    let self = e.currentTarget;
    let control = self.querySelector('.accordion__control');
    let content = self.querySelector('.accordion__content');

    self.classList.toggle('accordion--open');

    if (self.classList.contains('accordion--open')) {
      control.setAttribute('aria-expanded', true);
      control.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      control.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});




