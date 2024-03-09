//Factory Functions in Jva SCript---

function createUser(firstName,lastName,age){
  const user = {
    firstName : firstName,
    lastName: lastName,
    age:age,

    getAgeYear: function(){
      return new Date().getFullYear() - user.age
    }
   
  }
  return user
}
 

const user1 = createUser("John","Cena",46)

console.log(user1)
console.log(user1.getAgeYear())

const user2 = createUser("Kapil","Sarkar",33)

console.log(user2)
console.log(user2.getAgeYear())




function sayHi(){
  console.log(this)
  return "Hello Kapil"
}

sayHi()