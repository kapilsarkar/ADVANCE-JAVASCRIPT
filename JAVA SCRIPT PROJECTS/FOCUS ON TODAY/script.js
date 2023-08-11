const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')

checkBoxList.forEach((checkbox)=>{
  checkbox.addEventListener('click',(e)=>{
       
       checkbox.parentElement.classList.toggle('completed')
  })
})

let allInputFields = false