
var x = 7

function getName(){
    console.log('Namaste JavaScript')
}

getName()
console.log(x)
console.log(getName)


var getKapil =() => {
   console.log('Namaste Kapil Welcome to Namaste Java Script')
}

getKapil()

var getPiku = function(){
    console.log('Namaste Piku Welcome to Namaste Java Script')
}
getPiku()

//HOISTING OTHER EXAMPLES---
console.log(userName) 
var userName = 'Kapil Sarkar'

//HOISTING IN CASES OF FUNCTIONS---
hi()
//FUNCTION DECLARATION---
function hi(){
    console.log('Hello American NightMare')
}
//FUNCTION EXPRESSION---
//ALSO KNOWN AS ANONYMOUS FUNCTION---

const sayhi = function() {
    console.log('Hello Cody Rhodes')
}

sayhi()

//INCASE OF ARROW FUNCTIONS---

const wwe = () => {
  console.log('Welcome to India WWE')
}
wwe()

//FUNCTION DECLARATION AND FUNCTION EXPRESSION ARE FUNCTION DEFINATION