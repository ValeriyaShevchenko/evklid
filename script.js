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

//swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulletMessage: 'Слайд {{index}}',
  }
});

//stages

let stagesBtn = document.querySelectorAll('.stages__btn');
let stagesItem = document.querySelectorAll('.stages__wrapper');

stagesBtn.forEach(function(element) {
  element.addEventListener('click', function(e){
    let path = e.currentTarget.dataset.path;

    stagesBtn.forEach(function(btn) {
      btn.classList.remove('stages__btn--active')
    });

    e.currentTarget.classList.add('stages__btn--active');

    stagesItem.forEach(function(element) {
      element.classList.remove('stages__wrapper--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('stages__wrapper--active');
  });
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
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});




