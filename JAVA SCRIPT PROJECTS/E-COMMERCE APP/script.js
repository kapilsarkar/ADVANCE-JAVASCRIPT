const humBurgerMenu = document.querySelector(".humburger-menu");
const closeIcon = document.querySelector(".close-icon");
const navMenu = document.querySelector(".nav-menu");
const menuContainer = document.querySelector(".menu-container");

humBurgerMenu.addEventListener("click", () => {
  menuContainer.style.display = "block";
  humBurgerMenu.style.display = "none";
   
});
closeIcon.addEventListener("click", () => {
  menuContainer.style.display = "none";
  humBurgerMenu.style.display = "block";
  
});
