//Synchronous Code---

console.log('Hi-1')

function Hello(){
    console.log('Hello World-2')
}

for(let i=1 ; i<=5; i++){
    console.log(i)
}

//ASynchronous Code---

setTimeout(function(){
    console.log('Helo World-Kapil')
},3000)

setTimeout(Hello,9000)
console.log('Hi this is American Night Mare')