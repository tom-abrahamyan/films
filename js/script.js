var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// // Slider js 
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "1.1",
//     coverflowEffect: {
//         rotate: 50,
//         stretch: 0,
//         depth: 100,
//         modifier: 1,
//         slideShadows: true
//     },
//     pagination: {
//         el: ".swiper-pagination"
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//       }
// });

const burgerBtn = document.querySelector('.burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const searchBoxMobile = document.querySelector('.search-box-mobile'); 
const main = document.querySelector('main');
const sliderImg = document.querySelectorAll('.slide-img');
const swiperBtns = document.querySelectorAll('.swiper-btn');
const itemImg  = document.querySelectorAll('.item-img');
const plus = document.querySelectorAll('.plus');
const genre = document.querySelectorAll('.genre');

function dark(){
    main.classList.toggle("dark");
    
    sliderImg.forEach((img)=>{
        img.classList.toggle("dark");
    })
    swiperBtns.forEach((btn)=>{
        btn.classList.toggle("dark");
    })
    itemImg.forEach((img)=>{
        img.classList.toggle("dark");
    })
    genre.forEach((genre)=>{
        genre.classList.toggle("dark");
    })
    plus.forEach((plus)=>{
        plus.classList.toggle("dark");
    })
   
}

function removeDark(){
    main.classList.toggle("dark");
    sliderImg.forEach((img)=>{
        img.classList.remove("dark");
    })
    swiperBtns.forEach((btn)=>{
        btn.classList.remove("dark");
    })
    itemImg.forEach((img)=>{
        img.classList.remove("dark");
    })
}


burgerBtn.addEventListener('click', ()=>{
    burgerBtn.classList.toggle("change");
    mobileMenu.classList.toggle("show");
    dark();
})

function openSearchBox(){
    searchBoxMobile.classList.toggle('open');
    dark();
}
function closeSearchBox(){
    searchBoxMobile.classList.remove('open');
    removeDark()
}