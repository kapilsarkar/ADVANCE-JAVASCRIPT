const userInput = document.querySelector(".user-input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".start-game");

// let allGuessesArray = []
// let random_number = Math.round(Math.random() * 100 + 1);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const userInputValue = parseInt(userInput.value);

//   if (userInputValue < random_number) {
//     result.innerText = 'TOO LOW !'
//   }
//   else if(userInputValue > random_number){
//    result.innerText = 'TOO HIGH !'
//   }
//   else{
//      result.innerText = `CONGRATS YOU FOUND THE RIGHT THE NUMBER WHICH IS : ${userInputValue}`
//      startGameBtn.disabled = false
//      submitBtn.disabled = true

//   }
//   //console.log("Submitted");
//    allGuessesArray.push(userInputValue)
//    allGuesses.innerText = `Your Previous Guesses are :  ${allGuessesArray.join(',')} `
//   form.reset()
// });

// startGameBtn.addEventListener('click',(e)=>{
//   allGuesses.innerText = ''
//   result.innerText = ''
//   submitBtn.disabled = false
//   startGameBtn.disabled = true
//   random_number = Math.round(Math.random() * 100 + 1)
//   allGuessesArray = []
// })

(function () {
  let allGuessesArray = [];
  let random_number = Math.round(Math.random() * 100 + 1);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);

    if (userInputValue < random_number) {
      result.innerText = "TOO LOW !";
    } else if (userInputValue > random_number) {
      result.innerText = "TOO HIGH !";
    } else {
      result.innerText = `CONGRATS YOU FOUND THE RIGHT THE NUMBER WHICH IS : ${userInputValue}`;
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    //console.log("Submitted");
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = `Your Previous Guesses are :  ${allGuessesArray.join(
      ","
    )} `;
    form.reset();
  });

  startGameBtn.addEventListener("click", (e) => {
    allGuesses.innerText = "";
    result.innerText = "";
    submitBtn.disabled = false;
    startGameBtn.disabled = true;
    random_number = Math.round(Math.random() * 100 + 1);
    allGuessesArray = [];
  });
})();


