/*
Exercise 1 :
Modify the addCard function from the previous slide so that you can pass content for the card dynamically.
*/

function addCard(title, text) {
  // clone the template
  const template = document.getElementById("card-template")
    .content.cloneNode(true);
  
  // populate the template with dynamic content
  template.querySelector('.card-title').innerText = title;
  template.querySelector('.card-text').innerText = text;
  
  // include the populated template into the page
  document.querySelector('#card-list')
    .appendChild(template);
}

// Usage examples:
addCard('My Card Title', 'lorem ipsum ble bla');
addCard('Welcome!', 'This is dynamic content.');
addCard('Another Card', 'More content here...');


/*
Exercise 2 :
Call addCard repeatedly so that your cards are automatically generated based on data from an array. This way you will create as many cards as you need to display all the data in the array.
*/

const data = [
  {name: 'bob', age: 23}, 
  {name: 'alice', age: 39}
];


data.forEach(person => {
  addCard(person.name, `Age: ${person.age}`);
});


/*
Exercise 3 - the artist’s portfolio:
Populate the page dynamically, by generating an artist profile card which includes cards representing the items in an artist's portfolio. Extension: make an array of artists, all with multiple portfolio items.
*/

const artist = { 
  name: "Van Gogh", 
  portfolio: [
    {
      title: "portrait", 
      url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"
    },
    {
      title: "sky", 
      url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"
    },
  ] 
};

// Reusable addCard function (from Exercise 1)
function addCard(title, text, imageUrl = null) {
  const template = document.getElementById("card-template")
    .content.cloneNode(true);
  
  template.querySelector('.card-title').textContent = title;
  template.querySelector('.card-text').textContent = text;
  
  if (imageUrl) {
    const img = template.querySelector('.card-img');
    if (img) {
      img.src = imageUrl.trim();
      img.alt = title;
      img.style.display = 'block';
    }
  }
  
  document.querySelector('#card-list').appendChild(template);
}

// 1. Add artist profile header (optional)
const header = document.createElement('h2');
header.textContent = artist.name;
document.querySelector('#card-list').appendChild(header);

// 2. Generate a card for each portfolio item
artist.portfolio.forEach(artwork => {
  addCard(artwork.title, `by ${artist.name}`, artwork.url);
});


// EXTENSION
const artists = [
  { 
    name: "Van Gogh", 
    portfolio: [
      { title: "Starry Night", url: "https://example.com/starry.jpg" },
      { title: "Sunflowers", url: "https://example.com/sunflowers.jpg" }
    ] 
  },
  { 
    name: "Picasso", 
    portfolio: [
      { title: "Guernica", url: "https://example.com/guernica.jpg" },
      { title: "Old Guitarist", url: "https://example.com/guitarist.jpg" }
    ] 
  }
];

// Render all artists and their portfolios
artists.forEach(artist => {
  // Artist header
  const header = document.createElement('h2');
  header.textContent = artist.name;
  document.querySelector('#card-list').appendChild(header);
  
  // Portfolio cards
  artist.portfolio.forEach(artwork => {
    addCard(artwork.title, `by ${artist.name}`, artwork.url);
  });
});