const hamburgerButton = document.getElementById("hamburger");
const navList = document.querySelector(".nav_bar");
const belowNav = document.querySelector(".hero");

hamburgerButton.addEventListener("click", toggleButton);

function toggleButton() {
  navList.classList.toggle("show");
  belowNav.classList.toggle("push");
}
