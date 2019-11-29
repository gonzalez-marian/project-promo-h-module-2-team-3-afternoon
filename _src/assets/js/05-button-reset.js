'use strict'

const reseterButton = document.querySelector('#buttonReset');


const resetLocalStorage = () => {
    localStorage.clear('name');
    localStorage.clear('job');
    localStorage.clear('image');
    localStorage.clear('phone');
    localStorage.clear('email');
    localStorage.clear('linkedin');
    localStorage.clear('github');
    previewCardName.innerHTML = 'Nombre Apellido';
    previewCardJob.innerHTML = 'Front-end developer';
    profileImage.style.backgroundImage = `url(${defaultImage})`;
    profilePreview.style.backgroundImage = `url(${defaultImage})`;
    phoneIcon.href = '';
    emailIcon.href = '';
    linkedinIcon.href = '';
    githubIcon.href = '';
    phoneItem.classList.add('opacity');
    emailItem.classList.add('opacity');
    linkedinItem.classList.add('opacity');
    githubItem.classList.add('opacity');
}

reseterButton.addEventListener('click', resetLocalStorage);

function resetInput() {

};