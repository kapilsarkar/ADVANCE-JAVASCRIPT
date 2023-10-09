const fullNameInput = document.querySelector(".fullName");
const contactNoInput = document.querySelector(".contactNo");
const emailInput = document.querySelector(".email");

const btnSave = document.querySelector(".btnSave");
// const fullData = JSON.parse(localStorage.getItem("fullData")) || {};

// btnSave.addEventListener("click", (e) => {
//   if (fullNameInput.value == "" && contactNoInput.value == "") {
//     alert("Please Enter Details");
//   } else {
//     //Save Full Name
//     fullData.fullName = fullNameInput.value;

//     localStorage.setItem("fullData", JSON.stringify(fullData));

//     //Save  Contact No

//     fullData.contactNo = contactNoInput.value;

//     localStorage.setItem("fullData", JSON.stringify(fullData));
//   }
// });

// const searchBoxInput = document.querySelector(".searchBookName");
// const searchBtn = document.querySelector(".searchBtn");
// const searchDetails = document.querySelector(".searchDetails");
// searchBtn.addEventListener("click", (e) => {
//   if (searchBoxInput.value == "") {
//     alert("Please Enter Details");
//   } else if (searchBoxInput.value === fullData.fullName) {
//     searchDetails.innerText = `Your Contact Number is : ${fullData.contactNo}`;
//   } else {
//     searchDetails.innerText = "Invalid Details";
//   }
// });

//NEW CODE--

const myData = JSON.parse(localStorage.getItem("myData")) || [];

const addData = (fullName, contactNo, email) => {
  myData.push({
    fullName,
    contactNo,
    email,
  });

  localStorage.setItem("myData", JSON.stringify(myData));

  return fullName, contactNo, email;
};

btnSave.addEventListener("click", (e) => {
  if (
    fullNameInput.value == "" &&
    contactNoInput.value == "" &&
    emailInput.value == ""
  ) {
    alert("Please Enter All Data");
  } else {
    addData(fullNameInput.value, contactNoInput.value, emailInput.value);
  }

  fullNameInput.value = "";
  contactNoInput.value = "";
  emailInput.value = "";
});

const searchBoxInput = document.querySelector(".searchName");
const searchDetails = document.querySelector(".searchDetails");
const searchEmail = document.querySelector(".searchEmail");
const clearSearchBtn = document.querySelector(".clearSearchBtn");
const searchBtn = document.querySelector(".searchBtn");

searchBtn.addEventListener("click", (e) => {
  const search = myData.filter((sr) => {
    if (sr.fullName === searchBoxInput.value) {
      searchDetails.style.display = "block";
      searchDetails.innerText = `Your Contact Number is : ${sr.contactNo}`;
      searchEmail.style.display = "block";
      searchEmail.innerText = `Your Email Id is : ${sr.email} `;
    }
  });
});

clearSearchBtn.addEventListener("click", () => {
  searchBoxInput.value = "";
  searchDetails.innerText = "";
  searchEmail.innerText = "";
  searchDetails.style.display = "none";
  searchEmail.style.display = "none";
});
