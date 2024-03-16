
document.addEventListener('DOMContentLoaded', function() {

    AOS.init();
});


// SCROLL DE HEADER

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const section = document.querySelector('.contenido');

    window.onscroll = function () {
        if (window.scrollY > section.offsetTop) {
            header.style.backgroundColor = '#000';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    };
});

// BOTON DESLIZAR
window.addEventListener('scroll', function () {
    showScrollButton();
});

function showScrollButton() {
    const botonTop = document.getElementById("boton-top");
    const scrollPosition = window.scrollY;

    botonTop.style.display = (scrollPosition > 20) ? "block" : "none";
}

// BOTON WHATSAPP
function scrollToTop() {
    let botonPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (botonPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, botonPosition - botonPosition / 8);
    }
}

function shareOnWhatsApp() {
    // Número de teléfono al que se enviará el mensaje
    let phoneNumber = "3006052169";
    
    // Mensaje opcional predefinido
    let message = "¡Hola! Me encuentro interesado en tus servicios.";

    // Construir el enlace de WhatsApp
    let whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}`;

    // Redirigir a la página de WhatsApp
    window.location.href = whatsappLink;
}


// MENU

let nav = document.querySelector("nav");
let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function(){
    hamburguer.style.color = (hamburguer.style.color === "#fff") ? "#19b10b" : "#fff";
    nav.classList.toggle("menudos");

    // Cambiar el ícono de barras a una X si la clase "menudos" está presente
    let iconClass = nav.classList.contains("menudos") ? "fa-times" : "fa-bars";
    hamburguer.innerHTML = `<i class="fa-solid ${iconClass}"></i>`;
});

// Obtén todos los elementos de la lista en el menú y agrega un controlador de eventos
let enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {
    enlace.addEventListener("click", function() {
        // Cierra el menú al hacer clic en un enlace
        nav.classList.remove("menudos");
        hamburguer.style.color = "#fff";
        // Restaura el ícono de barras después de un pequeño retraso
        setTimeout(() => {
            hamburguer.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        }, 300);
    });
});


// ICONOS

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    if (scrollY > 0) {
        document.body.classList.add("scroll-down");
    } else {
        document.body.classList.remove("scroll-down");
    }
});