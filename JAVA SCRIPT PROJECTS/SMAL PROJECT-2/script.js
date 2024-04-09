const allNames = ["Kapil","Sachin","Virat","Rohit"]

console.log(allNames)

const text = document.querySelector(".text");

let curr = 0

text.addEventListener("click",(e)=>{
  allNames.map((el,ind)=>{
    if(ind=== curr){
        text.innerHTML = el
    }
  })

  curr= (curr + 1) % allNames.length
})