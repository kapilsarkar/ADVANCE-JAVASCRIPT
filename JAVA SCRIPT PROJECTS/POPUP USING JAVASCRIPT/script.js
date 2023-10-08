const openPopUpBtn = document.querySelector(".openPopup");
const popup = document.querySelector(".popup");
const closeIcon = document.querySelector(".close-icon");

openPopUpBtn.addEventListener("click", (e) => {
  popup.classList.add("open");
});

closeIcon.addEventListener("click",(e)=>{
    popup.classList.remove("open");
})
