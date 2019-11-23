//Constants with user data
const user = {};
user.name = document.querySelector('#name');
user.job = document.querySelector('#job-title');
user.email = document.querySelector('#email');
user.tel = document.querySelector('#tel');
user.linkedin = document.querySelector('#linkedin');
user.github = document.querySelector('#github');

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

//FORM & PREVIEW

//function for name & job
// function addTextToPreview(textInput, textOutput) {
//     textOutput.innerHTML = textInput.value;
// }
// user.name.addEventListener('keyup', addTextToPreview(user.name, previewCardName));

//name

function addName() {
    previewCardName.innerHTML = user.name.value;
}
user.name.addEventListener('keyup', addName);

puesto

function addJob() {
    previewCardJob.innerHTML = user.job.value;
}
user.job.addEventListener('keyup', addJob);

//phone

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


