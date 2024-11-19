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


    let currentIndex = 0;

    document.querySelector('.prev-button').addEventListener('click', () => {
        navigate(-1);
        setTimeout(() => {
            startAutoplay(5000);
          }, 100);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        navigate(1);
        setTimeout(() => {
            startAutoplay(5000);
          }, 100);
    });

    function navigate(direction) {
        const galleryContainer = document.querySelector('.gallery-container');
        const totalImages = document.querySelectorAll('.gallery-item').length;
      
        if (direction === 1 && currentIndex === totalImages - 1) {
          currentIndex = 0;
        } else {
          currentIndex = (currentIndex + direction + totalImages) % totalImages;
        }
      
        const offset = -currentIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
      }

    let autoplayInterval = null;

    function startAutoplay(interval) {
        stopAutoplay();
        autoplayInterval = setInterval(() => {
            navigate(1);
        }, interval);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    startAutoplay(5000);

    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', stopAutoplay);
    });
})