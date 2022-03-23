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
