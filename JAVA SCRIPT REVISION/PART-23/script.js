const arr = [2,6,10]

let sum = 0
arr.forEach((item)=>{
    sum+= item
})

console.log(sum)

//some method---

const evenNum = [2,4,6,8,10]

const result = evenNum.some((num)=>{
    return num > 4
})

console.log(result)

//every() method---

const result2 = evenNum.every((num)=>{
    return num > 4
})

console.log(result2)

//Argument Keyword in Java Script---
 
function add(){
    let sumResult = 0
    for(let i =0; i< arguments.length; i++){
        sumResult+= arguments[i]
    }
    return sumResult
}

const result3 = add(2,10,20,50,70,100,200)
console.log(result3)

//Default parameter in Java Script---

function multiply(a,b=2){
    return a * b
}

const multiResult = multiply(10)
console.log(multiResult)
  