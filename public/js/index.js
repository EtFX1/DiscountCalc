//...Entry point to the app that has event handlers for all buttons on homepage

import { clearInput, removeLingeringErrorMsgs } from "./utility-functions.js";

import { validateInput } from "./handle-calculation/validate-input.js";

import { calculateAndDisplayDiscount } from "./handle-calculation/calc-and-display-discount.js";

import { sendDataToServer } from "./handle-calculation/send-data-to-server.js";

import { renderHistoryOrDefault } from "./manage-history/render-history.js";


export const form = document.getElementById("form");
const clearBtn = document.getElementById("clear-btn");

const body = document.getElementsByTagName("body")[0];
const historyModal = document.getElementById("modal");

export const originalInputElem = document.getElementById("original-price"); //textbox that collects original price
export const discountInputElem = document.getElementById("discount-price"); //textbox that collects discount

// calculates and displays the input when the user clicks on the "calculate" button
form.addEventListener("submit", (event) => {
    event.preventDefault();

    removeLingeringErrorMsgs();

    const originalValidated = validateInput(originalInputElem); //validates the "original price" the user inputs
    const discountValidated = validateInput(discountInputElem); //validates the "discount price" the user inputs

    if (originalValidated && discountValidated) {
        calculateAndDisplayDiscount(originalInputElem.value, discountInputElem.value);
        sendDataToServer();
    }

});

//clear button which clears the user's input
clearBtn.addEventListener("click", clearInput);

//displays modal with history (or none) when user clicks on "history" button
body.addEventListener("click", async (event) => {
    if (event.target.className === "history-btn") {
        await renderHistoryOrDefault(); //renders list history if there's any
        historyModal.showModal();
    }
});

//close button for history modal
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => historyModal.close());

