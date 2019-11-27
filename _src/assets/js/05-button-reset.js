'use strict'

const reseterButton = document.querySelector('#buttonReset');


function resetForm() {
    document.querySelector('.form_wrapper').reset();
    document.querySelector('design').reset();
    if (preview_card.classList.contains('palette1-')) {
        return resetText();
    } else if (preview_card.classList.contains('palette2-')) {
        preview_card.classList.remove('palette2-');
        preview_card.classList.add('palette1-');
    } else if (preview_card.classList.contains('palette3-')) {
        preview_card.classList.remove('palette3-');
        preview_card.classList.add('palette1-');
    }
}
const resetText = () => {
    previewCardName.innerHTML = 'Nombre Apellido';
    previewCardJob.innerHTML = 'Front-end developer';
    phoneIcon.href = '';
    emailIcon.href = '';
    linkedinIcon.href = '';
    githubIcon.href = '';
}

reseterButton.addEventListener('click', resetForm);
