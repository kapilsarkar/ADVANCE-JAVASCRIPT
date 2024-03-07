// const user1 = {
//   firstName :"Kapil",
//   lastName: "Sarkar",
//   age:32,

//   getAgeYear: function(){
//     return console.log(new Date().getFullYear() - user1.age) 
//   }
// }
// console.log(user1.getAgeYear())

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
