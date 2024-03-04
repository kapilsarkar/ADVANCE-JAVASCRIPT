//map(),filter(),reduce()
//map()---
const numMapArray = [1,2,3,4,5]

console.log(numMapArray)

const newArrayMap = numMapArray.map((e)=>{
    return e*5
})

console.log(newArrayMap)

const filterArray = numMapArray.filter((e)=>{
    return e> 2
})

console.log(filterArray)
