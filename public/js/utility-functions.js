// ...Contains smaller functions that perform smaller tasks things e.g clearing input
import { noCalcsCont, resultsCont } from "./handle-calculation/calc-and-display-discount.js";


//clears all the input when the user clicks 
export function clearInput() {
    removeErrorMsgs();
    originalInputElem.value = "";
    discountInputElem.value = "";

    resultsCont.classList.add("display-none"); //hide the results container
    noCalcsCont.classList.remove("display-none"); //show the default container
}



export function removeLingeringErrorMsgs() {
    //remove lingering error messages
    const errorMessages = document.querySelectorAll(".err-msg");


    if (errorMessages.length !== 0) {
        errorMessages.forEach((errMsg) => {
            errMsg.remove();
        });
    }
}


