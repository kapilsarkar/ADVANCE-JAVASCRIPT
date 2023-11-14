//singleton---
//object literals---
//Object.create

const mySymbol = Symbol("key1");

const jsUser = {
  fullName: "Kapil Sarkar",
  "Nick Name": "Piku Sarlar",
 [ mySymbol] :'kapilkey',
  age: 31,
  location: "Asansol",
  email: "kapil@gogle.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Thursday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["Nick Name"]);
console.log(jsUser[mySymbol])

jsUser.email ='kapil@chatgpt.com'
//Object.freeze(jsUser)
jsUser.email ='kapil@microsoft.com'
console.log(jsUser)

jsUser.greeting = function(){
    console.log('Hello Js User')
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User2 ${this.fullName}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

//Single ton Object----
const tinderUser =  new Object()
tinderUser.id = '123abc'
tinderUser.fName ='John'
tinderUser.isLogin ='true'

console.log(tinderUser)

const regularUser = {
    email:'sum@gmail.com',
    fullName :{
        userFullName:{
            firstName :'Virat',
            lastNmae :'Kohli',
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const Obj1 = {
    1:'a',
    2 :'b',
}

const obj2 = {
    3:'c',
    4 :'d',
    5 :'e',
}

const obj4 = {
    6:'c',
    7 :'d',
    
}


const obj3 = Object.assign( {}, Obj1,obj2,obj4)

console.log(obj3)

const obj5 = {...Obj1,...obj2,...obj4}

console.log(obj5)

const DataBaseUser = [
    {
        id:1,
        email:'k@gmail.com'
    },
    {
        id:2,
        email:'b@gmail.com'
    },
    {
        id:1,
        email:'j@gmail.com'
    },
]

DataBaseUser[1].email

console.log(DataBaseUser.map((e)=>{
       console.log(e.email)
}))
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogin'))