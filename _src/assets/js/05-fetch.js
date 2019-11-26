'use strict'

function sendForm (event) {
    event.preventDefault();

//creo json
 const datos = {
    //"palette": ,
    "name": userName.value,
    "job": userJob.value,
    "phone": userTel.value,
    "email": userEmail.value,
    "linkedin": userLinkedin.value,
    "github": userGithub.value,
    "photo": fr.result,
 };
 //petición
 fetch ('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
     method: 'POST',
     body: JSON.stringify(datos),
     headers: {
         'content-type': 'application/json'
     },
 })
 .then (response => response.json())
 .then (data => showURL(data))
 .catch(function(error) {console.log(error);});
}
function showURL (data) {
    const twitterURL = document.createElement('span');
   if (data.success) {
    twitterURL.innerHTML = `<a class="twitter-url" href=${data.cardURL} target="_blank">${data.cardURL}</a>`;
    twitterMessage.insertAdjacentElement('afterend', twitterURL);
    shareTwitter(data.cardURL);
    console.log(data.cardURL)
    //showTwitterSection();
    //showTwitter();
} else {
    twitterURL.innerHTML = 'ERROR' + data.error;
}
}
createCardButton.addEventListener('click', sendForm);