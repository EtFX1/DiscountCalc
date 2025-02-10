// ...Contains smaller functions that perform smaller tasks things e.g clearing input
import { originalInputElem, discountInputElem } from "./handle-user-input/calc-and-display-discount.js"
import { errMsg1, errMsg2 } from "./handle-user-input/validate-input.js";
import { noCalcsCont, resultsCont } from "./handle-user-input/calc-and-display-discount.js";
import { returnDataFromServer } from "./manage-history/fetch-history.js";
import { clearHistoryBtn } from "./manage-history/clear-history.js";

//removes any lingering error messages
export function removeErrorMsgs() {
    if (!errMsg1.classList.contains("display-none")) { //if displayed
        errMsg1.classList.toggle("display-none") //get rid of it
    } else if (!errMsg2.classList.contains("display-none")) {
        errMsg2.classList.toggle("display-none")
    }
}

//clears all the input when the user clicks 
export function clearInput() {
    removeErrorMsgs();
    originalInputElem.value = "";
    discountInputElem.value = "";

    resultsCont.classList.add("display-none"); //hide the results container
    noCalcsCont.classList.remove("display-none"); //show the default container
}

const { historyArr, userHasStoredHistory } = await returnDataFromServer(); // gets data from the server

export function showClearButtonIfServerHasHistory() {
    //hides the clear history button if there's no history to clear
    if (userHasStoredHistory) {
        clearHistoryBtn.classList.remove("display-none"); //show "clear history" button
    } else {
        clearHistoryBtn.classList.add("display-none"); //hide "clear history" button
    }
}




