const buttons = document.querySelectorAll('.btn-check');
const returnDiv = document.getElementById('return');
const travel = document.getElementById('travel');
const navbar = document.getElementById('navbar');
const mainForm = document.getElementById('mainForm');
const getStarted = document.querySelector('.button');
const animation = document.querySelectorAll('#scrollAnim');
const logoutbtn = document.getElementById('logoutbtn');
const loginbtn = document.getElementById('loginbtn');
const foradmin = document.getElementById('foradmin');
const bookbtn = document.getElementById('bookbtn');
const bookings = document.getElementById('bookings');


bookings.onclick = function() {
    if (localStorage.getItem('islog')) {
        location.href = 'bookings.html';
    } else {
        location.href = 'sign.html';
    }
};

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

getStarted.addEventListener('click', () => {
    mainForm.style.transform = 'translateY(0px)';
});


document.addEventListener('scroll', function() {
    if (window.scrollY === 0) {
            navbar.classList.remove('blur');
            mainForm.style.transform = 'translateY(200px)';
            mainForm.style.opacity = 0;
    } else {
            navbar.classList.add('blur');
            mainForm.style.opacity = 1;
            mainForm.style.transform = 'translateY(0px)';
    }

    animation.forEach(item => { 
        const itemRect = item.getBoundingClientRect();
        
        if (itemRect.bottom < window.innerHeight) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateY(30px)';
            item.style.opacity = '0';
        }
        
    });
});

logoutbtn.addEventListener('click', () => {
    localStorage.removeItem('islog');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('loggedUser');
});

bookbtn.onclick = function() {
    if (localStorage.getItem('islog') === 'true') {
        const departure = document.getElementById('departure').value;
        const arrival = document.getElementById('arrival').value;
        const departureDate = document.getElementById('departureDate').value;
        const returnDate = document.getElementById('returnDate').value;

        if (document.getElementById('roundTrip').checked && (!departure || !arrival || !departureDate || !returnDate)) {
            alert('butngi sad mam'); 
        } else if (document.getElementById('roundTrip').checked == false && (!departure || !arrival || !departureDate)) {
            alert('butngi tanan ')
        } else {
            let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

            const data = {
                fullname: getLoggedUser().firstname + " " + getLoggedUser().lastname,
                email: getLoggedUser().email,
                departure: departure,
                arrival: arrival,
                departureDate: departureDate,
                returnDate: returnDate,
                price: 100
            };
            
            bookings.push(data);
            
            localStorage.setItem('bookings', JSON.stringify(bookings));

            location.reload();
        }
    } else {
        location.href = 'sign.html'
    }
}





document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('islog') === 'true') {
        logoutbtn.classList.remove('d-none');
        loginbtn.classList.add('d-none');
    } else {
        logoutbtn.classList.add('d-none');
        loginbtn.classList.remove('d-none');
    }

    if (localStorage.getItem('isAdmin') === 'true') {
        foradmin.classList.remove('d-none');
    } else {
        foradmin.classList.add('d-none');
    }
    
});


function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}

if (!localStorage.getItem('Users')) {
    let users = getUsers();

    const admin = {
        firstname: 'Sharp',
        lastname: 'Hades',
        email: 'sharphades2004@gmail.com',
        password: 'admin@',
        type: 'admin'
    };

    users.push(admin);
    localStorage.setItem('Users', JSON.stringify(users));
}
        
function getUsers() {
    return JSON.parse(localStorage.getItem('Users')) || [];
}