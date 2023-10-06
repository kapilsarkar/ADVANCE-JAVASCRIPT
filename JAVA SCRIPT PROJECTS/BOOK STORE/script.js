const bookNameInput = document.querySelector(".bookName");
const bookYearInput = document.querySelector(".bookYear");
const btnSave = document.querySelector(".btnSave");

const bookData = JSON.parse(localStorage.getItem("bookData")) || {};

btnSave.addEventListener("click", (e) => {
  //Save Book Name
  bookData.bookName = bookNameInput.value;
  localStorage.setItem("bookData", JSON.stringify(bookData));

  //Save Book Year

  bookData.year = bookYearInput.value;
  localStorage.setItem("bookData", JSON.stringify(bookData));
});

const searchBoxInput = document.querySelector(".searchBookName");
const searchBtn = document.querySelector(".searchBtn");
const searchDetails = document.querySelector('.searchDetails')
searchBtn.addEventListener("click",(e)=>{

  if(searchBoxInput.value ==""){
      alert('Please Enter Details')
  }
  else if(searchBoxInput.value === bookData.bookName){
    searchDetails.innerText = bookData.year
  }
  else{
    searchDetails.innerText = "Invalid Details"
  }
})
