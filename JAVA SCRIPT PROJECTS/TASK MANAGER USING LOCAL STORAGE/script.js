const mainBoxInput = document.querySelector(".mainBox");
const addTaskBtn = document.querySelector(".addTask");
const displayOutput = document.querySelector('.display-container')

//const myData = JSON.parse(localStorage.setItem)
addTaskBtn.addEventListener('click',()=>{
    let myData = [mainBoxInput.value];
    console.log(myData)
    localStorage.setItem('fullData',JSON.stringify(myData))
})