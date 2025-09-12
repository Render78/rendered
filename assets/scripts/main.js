document.getElementById("budget-button").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = prompt("Por favor ingresa tu nombre:");
    const servicio = prompt("¿Qué servicio necesitas?");

    if (nombre && servicio) {
        const mensaje = `Hola, quiero solicitar un presupuesto. Mi nombre es ${nombre} y necesito el servicio de ${servicio}.`;

        const url = `https://wa.me/543512046426?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    } else {
        alert("Por favor completa tu nombre y servicio para continuar.");
    }
});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
let index = 0;

function moveCarousel() {
    index = (index + 1) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3500);