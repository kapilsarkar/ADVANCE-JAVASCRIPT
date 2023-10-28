console.log("Namste");

setTimeout(function () {
  console.log("JavaScript");
}, 5000);

console.log("Season2");

// const cart = ["shoes", "pants", "kurta"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.UpdateWallet();
//     });
//   });
// });

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
        console.log(userData);
      });
    });
  });
})
