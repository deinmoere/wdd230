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

// Script for Number of Visits
//let numVisits = document.querySelector('.daysOfVisit');

//Script for displaying the number of days on Discover page

/* let numOfVisits = Number(window.localStorage.getItem("visits"));
let lastVisit= Number(window.localStorage.getItem("lastVisits"));

const FACTOR = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;

let numOfDays = Math.ceil(daysBetween / FACTOR);

localStorage.setItem("lastVisits", Date.now());

if (numOfVisits !== 0) {
	numVisits.textContent = "Welcome! Let us know if you have any questions."    
} 

else {
	numVisits.textContent = "You last visited"  + numOfDays + "days ago."    
}
 */
/* numOfVisits++;
// store the new number of visits value
localStorage.setItem("visits", numOfVisits); */

// Days since last visit

let todays = Date.now();

// initialize display elements
const visitsDisplay = document.querySelector(".daysOfvisits");

// get the stored value in localStorage
let lastVisit = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (lastVisit > 0) {
    let visitGap = Math.abs(todays - lastVisit) / 1000;
    days = Math.floor(visitGap / 86400);
    visitsDisplay.textContent = "You last visited"  + days + "days ago.";
} else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

// store the new number of visits value
localStorage.setItem("visits-ls", todays);


/* -------FORMS------- */
const benefitcontainer = document.querySelector(".benefit");


function setDisplay(one, two, three, price) {

    benefitcontainer.style.display = "block";

    document.querySelector("#one").textContent = one;
    document.querySelector("#two").textContent = two;
    document.querySelector("#three").textContent = three;
    document.querySelector("#price").textContent = price;
}

function free() {

    let price = "Free";
    let one = "Free water supply";

    setDisplay(one, "", "", price);

}


function bronze() {
    let one = "Free pool service";
    let two = "Free towing service";
    let three = "Special invite to events";
    let price = "$200/month";


    setDisplay(one, two, three, price);


}

function silver() {
    let one = "All of bronze benefits";
    let two = "Free banner Ads";
    let three = "Free golf course entry";
    let price = "$300/month";

    setDisplay(one, two, three, price);



}

function gold() {
    let one = "All of Silver benefits";
    let two = "Free 6months gym entry";
    let three = "Free stadium entry";
    let price = "$500/month";

    setDisplay(one, two, three, price);

}



document.querySelector("#free").addEventListener("click", free);
document.querySelector("#bronze").addEventListener("click", bronze);
document.querySelector("#silver").addEventListener("click", silver);
document.querySelector("#gold").addEventListener("click", gold);

// submission time

const dt = new Date();
let day = dt.getDate();
let month = dt.getMonth() + 1;
let years = dt.getFullYear();
let hour = dt.getHours();
let minutes = dt.getMinutes();
let sec = dt.getSeconds();
day = (day <= 9) ? '0' + day : day;
month = (month <= 9) ? '0' + month : month;

document.querySelector("#timeStamp").value = `${day}.${month}.${years}..${hour}.${minutes}.${sec}`;