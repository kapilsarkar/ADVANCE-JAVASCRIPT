//Arrays in Java Script---

const userName = 'Kapil Sarkar'
console.log(userName[2])

const fruitsCollection = ['Apple','Banana','Papaya','Mango','Orange','PineApple']
console.log(fruitsCollection[2])

fruitsCollection[2] = 'Grapes'
console.log(fruitsCollection)
console.log(fruitsCollection.length)

const rainbowColors = ['Red','Green','Blue','Yellow','Orange','Violet','Indigo']
console.log(rainbowColors)
rainbowColors[rainbowColors.length] ='Pink'
console.log(rainbowColors)
rainbowColors.push = 'Black'
rainbowColors.push = 'White'
console.log(rainbowColors)
rainbowColors.pop()
console.log(rainbowColors)

//Array Methods---

const evenNum = [1,7,8,0.12,4,18]
console.log(evenNum)

const animals = ['Lion','Tiger','Dog','Mouse','Elephant']
console.log(animals)

//Concat---
const newAnimal = evenNum.concat(animals)
console.log(newAnimal)

//Indexof---

const index = animals.indexOf('Tiger')
console.log(index)

//Slice---

console.log(animals)

const slc = animals.slice(2,4)
console.log(slc)

//Splice---

const cricketers = ['Sachin','Virat','Dhoni','Sourav','Sehwag','Gambhir']
console.log(cricketers)

const spc = cricketers.splice(2,1)
console.log(spc)
console.log(cricketers)

const newspc = cricketers.splice(2,1,'Dinesh Kartik')
console.log(newspc)
console.log(cricketers)

//Multidimensional Array---

const nameAndNumberList = [
    ["Kapil",90],
    ["John",75]
]
console.log(nameAndNumberList)

const multi = nameAndNumberList[1][0]
console.log(multi)

const ticTacToe = [
    ['X',null,null],
    [null,null,'O'],
    ['O',null,'X']
]

const t1 = ticTacToe[2][0]
console.log(t1)

