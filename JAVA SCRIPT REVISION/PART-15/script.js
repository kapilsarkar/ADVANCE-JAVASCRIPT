setTimeout (
    console.log("Kapil Sarkar"),
    console.log('Hi you are welcome'),
    2000
)

//Set Time Out with two milli second time---

const timer1 = setTimeout(`console.log('Hi Everyone John Cena is Here')`,2000)
console.log('Welcome to the Game')

//Set Time Out as Higher Order Function---

const timer =  setTimeout(a,3000)

function a(){
    console.log('Welcome to WWE-Brock Lesnar')
}

a()

setTimeout(function (){
    console.log('Hi Kapil-1')
},5000)

console.log('Hi Kapil-2')