"use strict"


//this in  global space

console.log(this)  // --- this keyword in global space will always have the value of global object

//this inside function

function x(){
    console.log(this)
}

x()  //--- this keyword works differently in strict mode and non-strict mode --> here it is in non-strict mode


//this inside non-strict mode --- (this substitution)

//according to this this substitution--- if the value of this keyword is undefined or null this will will be replaced  with global object --- only in non strict mode

//what is the value of this keyword inside a function ?

//the value of this keyword inside a function is undefined but because java script has something known as this substitution so the value becomes equal to global object if we will not use strict mode
 
//this keyword value depends on how this is called (window)---
x()
window.x() 
// if the function is called without any reference of any object--(x)-- then the value is undefined
// if the function is called with reference then it will give window object --window.x()--


//this inside object's method
// difference between function and method in java script--- if we will make a function as a part of an object then it is known as method
const obj = {
 a: 10,
 x: function(){  // here x is a method because the function x is part of object
   console.log(this.a)
 }
}

obj.x()

//call apply and bind methods (sharing methods)

const student = {
  name : "Kapil",
  printName : function(){
    console.log(this.name)
  }
}
student.printName()

//Now sharing of method printName from student to student2
const student2 = {
  name: "Piku",

}
//value of this can be modified by call,apply and bind method
student.printName.call(student2)  //now value of this is student2

//this keyword inside arrow function
// arrow function do not have their this they take the value of their lexical environment where they are enclosed.
//arrow function don't provide their this binding 
const obj2 = {
  a: 10,
  x:()=>{
    console.log(this)  //enclosing lexical context
  }
}

obj2.x()


const obj3 = {
  a:50,
  x:function(){
    const y = ()=>{
      console.log(this)
    }
    y()
  }
}

obj3.x()

//this inside doom --- reference to html element

//this inside class,constructor