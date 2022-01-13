// let slider = document.querySelector('.carousel');
// if (slider) {
//     let slides = slider.querySelectorAll('.slide');
//     let nbSlide = slides.length;
//     let showSlide = 0;
//     for (let i = 0; i < slides.length; i++) {
//         let slide = slides[i];
//         if (i === 0) {
//             slide.classList.add('left');
//         } else {
//             slide.classList.remove('left');
//         }
//     }

//     let prevArrow = slider.querySelector('.prev');
//     let nextArrow = slider.querySelector('.next');

    // prevArrow.addEventListener('click', function () {
    //     slides[showSlide].classList.remove('center');
    //     showSlide -= 1;
    //     if (showSlide < 0) {
    //         showSlide = nbSlide - 1;
    //     }
    //     slides[showSlide].classList.add('center');
    // });

//     nextArrow.addEventListener('click', function () {
//         slides[showSlide].classList.remove('center');
//         showSlide += 1;
//         if (showSlide >= nbSlide) {
//             showSlide = 0;
//         }
//         slides[showSlide].classList.add('center');
//     });
// }

let slider = document.querySelector('.carousel');
if (slider) {
    let slides = slider.querySelectorAll('.slide');
    let nbSlide = slides.length;
    let showSlide = 0;
    for (let i = 0; i < slides.length; i++) {
        let slide = slides[i];
            if (i === 0) {
                slide.classList.add('center');
            } else {
                slide.classList.remove('center');
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