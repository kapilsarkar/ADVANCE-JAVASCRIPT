let input = document.querySelector(".input");
const container = document.querySelector(".container");
const btnAdd = document.querySelector(".btnAdd");

btnAdd.addEventListener("click", (e) => {
  const inputValue = input.value;
  let h2 = document.createElement("h2");

  //console.log(h2.innerText = inputValue)
  h2.innerHTML = inputValue;
  h2.style.backgroundColor = "green";
  h2.style.color = "#fff";
  container.appendChild(h2);
  
});
