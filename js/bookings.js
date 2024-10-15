const logoutbtn = document.getElementById('logoutbtn');
const loginbtn = document.getElementById('loginbtn');
const bookingTable = document.getElementById('table');

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

function getAllLoggedUserBookings() {
    const loggedUserEmail = getLoggedUser().email;
    const allBookings = getAllBookings();
    
    for (let i = 0; i < allBookings.length; i++) {
        if (loggedUserEmail === allBookings[i].email) {
            const newRow = bookingTable.insertRow();
            const booking = allBookings[i];

            const idCell = newRow.insertCell(0);
            const fullNameCell = newRow.insertCell(1);
            const fromCell = newRow.insertCell(2);
            const toCell = newRow.insertCell(3);
            const departureCell = newRow.insertCell(4);
            const arrivalCell = newRow.insertCell(5);
            

            idCell.textContent = i + 1;
            fullNameCell.textContent = booking.fullname.toUpperCase();
            fromCell.textContent = booking.departure.toUpperCase();
            toCell.textContent = booking.arrival.toUpperCase();
            departureCell.textContent = booking.departureDate.toUpperCase();
            arrivalCell.textContent = booking.returnDate.toUpperCase();

        }
    }
}

function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}

function getAllBookings() {
    return JSON.parse(localStorage.getItem('bookings')) || [];
}

if (localStorage.getItem('islog')) {
    getAllLoggedUserBookings();
} else {
    location.href = 'sign.html';
}
