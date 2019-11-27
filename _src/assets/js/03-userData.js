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
function addName() {
    if (userName.value !== '') {
        previewCardName.innerHTML = userName.value;
        localStorage.setItem('name', userName.value)
    } else {
        previewCardName.innerHTML = "Nombre Apellido";
        localStorage.removeItem('name');
    }
}

function addJob() {
    if (userJob.value !== '') {
        previewCardJob.innerHTML = userJob.value;
        localStorage.setItem('job', userJob.value)
    } else {
        previewCardJob.innerHTML = "Front-end developer";
        localStorage.removeItem('job');
    }
}

function addPhone() {
    if (userTel.value !== '') {
        phoneIcon.href = `tel:${userTel.value}`;
        phoneItem.classList.remove('opacity');
        localStorage.setItem('phone', userTel.value)
    } else {
        phoneItem.classList.add('opacity');
        localStorage.removeItem('phone');
    }
}

userName.addEventListener('keyup', addName);
userJob.addEventListener('keyup', addJob);
userTel.addEventListener('keyup', addPhone);

//email

function addEmail() {
    emailIcon.href = `mailto: ${userEmail.value}`;
    emailItem.classList.remove('opacity');
}

userEmail.addEventListener('keyup', addEmail);

//linkedin

function addLinkedin() {
    linkedinIcon.href = `${userLinkedin.value}`;
    linkedinItem.classList.remove('opacity');
}
userLinkedin.addEventListener('keyup', addLinkedin);

//github

function addGithub() {
    githubIcon.href = `http://github.com/${userGithub.value}`;
    githubItem.classList.remove('opacity');
}
userGithub.addEventListener('keyup', addGithub);

