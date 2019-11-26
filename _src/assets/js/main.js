'use strict';

const designContainer = document.querySelector('#designContainer');
const fillInContainer = document.querySelector('#fillInContainer');
const shareContainer = document.querySelector('#shareContainer');
const arrowDesign = document.querySelector('#arrowDesign');
const arrowFillIn = document.querySelector('#arrowFillIn');
const arrowShare = document.querySelector('#arrowShare');
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

const previewCardHead = document.querySelector('.preview_card-head');
const previewCardName = document.querySelector('.preview_card-name');
const previewCardJob = document.querySelector('.preview_card-job');
const phoneIcon = document.querySelector('#phone-icon');
const emailIcon = document.querySelector('#email-icon');
const linkedinIcon = document.querySelector('#linkedin-icon');
const githubIcon = document.querySelector('#github-icon');
const phoneItem = document.querySelector('.item_phone');
const emailItem = document.querySelector('.item_email');
const linkedinItem = document.querySelector('.item_linkedin');
const githubItem = document.querySelector('.item_github');
const iconItems = document.querySelectorAll('#preview_card-icons');
const iconButtons = document.querySelectorAll('.item_btn');


// start page functions

arrowDesign.classList.add('rotate');
fillIn.classList.add('hidden');
share.classList.add('hidden');

function hideDesign() {
    design.classList.toggle('hidden');
    fillIn.classList.add('hidden');
    share.classList.add('hidden');
    arrowDesign.classList.toggle('rotate');
    arrowFillIn.classList.remove('rotate');
    arrowShare.classList.remove('rotate');

}
designContainer.addEventListener('click', hideDesign);

function toggleFillIn() {
    fillIn.classList.toggle('hidden');
    design.classList.add('hidden');
    share.classList.add('hidden');
    arrowDesign.classList.remove('rotate');
    arrowFillIn.classList.toggle('rotate');
    arrowShare.classList.remove('rotate');

}
fillInContainer.addEventListener('click', toggleFillIn);

function toggleShare() {
    share.classList.toggle('hidden');
    design.classList.add('hidden');
    fillIn.classList.add('hidden');
    arrowShare.classList.toggle('rotate');
    arrowDesign.classList.remove('rotate');
    arrowFillIn.classList.remove('rotate');
}
shareContainer.addEventListener('click', toggleShare);

//COLORS

const palette1 = document.querySelector('#fieldset__design--palette-1');
function applyPalette1() {
    previewCardName.classList.add('darkGreenBlue');
    previewCardName.classList.remove('driedBlood');
    previewCardName.classList.remove('slate');
    previewCardHead.classList.add('borderPalette1');
    previewCardHead.classList.remove('borderPalette2');
    previewCardHead.classList.remove('borderPalette3');
    for (const iconItem of iconItems) {
        iconItem.classList.add('darkGreenBlue');
        iconItem.classList.remove('driedBlood');
        iconItem.classList.remove('slate');
    }
    for (const iconButton of iconButtons) {
        iconButton.style.borderColor = '#a2deaf';
    }
}
palette1.addEventListener('click', applyPalette1);

const palette2 = document.querySelector('#fieldset__design--palette-2');
function applyPalette2() {
    previewCardName.classList.add('driedBlood');
    previewCardName.classList.remove('darkGreenBlue');
    previewCardName.classList.remove('slate');

    previewCardHead.classList.add('borderPalette2');
    previewCardHead.classList.remove('borderPalette1');
    previewCardHead.classList.remove('borderPalette3');
    for (const iconItem of iconItems) {
        iconItem.classList.add('driedBlood');
        iconItem.classList.remove('darkGreenBlue');
        iconItem.classList.remove('slate');
    }
    for (const iconButton of iconButtons) {
        iconButton.style.borderColor = '#e95626';
    }
}
palette2.addEventListener('click', applyPalette2);

const palette3 = document.querySelector('#fieldset__design--palette-3');
function applyPalette3() {
    previewCardName.classList.add('slate');
    previewCardName.classList.remove('driedBlood');
    previewCardName.classList.remove('darkGreenBlue');

    previewCardHead.classList.add('borderPalette3');
    previewCardHead.classList.remove('borderPalette1');
    previewCardHead.classList.remove('borderPalette2');
    for (const iconItem of iconItems) {
        iconItem.classList.add('slate');
        iconItem.classList.remove('driedBlood');
        iconItem.classList.remove('darkGreenBlue');
    }
    for (const iconButton of iconButtons) {
        iconButton.style.borderColor = '#a0c0cf';
    }
}
palette3.addEventListener('click', applyPalette3);

//RESET

function resetInput() {
    previewCardName.innerHTML = 'Nombre Apellido';
    previewCardJob.innerHTML = 'Front-end developer';
    phoneIcon.href = '';
    emailIcon.href = '';
    linkedinIcon.href = '';
    githubIcon.href = '';
    phoneItem.classList.add('hidden');
    emailItem.classList.add('hidden');
    linkedinItem.classList.add('hidden');
    githubItem.classList.add('hidden');
};
resetButton.addEventListener('click', resetInput)


//INPUTS

//nombre

function addName() {
    previewCardName.innerHTML = user.name.value;
}
user.name.addEventListener('keyup', addName);

<<<<<<< HEAD
// function verifyName() {
//     const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
//     if (!regName.test(user.name.value)) {
//         // const verifyNameMessage = document.createElement('span');
//         // verifyNameMessage.innerHTML = 'Por favor, introduzca su nombre'
//         user.name.insertAdjacentElement('afterend', verifyNameMessage)
//     }
// }
// user.name.addEventListener('change', verifyName);
// console.log(verifyName())
=======

>>>>>>> 8659b7ad89c8bcf0cf506767e337c177c4ed3324
//puesto

function addJob() {
    previewCardJob.innerHTML = user.job.value;
}
user.job.addEventListener('keyup', addJob);

//telefono

function addPhone() {
    phoneIcon.href = `tel:${user.tel.value}`;
    phoneItem.classList.remove('hidden');
}
user.tel.addEventListener('change', addPhone);

//email

function addEmail() {
    emailIcon.href = `mailto: ${user.email.value}`;
    emailItem.classList.remove('hidden');
}

user.email.addEventListener('change', addEmail);

//linkedin

function addLinkedin() {
    linkedinIcon.href = `${user.linkedin.value}`;
    linkedinItem.classList.remove('hidden');
}
user.linkedin.addEventListener('change', addLinkedin);

//github

function addGithub() {
    githubIcon.href = `http://github.com/${user.github.value}`;
    githubItem.classList.remove('hidden');
}
user.github.addEventListener('change', addGithub);

///////// validacion del formulario //////
const submitButton = document.querySelector('.create_card-btn');

function validateForm() {
    let isCorrect = true;

    const regNameJob = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!regNameJob.test(user.name.value)) {
        isCorrect = false;
    }
    if (!regNameJob.test(user.job.value)) {
        isCorrect = false;
    }

    const regEmail = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    if (!regEmail.test(user.email.value)) {
        isCorrect = false;
    }

    const regUrl = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?:: (\d +))?(?: \/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    if (!regUrl.test(user.linkedin.value)) {
        isCorrect = false;
    }

    if (!isCorrect) {
        alert('Algunos campos no son correctos');
    }
    return isCorrect;

    console.log('la validacion funciona');
}

submitButton.addEventListener('click', validateForm);


// function verifyName() {
//     const regName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
//     if (!regName.test(user.name.value)) {
//         // const verifyNameMessage = document.createElement('span');
//         // verifyNameMessage.innerHTML = 'Por favor, introduzca su nombre'
//         //user.name.insertAdjacentElement('afterend', verifyNameMessage)
//     }
// }
// user.name.addEventListener('change', verifyName);
// console.log(verifyName())

















buttonCreate.addEventListener('click', sendInfo);





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

