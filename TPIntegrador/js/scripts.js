window.addEventListener('load', initHandlers);

function initHandlers(e) {
    /* const btnResumen = document.getElementById('btnResumen');
    btnResumen.addEventListener('click', function (event) {
        event.preventDefault();
    }); */

    const cardEstudiante = document.getElementById('card-estudiante');
    const cardJunior = document.getElementById('card-junior');
    const cardTrainee = document.getElementById('card-trainee');
    const selectCategoria = document.getElementById('selectCategoria');

    removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);
    limpiarFormulario(cardEstudiante, cardJunior, cardTrainee);
    selectCardCategoria(cardEstudiante, cardJunior, cardTrainee, selectCategoria);
    selectOptionCategoria(cardEstudiante, cardJunior, cardTrainee, selectCategoria);
    calcularCosto();
}

/* Función para elegir categoria desde las cards y actualice el valor 
del select con la tarjeta seleccionada */
function selectCardCategoria(cardEstudiante, cardJunior, cardTrainee, selectCategoria) {

    cardEstudiante.addEventListener('click', function () {
        selectCategoria.value = 'estudiante';
        removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);
    });
    cardTrainee.addEventListener('click', function () {
        selectCategoria.value = 'trainee';
        removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);

    });
    cardJunior.addEventListener('click', function () {
        selectCategoria.value = 'junior';
        removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);

    });

}

/* Funcion para elegir la categoria desde el select y marcar la tarjeta seleccionada */
function selectOptionCategoria(cardEstudiante, cardJunior, cardTrainee, selectCategoria) {

    selectCategoria.addEventListener('change', function () {
        const selectedCategoria = selectCategoria.value;

        removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);

        if (selectedCategoria === "estudiante") {
            cardEstudiante.classList.add("card-options");
        } else if (selectedCategoria === "trainee") {
            cardTrainee.classList.add("card-options");
        } else if (selectedCategoria === "junior") {
            cardJunior.classList.add("card-options");
        }
    })
}

/* Funcion para remover clase  */
function removerClaseOptions(cardEstudiante, cardJunior, cardTrainee) {

    cardEstudiante.classList.remove('card-options');
    cardTrainee.classList.remove('card-options');
    cardJunior.classList.remove('card-options');
}

/* Funcion para calcular el costo total y mostrarlo en el span */
function calcularCosto() {
    const cant = document.getElementById('inputCantidad');
    const btnResumen = document.getElementById('btnResumen');
    const total = document.getElementById('total');
    const selectCategoria = document.getElementById('selectCategoria');

    btnResumen.addEventListener('click', function (e) {
        e.preventDefault();
        const cantidad = cant.value;
        const precio = 200;
        let descuento = 0;

        const categoria = selectCategoria.value;
        console.log(categoria);
        if (categoria === 'estudiante') {
            descuento = 0.8;
        } else if (categoria === 'trainee') {
            descuento = 0.5;
        } else if (categoria === 'junior') {
            descuento = 0.15;
        }
        console.log(descuento);
        const costoTotal = cantidad * precio * (1 - descuento);

        console.log(costoTotal);
        total.textContent = Math.round(costoTotal);
        /* console.log(cantidad); */
    })
}
/* Funcion para limpiar los datos cargados en el formulario */
function limpiarFormulario(cardEstudiante, cardJunior, cardTrainee) {

    const form = document.getElementById('formTicket');
    const btnBorrar = document.getElementById('btnBorrar');
    const total = document.getElementById('total');
    btnBorrar.addEventListener('click', function (e) {
        e.preventDefault();
        form.reset();
        total.textContent = 0;
        removerClaseOptions(cardEstudiante, cardJunior, cardTrainee);
    })

}