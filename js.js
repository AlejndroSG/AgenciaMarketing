// Variables
const ig = document.querySelector("#RRSS .ig");
const igPath = document.querySelector("#RRSS .ig path");
const fb = document.querySelector('.fb');
const fbPath = document.querySelector("#RRSS .fb path");
const mail = document.querySelector(".mail svg");
const was = document.querySelector(".was svg");
const contadoresDiv = document.querySelectorAll(".contador");
const enlaces = document.querySelectorAll("#ajustes div a");
const noticias = document.querySelectorAll("#destacados .interesantes article");
const modal = document.querySelector(".modal");
const secciones = document.querySelectorAll("#notices section");
const header = document.querySelector("#resto");
const banner = document.querySelector("#banner");
// let butmodal = null;



// FUNCIONALIDADES
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            // header.classList.add("scrolled");
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.backgroundColor = "rgba(54, 54, 54, 0.918)";
        } else {
            // header.classList.remove("scrolled");
            header.style.position = "relative";
            header.style.backgroundColor = "rgba(54, 54, 54)";
        }
    })

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

    if(mail){
        mail.addEventListener("mouseleave", () =>{
            mail.style.scale = 1;
        })
        mail.addEventListener("mouseover", () =>{
            mail.style.scale = 1.5;
        })
    }

    if(was){
        was.addEventListener("mouseover", () => {
            was.style.scale = 1.5;
        })
        was.addEventListener("mouseleave", () => {
            was.style.scale = 1;
        })
    }


    let currentIndex = 0;

    if (document.querySelector('.prev-button') && document.querySelector('.next-button')) {
        document.querySelector('.prev-button').addEventListener('click', () => {
            navigate(-1);
            setTimeout(() => {
                startAutoplay(6000);
              }, 100);
        });
    
        document.querySelector('.next-button').addEventListener('click', () => {
            navigate(1);
            setTimeout(() => {
                startAutoplay(6000);
              }, 100);
        });
    }

    if(document.querySelector('.prev-button') && document.querySelector('.next-button')) {
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
            banner.style.background = `url(./fotos/Primera_Página/Banner/${currentIndex + 1}.png) no-repeat center center/cover`;
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
    
        startAutoplay(6000);
    
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', stopAutoplay);
        });
    }
    

    const vel = 3.5;
    let contador = 0;

    contadoresDiv.forEach(contDiv => {
        setTimeout(() => {
        let objetivo = contDiv.getAttribute('value');

            function sumaContador(){
                contador += 1;
                contDiv.innerHTML = "<b>"+contador+"+"+"</b>";
                if(contador < objetivo){
                    setTimeout(sumaContador, vel);
                }
            }
            
            sumaContador();
        }, 4000)
    });

    enlaces.forEach(enlace => {
        const svg = enlace.querySelector("svg path");
        enlace.addEventListener("mouseover", () => {
            svg.style.fill = "rgba(242, 141, 141, 0.39)";
        })
        enlace.addEventListener("mouseleave", () => {
            svg.style.fill = "#000000";
        })
    })

    noticias.forEach(noticia => {
        noticia.addEventListener("click", () =>{
            // document.body.style.filter = "blur(10px)";
            let img = noticia.querySelector("img");
            let h2 = noticia.querySelector("h2");
            let p = noticia.querySelector("p");
            
            modal.innerHTML = `
            <article>
                <button>&cross;</button>
                <img src="${img.src}" alt="${h2.innerHTML}">
                <h2>${h2.innerHTML}</h2>
                <p>${p.innerHTML}</p>
            </article>
            `;
    
            let butmodal = document.querySelector(".modal button");
            modal.style.top = "50%";
            modal.style.left = "50%";
            document.body.style.overflow = "hidden";

            secciones.forEach(seccion => {
                seccion.style.filter = "blur(10px) brightness(0.7) opacity(0.7) saturate(0.5) contrast(0.5)";
                seccion.style.transition = "all 0.5s";
            })
            
            butmodal.addEventListener("click", () => {
                modal.style.top = "-50%";
                modal.style.left = "50%";
                document.body.style.overflow = "auto";
                secciones.forEach(seccion => {
                    seccion.style.filter = "none";
                })
            })
        })
    });

})