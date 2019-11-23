'use strict';

const palette1 = document.querySelector('#fieldset__design--palette-1');
const palette2 = document.querySelector('#fieldset__design--palette-2');
const palette3 = document.querySelector('#fieldset__design--palette-3');

const outputHead = document.querySelector('.preview_card-head');
const outputName = document.querySelector('.preview_card-name');
const outputIconItems = document.querySelectorAll('#preview_card-icons');
const outputIconButtons = document.querySelectorAll('.item_btn');



//COLORS


function applyPalette1() {
    outputName.classList.add('darkGreenBlue');
    outputName.classList.remove('driedBlood');
    outputName.classList.remove('slate');
    outputHead.classList.add('borderPalette1');
    outputHead.classList.remove('borderPalette2');
    outputHead.classList.remove('borderPalette3');
    for (const outputIconItem of outputIconItems) {
        outputIconItem.classList.add('darkGreenBlue');
        outputIconItem.classList.remove('driedBlood');
        outputIconItem.classList.remove('slate');
    }
    for (const outputIconButton of outputIconButtons) {
        outputIconButton.style.borderColor = '#a2deaf';
    }
}
palette1.addEventListener('click', applyPalette1);


function applyPalette2() {
    outputName.classList.add('driedBlood');
    outputName.classList.remove('darkGreenBlue');
    outputName.classList.remove('slate');

    outputHead.classList.add('borderPalette2');
    outputHead.classList.remove('borderPalette1');
    outputHead.classList.remove('borderPalette3');
    for (const outputIconItem of outputIconItems) {
        outputIconItem.classList.add('driedBlood');
        outputIconItem.classList.remove('darkGreenBlue');
        outputIconItem.classList.remove('slate');
    }
    for (const outputIconButton of outputIconButtons) {
        outputIconButton.style.borderColor = '#e95626';
    }
}
palette2.addEventListener('click', applyPalette2);


function applyPalette3() {
    outputName.classList.add('slate');
    outputName.classList.remove('driedBlood');
    outputName.classList.remove('darkGreenBlue');

    outputHead.classList.add('borderPalette3');
    outputHead.classList.remove('borderPalette1');
    outputHead.classList.remove('borderPalette2');
    for (const outputIconItem of outputIconItems) {
        outputIconItem.classList.add('slate');
        outputIconItem.classList.remove('driedBlood');
        outputIconItem.classList.remove('darkGreenBlue');
    }
    for (const outputIconButton of outputIconButtons) {
        outputIconButton.style.borderColor = '#a0c0cf';
    }
}
palette3.addEventListener('click', applyPalette3);
