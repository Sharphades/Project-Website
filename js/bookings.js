const logoutbtn = document.getElementById('logoutbtn');
const loginbtn = document.getElementById('loginbtn');

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
    console.log(loginbtn);
    
});