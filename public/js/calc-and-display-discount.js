import { inputValidated, validateInput } from "./validate-input.js";
import { removeErrorMsgs, clearInput } from "./clearing-functions.js";

const form = document.getElementById("form");
export const originalInputElem = document.getElementById("original-price");
export const discountInputElem = document.getElementById("discount-price");
const clearBtn = document.getElementById("clear-btn");


//calculates the discount and cost savings
const calculateAndDisplayDiscount = () => {

    // formula: original - ((discount / 100) * original)
    const original = parseInt(originalInputElem.value);
    const discount = parseInt(discountInputElem.value);

    const newPrice = original - ((discount / 100) * original);
    const savings = original - newPrice;

    displayCalculations(newPrice, savings);
}

const displayCalculations = (newPriceParam, savingsParam) => {
    const newPriceElem = document.getElementById("new-price");
    const savingsElem = document.getElementById("savings-price");

    newPriceElem.textContent = `£${newPriceParam}`;
    savingsElem.textContent = `£${savingsParam}`;
    hideDefaultView();


    function hideDefaultView() {
        const noCalcsElem = document.getElementById("no-calcs-cont");
        const resultsElem = document.getElementById("results-cont");

        noCalcsElem.classList.toggle("display-none"); //shows the savings
        resultsElem.classList.toggle("display-none"); //shows the savings
    }

}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    removeErrorMsgs();
    validateInput();

    if (inputValidated) {
        calculateAndDisplayDiscount();
    }
});

clearBtn.addEventListener("click", clearInput);










