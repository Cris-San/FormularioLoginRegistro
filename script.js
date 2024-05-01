//Declaracion variables
const btnRegistro = document.getElementById('btnRegistro');
const btnLogin = document.getElementById('btnLogin');
const nombreCampo = document.getElementById('nombreCampo');
const titulo = document.getElementById('titulo');

//Validar Formulario
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const contraseña = document.querySelector('#contraseña');
const formulario = document.querySelector('.miFormulario');

const datos = {
    nombre: '',
    correo:'',
    contraseña:''
   }

//Eventos
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
contraseña.addEventListener('input', leerTexto);

// Añadiendo un evento de clic al botón registrarse
btnRegistro.addEventListener('click', function() {
    // Cambia la ubicación de la ventana actual a la página 'registrar.html'
    window.location.href = 'registrar.html';
});

// Evento submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
// Obtener los valores de los campos del formulario
let nombreValor = nombre.value;
let correoValor = correo.value;
let contraseñaValor = contraseña.value;

//Verificar campos vacios al presionar login y redirigir a otras paginas
    if (nombreValor === '' || correoValor === '' || contraseñaValor === '') {
        
    evento.submitter.id === 'btnLogin'
    mostrarError('Todos los campos son obligatorios');
    return;
}

// Verificar datos de acceso al presionar boton login
if (nombreValor === 'admin' || correoValor === 'admin@admin.com' || contraseñaValor === '1a2b3c4d' ) {
    evento.submitter.id === 'btnLogin'
    window.location.href = 'index2.html'
    
}else {
    mostrarError('Datos Incorrectos');

    document.querySelector('#nombre').value = '';
    document.querySelector('#correo').value = '';
    document.querySelector('#contraseña').value = '';
}
});
//Aqui termina el evento submit

//Muestra error en pantalla por medio de un mensaje creado con un parrafo
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    },2000);
}

//Muestra un mensaje si se llenaron todos los campos y si se envio
// function mostrarMensaje(mensaje) {
    // const correcto = document.createElement('P');
    // correcto.textContent = mensaje;
    // correcto.classList.add('correcto')

    // formulario.appendChild(correcto);

    // setTimeout(() => {
        // correcto.remove();
    // },3000);
// }

//Para evitar crear multiples funciones que hagan lo mismo, se crea una sola funcion q tome el evento y lo lea en una sola funcion.
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

//-------
