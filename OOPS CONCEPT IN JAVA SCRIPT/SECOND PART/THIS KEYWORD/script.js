"use strict"
//this inside strict mode --- (this substitution)

//this value depends on how this is called (window)

//this inside object's method

//call apply and bind methods (sharing methods)

//this inside arrow function

//this inside nested arrow function

//this inside doom


//this in  global space

console.log(this)  // --- this keyword in global space will always have the value of global object

//this inside function

function x(){
    console.log(this)
}

x()  //--- this keyword works differently in strict mode and non-strict mode --> here it is in non-strict mode





