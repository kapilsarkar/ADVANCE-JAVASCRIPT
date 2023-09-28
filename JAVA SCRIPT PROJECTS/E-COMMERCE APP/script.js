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
  location.reload();
});

darkMode.addEventListener("click", () => {
  DarkLight();
});

function DarkLight() {
  document.body.classList.toggle("dark");
}

// coding for mobiles

const mobile1Btn = document.querySelector(".mobile-1-btn");
const cartNumber = document.querySelector(".cartNumber");
const mobilePrice = document.querySelector(".mobile-1-price");
const mobileText = document.querySelector(".mobile-1-text");
const mobileImag = document.querySelector(".mobile-1-img");
let num = 1;

let fullCart = [
  {
    id: 1,
    price: mobilePrice.innerText,
    name: mobileText.innerText,
    image: mobileImag.innerHTML,
  },
  // {
  //   id: 2,
  //   price: mobilePrice.innerText,
  // },
];



mobile1Btn.addEventListener("click", (e) => {
  fullCart.map((item) => {
    console.log(item.price);
    console.log(item.name);

    cartNumber.innerText = num++;
  });
  mobile1Btn.disabled = true
});
