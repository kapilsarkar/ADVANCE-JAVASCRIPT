const mainBoxInput = document.querySelector("#mainBox");
const addTaskBtn = document.querySelector(".addTask");
const displayOutput = document.querySelector(".display-container");

addTaskBtn.addEventListener("click", (e) => {
  let inputValue = mainBoxInput.value;
  if (localStorage.getItem("myData") == null) {
    localStorage.setItem("myData", "[]");
  }

  let oldData = JSON.parse(localStorage.getItem("myData"));
  oldData.push(inputValue);

  localStorage.setItem("myData", JSON.stringify(oldData));
  mainBoxInput.value = "";
});
