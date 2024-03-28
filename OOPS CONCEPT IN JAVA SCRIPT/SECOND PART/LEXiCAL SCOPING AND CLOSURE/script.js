
//LEXICAL SCOPING---
function init(){
    let name = "Kapil"

    function displayName(){
        console.log(name)
    }
    displayName()
}

init()


// function outer(){
//  let userName = "Kapil Sarkar"
//  console.log("Outer:",secret)

//  function inner(){
//     let secret = "mu123"
//     console.log("Inner:",userName)
//  }
//  function innerTwo(){
//     console.log("Inner Two:" ,userName)
//     console.log(secret)
//  }
//  innerTwo()
//  inner()
// }
// outer()

// console.log("To Outer:",userName)

//In any case a function is declared inside another function then the variables of the the outer function is accessible to the the inner function in the above example the variable username which is declared in the outer function in the function named outer is available or accessible to the function named inner or a function which is declared inside another function. This concept is called lexical scoping.

//the variable named secret is not available to the inner function ,because only the main parent orthe main outer function variables are available to the inner function.

//The variable secret is also not available to the main outer function but outer functions variable are available to all the inner functions. 

//CLOSURE---

// document.getElementById("red").addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'red'
// })

// document.getElementById("green").addEventListener("click",()=>{
//     document.body.style.backgroundColor = 'green'
// })

function clickHandler(color){
    //document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("red").addEventListener("click",clickHandler("red"))

document.getElementById("green").addEventListener("click",clickHandler("green"))