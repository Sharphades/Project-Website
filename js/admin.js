const sidebarBtns = document.querySelectorAll('.nav-link');
const tabs = document.querySelectorAll('.container-fluid.h-100');

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
            data: [0],
        },
        {
            name: 'Users',
            type: 'bar',
            data: [0],
        },
        {
            name: 'Bookings',
            type: 'bar',
            data: [20],
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
