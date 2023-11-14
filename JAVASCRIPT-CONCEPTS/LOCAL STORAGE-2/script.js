const nameElement = document.querySelector(".name-tag");
const nameInput = document.querySelector(".name");
const ageElement = document.querySelector(".age-tag");
const ageInput = document.querySelector(".age");

const nameElementObj = document.querySelector(".name-tagObj");
const nameInputObj = document.querySelector(".nameObj");
const ageElementObj = document.querySelector(".age-tagObj");
const ageInputObj = document.querySelector(".ageObj");

//nameElement.innerText = localStorage.myName
nameElement.innerText = localStorage.getItem("myName");

nameInput.addEventListener("input", (e) => {
  //localStorage.myName = e.target.value
  localStorage.setItem("myName", e.target.value);
  nameElement.innerText = localStorage.getItem("myName");
});

ageElement.innerText = localStorage.getItem("myAge");

ageInput.addEventListener("input", (e) => {
  localStorage.setItem("myAge", e.target.value);
  ageElement.innerText = localStorage.getItem("myAge");
});

const myData = JSON.parse(localStorage.getItem("myData")) || {};

nameInputObj.addEventListener("input", (e) => {
  myData.names = e.target.value;

  localStorage.setItem("myData", JSON.stringify(myData));
  nameElementObj.innerText = e.target.value
});
ageInputObj.addEventListener("input", (e) => [
  (myData.age = e.target.value),
  localStorage.setItem("myData", JSON.stringify(myData)),
  ageElementObj.innerText = e.target.value
]);

//nameElementObj.innerText = myData.names
//ageElementObj.innerText = myData.age

if(myData.names){
  nameElementObj.innerText = myData.names
}

if(myData.age){
  ageElementObj.innerText = myData.age
}

//localStorage.clear()

//localStorage.removeItem('myData')