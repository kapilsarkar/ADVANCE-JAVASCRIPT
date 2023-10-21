const button = document.querySelector("button");
const image = document.querySelector("img");

button.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    console.log(xhr.response)
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      image.src = xhr.response.message;
      console.log(xhr);
    });
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random ");
    xhr.send();
  });
  

setTimeout(() => {
  console.log("Hiii");
}, 4000);
