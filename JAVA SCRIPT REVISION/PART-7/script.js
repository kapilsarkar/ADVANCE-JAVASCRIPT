//Objects in java Script---

//There is only one type of non-primitive data type that is object

const user = {
    firstName : 'Kapil'
}
console.log(user)
console.log(user.firstName)

const user1 = {
    fName:'Kapil',
    lName :'Sarkar'
}

const user2 = {
    fName :'Kapil',
    lName :'Sarkar'
}

console.log(user1===user2)  //False  because  their address are different in memory they are  also called reference types because there address are different in memory

console.log(user2)
console.log(user2['lName'])