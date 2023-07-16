//Returning Function with closure---
function parent(){
    const a = 10
    const b = 20
    function add(){
        console.log(a+b)
    }
    return add
}

const result = parent()
console.log(result)
console.dir(result)

//Methods and Function in Java Script---

const maths = {
    a: function add(a,b){
        return a + b
    },
    sqr : function(c){
        return c * c
    },
    subtract(m,n){
        return m -n
    },
    cube(num){
        return num ** 3
    }
}

console.log(maths.a)
console.log(maths.a(5,10))
console.log(maths.sqr(5))
console.log(maths.subtract(100,40))
console.log(maths.cube(50))

//Function Declaration----

function square(num){
    return num * num
}
console.log(square(30))

//Function Expression---

const sqr = function(num){
    return num * num
}
console.log(sqr(60))

//Arrow Function Expression---

const cube = (num) => {
    return num **3
}
console.log(cube(9))

//Implicit or Automatic return arrow function---

const add = (a,b) => a + b
console.log(add(100,100))

//Arrow Function with settimeout---

setTimeout(()=>{
    console.log('Hello Kapil')
},5000)

//Arrow Function with random---

const random = ()=>Math.floor(Math.random()*10)
console.log(`${random}`)