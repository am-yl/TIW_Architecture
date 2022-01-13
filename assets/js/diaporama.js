var slideIndex = 0;
diaporama();

function diaporama() {
    var i;
    var x = document.getElementsByClassName("diapo");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('disImg');
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].classList.add('disImg');
    setTimeout(diaporama, 6000); // Change image every 6 seconds
}