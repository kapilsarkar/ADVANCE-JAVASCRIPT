const humburgerIcon = document.querySelector(".humburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");


humburgerIcon.addEventListener("click", () => {
  headerContent.classList.add("menu-open");
});
closeIcon.addEventListener("click", () => {
  headerContent.classList.remove("menu-open");
});
