const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-label')

checkBoxList.forEach((checkbox)=>{
  checkbox.addEventListener('click',(e)=>{
       const allGoalsAdded = [...inputFields].every(function(input){
        return input.value
       }) 
       if(allGoalsAdded){
        checkbox.parentElement.classList.toggle('completed')
       }
       else{
         
          progressBar.classList.add('show-error')
       }
       
  })
})

