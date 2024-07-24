"use strict";

let nav = document.querySelector("div.navbar div.hamburger");
let navbar = document.querySelector("div.navbar");
let fixdiv = document.querySelector(".navitems");
let span1 = document.querySelector("div.hamburger .spans .class1");
let span2 = document.querySelector("div.hamburger .spans .class2");
let span3 = document.querySelector("div.hamburger .spans .class3");
let footerDate = document.querySelector("#date");

nav.addEventListener("click", () => {
  navbar.classList.toggle("back");
  fixdiv.classList.toggle("slidefix");
  span2.classList.toggle("hide");
  span1.classList.toggle("rotatePlus");
  span3.classList.toggle("rotateMinus");
});

// =======================================================================================

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) {
    navbar.classList.add("back");
  } else {
    navbar.classList.remove("back");
  }
});

// ========================typing==========================================

var typed = new Typed(".typed", {
  strings: ["SOFTWARE DEVELOPER.", "FREELANCER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER", "FULL STACK DEVELOPER"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// -------------serviceSection ----------------------

$(".counter").counterUp({
  delay: 10,
  time: 1000,
});

// ==============================swiper.js===========================================================

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  rewind: true,
});

footerDate.innerHTML = new Date().getFullYear()