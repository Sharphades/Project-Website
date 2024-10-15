const form = document.querySelector('.colorful-form');
const formBG = document.querySelector('.container-fluid.custom-position');
const button = document.querySelector('.button');
const cancelButton = document.getElementById('cancel-button');
const logoutbtn = document.getElementById('logoutbtn');
const loginbtn = document.getElementById('loginbtn');

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

logoutbtn.addEventListener('click', () => {
    localStorage.removeItem('islog');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('loggedUser');
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('islog') === 'true') {
        logoutbtn.classList.remove('d-none');
        loginbtn.classList.add('d-none');
    } else {
        logoutbtn.classList.add('d-none');
        loginbtn.classList.remove('d-none');
    }
    
});

