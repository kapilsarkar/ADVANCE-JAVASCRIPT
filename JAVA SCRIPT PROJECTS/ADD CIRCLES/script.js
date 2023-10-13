let body = document.querySelector("body");
console.log(body);

body.addEventListener("click", (e) => {
  let div = document.createElement("div");
  div.setAttribute("id", "circle");

  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
  body.appendChild(div);
});
