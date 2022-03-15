const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });

  function displayProphets(prophet){
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img')
    // Update content of h2, dob, pob and append to card
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `Birthday: ${prophet.birthdate}`;
    pob.textContent = `Birthplace: ${prophet.birthplace}`;
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', prophet.name);
    
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);

    // Add/append card to the existing div.
    document.querySelector('div.cards').appendChild(card);

  }
  