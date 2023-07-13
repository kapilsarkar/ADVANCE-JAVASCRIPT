//Global Execution Context---

const userName = 'Kapil'
const userAge = 32
console.log(userName,userAge)

//In case of Functions---
sayHii()
function sayHii(){
    const a = 10
    const b = 20
    console.log(a,b)
    const result = addTwoNumbers(30,60)
    console.log(result)
}

function addTwoNumbers(x,y){
    return x + y
}

//Call Stack---
function introduction(){
    console.log('Hi My Name is Kapil Sarkar')
    //introduction()
}
introduction()
 
//Hoisting---
console.log(details)
var details = 'Kapil John Cena'

//In case of Functions---
//Function Declaration--
hi()
function hi(){
    console.log('Hi Kapil John Cena')
}

//Function Expression---
//It is also Called Anonymous Function
const myDetails = function(){
   console.log('Welcome back John Cena')
}
    
myDetails()
//Both Function Declaration and Function Expression are Function defination
