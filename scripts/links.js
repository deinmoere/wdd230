const baseURL = 'https://deinmoere.github.io/wdd230/';
const linksURL = 'https://deinmoere.github.io/wdd230/data/links.json';
const listItems = document.querySelector('#links');

async function fetchLinks(){
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayLinks(data){
    let weeks = data.weeks
    weeks.forEach((week) => {
        let ulList = document.createElement('li');
        ulList.innerHTML = `${week.week}: `;
        let counter = 0;
        week.links.forEach((link)=>{
            if(counter != week.links.length - 1){
                ulList.innerHTML += `<a class='link' href="${link.url}">${link.title}</a> | `;
            }else{
                ulList.innerHTML += `<a class='link' href="${link.url}">${link.title}</a>`
            }
            counter++;

        })
        listItems.appendChild(ulList);
    });
}

fetchLinks();