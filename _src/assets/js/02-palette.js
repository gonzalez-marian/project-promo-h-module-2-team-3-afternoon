'use strict';


//COLORS


function applyPalette1() {
    previewCardName.classList.add('darkGreenBlue');
    previewCardName.classList.remove('driedBlood');
    previewCardName.classList.remove('slate');
    previewCardHead.classList.add('borderPalette1');
    previewCardHead.classList.remove('borderPalette2');
    previewCardHead.classList.remove('borderPalette3');
    for (const IconItem of IconItems) {
        iconItem.classList.add('darkGreenBlue');
        iconItem.classList.remove('driedBlood');
        iconItem.classList.remove('slate');
    }
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#a2deaf';
    }
}
palette1.addEventListener('click', applyPalette1);


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
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#e95626';
    }
}
palette2.addEventListener('click', applyPalette2);


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
    for (const IconButton of iconButtons) {
        IconButton.style.borderColor = '#a0c0cf';
    }
}
palette3.addEventListener('click', applyPalette3);
