    const sidebarBtns = document.querySelectorAll('.nav-link');
    const tabs = document.querySelectorAll('.container-fluid.h-100');
    const totalSales = document.getElementById('totalSales');
    const userCounts = document.getElementById('userCount');
    const bookingCounts = document.getElementById('bookingCounts');
    const manageFlightTable = document.getElementById('manageFlightTable');
    const manageUserTable = document.getElementById('manageUserTable');
    const reportsTable = document.getElementById('reportsTable');

    sidebarBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            sidebarBtns.forEach((button) => {
                button.classList.remove('active');
            });
            
            btn.classList.add('active');

            tabs.forEach((tabs) => {
                tabs.classList.add('d-none');
            });

            tabs[index].classList.remove('d-none')
        });
    });

    var options = {
        chart: {
            height: 350,
            type: 'line',
            mixed: {
                type: ['line', 'bar'],
                columnWidth: '50%',
            },
            toolbar: {
                show: false, // Disable the toolbar and icons
            },
        },
        series: [
            {
                name: 'Sales',
                type: 'bar',
                data: [getAllBookings().length * 100],
            },
            {
                name: 'Users',
                type: 'bar',
                data: [getAllUsers().length],
            },
            {
                name: 'Bookings',
                type: 'bar',
                data: [getAllBookings().length],
            },
        ],
        xaxis: {
            categories: ['October'],
        },
        yaxis: {
            title: {
                text: 'Values',
            },
        },
        legend: {
            position: 'top',
        },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();


    function getAllUsers() {
        return JSON.parse(localStorage.getItem('Users')) || [];
    }

    function getAllBookings() {
        return JSON.parse(localStorage.getItem('bookings')) || [];
    }


    userCounts.innerText = getAllUsers().length;
    bookingCounts.innerText = getAllBookings().length;
    totalSales.innerText = getAllBookings().length * 100;

    function getOverallBookings() {
        const allBookings = getAllBookings();
        
        for (let i = 0; i < allBookings.length; i++) {
                const newRow = manageFlightTable.insertRow();
                const booking = allBookings[i];

                const idCell = newRow.insertCell(0);
                const fullNameCell = newRow.insertCell(1);
                const fromCell = newRow.insertCell(2);
                const toCell = newRow.insertCell(3);
                const departureCell = newRow.insertCell(4);
                const returnCell = newRow.insertCell(5);
                const actionCell = newRow.insertCell(6);
                

                idCell.textContent = i + 1;
                fullNameCell.textContent = booking.fullname.toUpperCase();
                fromCell.textContent = booking.departure.toUpperCase();
                toCell.textContent = booking.arrival.toUpperCase();
                departureCell.textContent = booking.departureDate.toUpperCase();
                returnCell.textContent = booking.returnDate.toUpperCase();
                actionCell.innerHTML = `<button type="button" class="btn btn-primary">Edit</button> <button type="button" class="btn btn-danger">Delete</button>`;

        }
    }


    function getBookings() {
        return JSON.parse(localStorage.getItem('bookings')) || [];
    }

    getOverallBookings();


    function getAllUsers() {
        return JSON.parse(localStorage.getItem('Users')) || [];
    }

    function deleteUserTableRow(item) {               
        if (item.parentElement.parentElement.cells[1].innerText === JSON.parse(localStorage.getItem('loggedUser')).email) {
            localStorage.removeItem('islog');
            localStorage.removeItem('isAdmin');
            localStorage.removeItem('loggedUser');
        }
        let ikapila = item.parentElement.parentElement.rowIndex;
        manageUserTable.deleteRow(ikapila);
        let users = getAllUsers()


        users.splice(ikapila-1, 1);
        
        localStorage.setItem('Users', JSON.stringify(users));
    }

    function listAllUsers() {
        const users = getAllUsers();

        for (let i = 0; i < users.length; i++) {
                const newRow = manageUserTable.insertRow();
                const user = users[i];

                const fullNameCell = newRow.insertCell(0);
                const emailCell = newRow.insertCell(1);
                const passwordCell = newRow.insertCell(2);
                const typeCell = newRow.insertCell(3);
                const actionCell = newRow.insertCell(4);
                

                fullNameCell.textContent = user.firstname + " " + user.lastname;
                emailCell.textContent = user.email;
                passwordCell.textContent = user.password;
                typeCell.textContent = user.type;
                actionCell.innerHTML = `<button type="button" class="btn btn-primary">Edit</button> <button type="button" onClick="deleteUserTableRow(this)" class="btn btn-danger">Delete</button>`;

        }
    }

    listAllUsers();
    

    function getReports() {
        return JSON.parse(localStorage.getItem('Reports')) || [];
    }

    function deleteReportsTableRow(item) {               

        let ikapila = item.parentElement.parentElement.rowIndex;
        reportsTable.deleteRow(ikapila);
        let reports = getReports();


        reports.splice(ikapila-1, 1);
        
        localStorage.setItem('Reports', JSON.stringify(reports));
    }

    function listReports() {
        let allreports = getReports();
        for (let i = 0; i<allreports.length; i++) {
            const newRow = reportsTable.insertRow();
            const reports = allreports[i];

            const fullNameCell = newRow.insertCell(0);
            const emailCell = newRow.insertCell(1);
            const messageCell = newRow.insertCell(2);
            const actionCell = newRow.insertCell(3);
                
            fullNameCell.textContent = reports.fullName.toUpperCase();
            emailCell.textContent = reports.email;
            messageCell.textContent = reports.message.toUpperCase();
            actionCell.innerHTML = `<button type="button" class="btn btn-primary">Edit</button> <button onClick="deleteReportsTableRow(this)" type="button" class="btn btn-danger">Delete</button>`;

            console.log(2);
            
        }
    }


  listReports();
    