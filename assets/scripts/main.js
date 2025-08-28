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