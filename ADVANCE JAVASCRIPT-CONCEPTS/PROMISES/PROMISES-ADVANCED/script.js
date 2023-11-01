const resolveBtn = document.querySelector("#resolveBtn");

const p = new Promise((resolve, reject) => {
  resolveBtn.addEventListener("click", () => {
    resolve("Promise Resolved");
  });
});

console.log(p);
