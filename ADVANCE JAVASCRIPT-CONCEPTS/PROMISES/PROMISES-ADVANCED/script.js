const resolveBtn = document.querySelector("#resolveBtn");
const rejectBtn = document.querySelector("#rejectBtn");
const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
  rejectBtn.addEventListener("click", () => {
    reject("Promise Rejected");
  });
});

console.log(p);

p.then((data) => {
  console.log("Hi Kapil Sarkar");
  console.log(data);
})
  .catch((error) => {
    console.log("Hi Piku Sarkar");
    console.log(error);
  })
  .finally(() => {
    console.log("Promises Settled");
  });
