"use strict";

let nav = document.querySelector("div.navbar div.hamburger");
let navbar = document.querySelector("div.navbar");
let fixdiv = document.querySelector(".navitems");
let span1 = document.querySelector("div.hamburger .spans .class1");
let span2 = document.querySelector("div.hamburger .spans .class2");
let span3 = document.querySelector("div.hamburger .spans .class3");
let footerDate = document.querySelector("#date");
let myProjects = document.querySelector(".myProjects");

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

// =====================project section=================

console.log(myProjects)

let projectArray = [
  {
    id:8,
    projectName:"instagram clone",
    link:"https://my-social-media-nine-silk.vercel.app/login",
    img:"./images/projects/instaClone.png"
  },
  {
    id:1,
    projectName:"image search engine",
    link:"https://zingy-gaufre-94de01.netlify.app",
    img:"./images/projects/imageSearchEnging.png"
  },
  {
    id:2,
    projectName:"drum kit web app",
    link:"https://hungry-wing-fa3299.netlify.app",
    img:"./images/projects/drum.png"
  },
  {
    id:3,
    projectName:"to do list",
    link:"https://gallant-brahmagupta-b62863.netlify.app",
    img:"./images/projects/to do list.png"
  },
  {
    id:4,
    projectName:"QR Code Generator",
    link:"https://vocal-mousse-953f43.netlify.app",
    img:"./images/projects/QR Code Generator.png"
  },
  {
    id:5,
    projectName:"whack a mole game",
    link:"https://whack-a-mole-game-weld.vercel.app",
    img:"./images/projects/whackAMoleGame.png"
  },
  {
    id:6,
    projectName:"audio and video calling app",
    link:"https://videocallingapp-lyart.vercel.app",
    img:"./images/projects/audio and video calling app.png"
  },
  {
    id:7,
    projectName:"notes taking app",
    link:"https://notes-taking-app-nu.vercel.app",
    img:"./images/projects/notetaking app.png"
  },

]



let htmlContent = projectArray.map((val, ind) => (
  `
  <div key="${ind}" class="col-lg-3 col-md-6 col-12 p-2">
      <a href="${val?.link}" target="_blank" class="text-decoration-none">
         <p class="text-white text-capitalize text-center fs-2">${val?.projectName}</p>
         <img src="${val?.img}" loading="lazy" width="100%" alt="">
       </a>
   </div>
  `
)).join('');

myProjects.innerHTML = htmlContent;