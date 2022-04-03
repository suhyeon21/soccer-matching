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
        <span class="match time">${match.time}</span>
        <span class="match title">${match.title}</span> 
        <span class="match option">${match.option}</span> 
        <span class="match status">${match.status}</span>
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
  banners.style.transform = "translate(" + -100 * counter + "em)";
  console.log(counter);
});

loadItems()
  .then((matches) => {
    displayItems(matches);
  })
  .catch(console.log);
