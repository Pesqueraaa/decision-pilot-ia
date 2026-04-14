document.addEventListener("DOMContentLoaded", () => {

    // Elementos del DOM
    const casoSelect = document.getElementById("caso");
    const contextoInput = document.getElementById("contexto");
    const decisionInput = document.getElementById("decision");
    const datosInput = document.getElementById("datos");
    const restriccionesInput = document.getElementById("restricciones");

    const generarBtn = document.getElementById("generarBtn");
    const copiarBtn = document.getElementById("copiarBtn");
    const resultado = document.getElementById("resultado");

    let ejemplos = {};

    // Cargar ejemplos desde JSON
    fetch("data/ejemplos.json")
        .then(response => response.json())
        .then(data => {
            ejemplos = data;
            cargarEjemplo(casoSelect.value);
        })
        .catch(error => {
            console.error("Error cargando ejemplos:", error);
        });

    // Cambiar caso → cargar ejemplo
    casoSelect.addEventListener("change", () => {
        cargarEjemplo(casoSelect.value);
    });

    function cargarEjemplo(caso) {
        if (!ejemplos[caso]) return;

        contextoInput.value = ejemplos[caso].contexto || "";
        decisionInput.value = ejemplos[caso].decision || "";
        datosInput.value = ejemplos[caso].datos || "";
        restriccionesInput.value = ejemplos[caso].restricciones || "";

        resultado.value = "";
        copiarBtn.disabled = true;
    }

    // Generar prompt
    generarBtn.addEventListener("click", () => {

        const caso = casoSelect.value;
        const contexto = contextoInput.value.trim();
        const decision = decisionInput.value.trim();
        const datos = datosInput.value.trim();
        const restricciones = restriccionesInput.value.trim();

        // Validación
        if (!contexto || !decision || !datos) {
            mostrarMensaje("Completa contexto, decisión y datos antes de generar el prompt.");
            return;
        }

        try {
            const prompt = generarPrompt(caso, contexto, decision, datos, restricciones);
            resultado.value = prompt;
            copiarBtn.disabled = false;
        } catch (error) {
            console.error(error);
            mostrarMensaje("Error al generar el prompt.");
        }

    });

    // Copiar al portapapeles (API moderna)
    copiarBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText(resultado.value);
            mostrarMensaje("Prompt copiado correctamente.");
        } catch (error) {
            mostrarMensaje("No se pudo copiar el texto.");
        }
    });

    // Mensaje simple (mejor que alert)
    function mostrarMensaje(texto) {
        console.log(texto);
        alert(texto); // se puede mejorar luego con UI
    }

});
