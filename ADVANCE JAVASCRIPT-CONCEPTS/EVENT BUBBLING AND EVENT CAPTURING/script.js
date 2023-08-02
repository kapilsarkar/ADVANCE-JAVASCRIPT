const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')

window.addEventListener('click',(e)=>{
     console.log('6. Window Event Listner')
},{capture:true})

document.addEventListener('click',(e)=>{
     console.log('5. Document Event Listner')
},{capture:true})

document.body.addEventListener('click',(e)=>{
     console.log('4. Body Event Listner')
},{capture:true})
green.addEventListener('click',(e)=>{
    
     console.log('3. Green Event Listner')
},{capture:true})

pink.addEventListener('click',(e)=>{
    console.log('2. Pink Event Listner')
},{capture:true})

blue.addEventListener('click',(e)=>{
     //e.stopPropagation()
    console.log('1. Blue Event Listner')
},{capture:true,once:true})