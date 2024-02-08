var typed = new Typed("#autoInput", {
  strings: [
    `Unleash your potential, embrace the extraordinary at Kalong Kapili Vidyapith`,
    `Ignite your passion, fuel your future at Kalong Kapili Vidyapith`,
    `Discover your purpose, shape your destiny at Kalong Kapili Vidyapith `,
    `Dare to dream, achieve the impossible at Kalong Kapili Vidyapith `,
    `Empowering minds, transforming lives at Kalong Kapili Vidyapith `,
  ],
  typeSpeed: 50,
  loop: true,
});

// Hamburger menu
let hamBurger = document.querySelector(`#hamburger`);
let navList = document.querySelector(`.nav-list`);
let autoInput = document.querySelector(`#autoInput`);

hamBurger.onclick = function () {
  hamBurger.classList.toggle("uil-times");
  navList.classList.toggle("active");
  autoInput.classList.toggle("hide");
  document.querySelector(`body`).classList.toggle(`flow`);
};

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("uil-times");
    navList.classList.remove("active");
    autoInput.classList.remove("hide");
  })
);

// // ACTIVE LINK
// let activePage = window.location.pathname;
// let navLinks = document.querySelectorAll(".nav-link").
// forEach((link) => {
//   if (link.href.includes(`${activePage}`)) {
//     link.classList.add("activeLink");
//   }
// });
//SLIDER

let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("carousel");
    for (i=0; i < slides.length ; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length){
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Photo Popup

Array.from(document.getElementsByTagName('img')).forEach(function(el){
  el.addEventListener('click',()=>{
    document.querySelector('.background-blur').classList.remove(`hide`);
    document.querySelector('#photoimage').src = el.src;
    document.querySelector(`body`).classList.add(`flow`);
  })
})
document.querySelector('.background-blur').addEventListener('click',()=>{
  document.querySelector('.background-blur').classList.add('hide');
  document.querySelector(`body`).classList.remove(`flow`);
})

//Modal Popup
document.querySelector(`.art`).onclick = function(){
  document.querySelector(`.modal_popup`).classList.remove(`hide`);
  document.querySelector(`body`).classList.add(`flow`);
}
document.querySelector(`.science`).onclick = function(){
  document.querySelector(`.sci_modal_popup`).classList.remove(`hide`);
  document.querySelector(`body`).classList.add(`flow`);
}
document.querySelector(`.commerce`).onclick = function(){
  document.querySelector(`.com_modal_popup`).classList.remove(`hide`);
  document.querySelector(`body`).classList.add(`flow`);
}
//HIDE modal Popup
document.querySelector(`.modal_popup`).onclick = function(){
  document.querySelector(`.modal_popup`).classList.add(`hide`);
  document.querySelector(`body`).classList.remove(`flow`);
}
document.querySelector(`.sci_modal_popup`).onclick = function(){
  document.querySelector(`.sci_modal_popup`).classList.add(`hide`);
  document.querySelector(`body`).classList.remove(`flow`);
}
document.querySelector(`.com_modal_popup`).onclick = function(){
  document.querySelector(`.com_modal_popup`).classList.add(`hide`);
  document.querySelector(`body`).classList.remove(`flow`);
}