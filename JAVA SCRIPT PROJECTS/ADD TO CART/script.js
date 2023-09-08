const cart = document.querySelector(".cart");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const price = document.querySelector(".price");
const ItemName = document.querySelector('.ItemName')
let num = 0;

plus.addEventListener("click", (e) => {
  cart.innerText = num++;
   shoppingCart.forEach((e)=>{
        ItemName.innerHTML = e.itemName
        console.log(ItemName.innerHTML = e.itemName)
   })
 });

minus.addEventListener("click", (e) => {
  if (num <= 0) {
    cart.innerText = 0;
  } else {
    cart.innerText = num--;
  }
});

const shoppingCart = [
  {
    itemName: "LAPTOP",
    itemPrice: "50000",
  },
  {
    itemName: "MOBILE",
    itemPrice: "20000",
  },
  {
    itemName: "TABLET",
    itemPrice: "30000",
  },
];
