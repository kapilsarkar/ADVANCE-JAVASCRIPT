let input = document.getElementById("input");

let buttons = Array.from(document.getElementsByClassName("btn"));

let operator = "";

let data = [];

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;

    if (buttonText === "AC") {
      input.innerText = "";
      data = [];
      operator = "";
    }
    else if(buttonText == 'DE'){
        input.innerText = input.innerText.slice(0,-1)
    }
    else if(buttonText === '.'){
        input.innerText += buttonText
    }
  });
});
