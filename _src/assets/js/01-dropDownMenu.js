'use strict'


const designContainer = document.querySelector('#designContainer');
const fillInContainer = document.querySelector('#fillInContainer');
const shareContainer = document.querySelector('#shareContainer');
const arrowDesign = document.querySelector('#arrowDesign');
const arrowFillIn = document.querySelector('#arrowFillIn');
const arrowShare = document.querySelector('#arrowShare');
const design = document.querySelector('#design');
const fillIn = document.querySelector('#fillIn');
const share = document.querySelector('#share');

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
