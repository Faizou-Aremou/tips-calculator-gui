
let billAmount = 0;
let tipRate = 0;
let tip = 0;
let total = 0
const billAmountQuestion = 'What is the bill amount?'
const tipAmountQuestion = `What is the tip rate?"`
const validNumberText = "amount you enter is not a valid number"
const billAmountInput: HTMLInputElement | null = document.querySelector("#bill-amount");
const tipRateInput: HTMLInputElement | null = document.querySelector("#tip-rate");
const tipRateOutput: HTMLOutputElement | null = document.querySelector("#total");

if (tipRateInput) {
  askForTipAmount(tipRateInput.value);
}

if (billAmountInput) {
  askForBillAmount(billAmountInput.value);
}

billAmountInput?.addEventListener("input", (event: Event) => {
  askForBillAmount((event.target as HTMLInputElement).value);
})
tipRateInput?.addEventListener("input", (event: Event) => {
  askForTipAmount((event.target as HTMLInputElement).value);
})




function askForBillAmount(billAmountAnswer: string) {

  
  if (!isValid(billAmountAnswer)) {
    processAmountValidation();
  } else {
    const amount = Number(Number(billAmountAnswer).toFixed(2));
    billAmount = amount;
    tip = (billAmount * tipRate) / 100;
    total = billAmount + tip
    if (tipRateOutput) {
      tipRateOutput.innerHTML = total.toString();
    }
  }

}

function askForTipAmount(tipAmountAnswer: string) {

  

  if (!isValid(tipAmountAnswer)) {
    processAmountValidation();
  } else {
    const amount = Number(Number(tipAmountAnswer).toFixed(2));
    tipRate = amount
    tip = (billAmount * tipRate) / 100;
    total = billAmount + tip
    if (tipRateOutput) {
      tipRateOutput.innerHTML = total.toString();
    }
  }

}






function processAmountValidation() {
  tipRateInput?.setCustomValidity(validNumberText);
  total = 0;
  if (tipRateOutput) {
    tipRateOutput.innerHTML = total.toString();
  }
}

function isValid(billAmount: string): boolean {
  return billAmount.match(/^[0-9]+$/g) !== null;
}

