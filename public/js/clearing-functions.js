//file: contains functions for clearing things from the screen
import { originalInputElem, discountInputElem } from "./calc-and-display-discount.js";
import { errMsg1, errMsg2 } from "./validate-input.js";

//removes any lingering error messages
export const removeErrorMsgs = () => {
    if (!errMsg1.classList.contains("display-none")) { //if displayed
        errMsg1.classList.toggle("display-none") //get rid of it
    } else if (!errMsg2.classList.contains("display-none")) {
        errMsg2.classList.toggle("display-none")
    }
}

//clears all the input when the user clicks 
export const clearInput = () => {
    removeErrorMsgs();
    originalInputElem.value = "";
    discountInputElem.value = "";
}