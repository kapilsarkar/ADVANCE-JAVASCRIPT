//Synchronous Code

console.log("1");
console.log("2");
console.log("3");

//Asynchronous Code

console.log("1");
setTimeout(() => {
    console.log("2")
}, 2000);

console.log("3")

//Syntax for Promises

let promises = new Promise(function(resolve,reject){
   let goodDeveloper = true
   if(goodDeveloper){
    setTimeout(()=>{
        resolve("Kapil Sarkar is a good Developer")
    },2000)
   }
   else{
    reject("Kapil Sarkar is the King")
   }
});

//console.log(promises)

promises.then((res)=>{
    console.log(res)
}).catch(console.error())