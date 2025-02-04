//... Contains all elements that handle events. It's the entry point for the app.
import { removeErrorMsgs, clearInput } from "../utility-functions.js";

import { sendDataToServer } from "./send-data-to-server.js";

import { calculateAndDisplayDiscount } from "./calc-and-display-discount.js"

import { originalInputElem, discountInputElem } from "./calc-and-display-discount.js";

export const errMsg1 = document.getElementById("err-msg-1");
export const errMsg2 = document.getElementById("err-msg-2");
export let inputValidated = false;

export const validateInput = () => {
    if (isNaN(originalInputElem.value)) {
        errMsg1.classList.toggle("display-none"); //displays error message
    } else if (isNaN(discountInputElem.value)) {
        errMsg2.classList.toggle("display-none"); //displays error message
    } else {
        inputValidated = true;
    }

    return inputValidated;
}


export const form = document.getElementById("form");

//*form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    removeErrorMsgs();
    validateInput();

    if (inputValidated) {
        calculateAndDisplayDiscount();
        sendDataToServer();
    }
});


//*clear button
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);






