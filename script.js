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





