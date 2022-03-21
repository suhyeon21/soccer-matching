const left = document.querySelector(".left");
const right = document.querySelector(".right");
const banners = document.querySelector(".banners");
const button = document.querySelector(".button");

button.addEventListener("click", function () {
  banners.style.transform = "translate( -100em)";
});
