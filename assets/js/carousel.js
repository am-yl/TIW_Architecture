let slider = document.querySelector('.carousel');
if (slider) {
    let slides = slider.querySelectorAll('.slide');
    let nbSlide = slides.length;
    let left = nbSlide-2;
    let midLeft = nbSlide-1;
    let middle = i = 0;
    let midRight = 1;
    let right = 2;
    // on réinitialise le slider :

    let affClass = ["left", "mid-left", "center", "mid-right", "right"]; // les classes d'affichages du slider
    // on parcourt toutes les slides une fois et on retire les classes
    while(i < nbSlide) {
        slides[i].classList.remove(...affClass);
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
            case left :
                slide.classList.add('left');
                break;
            case midLeft :
                slide.classList.add('mid-left');
                break;    
        }
    }

    let prevArrow = slider.querySelector('.prev');
    let nextArrow = slider.querySelector('.next');

    prevArrow.addEventListener('click', function () {
        
        slides[left].classList.remove('left');
        slides[midLeft].classList.remove('mid-left');
        slides[middle].classList.remove('center');
        slides[midRight].classList.remove('mid-right');
        slides[right].classList.remove('right');

        left -= 1;
        midLeft -= 1;
        middle -= 1;
        midRight -= 1;
        right -= 1;
        
        if (left < 0) {
            left = nbSlide - 1;
        } else if (midLeft < 0) {
            midLeft = nbSlide - 1;
        } else if (middle < 0) {
            middle = nbSlide - 1;
        } else if (midRight < 0) {
            midRight = nbSlide - 1;
        } else if (right<0) {
            right = nbSlide - 1;
        }

        slides[left].classList.add('left');
        slides[midLeft].classList.add('mid-left');
        slides[middle].classList.add('center');
        slides[midRight].classList.add('mid-right');
        slides[right].classList.add('right');
    });

    nextArrow.addEventListener('click', function () {
        slides[left].classList.remove('left');
        slides[midLeft].classList.remove('mid-left');
        slides[middle].classList.remove('center');
        slides[midRight].classList.remove('mid-right');
        slides[right].classList.remove('right');

        left += 1;
        midLeft += 1;
        middle += 1;
        midRight += 1;
        right += 1;
        
        if (left >= nbSlide ) {
            left = 0;
        } else if (midLeft >= nbSlide ) {
            midLeft = 0;
        } else if (middle >= nbSlide ) {
            middle = 0;
        } else if (midRight >= nbSlide ) {
            midRight = 0;
        } else if (right >= nbSlide ) {
            right = 0;
        }

        slides[left].classList.add('left');
        slides[midLeft].classList.add('mid-left');
        slides[middle].classList.add('center');
        slides[midRight].classList.add('mid-right');
        slides[right].classList.add('right');
    });
}