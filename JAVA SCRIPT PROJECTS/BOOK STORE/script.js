const bookNameInput = document.querySelector(".bookName");
const bookYearInput = document.querySelector(".bookYear");
const btnSave = document.querySelector(".btnSave");
const form = document.querySelector('form');
const bookData = JSON.parse(localStorage.getItem("bookData")) || {};

btnSave.addEventListener("click", (e) => {
  //Save Book Name
  bookData.bookName = bookNameInput.value;
  localStorage.setItem("bookData", JSON.stringify(bookData));

  //Save Book Year

  bookData.year = bookYearInput.value;
  localStorage.setItem("bookData", JSON.stringify(bookData));
});
