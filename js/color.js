const spans = document.querySelectorAll('.classes__item--text span');
let currentIndex = 0;

function changeColor() {
    spans.forEach(span => {
        span.style.color = 'black';

    });
    spans[currentIndex].style.color = '#AD1457';
    currentIndex = (currentIndex + 1) % spans.length;

}
setInterval(changeColor, 2000);