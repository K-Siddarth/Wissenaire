'use strict';

//implementing smooth scroll;
document.querySelector('nav').addEventListener('click', function (e) {
    e.preventDefault();
    const id = String(e.target.getAttribute('href')).slice(1);
    console.log(id);
    document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
});

//implementing the slides;

const slides = document.querySelectorAll(".projects_p");

let c = 0;
const l = slides.length;
const goToSlide = function (slide) {
    slides.forEach((s, i) => { s.style.transform = `translateX(${100 * (i - slide)}%)`; });
    console.log(c);
};
goToSlide(0);
console.log(l);
const hide = function (c) {
    slides.forEach((s, i) => {
        if (i != c) {
            s.style.opacity=0;
        }
        else
            s.style.opacity=1;
    });
}
console.log(slides);
hide(0);
document.querySelector('.right').addEventListener('click', function (e) {
    e.preventDefault();
    if (c < l - 1)
        c++;
    else
        c = 0;
    hide(c);
    goToSlide(c);
});
document.querySelector('.left').addEventListener('click', function (e) {
    e.preventDefault();

    if (c > 0)
        c--;
    else
        c = 2;
    console.log(c);
    hide(c);
    goToSlide(c);
});
