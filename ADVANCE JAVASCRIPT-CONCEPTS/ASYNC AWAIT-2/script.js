//async function will always return a promise---

async function getData(){
  return "Namaste Kapil Sarkar"
}

const dataPromise = getData()
console.log(dataPromise)
dataPromise.then((response)=>{
    console.log(response)
})

//promise

const p = new Promise((resolve,reject)=>{
    resolve("Promise Resolved Value")
})

async function getPromiseValue(){
    return p
}

const getValuePromise = getPromiseValue()

getValuePromise.then((response)=>{
    console.log(response)
})

// async and await are used to handle promises

