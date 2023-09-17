const billAmountInput = document.querySelector("#bill-amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const customTipInput = document.querySelector(".custom-tip");
const generateBillBtn = document.querySelector(".generate-bill-btn");

const tipAmountOutput = document.querySelector(".tip-amount span");

const totalBillOutput = document.querySelector(".total span");

const eachPersonBillOutput = document.querySelector(".each-person-bill span");
const tipsContainer = document.querySelector(".tip-container");

generateBillBtn.addEventListener("click", (e) => {
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const customTip = parseInt(customTipInput.value);

  const tipAmount = billAmount * (customTip / 100);
  const totalBill = billAmount + tipAmount;
  const eachPersonBill = totalBill / numberOfPeople;

  tipAmountOutput.innerText = `₹ ${tipAmount}`;
  totalBillOutput.innerText = `₹ ${totalBill}`;
  eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`;
});

tipsContainer.addEventListener("click", (e) => {
  if (e.target !== tipsContainer) {
    [...tipsContainer.children].forEach((tip) => tip.classList.remove("selected"));
    e.target.classList.add("selected");
    console.log(parseInt(e.target.innerText));
  }
});
