'use strict';

const colorInputs = document.querySelectorAll('.palette');

//accedo a los elementos que cambian de color
const colorName = document.querySelector('.preview_card-name');
const colorIcons = document.querySelector('.item_btn');
const colorVertLine = document.querySelector('.preview_card-head');

//creo ctes para cada input de tipo radio
const paletteOne = document.querySelector('#fieldset__design--palette-1');
const paletteTwo = document.querySelector('#fieldset__design--palette-2');
const paletteThree = document.querySelector('#fieldset__design--palette-3');

if (paletteOne.checked) {
    console.log('paleta 1');
    colorName.classList.add('.palette1-name');
    colorVertLine.classList.add('.palette1-line');
    colorIcons.classList.add('.palette1-icons');

    colorName.classList.remove('.palette2-name');
    colorVertLine.classList.remove('.palette2-line');
    colorIcons.classList.remove('.palette2-icons');

    colorName.classList.remove('.palette3-name');
    colorVertLine.classList.remove('.palette3-line');
    colorIcons.classList.remove('.palette3-icons');
}


if (paletteTwo.checked) {
    console.log('paleta 2');
    colorName.classList.remove('.palette1-name');
    colorVertLine.classList.remove('.palette1-line');
    colorIcons.classList.remove('.palette1-icons');

    colorName.classList.add('.palette2-name');
    colorVertLine.classList.add('.palette2-line');
    colorIcons.classList.add('.palette2-icons');

    colorName.classList.remove('.palette3-name');
    colorVertLine.classList.remove('.palette3-line');
    colorIcons.classList.remove('.palette3-icons');
}

if (paletteThree.checked) {
    console.log('paleta 3');
    colorName.classList.remove('.palette1-name');
    colorVertLine.classList.remove('.palette1-line');
    colorIcons.classList.remove('.palette1-icons');

    colorName.classList.remove('.palette2-name');
    colorVertLine.classList.remove('.palette2-line');
    colorIcons.classList.remove('.palette2-icons');

    colorName.classList.add('.palette3-name');
    colorVertLine.classList.add('.palette3-line');
    colorIcons.classList.add('.palette3-icons');
}

// if (colorInputs.value === 'palette1') {
//     colorName.classList.add('.palette1-name');
//     colorVertLine.classList.add('.palette1-line');
//     colorIcons.classList.add('.palette1-icons');

//     colorName.classList.remove('.palette2-name');
//     colorVertLine.classList.remove('.palette2-line');
//     colorIcons.classList.remove('.palette2-icons');

//     colorName.classList.remove('.palette3-name');
//     colorVertLine.classList.remove('.palette3-line');
//     colorIcons.classList.remove('.palette3-icons');
// }


// if (colorInputs.value === 'palette2') {
//     colorName.classList.remove('.palette1-name');
//     colorVertLine.classList.remove('.palette1-line');
//     colorIcons.classList.remove('.palette1-icons');

//     colorName.classList.add('.palette2-name');
//     colorVertLine.classList.add('.palette2-line');
//     colorIcons.classList.add('.palette2-icons');

//     colorName.classList.remove('.palette3-name');
//     colorVertLine.classList.remove('.palette3-line');
//     colorIcons.classList.remove('.palette3-icons');
// }

// if (colorInputs.value === 'palette3') {
//     colorName.classList.remove('.palette1-name');
//     colorVertLine.classList.remove('.palette1-line');
//     colorIcons.classList.remove('.palette1-icons');

//     colorName.classList.remove('.palette2-name');
//     colorVertLine.classList.remove('.palette2-line');
//     colorIcons.classList.remove('.palette2-icons');

//     colorName.classList.add('.palette3-name');
//     colorVertLine.classList.add('.palette3-line');
//     colorIcons.classList.add('.palette3-icons');
// }






const arrowDesign = document.querySelectorAll('#arrowDesign');
const arrowFillIn = document.querySelectorAll('#arrowFillIn');
const arrowShare = document.querySelectorAll('#arrowShare');
const design = document.querySelector('#design');
const fillIn = document.querySelector('#fillIn');
const share = document.querySelector('#share');

const user = {};
user.name = document.querySelector('#name');
user.job = document.querySelector('#job-title');
user.email = document.querySelector('#email');
user.tel = document.querySelector('#tel');
user.linkedin = document.querySelector('#linkedin');
user.github = document.querySelector('#github');

const resetButton = document.querySelector('.reset');

const previewCardName = document.querySelector('.preview_card-name');
const previewCardJob = document.querySelector('.preview_card-job');
const phoneIcon = document.querySelector('#phone-icon');
const emailIcon = document.querySelector('#email-icon');
const linkedinIcon = document.querySelector('#linkedin-icon');
const githubIcon = document.querySelector('#github-icon');


// start page functions

fillIn.classList.add('hidden');
share.classList.add('hidden');

function hideDesign() {
    design.classList.toggle('hidden');
    fillIn.classList.add('hidden');
    share.classList.add('hidden');

}
arrowDesign.forEach(function (arrow) {
    arrow.addEventListener('click', hideDesign);
})

function toggleFillIn() {
    fillIn.classList.toggle('hidden');
    design.classList.add('hidden');
    share.classList.add('hidden');
}
arrowFillIn.forEach(function (arrow) {
    arrow.addEventListener('click', toggleFillIn);
})

function toggleShare() {
    share.classList.toggle('hidden');
    design.classList.add('hidden');
    fillIn.classList.add('hidden');
}
arrowShare.forEach(function (arrow) {
    arrow.addEventListener('click', toggleShare);
})

//COLORS

//RESET

function resetInput() {
    previewCardName.innerHTML = 'Nombre completo';
    previewCardJob.innerHTML = 'Programadora Front-end';
    /*phoneIcon.href = '';*/
    emailIcon.href = '';
    linkedinIcon.href = '';
    githubIcon.href = '';
};
resetButton.addEventListener('click', resetInput)


//INPUTS

//nombre

function addName() {
    previewCardName.innerHTML = user.name.value;
}
user.name.addEventListener('keyup', addName);

//puesto

function addJob() {
    previewCardJob.innerHTML = user.job.value;
}
user.job.addEventListener('keyup', addJob);

//telefono

/*function addPhone() {
    phoneIcon.href = user.tel.value;
}
user.tel.addEventListener('change', addPhone);*/

//email

function addEmail() {
    emailIcon.href = `mailto: ${user.email.value}`;
}

email.addEventListener('change', addEmail);

//linkedin

function addLinkedin() {
    linkedinIcon.href = user.linkedin.value;
}
user.linkedin.addEventListener('change', addLinkedin);

//github

function addGithub() {
    githubIcon.href = `https://github.com/${user.github.value}`;
}
user.github.addEventListener('change', addGithub);







// const init = () => {
//     displaySection();
//     console.log('Aparece la primera sección abierta y las otras cerradas');
//     applyPalette();
//     console.log('Se aplica la paleta de colores por defecto');

// }

// functions


// const applyPalette = () => {
//     console.log('Se aplica la paleta de colores elegida');
// }

// const displaySection = () => {
//     console.log('Se abre la sección seleccionada y se cierran el resto');
// }

// const resetInfo = () => {
//     console.log('Se borra toda la info que el usuario haya introducido y se aplica paleta por defecto');
// }

// const handleInput = () => {
//     console.log('Se gestionan los cambios producidos en un campo hasta que el usuario quita el foco del mismo');
//     readInput();
//     simpleCheck();
//     paintInput();

// }

// let readInput = () => {
//     console.log('Asigno ');
// }

// let simpleCheck = () => {
//     console.log('Compruebo que la tecla pulsada corresponde al tipo de valor del campo');
// }

// let paintInput = () => {
//     console.log('Hacemos que el valor añadido aparezca en la preview');
// }

// let atSignCheck() {
//     if (true) {
//         console.log('Si es un dato con @ compruebo que esté incluido');
//         if (true) {
//             console.log('Si es correcto, muestro un mensaje de confirmación');
//         } else {
//             console.log('Si no es correcto muestro un color y mensaje de error');
//         }
//     } else {
//         console.log('Si es un dato sin @ no hago nada o muestro mensaje invitando rellenar siguiente campo');
//     }
// }
// let phoneCheck() {
//     console.log('Comprueba si el campo teléfono consta exactamente de 9 números');
//     if (false) {
//         console.log('Si no es así, muestra mensaje de error');
//     }
// }


// // DOM listeners

// selectedPalette.addEventListener('click', applyPalette);
// selectedSection.addEventListener('click', displaySection);
// resetButton.addEventListener('reset', resetInfo);

// name.addEventListener('keyup', handleInput);
// job.addEventListener('keyup', handleInput);
// email.addEventListener('keyup', handleInput);
// tel.addEventListener('keyup', handleInput);
// linkedin.addEventListener('keyup', handleInput);
// github.addEventListener('keyup', handleInput);

// email.addEventListener('change', atSignCheck);
// tel.addEventListener('change', phoneCheck);
// linkedin.addEventListener('change', atSignCheck);
// github.addEventListener('change', atSignCheck);


// // init page

// init();
