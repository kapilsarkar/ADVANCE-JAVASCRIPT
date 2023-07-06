//Comparison Operator in Java Script---
const user1Age = 18
const user2Age = 24
const user3Age = '24'
console.log(user1Age == user2Age)
console.log(user2Age == user3Age)  //Behind the scene string is converted into number so implicit conversion

//It is an implicit conversion or behind the scene conversion

//Strict equality---

const num1 = '50'
const num2 = 50
console.log(num1===num2) //Explicit Conversion
console.log(+num1 === num2)

//Not Equal---

const num3 = 24
const num4 = 24
console.log(num3 != num4)

//Not Equal Strict Mode---

const num5 = '30'
const num6 = 30
console.log(num5 !== num6)

//Logical Operator in Java Script ---
const andResult = Boolean (0 && 2)
console.log(andResult)

const orResult = Boolean (0 || 2)
console.log(orResult)

const andResult2 = Boolean ('' && 'hello')
console.log(andResult2)

 const orResult2 = Boolean('' || 'hello')
 console.log(orResult2)

 const andResult3 = 'Hello' && null
console.log(andResult3)

const orResult4 = 'Hello' || null
console.log(orResult4)

//Ternary Operator in Java Script---

const userName = 5 > 10 ? 'Greater Value' : 'Lesser Value'
console.log(userName)

const gender = 'f'
const userMessage = `${gender.toLowerCase() === 'f' ? 'She' : 'He'} is a College Student `
console.log(userMessage)

const value = 0
const newResult = value ? 'Kapil' : 'Sarkar'
console.log(newResult)