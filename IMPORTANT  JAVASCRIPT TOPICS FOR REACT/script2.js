//Object Destructuring---

const user = {
    fullName:"Kapil Sarkar",
    age:"32",

    address:{
        city:"Asansol",
        state:"WestBengal",
    }
}

console.log(user)
//destructuring---
const {fullName:userName} = user
console.log(userName)
//multilevel destructuring---
const {address:{city}} = user
console.log(city)

function intro({age,address:{state}}){
  console.log(age,state)
}
intro(user)

//argument keyword
function add(){
    let sum = 0;
    for(let i =0; i<arguments.length; i++){
        sum+= arguments[i]
    }
    return sum
}

const result = add(2,10,50,70,90,100)
console.log(result)

//spread operator
const updatedUser = {...user,Qualification:"MCA"}
console.log(updatedUser)
//spread operator in case of add function
const num = [1,2,3,4,5,6,7,8,9,10]
const spreadResult = add(...num)
console.log(spreadResult)
//rest parameter
function add2(...num1){
    console.log(num1)
    let sum = 0
    for(let i =0; i< num1.length;i++){
        sum+= num1[i]
    }
    return sum

}
const restParamResult = add2(10,20,30)
console.log(restParamResult)

//optional chaining

const myUser = {
    fName:"Piku Sarkar",
    address:"Burnpur",
}
console.log(myUser?.newName)