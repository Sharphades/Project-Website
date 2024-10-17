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
    if (localStorage.getItem('islog')) {
        formBG.classList.add('anim');
        form.classList.add('anim');  
    } else {
        location.href = 'sign.html';
    }
       
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

document.getElementById('submit-button').addEventListener('click',() =>{
    let reports = getReports();

    const userReports = {
        fullName: document.getElementById('name-input').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    reports.push(userReports);
    localStorage.setItem('Reports', JSON.stringify(reports));
    remove();
});

function getReports() {
    return JSON.parse(localStorage.getItem('Reports')) || [];
}
