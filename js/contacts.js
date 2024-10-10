const form = document.querySelector('.colorful-form');
const formBG = document.querySelector('.container-fluid.custom-position');
const button = document.querySelector('.button');
const cancelButton = document.getElementById('cancel-button');

function remove() {
    form.classList.remove('anim');
    formBG.classList.remove('anim');
}
button.addEventListener('click', () => {
    formBG.classList.add('anim');
    form.classList.add('anim');     
});

cancelButton.addEventListener('click', remove);

formBG.addEventListener('click', (e) => {
    if (e.target === formBG) { 
        formBG.classList.add('anim');
        form.classList.add('anim');
    }
});
