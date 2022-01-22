// on vérifie si le pseudo discord entré respecte la forme "Pseudo#1324", sinon on affiche un message d'erreur avec la classe "infos"
let discord = document.querySelector('#discord');
const regex = new RegExp('^.{3,32}#[0-9]{4}$');
document.querySelector('form').addEventListener('submit', function (event) {
    if(!(discord.value.match(regex))) {
        event.preventDefault();
        let error_dis = document.createElement('p');
        error_dis.innerText = 'Merci de vérifier votre pseudo discord !';
        error_dis.className = 'infos';
        discord.parentNode.insertBefore(error_dis,discord.nextSibling);
    }
});

// on vérifie que l'âge est supérieur ou égal à 13 ans, sinon on affiche un message d'erreur avec la classe "infos"
let age = document.querySelector('#age');
document.querySelector('form').addEventListener('submit', function (event) {
    if ( age.value < 13 ) {
        event.preventDefault();
        let error_msg = document.createElement('p');
        error_msg.innerText = 'Attention, l\'âge minimum n\'est pas respecté !';
        error_msg.className = 'infos';
        age.parentNode.insertBefore(error_msg,age.nextSibling);
    }
});
