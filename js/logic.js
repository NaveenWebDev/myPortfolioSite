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

// ================================project section=====================================

let images = document.querySelectorAll("div.imguniq i");
let profixdiv = document.querySelector("div.fixedProbox");
let close = document.querySelector("div.fixedProbox span");

let changeImg = document.querySelector("div.imgbox img");
let btnleft = document.querySelector("button.left");
let btnRight = document.querySelector("button.right");
let divImgBox = document.querySelector("div.imgbox p");


let i = 1;

for (let v = 0; v < 5; v++) {
    images[v].addEventListener("click", () => {
      profixdiv.classList.add("fixedProboxs");
      divImgBox.innerText = i + " to 5";
    });
};

images[0].addEventListener("click",()=>{
    divImgBox.innerText = 1 + " to 5";
    i=1;
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
})
images[1].addEventListener("click",()=>{
    divImgBox.innerText = 2 + " to 5";
    i=2;
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
})
images[2].addEventListener("click",()=>{
    divImgBox.innerText = 3 + " to 5";
    i=3;
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
})
images[3].addEventListener("click",()=>{
    divImgBox.innerText = 4 + " to 5";
    i=4;
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
})
images[4].addEventListener("click",()=>{
    i=5;
    divImgBox.innerText = 5 + " to 5";
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
})

close.addEventListener("click", () => {
    profixdiv.classList.remove("fixedProboxs");
  });

btnRight.addEventListener("click", () => {
    i+=1;
    if(i===6){
        i=1;
    }
    divImgBox.innerText=i + " to 5";
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
});

btnleft.addEventListener("click", () => {
    i-=1;
    if(i===0){
        i=5;
    }
    divImgBox.innerText=i + " to 5";
    changeImg.setAttribute("src", `./images/pro${i}.jpg`);
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