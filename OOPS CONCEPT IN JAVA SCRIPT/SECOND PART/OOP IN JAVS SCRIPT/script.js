//java script and classes---

//Object--- collection of properties and methods
// instanceof in javascript
//Why use OOP---

//Constructor Function
//Prototypes
//classes
//Instances (new,this)

//four pillars of OOP

//1. Abstraction--- hiding the internal details example ->fetch
//2. Encapsulation--- wrapping the data
//3. Inheritance
//4. Polymorphism-- One name many function example console.log()

//Object literal--- coleection fo properties and methods

const user = {
  userName: "Kapil",
  loginCount: 10,
  sgnedIn: "true",

  getUserDetails: function () {
    console.log("Got user details from dataBase");
    console.log(`Username : ${this.userName}`);
    console.log(this);
  },
};
console.log(user);
console.log(user.userName);
console.log(user.getUserDetails());
console.log(this); //this when written in in global context refers to blank object i.e {}
//constructor function---

function User(userName, LoginCount, isLoggedIn) {
  this.userName = userName; //Here this.userName,this.LoginCount,this.isLoggedIn are variable names
  this.LoginCount = LoginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
    console.log(`Welcome ${this.userName}`)
  }

  return this;
}

const userOne = new User("JOHN CENA",20,true) //Here new refers to constructor function
const userTwo = new User("SACHIN",10,true)
console.log(userOne.constructor)
console.log(userTwo)
console.log(userTwo.greeting())

//constructor function every time gives a new instance

//First whenever we write a new keyword an empty object is created which is known as instance
//In the second step a constructor function is called because of the new keyword
//In the third step the arguments written are injected inside  this keyword
//In the fourth step we get the result