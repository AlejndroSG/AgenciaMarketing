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
            startAutoplay(3000);
          }, 100);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        navigate(1);
        setTimeout(() => {
            startAutoplay(3000);
          }, 100);
    });

    function navigate(direction) {
        const galleryContainer = document.querySelector('.gallery-container');
        const totalImages = document.querySelectorAll('.gallery-item').length;
      
        if (direction === 1 && currentIndex === totalImages - 1) {
          // Si se llega a la última imagen y se presiona "Siguiente", no retroceder
          currentIndex = 0; // En su lugar, vuelve a la primera imagen
        } else {
          currentIndex = (currentIndex + direction + totalImages) % totalImages;
        }
      
        const offset = -currentIndex * 100;
        galleryContainer.style.transform = `translateX(${offset}%)`;
      }

    let autoplayInterval = null;

    function startAutoplay(interval) {
        stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
        autoplayInterval = setInterval(() => {
            navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
        }, interval);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay con un intervalo de 3 segundos.
    startAutoplay(3000);

    // Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', stopAutoplay);
    });
})