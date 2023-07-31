const userNameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')
const form = document.querySelector('form')


userNameInput.addEventListener('click', ()=>{
    console.log('Input Clicked')
})

userNameInput.addEventListener('dblclick',()=>{
    console.log('Double input clicked')
})
 
let inputValue

userNameInput.addEventListener('input',(e)=>{
    console.log(e.target.value)
    console.log(e.type)
    inputValue = e.target.value
    paragraph.innerText = e.target.value
    console.log('Input Event Clicked')
})


userNameInput.addEventListener('change', (e)=>{
    paragraph.innerText = e.target.value
    console.log(e.type)
})

userNameInput.addEventListener('focus', (e)=>{
    paragraph.innerText = e.target.value
    console.log(e.type)
})

userNameInput.addEventListener('blur', (e)=>{
    paragraph.innerText = e.target.value
    console.log(e.type)
})


form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const myFormData = new FormData(form)

    for(const p of myFormData.entries()){
          console.log(p)
    }
      
})

form.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(e.currentTarget)
   // console.log('Form Clicked')

      
})