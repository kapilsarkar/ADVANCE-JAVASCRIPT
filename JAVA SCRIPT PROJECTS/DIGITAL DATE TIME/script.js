const clock = document.querySelector('#clock')
const myDate = document.querySelector('#date')


// setInterval(function(){
//     let date = new Date()
//     //console.log(date.toLocaleTimeString())
//     clock.innerHTML = date.toLocaleTimeString()
// },1000)

setInterval(()=>{
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},1000)

setInterval(()=>{
   let date = new Date()
   myDate.innerHTML = date.toLocaleDateString()
},1000)