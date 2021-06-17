
const hamburger = document.getElementById("hamburger-menu");
const sideMenu = document.getElementById("side-menu");
const close = document.getElementById("close");

hamburger.addEventListener("click", function () {
  sideMenu.classList.add("show-menu");
});

close.addEventListener("click", function () {
  sideMenu.classList.remove("show-menu");
});

const resources = document.getElementById("resources");
const dropdown = document.getElementById("dropdown");

resources.addEventListener("mouseover", function () {
  dropdown.classList.add("shown");
});

dropdown.addEventListener("mouseleave", function () {
  dropdown.classList.remove("shown");
});
