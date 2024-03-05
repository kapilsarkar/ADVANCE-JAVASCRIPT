//map(),filter(),reduce()
//map()---
const numMapArray = [1,2,3,4,5]

console.log(numMapArray)

const newArrayMap = numMapArray.map((e)=>{
    return e*5
})

console.log(newArrayMap)
//filter()---
const filterArray = numMapArray.filter((e)=>{
    return e> 2
})

console.log(filterArray)

//reduce()---

const sum = numMapArray.reduce((acc,curr,i,arr)=>{
    return acc + curr
},0)

console.log(sum)
