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

//slider
// const carouselContainer = document.querySelector(".carousel-container");
// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelectorAll(".carousel-slide img");

// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");

// let counter = 1;
// const size = 930;
// carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// carouselContainer.style.width = size * 5;
$(".visual").slick();

// Jump to First/Last Slide
// carouselSlide.addEventListener("transitionend", () => {
//   console.log(carouselImages[counter]);
//   if (carouselImages[counter].id === "lastClone") {
//     carouselSlide.style.transition = "none"; // 트랜지션 효과 없애기
//     counter = carouselImages.length - 2; // couter 초기화
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)"; // 실제 마지막 이미지로 이동.
//   } else if (carouselImages[counter].id === "firstClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter; // couter 초기화
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
// });

loadItems()
  .then((matches) => {
    displayItems(matches);
  })
  .catch(console.log);
