// let diaporama = document.querySelector('.diaporama');
// if (diaporama) {
//     let diapos = diaporama.querySelectorAll('.diapo');
//     let nbDiapo = diapos.length;
//     let showDiapo = 0;
//     for (let i = 0; i < diapos.length; i++) {
//         let diapo = diapos[i];
//         if (i === 0) {
//             diapo.style.display = 'block';
//         } else {
//             diapo.style.display = 'none';
//         }
//     }
    
//     let prevArrow = diaporama.querySelector('.prev');
//     let nextArrow = diaporama.querySelector('.next');
//     prevArrow.addEventListener('click', function () {
//         diapos[showDiapo].style.display = 'none';
//         showDiapo -= 1;
//         if (showDiapo < 0) {
//             showDiapo = nbDiapo - 1;
//         }
//         diapos[showDiapo].style.display = 'block';
//     });

//     nextArrow.addEventListener('click', function () {
//         diapos[showDiapo].style.display = 'none';
//         showDiapo += 1;
//         if (showDiapo >= nbDiapo) {
//             showDiapo = 0;
//         }
//         diapos[showDiapo].style.display = 'block';
//     });
// }

var slideIndex = 0;
diaporama();

function diaporama() {
    var i;
    var x = document.getElementsByClassName("diapo");
    for (i = 0; i < x.length; i++) {
     //   x[i].style.display = "none";
        x[i].classList.remove('disImg');
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].classList.add('disImg');
    //x[slideIndex-1].style.display = "block";
    setTimeout(diaporama, 6000); // Change image every 2 seconds
}