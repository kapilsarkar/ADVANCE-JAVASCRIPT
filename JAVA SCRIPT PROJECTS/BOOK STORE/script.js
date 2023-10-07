const fullNameInput = document.querySelector(".fullName");
const contactNoInput = document.querySelector(".contactNo");
const btnSave = document.querySelector(".btnSave");

const fullData = JSON.parse(localStorage.getItem("fullData")) || {};

btnSave.addEventListener("click", (e) => {
  if (fullNameInput.value == "" && contactNoInput.value == "") {
    alert("Please Enter Details");
  } else {
    //Save Full Name
    fullData.fullName = fullNameInput.value;

    localStorage.setItem("fullData", JSON.stringify(fullData));

    //Save  Contact No

    fullData.contactNo = contactNoInput.value;

    localStorage.setItem("fullData", JSON.stringify(fullData));
  }
});

const searchBoxInput = document.querySelector(".searchBookName");
const searchBtn = document.querySelector(".searchBtn");
const searchDetails = document.querySelector(".searchDetails");
searchBtn.addEventListener("click", (e) => {
  if (searchBoxInput.value == "") {
    alert("Please Enter Details");
  } else if (searchBoxInput.value === fullData.fullName) {
    searchDetails.innerText = `Your Contact Number is : ${fullData.contactNo}`;
  } else {
    searchDetails.innerText = "Invalid Details";
  }
});
