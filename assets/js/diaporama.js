var slideIndex = 0;
diaporama();

function diaporama() {
    // on récupère toutes les images du diapo puis on les affiches une par une avec un timer à l'aide de la classe "disImg"
    let diapos = document.getElementsByClassName("diapo");
    for (let i = 0; i < diapos.length; i++) {
        diapos[i].classList.remove('disImg');
    }
    slideIndex++;
    if (slideIndex > diapos.length) {
        slideIndex = 1;
    }
    diapos[slideIndex-1].classList.add('disImg');
    setTimeout(diaporama, 6000); // L'image change toutes les 6s
}