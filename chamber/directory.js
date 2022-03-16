// const requestURL = 'https://andrxmartinez.github.io/wdd230/chamber/directory/data.json';

const requestURL = "data.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    const businesses = jsonObject["Businesses"];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    let card = document.createElement("section");
    let name = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let img  = document.createElement("img");

    // Update the textContent of each new element
    name.textContent = `${business.name}`;
    name.setAttribute('id', "business-name");
    phone.textContent = `Phone: ${business.phone}`;
    website.textContent = `${business.website}`;
    website.setAttribute('href', business.website);
    img.setAttribute('src',business.image);
    img.setAttribute('alt', `${business.name}`);
    
    // Appened list items in p-tags into the section/card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(website);

    // Append card to the existing div.
    document.querySelector("div.cards").appendChild(card);
}

const gridView = document.querySelector("#directory-card");
const listView = document.querySelector("#directory-list");
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