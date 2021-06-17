
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

let i = 0;
const carousel = document.getElementById("carousel");

function changeCarouselForward() {
  i++;
  if (i === 0) {
    carousel.style.backgroundImage = "url('../img/friends1.jpeg')";
  } else if (i === 1) {
    carousel.style.backgroundImage = "url('../img/friends2.jpeg')";
  } else if (i === 2) {
    carousel.style.backgroundImage = "url('../img/friends3.jpeg')";
  } else if (i === 3) {
    i = 0;
    carousel.style.backgroundImage = "url('../img/friends1.jpeg')";
  }
}

function changeCarouselBackward() {
  i--;
  if (i === 0) {
    carousel.style.backgroundImage = "url('../img/friends1.jpeg')";
  } else if (i === 1) {
    carousel.style.backgroundImage = "url('../img/friends2.jpeg')";
  } else if (i === 2) {
    carousel.style.backgroundImage = "url('../img/friends3.jpeg')";
  } else if (i === -1) {
    i = 2;
    carousel.style.backgroundImage = "url('../img/friends3.jpeg')";
  }
}

document
  .getElementById("right-arrow")
  .addEventListener("click", changeCarouselForward);

document
  .getElementById("left-arrow")
  .addEventListener("click", changeCarouselBackward);
