console.log("Namste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Season2");

const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.UpdateWallet();
    });
  });
});


const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  console.log(xhr.response.users[0]);
})

xhr.open('GET', 'https://dummyjson.com/users')
xhr.send()
