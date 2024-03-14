function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username,score){
  this.username = username
  this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const chai = new createUser("chai",25)
const coffee = createUser("coffee",50)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//Example of prototype in javs script----

let myName = "Kapil  "
let myHero ="JOHN CENA  "
console.log(myName.trim().length)

let myHeros = ["thor","hulk","ironMan"]

let heroPower = {
    thor:"hammer",
    hulk :"body",
    ironMan:"IronSuite",

    getIronManPower: function(){
        console.log(`Iron Man Power is ${this.ironMan}`)
    }
}

Object.prototype.kapil= function(){
    console.log(`kapil is present in all objects`)
}
Array.prototype.heyKapil = function(){
    console.log("kapil says hello")
}
heroPower.kapil()
myHero.kapil()

//heroPower.heyKapil()
myHeros.heyKapil()

//inheritance--- or prototypal inheritance

const user = {
    name :"kaps",
    email:"kapils@gmail.com"
}
const Teacher = {
    makeVideos :true,
    
}

const teachingSupport = {
    isAvailable : false,
}

const TASupport = {
    makeAssignment :"JS Assignment",
    fulltime : true,
    __proto__ :teachingSupport
}

Teacher.__proto__ = user

//modern syntax---

Object.setPrototypeOf(teachingSupport,Teacher)

let anotherUserName = "KAPIL IS THE BEST"
 
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`True Lenght is : ${this.trim().length}`)
}

anotherUserName.truelength()

myName.truelength()
myHero.truelength()


