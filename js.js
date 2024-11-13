// Variables
const ig = document.querySelector(".ig")
const fb = document.querySelector('.fb')

document.addEventListener('DOMContentLoaded', () => {
    ig.addEventListener("click", () => {
        ig.style.fill = 'yellow';
        alert("Dentro");
    })
})