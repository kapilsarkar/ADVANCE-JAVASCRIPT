//map() method---

const arr1 = [2,6,7,5,9,8,10]

const newArr = arr1.map((element)=>{
       return element * 2
})

console.log(newArr)

//filter() method---
 const arr2 = [4,7,2,12,18,21,23,24]

 const newArr2 = arr2.filter((element)=>{
      return element % 2 === 0
      
 })

 console.log(newArr2)

 //reduce method()---

 const arr3 = [2,4,5,6,10]

 const newValue = arr3.reduce((prev,curr)=>{
      return prev + curr
 },0)

 console.log(newValue)
let sum = 0
 for(let i=0; i<= arr3.length;i++){
     sum += arr3[i]
    
 }
 console.log(sum)


