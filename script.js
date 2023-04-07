let menu = document.getElementById('menu-icon');
let crosse = document.getElementById('crose');
let slideber = document.getElementById('slideber');


function slide() {
    console.log('hello');
    slideber.style.display = 'block';
}
function crose() {
    console.log('hello');
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
// product slider
let productslide = 1;
showSlide(productslide);

function intelslide(n) {
    showSlide(productslide = n);
}

function showSlide(n) {
    let i;
    let productBslider = document.getElementsByClassName("productB-slider");
    let lll = document.getElementsByClassName("lll");
    if (n > productBslider.length) {
        productslide = 1
    }
    if (n < 1) {
        productslide = productBslider.length
    }
    for (i = 0; i < productBslider.length; i++) {
        productBslider[i].style.display = "none";
    }
    for (i = 0; i < lll.length; i++) {
        lll[i].className = lll[i].className.replace(" active2", "");
    }
    productBslider[productslide - 1].style.display = "block";
    lll[productslide - 1].className += " active2";
}