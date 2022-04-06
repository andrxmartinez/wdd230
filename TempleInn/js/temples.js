const requestURL = "data.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    const temples = jsonObject["Temples"];
    temples.forEach(displayTemples);
});

function displayTemples(temple){
    let card = document.createElement("section");
    let name = document.createElement("p");
    let phone = document.createElement("p");
    let address = document.createElement("p");
    let hours = document.createElement("p");
    let img  = document.createElement("img");

    // Update the textContent of each new element
    name.textContent = `${temple.name}`;
    name.setAttribute('id', "temple-name");
    phone.textContent = `Phone: ${temple.phone}`;
    address.textContent = `Address: ${temple.address}`;
    hours.textContent = `Hours: ${temple.hours}`;
    img.setAttribute('src',temple.image);
    img.setAttribute('alt', `${temple.name}`);
    
    // Appened list items in p-tags into the section/card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(hours);

    // card.appendChild(website);

    // Append card to the existing div.
    document.querySelector("div.cards").appendChild(card);
}

const gridView = document.querySelector("#temples-list");
const listView = document.querySelector("#temples-card");
const currentDivView = document.querySelector(".cards");

gridView.addEventListener('click', togridView);

function togridView() {
    currentDivView.classList.remove("list");
    currentDivView.classList.add("cards");
}

listView.addEventListener('click', tolistView);

function tolistView() {
    currentDivView.classList.remove("cards");
    currentDivView.classList.add("list");
}