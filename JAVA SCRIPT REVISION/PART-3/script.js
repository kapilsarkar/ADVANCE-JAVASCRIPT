const fullName = 'Kapil Sarkar'
console.log(fullName[2])

const msg = 'Hello Good Morning India'
console.log(`The Length of the String is : ${msg.length}`)
//String Methods without arguments
console.log(msg.toUpperCase())
console.log(msg.toLowerCase())
const faltumsg = '   Hello my name is Kapil Sarkar   '
const finalmsg = faltumsg.trim().toLowerCase();
console.log(finalmsg)

const newmsg = '   Hi Kapil John Cena  '

console.log(newmsg.trimStart())
console.log(newmsg.trimEnd())

//String methods with arguments

const details = 'Hello My Name is Kapil Sarkar and I am form India'
//1.INCLUDES()---
console.log(details.includes('India'))

//2.INDEXOF---
console.log(details.indexOf('a'))
console.log(details.indexOf('K'))

//3.replace---
console.log(details.replace('Hello','Hi'))
console.log(details)
//4.replace-all()---
console.log(details.replaceAll('a','A'))
//5.CONCAT()---

const addr = 'Asansol'
const addr2 = 'Burnpur'
console.log(addr.concat(',' ,addr2))

//6.padstart---

const n1 = '5432'
console.log(n1.padStart(16,'*'))

//7.padend()---
console.log(n1.padEnd(16,'*'))

//8.charat---

const find = 'Virat Kohli Sachin Tendulkar'
console.log(find.charAt(15))

//9.charcodeat---
const find2 = 'Sachin Tendulkar'
console.log(find2.charCodeAt(5))

//10.split---
console.log(find.split(''))