var slideIndex = 0;
diaporama();

function diaporama() {
    let diapos = document.getElementsByClassName("diapo");
    for (let i = 0; i < diapos.length; i++) {
        diapos[i].classList.remove('disImg');
    }
    slideIndex++;
    if (slideIndex > diapos.length) {slideIndex = 1}
    diapos[slideIndex-1].classList.add('disImg');
    setTimeout(diaporama, 6000); // Change image every 6 seconds
}