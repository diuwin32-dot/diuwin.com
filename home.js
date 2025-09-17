// Demo: carousel can be cycled (optional)
const indicators = document.querySelectorAll('.carousel-indicators span');
let current = 0;
setInterval(() => {
    indicators[current].classList.remove('active');
    current = (current + 1) % indicators.length;
    indicators[current].classList.add('active');
}, 2600);