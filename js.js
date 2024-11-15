// Variables
const ig = document.querySelector("#RRSS .ig");
const igPath = document.querySelector("#RRSS .ig path");
const fb = document.querySelector('.fb');
const fbPath = document.querySelector("#RRSS .fb path");
const mail = document.querySelector(".mail svg");
const was = document.querySelector(".was svg");
// const 

document.addEventListener('DOMContentLoaded', () => {
    ig.addEventListener("mouseover", () => {
        igPath.style.fill = 'pink';
    })
    ig.addEventListener("mouseleave", () => {
        igPath.style.fill = 'white';
    })

    fb.addEventListener("mouseover", () => {
        fbPath.style.fill = 'rgba(43, 43, 247)';
    })
    fb.addEventListener("mouseleave", () => {
        fbPath.style.fill = 'white';
    })

    mail.addEventListener("mouseleave", () =>{
        mail.style.scale = 1;
    })
    mail.addEventListener("mouseover", () =>{
        mail.style.scale = 1.5;
    })

    was.addEventListener("mouseover", () => {
        was.style.scale = 1.5;
    })
    was.addEventListener("mouseleave", () => {
        was.style.scale = 1;
    })
})