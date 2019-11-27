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


const palette1 = document.querySelector('#fieldset__design--palette-1');
const palette2 = document.querySelector('#fieldset__design--palette-2');
const palette3 = document.querySelector('#fieldset__design--palette-3');
let paletteChosen = '';

const userName = document.querySelector('#name');
const userJob = document.querySelector('#job-title');
const userEmail = document.querySelector('#email');
const userTel = document.querySelector('#tel');
const userLinkedin = document.querySelector('#linkedin');
const userGithub = document.querySelector('#github');
const createCardButton = document.querySelector('#createCardButton');
const twitterMessage = document.querySelector('#twitterMessage');

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

const datos = {
    "palette": paletteChosen,
    "name": userName.value,
    "job": userJob.value,
    "phone": userTel.value,
    "email": userEmail.value,
    "linkedin": userLinkedin.value,
    "github": userGithub.value,
    "photo": fr.result,
};