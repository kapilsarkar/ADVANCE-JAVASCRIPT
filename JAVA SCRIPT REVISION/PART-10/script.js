//Compound Operator or Combined Assignment Operator---

let num = 5
num += 5
console.log(num)

let num1 = 10
num1 *= 10
console.log(num1)

let num2 = 20
num2 **= 2
console.log(num2)

//Increment Operator---

let number1 = 5
 const newNum1 = ++number1
 console.log(number1,newNum1)

 let number2 = 5
 const newNum2 = number2++
 console.log(number2,newNum2)

 //Loops in Java Script---
 //While Loop---
 let i = 1

 while(i<=5){
    console.log(`The Numbers from from 1 to 5 using while loop ${i}`)
    i++
 }

 const frnds = ['Sachin','John','Virat','Brock','Sourav']

let j =0

while(j<=frnds.length){
    console.log(`${j+1}.${frnds[j]}`)
    j++
}

//For Loop

console.log('For Loop Started')

for(let k=1;k<=5;k++){
    console.log(k)
}

console.log('For Loop Ended')

const crk =['Tendulkar','Kohli','Gambhir','Dravid','Sehwag']

for(let b=0; b<= crk.length; b++){
   console.log(crk[b])
}

//Print Even Number b/w 0 to 50

for(let m =0; m<=20; m++){
    if(m%2===0){
        console.log(`Even Numbers from 0 to 20 ${m}`)
    }
}