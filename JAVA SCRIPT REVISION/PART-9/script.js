//Array---
const fruits = ['Mango','Apple','Banana']
console.log(fruits)
const myFruits = fruits
console.log(myFruits)

myFruits.push('Dates')
myFruits.push('Grapes')

console.log(fruits)
console.log(myFruits)
 //Object---

 const user1 ={
    fName :'Kapil',
    lName : 'Sarkar',
 }

 const user2 = {...user1}

user2.fName = 'John Cena'
console.log(user1)
console.log(user2)

const supeStar = ['Hrithik','Salmaan','Shahrukh','Akdhay','Aaamir']

const mySuperStar =[...supeStar]
console.log(mySuperStar)

mySuperStar.push('Amitabh')
console.log(mySuperStar)

const newStar = []
Object.assign(newStar ,supeStar)
console.log(newStar)
