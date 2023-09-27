const humBurgerMenu = document.querySelector(".humburger-menu");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");
const menuContainer = document.querySelector(".menu-container");
const darkMode = document.querySelector("#dark-mode");

humBurgerMenu.addEventListener("click", () => {
  menuContainer.style.display = "block";
  humBurgerMenu.style.display = "none";
});
closeIcon.addEventListener("click", () => {
  menuContainer.style.display = "none";
  humBurgerMenu.style.display = "block";
});

darkMode.addEventListener("click", () => {
  DarkLight();
});

function DarkLight() {
  document.body.classList.toggle("dark");
}
