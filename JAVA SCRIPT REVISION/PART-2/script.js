//Variables in Java Script
let fullName = 'Kapil Sarkar'

const age = 32

console.log(`Hello my Name is :${fullName} and my age is ${age}`)



console.log(education)
var education = 'MCA'


//console.log(fullEducation) --Wrong Process
let fullEducation = 'BCA + MCA'
console.log(`My Qualifications are : ${fullEducation}`)

// let vs var --- let is block scope variable and var is a functional scope variable
//In Case of let variable cannot be used before initialization means it cam be used within the block scope and in case of var variable can be used before initialization it is functional scope variable

//How Java Script Code is executed---

var n = 2

function square(num){
    var ans = num * num ;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

console.log(square2)
console.log(square4)
