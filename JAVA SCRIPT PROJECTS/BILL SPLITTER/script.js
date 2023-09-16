const billAmountInput = document.querySelector("#bill-amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const customTipInput = document.querySelector('.custom-tip')
const generateBillBtn = document.querySelector(".generate-bill-btn");

const tipAmountOutput = document.querySelector(".tip-amount span");

const totalBillOutput = document.querySelector(".total span");

const eachPersonBillOutput = document.querySelector(".each-person-bill span");



generateBillBtn.addEventListener("click", (e) => {
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);
  const customTip = parseInt(customTipInput.value)

  const eachPersonBill = billAmount / numberOfPeople;
  tipAmountOutput.innerText = `₹ ${0}`
  totalBillOutput.innerText = `₹ ${billAmount}`;
  eachPersonBillOutput.innerText = `₹ ${eachPersonBill}`;
});
