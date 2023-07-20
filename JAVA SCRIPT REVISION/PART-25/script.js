//Destructuring---

//Array---

const colors = ['red','green','yellow','blue','orange','purple','violet']

const color0 = colors[0]
const color1 = colors[1]
const color2 = colors[2]

console.log(color0,color1,color2)

//Same thing can be done through array destructuring---

const[cl1,cl2,cl3,cl4,cl5] = colors

console.log(`The values through array destructuring are : ${cl1},${cl2},${cl3},${cl4},${cl5}`)

//Destructuring a specific value from an array---

const {6:cl6}= colors
console.log(`The value found by destructuring a specific element through an array : ${cl6}`)

//Object---

const user = {
    fullName :'Kapil Sarkar',
    age:32,
    address:{
        city:'Asansol',
        state:'West Bengal'
    }

}

const fn = user.fullName
const ag  = user.age

const ct = user.address.city

console.log(fn,ag,ct)

//Same thing can be done through object destructuring---

const {fullName:username, age:userage} = user

console.log(username,userage)

const {address : {state:userstate}} = user

console.log(userstate)

//Destructuring through function---

function intro({fullName,address:{state}}){
  console.log(fullName,state)
}

intro(user)