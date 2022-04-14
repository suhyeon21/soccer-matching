// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.matches);
}
// Update the list with the given items
function displayItems(matches) {
  const container = document.querySelector(".lists");
  container.innerHTML = matches
    .map((match) => createHTMLString(match))
    .join("");
}

// Create HTML list item from the given data item
function createHTMLString(match) {
  return `
    <li class="matches">
        <p class="match time">${match.time}</p>
        <h3 class="match title">${match.title}</h3> 
        <span class="match option">${match.option}</span> 
        <p class="match status">${match.status}</p>
    </li>
    `;
}

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const banners = document.querySelector(".banners");
const button = document.querySelector(".button");

let counter = 1;

button.addEventListener("click", function () {
  counter++;
  banners.style.transform = "translate(" + -1000 * counter + "px)";
  console.log(counter);
});

loadItems()
  .then((matches) => {
    displayItems(matches);
  })
  .catch(console.log);
