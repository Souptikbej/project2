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
// start-------------
// let ver = 0;
// function prv(b) {
//     ver = ver + b;
//     next(ver);
// }
// next(ver);
// function next(a) {
//     let slide = document.getElementById('slide1');
//     if (a == slide.length) {
//         ver = 0;
//         a = 0;
//         alert ("pok");
//     }
//     if (a < 0) {
//         ver = slide.length - 1;
//         a = slide.length - 1;
//     }
//     for (let b of slide) {
//         b.style.display = "none";
//     }
//     slide[b].style.display = "block";
// }
let flag = 0;
function controller(x) {
    flag = flag + x;
    slideshow(flag);
}

slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slides.length - 1;
        num = slides.length - 1;
    }
    for (let x of slides) {
        x.style.display = "none";

    }
    slides[num].style.display = "block";

}