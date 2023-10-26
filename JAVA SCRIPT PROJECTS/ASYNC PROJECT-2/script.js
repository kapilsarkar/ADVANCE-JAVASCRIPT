const sayData = function (str) {
  console.log(str, Date.now());
};



//clearInterval(IntervalId);
let IntervalId
const startBtn = document.querySelector("#start");

const stopBtn = document.querySelector("#stop");

startBtn.addEventListener("click",()=>{
    IntervalId  = setInterval(sayData, 2000, "Hi");
})

stopBtn.addEventListener("click",()=>{
    clearInterval(IntervalId)
})