//querrySelector

const heading = document.querySelector('.header__texto h2'); // 0 o 1 elementos
console.log(heading);

//querrySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);

//enlaces[0].textContent = "Nuevo texto";

//Generar un nuevo enlace 

const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
//Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos
console.log(1);

window.addEventListener("load", function(){ //Esperaa que se carge JS y los archivos HTML

    console.log(3);
});

window.onload = function(){
    console.log(4);
};

document.addEventListener('DOMContentLoaded', function(){ //Solo espera por el HTML, pero no espra a CSS o imagenes 
    console.log(6);
});

console.log(7); 

//Seleccionar elementos y asociar un evento 

//const btnEnviar = document.querySelector(".boton--primario");
//
//btnEnviar.addEventListener("click", function(){
//    console.log("Enviando formulario");
//}) 

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: '' 
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener('input', leertexto);
email.addEventListener('input', leertexto);
mensaje.addEventListener('input', leertexto);

//nombre.addEventListener('input', function(e){
//
//    console.log(e.target.value);
//});
//email.addEventListener('input', function(e){
//
//    console.log(e.target.value);
//});
//mensaje.addEventListener('input', function(e){
//
//    console.log(e.target.value);
//});

// El Evento de Submit
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    //Validar el formulario

    const{ nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError("Todos los campos son obligatorios")
    } else {
        mostrarCorrecto ("El formulario se completo exitosamente")
    }
    console.log("Enviando Datos");
})

function leertexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

    //console.log(datos);
    
}

//Muestra un error por pantalla

function mostrarError(mensaje){

    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild(error);

    //Desaparecer despues de 5 s

    setTimeout(() =>{
        error.remove();
    }, 5000);
}

//Mostrar un correcto por pantalla

function mostrarCorrecto(mensaje){

    const correcto = document.createElement("P");
    correcto.textContent = mensaje
    correcto.classList.add("correcto");

    formulario.appendChild(correcto);

    setTimeout(() =>{
        correcto.remove();
    }, 2000);
}