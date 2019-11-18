'use strict';

//const selectedSection = document.querySelector('.');--> clase de la sección q aparece por defecto
//const selectedPalette = document.querySelector('.');--> clase de la paleta q aparece por defecto
const resetButton = document.querySelector('.reset');

const user = {};
user.name = document.querySelector('#name');
user.job = document.querySelector('#job-title');
user.email = document.querySelector('#email');
user.tel = document.querySelector('#tel');
user.linkedin = document.querySelector('#linkedin');
user.github = document.querySelector('#github');


// start page functions

const init = () => {
    displaySection();
    console.log('Aparece la primera sección abierta y las otras cerradas');
    applyPalette();
    console.log('Se aplica la paleta de colores por defecto');

}

// functions


const applyPalette = () => {
    console.log('Se aplica la paleta de colores elegida');
}

const displaySection = () => {
    console.log('Se abre la sección seleccionada y se cierran el resto');
}

const resetInfo = () => {
    console.log('Se borra toda la info que el usuario haya introducido y se aplica paleta por defecto');
}

const handleInput = () => {
    console.log('Se gestionan los cambios producidos en un campo hasta que el usuario quita el foco del mismo');
    readInput();
    simpleCheck();
    paintInput();

}

let readInput = () => {
    console.log('Asigno ');
}

let simpleCheck = () => {
    console.log('Compruebo que la tecla pulsada corresponde al tipo de valor del campo');
}

let paintInput = () => {
    console.log('Hacemos que el valor añadido aparezca en la preview');
}

let atSignCheck() {
    if (true) {
        console.log('Si es un dato con @ compruebo que esté incluido');
        if (true) {
            console.log('Si es correcto, muestro un mensaje de confirmación');
        } else {
            console.log('Si no es correcto muestro un color y mensaje de error');
        }
    } else {
        console.log('Si es un dato sin @ no hago nada o muestro mensaje invitando rellenar siguiente campo');
    }
}
let phoneCheck() {
    console.log('Comprueba si el campo teléfono consta exactamente de 9 números');
    if (false) {
        console.log('Si no es así, muestra mensaje de error');
    }
}


// DOM listeners

selectedPalette.addEventListener('click', applyPalette);
selectedSection.addEventListener('click', displaySection);
resetButton.addEventListener('reset', resetInfo);

name.addEventListener('keyup', handleInput);
job.addEventListener('keyup', handleInput);
email.addEventListener('keyup', handleInput);
tel.addEventListener('keyup', handleInput);
linkedin.addEventListener('keyup', handleInput);
github.addEventListener('keyup', handleInput);

email.addEventListener('change', atSignCheck);
tel.addEventListener('change', phoneCheck);
linkedin.addEventListener('change', atSignCheck);
github.addEventListener('change', atSignCheck);


// init page

init();