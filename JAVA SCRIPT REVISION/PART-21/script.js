//this keyword---
console.log(this)

//this keyword inside object method---

const obj = {
    fName :'Kapil',
    lName :'Sarkar',
    fullName : function(){
        return this.fName + '' +  this.lName
    }
}

console.log(obj.fullName())

//this keyword inside function---

function xyz(){
    return this
}

console.log(xyz())

//Closure in java script---

function fun1(){
  let a = 5
   

    function fun2(){
        let a = 15
        console.log(a)

        function fun3(){
            console.log(a)
        }
        fun3()
        
    }
    a = 10
    return fun2
    
}
const result = fun1()

result()