'use strict';

//const selectedSection = document.querySelector('.');--> clase de la sección q aparece por defecto
//const selectedPalette = document.querySelector('.');--> clase de la paleta q aparece por defecto

const name = document.querySelector('#name');
const job = document.querySelector('#job-title');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');

// start page functions

const init = () => {
    displaySection();
    console.log('Aparece la primera sección abierta y las otras cerradas');
    applyPalette();
    console.log('Se aplica la paleta de colores por defecto');

};

// dom listeners

const applyPalette = () => {
    console.log('Se aplica la paleta de colores elegida');
};

const displaySection = () => {
    console.log('Se abre la sección seleccionada y se cierran el resto');
};

const handleInput = () => {

};

// functions



// listeners

selectedPalette.addEventListener('click', applyPalette);
selectedSection.addEventListener('click', displaySection);
name.addEventListener('keyup', handleInput);
job.addEventListener('keyup', handleInput);
email.addEventListener('keyup', handleInput);
tel.addEventListener('keyup', handleInput);
linkedin.addEventListener('keyup', handleInput);
github.addEventListener('keyup', handleInput);

// init page

init();