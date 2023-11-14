//Promise.all---

//It will take array of promises
const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("PI SUCCESS");
//   }, 1000);
setTimeout(()=>{
    reject("P1 FAILS")
},1000)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P2 SUCCESS");
  }, 3000);
});

const p3 = new Promise((resolve, reject) => [
  setTimeout(() => {
    resolve("P3 SUCCESS");
  }, 2000),
]);
Promise.all([p1, p2, p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})

//promise.allsettled
//it will give an object
Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})

//promise.race

Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})

//promise.any

Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.error(err)
})
