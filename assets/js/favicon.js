// on stocke les chemins d'acces de chaque images du gif du favicon
var favicon_images = [
    'assets/img/favicon/fav-01.png',
    'assets/img/favicon/fav-02.png',
    'assets/img/favicon/fav-03.png',
    'assets/img/favicon/fav-04.png',
    'assets/img/favicon/fav-05.png',
    'assets/img/favicon/fav-06.png',
    'assets/img/favicon/fav-07.png',
    'assets/img/favicon/fav-08.png'
],

// on initialise un compteur
image_counter = 0; 

    setInterval(function() {

    // on retire le lien actuel du header
    if(document.querySelector("link[rel='icon']") !== null) {
        document.querySelector("link[rel='icon']").remove();
    }

    // on ajoute le nouveau lien en fonction du compteur
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/png">');

    // on vérifie si on est à la dernière image
    // si oui : on réinitialise le compteur
    // sinon on augmente sa valeur  
    if(image_counter == favicon_images.length -1) {
    image_counter = 0; 
    } else {
    image_counter++;
    }
}, 50);
// on répète toutes les 150ms