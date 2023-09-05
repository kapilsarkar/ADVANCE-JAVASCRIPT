let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let NumGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    valiDateGuess(guess);
    console.log(guess);
  });
}

function valiDateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number Greater than 1");
  } else if (guess > 100) {
    alert("Please Enter a Number Less than 100");
  } else {
    prevGuess.push(guess);
    if (NumGuess === 11) {
      guessDisplay(guess);
      DisplayMessage(`Game Over - Random Number was : ${randomNumber}`);
      EndGame();
    } else {
      guessDisplay(guess);
      CheckGuess(guess);
    }
  }
}

function CheckGuess(guess) {
  if (guess === randomNumber) {
    DisplayMessage(`You Guessed it Right`);
    EndGame();
  } else if (guess < randomNumber) {
    DisplayMessage(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    DisplayMessage(`Number is TOO High`);
  }
}

function guessDisplay(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},    `;
  NumGuess++;
  remaining.innerHTML = `${11 - NumGuess}`;
}

function DisplayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id ='newGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  NewGame();
}

function NewGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1
    guessSlot.innerHTML = ''
    
    remaining.innerHTML = `${11 - NumGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
  });
}
