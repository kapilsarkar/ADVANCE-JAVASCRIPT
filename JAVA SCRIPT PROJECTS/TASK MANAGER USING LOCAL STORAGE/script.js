const mainBoxInput = document.querySelector("#mainBox");
const addTaskBtn = document.querySelector(".addTask");
const displayOutput = document.querySelector(".display-container");
const displayText = document.querySelector(".displayText");

addTaskBtn.addEventListener("click", (e) => {
  let inputValue = mainBoxInput.value;
  if (localStorage.getItem("myData") == null) {
    localStorage.setItem("myData", "[]");
  }

  let oldData = JSON.parse(localStorage.getItem("myData"));
  oldData.push(inputValue);

  localStorage.setItem("myData", JSON.stringify(oldData));
  mainBoxInput.value = "";

  viewData();
});

function viewData() {
  const allData = JSON.parse(localStorage.getItem("myData"));

  allData.map((item, index) => {
    let para = document.createElement("p");
    para.innerHTML = item;
    para.innerHTML = index;
    displayText.appendChild(para);
  });
}
