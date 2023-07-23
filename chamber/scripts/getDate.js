// declare and instantiate a variable to hold the current year
const currentYear = 2023;

// place the value of the current year variable into the HTML file
document.querySelector('#currentYear').innerHTML = currentYear;

let currentdate = document.lastModified;
        // document.getElementById('modified').textContent = 'Last Updated: '+ currentdate + '.';
document.getElementById('lastModified').textContent = `Last Updated ${currentdate} . `;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "❎";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});

/*-----------------WeatherToday-----------------*/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon-today');
const captionDesc = document.querySelector('#todayCaption');

const url = 'https://api.openweathermap.org/data/3.0/weather?lat=4.95&lon=6.34&units=imperial&appid=84887fd1e98f2909b5621a6c5dfe03f3';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    captionDesc.textContent = desc;
}

apiFetch();

/*-----------------ForecastWeather-----------------*/
const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#weather-icon-forecast');
const forecastCaption = document.querySelector('#forecastCaption');

const forecastUrl = 'https://api.openweathermap.org/data/3.0/forecast?lat=4.95&lon=6.34&units=imperial&appid=84887fd1e98f2909b5621a6c5dfe03f3';

async function apiFetchForecast(){
	try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
			displayResultsFore(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResultsFore(data){
    forecastTemp.innerHTML = `${data.list[16].main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
    let desc = data.list[16].weather[0].description;

    forecastIcon.setAttribute('src', imgSrc);
    forecastIcon.setAttribute('alt', 'weatherIcon');
    forecastCaption.textContent = desc;
}


apiFetchForecast();



/* ---------Discover-------- */
const currentDate = document.querySelector(".current-date");
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];
const DaysLi = document.querySelector(".days"); 
const buttons = document.querySelectorAll(".icons span"); 

let date = new Date();
currYear = date.getFullYear();
currMonth = date.getMonth();

function displayCalendar(){
    let firstDayoftMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayoftMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let listItems = '';

    for (let i = firstDayoftMonth; i > 0; i--) {
        listItems += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`
    }
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ?
                     "active" : "";
        listItems += `<li class='${isToday}'>${i}</li>`
    }

    for (let i = lastDayoftMonth; i < 6; i++) {
        listItems += `<li class='inactive'>${i - lastDayoftMonth + 1}</li>`
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`
    DaysLi.innerHTML = listItems;
}

displayCalendar();

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        currMonth = button.id === "prev" ? currMonth - 1 : currMonth + 1
        if (currMonth > 11) {
            currMonth = 0;
            currYear += 1;
        }else if(currMonth < 0){
            currMonth = 11;
            currYear-=1;
        }
        displayCalendar();
    })
})


const displayMessage = document.querySelector('.visit h2');

let numVisits = Number(localStorage.getItem('numVisits')) || 0;

let dateOfVisit = Date.now();



let firstVisit;

if (numVisits === 0){
    displayMessage.textContent = 'Welcome! Let us know if you have any questions.';
    localStorage.setItem('dayLastVisit', Date.now());
} else if(dateOfVisit - Number(localStorage.getItem('dayLastVisit')) >= 86400000){
    let days = Math.ceil((dateOfVisit - (Number(localStorage.getItem('dayLastVisit'))))/86400000);
    displayMessage.textContent = `You last visited ${days} days ago.`;
    localStorage.setItem('dayLastVisit', dateOfVisit);
} else if(dateOfVisit - Number(localStorage.getItem('dayLastVisit')) < 86400000){
    displayMessage.textContent = 'Back so soon! Awesome!';
    localStorage.setItem('dayLastVisit', dateOfVisit)
}

numVisits++
localStorage.setItem('numVisits', numVisits);



/* ---------Directory-------- */

const baseURL = 'https://deinmoere.github.io/wdd230/chamber/';
const linksURL = 'https://deinmoere.github.io/wdd230/chamber/data/members.json';
const listItems = document.querySelector('.grid');

async function fetchLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayCards(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayCards(data){
    data.directory.forEach(member => {
        let section = document.createElement('section');
        let nameMember = document.createElement('h4');
        let addressMember = document.createElement('p');
        let phoneMember = document.createElement('p');
        let urlMember = document.createElement('a');
        let imgMember = document.createElement('img');
        let membership = document.createElement('p');
        
        nameMember.innerHTML = `${member.name}`
        imgMember.setAttribute('src', member.image);
        imgMember.setAttribute('alt', member.name);
        imgMember.setAttribute('loading', 'lazy');
        imgMember.setAttribute('width', '160');
        imgMember.setAttribute('height', '160');
        addressMember.innerHTML = `${member.address}`;
        phoneMember.innerHTML = `${member.phone}`;
        urlMember.innerHTML = `${member.website}`;
        urlMember.setAttribute('href', member.website);
        membership.innerHTML = `Membership: ${member.membership_level}`;
        
        section.appendChild(imgMember);
        section.appendChild(nameMember);
        section.appendChild(addressMember);
        section.appendChild(phoneMember);
        section.appendChild(urlMember);
        section.appendChild(membership_level);
        

        listItems.appendChild(section);
    });
}

fetchLinks();


// functionality for the buttons
const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector("article");


gridbtn.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbtn.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}