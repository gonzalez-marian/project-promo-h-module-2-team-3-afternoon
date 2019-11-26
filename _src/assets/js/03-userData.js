'use strict';



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
    previewCardName.innerHTML = userName.value;
}
userName.addEventListener('keyup', addName);

//puesto

function addJob() {
    previewCardJob.innerHTML = userJob.value;
}
userJob.addEventListener('keyup', addJob);

//telefono

function addPhone() {
    phoneIcon.href = `tel:${userTel.value}`;
    phoneItem.classList.remove('hidden');
}
userTel.addEventListener('change', addPhone);

//email

function addEmail() {
    emailIcon.href = `mailto: ${userEmail.value}`;
    emailItem.classList.remove('hidden');
}

userEmail.addEventListener('change', addEmail);

//linkedin

function addLinkedin() {
    linkedinIcon.href = `${userLinkedin.value}`;
    linkedinItem.classList.remove('hidden');
}
userLinkedin.addEventListener('change', addLinkedin);

//github

function addGithub() {
    githubIcon.href = `http://github.com/${userGithub.value}`;
    githubItem.classList.remove('hidden');
}
userGithub.addEventListener('change', addGithub);
