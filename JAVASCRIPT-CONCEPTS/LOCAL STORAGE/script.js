const nameElement = document.querySelector('.name-tag')
const nameInput = document.querySelector('.name-input')
const ageInput = document.querySelector('.age-input')
const ageElement = document.querySelector('.age-tag')
//nameElement.innerText = localStorage.myName

// nameElement.innerText = localStorage.getItem('myName')

// nameInput.addEventListener('input',(e)=>{
//      //localStorage.myName = e.target.value
//      localStorage.setItem('myName',e.target.value)
//      nameElement.innerText = localStorage.getItem('myName')
// })

// ageElement.innerText = localStorage.getItem('myAge')

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('myAge',e.target.value)
//     ageElement.innerText = localStorage.getItem('myAge')
// })

const myData = JSON.parse(localStorage.getItem('myData')) || {}

if(myData.fullName){
    nameElement.innerText = myData.fullName
}
if(myData.age){
    ageElement.innerText = myData.age
}



nameInput.addEventListener('input',(e)=>{
    myData.fullName = e.target.value
    localStorage.setItem('myData', JSON.stringify(myData))
    nameElement.innerText = e.target.value
})

ageInput.addEventListener('input',(e)=>{
   myData.age = e.target.value
   localStorage.setItem('myData',JSON.stringify(myData))
   ageElement.innerText = e.target.value
})

//localStorage.clear()

//localStorage.removeItem('fullName')
