const result = document.querySelector(".result");

const plus = document.querySelector(".btn-plus");

const minus = document.querySelector(".btn-minus");

const reset = document.querySelector(".btn-reset");

const inputValue = document.querySelector('.input-value')
let counter = 0;
plus.addEventListener("click", () => {
  counter++;
  result.innerText = counter;
});

minus.addEventListener("click", () => {
  counter--;
  result.innerText = counter;
});

inputValue.addEventListener('input',(e)=>{
     counter = e.target.value
     result.innerText = e.target.value
     //console.log(counter.innerText = e.target.value)
       
})

reset.addEventListener("click", () => {
  counter = 0;
  result.innerText = counter;
  inputValue.innerText = 0
});
