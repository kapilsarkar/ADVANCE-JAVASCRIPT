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

const p1 = new Promise((resolve,reject)=>{
    resolve("Promise Resolved by Kapil Sarkar")
})
// promise resolved by normal function
function getNewData(){
    p1.then((res)=>{
        console.log(res)
    })
}

getNewData()


// promise resolved by async await
async function handleNewPromise(){
     const val = await p1 //await is a keyword used only inside  async function,await keyword is written infront of a promise and it resolves the promise 
     console.log(val)
}

handleNewPromise() 

//diving deep into async await

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve By SetTime Out after 10 second")
    },10000)
})

async function handlePromiseSettimeout(){
    console.log("Hello world")
    const val = await p2
    console.log("Namaste JavaScript")
    console.log(val)

    const val2 = await p2
    console.log("Namaste Java Script-2")
    console.log(val2)
}

handlePromiseSettimeout()

function normalFunctionSetTime(){
    p2.then((res)=>{
        console.log(res)
        console.log("Namaste John Cena")
    })
}

normalFunctionSetTime()

//real world example of async await

const API_URL = "https://api.github.com/users/akshaymarch7";
//fetch gives  response object =>response.json() => gives json value
async function handleApi(){

    try{
        const apiData = await fetch(API_URL);  

        const jsonValue = await apiData.json();
       
        console.log(jsonValue)
    }
    catch(err){
        console.log(err)
    }
 
}

handleApi()
