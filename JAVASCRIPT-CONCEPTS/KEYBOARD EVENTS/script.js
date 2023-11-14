const h1 = document.querySelector('h1')
const input = document.querySelector('input')
const inputKeyUp = document.querySelector('#keyup')
input.addEventListener('keypress',(e)=>{
  console.log('Value:',e.key)
})

window.addEventListener('keypress',(e)=>{
      console.log('code:', e.code)
})

inputKeyUp.addEventListener('keyup',(e)=>{
     console.log('keyup:',e.key)
})

