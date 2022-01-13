let slider = document.querySelector('.carousel');
if (slider) {
    let slides = slider.querySelectorAll('.slide');
    let nbSlide = slides.length;
    let last = nbSlide-2;
    let befLast = nbSlide-1;
    let showSlide = 0;
    let i=0;

    // on réinitialise le slider :

    let delClass = ["left", "mid-left", "center", "mid-right", "right"]; // les classes d'affichages du slider
    // on parcourt toutes les slides une fois et on retire les classes
    while(i < nbSlide) {
        slides[i].classList.remove(...delClass);
        i++;
    }
    // on parcourt à nouveau (oui je sais) pour ajouter les classes sur 5 positions à la suite (n-2, n-1, 0, 1, 2 ; où n = nbSlide)
    for (i = 0; i < nbSlide; i++) {
        let slide = slides[i];
        switch (i) {
            case 0 :
                slide.classList.add('center');
                break;
            case 1 :
                slide.classList.add('mid-right');
                break;
            case 2 :
                slide.classList.add('right');
                break;
            case last :
                slide.classList.add('left');
                break;
            case befLast :
                slide.classList.add('mid-left');
                break;    
        }
    }

    let prevArrow = slider.querySelector('.prev');
    let nextArrow = slider.querySelector('.next');
    prevArrow.addEventListener('click', function () {
        slides[showSlide].classList.remove('center');
        showSlide -= 1;
        if (showSlide < 0) {
            showSlide = nbSlide - 1;
        }
        slides[showSlide].classList.add('center');
    });

    nextArrow.addEventListener('click', function () {
        slides[showSlide].classList.remove('center');
        showSlide += 1;
        if (showSlide >= nbSlide) {
            showSlide = 0;
        }
        slides[showSlide].classList.add('center');
    });
}