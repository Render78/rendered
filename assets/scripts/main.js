// Presupuesto WhatsApp
const budgetButton = document.getElementById("budget-button");
const modal = document.getElementById("budget-modal");
const form = document.getElementById("budget-form");
const closeBtn = document.querySelector(".close-button");

function openModal() {
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.add("closing");
    setTimeout(() => {
        modal.classList.remove("active", "closing");
    }, 400); // mismo tiempo que la animación CSS
}

if (budgetButton) {
    budgetButton.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

// cerrar modal al enviar formulario
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = document.getElementById("userName").value.trim();
        const service = document.getElementById("service").value.trim();

        if (!userName || !service) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const mensaje = `Hola, quiero solicitar un presupuesto. Mi nombre es ${userName} y necesito el servicio de ${service}.`;
        const url = `https://wa.me/543512046426?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");

        form.reset();
        closeModal();
    });
}

// Carousel
const track = document.querySelector(".carousel-track");
if (track) {
    const slides = document.querySelectorAll(".carousel-track img");
    let index = 0;

    function moveCarousel() {
        index = (index + 1) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3500);
}

// Menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuToggle.innerHTML = navMenu.classList.contains("open")
            ? '<i class="bi bi-x-lg"></i>'
            : '<i class="bi bi-list"></i>';
    });
}
