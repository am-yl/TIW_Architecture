let slider = document.querySelector('.carousel');
if (slider) {
    let slides = slider.querySelectorAll('.slide');
    let nbSlide = slides.length;
    let lastS = nbSlide-2;
    let befLastS = nbSlide-1;
    let showSlide = i = 0;
    let nextS = 1;
    let affNextS = 2;
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
            case lastS :
                slide.classList.add('left');
                break;
            case befLastS :
                slide.classList.add('mid-left');
                break;    
        }
    }

    let prevArrow = slider.querySelector('.prev');
    let nextArrow = slider.querySelector('.next');

    prevArrow.addEventListener('click', function () {
        
        slides[lastS].classList.remove('left');
        slides[befLastS].classList.remove('mid-left');
        slides[showSlide].classList.remove('center');
        slides[nextS].classList.remove('mid-right');
        slides[affNextS].classList.remove('right');

        lastS -= 1;
        befLastS -= 1;
        showSlide -= 1;
        nextS -= 1;
        affNextS -= 1;
        
        if (lastS < 0) {
            lastS = nbSlide - 1;
        } else if (befLastS < 0) {
            befLastS = nbSlide - 1;
        } else if (showSlide < 0) {
            showSlide = nbSlide - 1;
        } else if (nextS < 0) {
            nextS = nbSlide - 1;
        } else if (affNextS<0) {
            affNextS = nbSlide - 1;
        }

        slides[lastS].classList.add('left');
        slides[befLastS].classList.add('mid-left');
        slides[showSlide].classList.add('center');
        slides[nextS].classList.add('mid-right');
        slides[affNextS].classList.add('right');
    });

    nextArrow.addEventListener('click', function () {
            slides[lastS].classList.remove('left');
            slides[befLastS].classList.remove('mid-left');
            slides[showSlide].classList.remove('center');
            slides[nextS].classList.remove('mid-right');
            slides[affNextS].classList.remove('right');
    
            lastS += 1;
            befLastS += 1;
            showSlide += 1;
            nextS += 1;
            affNextS += 1;
            
            if (lastS >= nbSlide ) {
                lastS = 0;
            } else if (befLastS >= nbSlide ) {
                befLastS = 0;
            } else if (showSlide >= nbSlide ) {
                showSlide = 0;
            } else if (nextS >= nbSlide ) {
                nextS = 0;
            } else if (affNextS >= nbSlide ) {
                affNextS = 0;
            }
    
            slides[lastS].classList.add('left');
            slides[befLastS].classList.add('mid-left');
            slides[showSlide].classList.add('center');
            slides[nextS].classList.add('mid-right');
            slides[affNextS].classList.add('right');
        });
}