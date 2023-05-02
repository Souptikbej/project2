// catagories
const productContainers = [...document.querySelectorAll('.Top-categories-of-the-month-image-main-box')];
const nxtBtn = [...document.querySelectorAll('.next-catagories-arrow')];
const preBtn = [...document.querySelectorAll('.prv-catagories-arrow')];
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// product slider
const productContainerss = [...document.querySelectorAll('.slider-container')];
const nxtBtnn = [...document.querySelectorAll('.nxt-btn')];
const preBtnn = [...document.querySelectorAll('.pre-btn')];
productContainerss.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtnn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtnn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
// nav
let subMenu = document.getElementById("subMenu");
function toggleMenu() {
    subMenu.classList.toggle("open-menu")
}
let menu = document.getElementById('menu-icon');
let crosse = document.getElementById('crose');
let slideber = document.getElementById('slideber');


function slide() {
    slideber.style.display = 'block';
}
function crose() {
    slideber.style.display = 'none';
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
// slide show
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}