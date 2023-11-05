document.addEventListener("DOMContentLoaded", function() {
    const cantidadInput = document.querySelector("input[type='number']");
    const categoriaSelect = document.querySelector("select");
    const totalPagarInput = document.querySelector(".totalPagar");
    const botonResumen = document.querySelector(".botonResumen");

    const precioBase = 200; // Precio base del ticket

    // Función para calcular el total a pagar
    function calcularTotal() {
        const cantidad = parseInt(cantidadInput.value);
        const categoria = parseInt(categoriaSelect.value);

        let descuento = 0;

        // Aplicar descuento según la categoría seleccionada
        if (categoria === 1) {
            descuento = 0.8; // 80% de descuento para estudiantes
        } else if (categoria === 2) {
            descuento = 0.5; // 50% de descuento para trainee
        } else if (categoria === 3) {
            descuento = 0.85; // 15% de descuento para junior
        }

        // Calcular total a pagar y mostrarlo en el input
        const total = cantidad * precioBase * (1 - descuento);
        totalPagarInput.value = "Total a pagar: $" + total.toFixed(2);
    }

    // Event listeners para detectar cambios en cantidad y categoría
    cantidadInput.addEventListener("input", calcularTotal);
    categoriaSelect.addEventListener("change", calcularTotal);

    // Event listener para el botón "Resumen"
    botonResumen.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        calcularTotal(); // Calcular el total al hacer clic en "Resumen"
    });
});