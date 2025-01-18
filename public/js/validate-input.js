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