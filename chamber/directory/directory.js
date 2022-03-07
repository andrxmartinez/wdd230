const requestURL = 'https://andrxmartinez.github.io/wdd230/chamber/directory/data.json';

fetch(requestURL)
.then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject);  // temporary checking for valid response and data parsing
  const businesses = jsonObject['Businesses'];
  businesses.forEach(displayBusinesses)
});

function displayBusinesses(business) {  // Create elements to add to the document
  let card = document.createElement('section');
  let img = document.createElement ('img');


//   h2.textContent =`${prophet.name}  ${prophet.lastname}`;
//   dob.textContent = `${prophet.birthdate}`;
//   pob.textContent = `${prophet.birthplace}`;
  img.setAttribute('src', `directoryimages/${business.image}`);
//   img.setAttribute('alt', `${prophet.name}  ${prophet.lastname} ${prophet.order}`);



  // Add/append the section(card) with the h2 element
  card.appendChild(img);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}

//to clear out cards
//   let card = document.querySelectorAll('.cards')
//   card.forEach((item)=>{
//       item.remove();
//   })


// changing styles in JS 

// let change = document.querySelector('.cards');
// change.setAttribute('style', 'background-color: lightBlue;')


// function changeStyles(){
//     if (window.innerWidth> 880 && window.innerWidth < 1000)}

//event listeners to resize window and load window

// window.addEventListener('resize', changeStyles);
// window.addEventListener('load', changeStyles);