//Print Array Elements by for Loop---

const fruits =['banana','apple','grapes','orange','pineapple']

for(let i = 0; i<= fruits.length; i++){
    console.log(fruits[i])
}

console.log('*******************')
//Printing Array Element bt for of Loop---

for(const fruitsName of fruits){
    console.log(fruitsName)
}

//Printing a string  by for of loop---

const fullName = 'Kapil Sarkar'

for(myName of fullName){
    console.log(myName)
}

console.log('*******************')

//Creating Objects---

const details ={
    fname :'Kapil',
    lname :'Sarkar',
    age:32
}
//Printing the object---

console.log(details)
//For in loop for Object---
for(const objectKey in details){
    console.log(objectKey ,':', details[objectKey])
}

//Using for of loop in case of object---

const detailkey = Object.keys(details)

for(const key of detailkey){
    console.log(key,':',details[key])
}

//Using foreach array method---

const cricketers = ['Sachin','Sehwag','Kohli','Yuvraj','Gambhir']

cricketers.forEach(function(nameOfCricketers){
   console.log(nameOfCricketers)
})

//Using Arrow Function---

cricketers.forEach((criclist)=>{
     console.log(`This in the case of arrow function : ${criclist} `)
})