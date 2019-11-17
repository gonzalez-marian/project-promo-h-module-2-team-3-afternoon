'use strict';

// TOOGLE
const arrowDesign = document.querySelectorAll('#arrowDesign');
const arrowFillIn = document.querySelectorAll('#arrowFillIn');
const arrowShare = document.querySelectorAll('#arrowShare');
const design = document.querySelector('#design');
const fillIn = document.querySelector('#fillIn');
const share = document.querySelector('#share');

fillIn.classList.add('hidden');
share.classList.add('hidden');

function hideDesign (){
    design.classList.toggle('hidden');
    fillIn.classList.add('hidden');
    share.classList.add('hidden');
 
}
arrowDesign.forEach(function(arrow){
    arrow.addEventListener('click',hideDesign);
  })

  function toggleFillIn (){
    fillIn.classList.toggle('hidden');
    design.classList.add('hidden');
    share.classList.add('hidden');
}
arrowFillIn.forEach(function(arrow){
    arrow.addEventListener('click',toggleFillIn);
  })

  function toggleShare (){
    share.classList.toggle('hidden');
    design.classList.add('hidden');
    fillIn.classList.add('hidden');
}
arrowShare.forEach(function(arrow){
    arrow.addEventListener('click',toggleShare);
  })
  
  //COLORS

  const previewCardName = document.querySelector('.preview_card-name');
  const itemBtn = document.querySelector('.item_btn');
  const previewCardIcons = document.querySelector('#preview_card-icons');

  const palette1 = document.querySelector('#palette-1');
  function usePalette1(){
    previewCardName.style.color = '#114e4e';
    itemBtn.style.borderColor = '#a2deaf';
    previewCardIcons.style.color = '#114e4e';
  }
  palette1.addEventListener('click', usePalette1);

  /*const palette2 = document.querySelectorAll('#palette-2');
  function usePalette2(){
    previewCardName.style.color = '#420101';
    itemBtn.style.borderColor = '#e95626';
    previewCardIcons.style.color = '#420101';
  }
  palette2.addEventListener('click',usePalette2);

  const palette3 = document.querySelector('#palette-3');
  function usePalette3(){
    previewCardName.style.color = '#3e5b65';
    itemBtn.style.borderColor = '#a0c0cf';
    previewCardIcons.style.color = '#3e5b65';
  }
  palette3.addEventListener('click', usePalette3);*/

  //INPUTS

  //nombre

  const name = document.querySelector('#name');
  function addName (){
     previewCardName.innerHTML = name.value;
  }
  name.addEventListener('keyup', addName);

  //puesto
  const jobTitle = document.querySelector('#job-title');
  const previewCardJob = document.querySelector('.preview_card-job');
  function addJobTitle (){
     previewCardJob.innerHTML = jobTitle.value;
  }
  jobTitle.addEventListener('keyup', addJobTitle);

  //email
  const email = document.querySelector('#email');
  const emailIcon = document.querySelector('#email-icon');
  function addEmail(){
      emailIcon.href = `mailto: ${email.value}`;
  }

  email.addEventListener('change', addEmail);