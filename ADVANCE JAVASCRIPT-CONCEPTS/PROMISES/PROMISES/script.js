const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB Calls, Cryptography,networkCalls

  setTimeout(function () {
    console.log("Async Task is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

new Promise(function(resolve,reject){
 setTimeout(function(){
  console.log("Async Task 2 is Completed")
  resolve()
 },1000)
}).then(function(){
    console.log("Async 2 Consumed")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({userName:"Kapil Sarkar",email:"kapil@gmail.com"})
    },1000)
})

promiseThree.then((user)=>{
    console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let error = true
      if(!error){
        resolve({userName:"Piku",password:123})
      }else{
        reject("ERROR:Something went Wrong")
      }
    },1000)
})

 promiseFour.then((user)=>{
    console.log(user)
    return user.userName
}).then((myUserName)=>{
     console.log(myUserName)
}).catch(function(err){
    console.log(err)
}).finally(()=>{
    console.log("Promise is either resolved or rejected")
})

const promiseFive = new Promise((resolve,reject)=>{
 setTimeout(()=>{
  let error = true
  if(!error){
    resolve({userName:"JavaScript",password:123})
  }
  else{
    reject("ERROR: JS Went wrong")
  }
 },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
     console.log(error)
    }
 
}

consumePromiseFive()

async function getAllProducts(){
    try{
        const response = await fetch("https://dummyjson.com/products")
        console.log(response)
        const data = await response.json()
        console.log(data)
    }
    catch(error){
     console.log(error)
    }
   
}

getAllProducts()

fetch("https://api.github.com/users/kapilsarkar").then((response)=>{
  return response.json()
}).then((data)=>{
 console.log(data)
}).catch((err)=>{
    console.log(err)
})