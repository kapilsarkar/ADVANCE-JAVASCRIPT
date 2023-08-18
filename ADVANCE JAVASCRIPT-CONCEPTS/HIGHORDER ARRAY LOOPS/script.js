//For Of ---

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}

const greetings = 'Hello World'

for (const str of greetings) {
    console.log(`Each Char are :${str}`)
}

//Map---

const map = new Map()

map.set('IN','India')
map.set('USA','United States of America')
map.set('FR','France')
console.log(map)

for (const [key,value] of map) {
    console.log(key,':',value)
}

const myObject = {
    js: 'Java Script',
    cpp :'C++',
    rb :'ruby',
    swift :'Swift By Apple'
 }

 for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`)
 }
 const programming = ['js','python','cpp']

 for (const key in programming) {
   console.log(programming[key])
 }

 //for each---

 const coding = ['C','C++','JAVA','JAAVSCRIPT','PYTHON','PHP','ANDROID']

 coding.forEach( function (item){
    console.log(item)
 } )

 coding.forEach((item)=>{
      console.log(`This is Using Arrow Function : ${item}`)
 }  )

 function printMe(item){
    console.log(item)
 }

 coding.forEach(printMe)

 coding.forEach( (item,index,arr) =>{
      console.log(item,index,arr)
 })

 const myCoding = [
    {
        FullNmae :'Kapil Sarkar',
        Address :'Asansol'
    },
    {
        FullNmae :'John Cena',
        Address :'US'
    },
    {
        FullNmae :'Virat Kohli',
        Address :'Delhi'
    },
 ]

 myCoding.forEach((item)=>{
    console.log(item.FullNmae)
 })