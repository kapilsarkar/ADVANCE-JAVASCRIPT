const randomNumber = parseInt(Math.random() * 100 + 1);
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
    const guess = parseInt(submit.value);
    valiDateGuess(guess)
  });
}

function valiDateGuess(guess) {}

function CheckGuess(guess) {}

function guessDisplay(guess) {}

function DisplayMessage(message) {}

function NewGame() {}

function EndGame() {}
