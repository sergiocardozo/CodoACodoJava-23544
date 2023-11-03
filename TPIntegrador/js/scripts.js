window.addEventListener('load', initHandlers);

/* Globales */

const msgError = document.getElementById('error');
const msgSuccess = document.getElementById('success');
const cardEstudiante = document.getElementById('card-estudiante');
const cardJunior = document.getElementById('card-junior');
const cardTrainee = document.getElementById('card-trainee');
const selectCategoria = document.getElementById('selectCategoria');

function initHandlers() {

    ocultarMsg(msgSuccess);
    ocultarMsg(msgError)

    removerClaseOptions();

    selectCategoria.addEventListener('change', selectOptionCategoria);

    cardEstudiante.addEventListener('click', selectCardEstudiante);
    cardTrainee.addEventListener('click', selectCardTrainee)
    cardJunior.addEventListener('click', selectCardJunior);

    document.getElementById('formTicket').addEventListener('submit', function (e) {
        e.preventDefault();
        validarForm();
    });

    limpiarFormulario();
}
/* Función que oculta alert*/
function ocultarMsg(element) {
    if (element) {
        element.classList.add('d-none');
        element.classList.remove('show');
    }
}

/* Funcion que muestra alert */
function mostrarMsg(element) {
    if (element) {

        element.classList.add('show');
        element.classList.remove('d-none');
    }
}

/* Función para elegir categoria estudiante desde la tarjetas */
function selectCardEstudiante() {
    removerClaseOptions();
    selectCategoria.value = 'estudiante';
    cardEstudiante.classList.add("card-options");
    cardEstudiante.classList.add("bg-primary");

}

/* Función para elegir categoria trainee desde la tarjetas */
function selectCardTrainee() {
    removerClaseOptions();
    selectCategoria.value = 'trainee';
    cardTrainee.classList.add("card-options");
    cardTrainee.classList.add("bg-primary");
}

/* Función para elegir categoria junior desde la tarjetas */
function selectCardJunior() {
    removerClaseOptions();
    selectCategoria.value = 'junior';
    cardJunior.classList.add("card-options");
    cardJunior.classList.add("bg-warning");
}

/* Funcion para elegir la categoria desde el select y marcar la tarjeta seleccionada */
function selectOptionCategoria() {

    const selectedCategoria = selectCategoria.value;

    removerClaseOptions();

    if (selectedCategoria === "estudiante") {
        cardEstudiante.classList.add("card-options");
        cardEstudiante.classList.add("bg-primary");
    } else if (selectedCategoria === "trainee") {
        cardTrainee.classList.add("card-options");
        cardTrainee.classList.add("bg-primary");
    } else if (selectedCategoria === "junior") {
        cardJunior.classList.add("card-options");
        cardJunior.classList.add("bg-warning");
    }
}

/* Funcion para remover clase de las tarjetas */
function removerClaseOptions() {

    cardEstudiante.classList.remove('card-options');
    cardEstudiante.classList.remove('bg-primary');
    cardTrainee.classList.remove('card-options');
    cardTrainee.classList.remove('bg-primary');
    cardJunior.classList.remove('card-options');
    cardJunior.classList.remove('bg-warning');
}

/* Validación del form */
function validarForm(e) {
    const nombre = document.getElementById('txtNombre').value;
    const apellido = document.getElementById('txtApellido').value;
    const correo = document.getElementById('txtCorreo').value;
    const cantidad = document.getElementById('inputCantidad').value;
    const categoria = document.getElementById('selectCategoria').value;

    if (!nombre || !apellido || !correo || !cantidad || !categoria) {
        msgError.textContent = 'Por favor rellenar todos los campos';
        mostrarMsg(msgError);
        setTimeout(() => {
            ocultarMsg(msgError);
        }, 3000);

        return false;
    } else {
        mostrarMsg(msgSuccess);
        calcularCosto();
        return true;
    }

}
/* Funcion para calcular el costo total y mostrarlo en el span */
function calcularCosto() {
    const cant = document.getElementById('inputCantidad').value;
    const total = document.getElementById('total');
    const selectCategoria = document.getElementById('selectCategoria').value;

    const precio = 200;
    let descuento = 0;


    if (selectCategoria === 'estudiante') {
        descuento = 0.8;
    } else if (selectCategoria === 'trainee') {
        descuento = 0.5;
    } else if (selectCategoria === 'junior') {
        descuento = 0.15;
    }
    console.log()
    console.log(descuento);
    const costoTotal = cant * precio * (1 - descuento);
    console.log(costoTotal);

    total.textContent = Math.round(costoTotal);

}
/* Funcion para limpiar los datos cargados en el formulario */
function limpiarFormulario() {

    const form = document.getElementById('formTicket');
    const btnBorrar = document.getElementById('btnBorrar');

    btnBorrar.addEventListener('click', function (e) {
        e.preventDefault();
        form.reset();
        ocultarMsg(msgSuccess);
        removerClaseOptions();
    })

}