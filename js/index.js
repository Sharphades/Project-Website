const buttons = document.querySelectorAll('.btn-check');
const returnDiv = document.getElementById('return');
const travel = document.getElementById('travel');
const navbar = document.getElementById('navbar');

buttons.forEach(button => {
    button.addEventListener('change', () => {
        if (document.getElementById('roundTrip').checked) {
            returnDiv.classList.remove('d-none');
            travel.classList.remove('w-100');
        } else {
            returnDiv.classList.add('d-none');
            travel.classList.add('w-100');
        }
    });
});

document.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
            navbar.classList.remove('blur');
    } else {
            navbar.classList.add('blur');
    }
});