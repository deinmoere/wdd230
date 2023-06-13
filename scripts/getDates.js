// declare and instantiate a variable to hold the current year
const currentYear = 2023;

// place the value of the current year variable into the HTML file
document.querySelector('#currentYear').innerHTML = currentYear;

let currentdate = document.lastModified;
        // document.getElementById('modified').textContent = 'Last Updated: '+ currentdate + '.';
document.getElementById('lastModified').textContent = `Last Updated ${currentdate} . `;