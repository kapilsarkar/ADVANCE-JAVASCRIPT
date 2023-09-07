// document.querySelector('#owl').onclick = function(){
//     alert('Owl Clicked')
// }

//attachEvent()


//type,timestamp,defaultPrevented
//target , toElement, srcElement currentTarget
//clientX, clientY,screenX,screenY
//altKet,ctrlKey,shiftKey,keyCode 

document.querySelector('#images').addEventListener('click',function(e){
    console.log('Clicked Inside the ul')
},false)

document.querySelector('#owl').addEventListener('click',function(e){
  console.log('Owl Clicked')
  e.stopPropagation()
},false)

document.querySelector('#google').addEventListener('click',function(e){
    console.log('Goggle Clicked')
   e.preventDefault()
   e.stopPropagation()
},false)

document.querySelector('#images').addEventListener('click',function(e){
   console.log(e.target.parentNode)
   console.log(e.target.tagName)
   if(e.target.tagName === 'IMG'){
    console.log(e.target.id)
    let removeIt = e.target.parentNode
    removeIt.remove()
   }
   
   //removeIt.parentNode.removeChild(removeIt)
},false)