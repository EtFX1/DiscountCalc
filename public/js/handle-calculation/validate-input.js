//... Module description: Contains a function that will validate the user's input string

export function validateInput(elem) {
    //checking if it's valid
    if (!isNaN(elem.value) && elem.value > 0) {
        return true;
    }

    //first check
    if (isNaN(elem.value)) {
        const nanErrMsg = createErrMsg("Please type in a number");
        elem.insertAdjacentElement("afterend", nanErrMsg);
        return false;
    }

    //second check
    if (elem.value < 0) {
        const below0ErrMsg = createErrMsg("Please type in a number above 0");
        elem.insertAdjacentElement("afterend", below0ErrMsg);
        return false;
    }
}

function createErrMsg(msg) {
    const strong = document.createElement("strong");
    strong.innerText = msg;
    strong.className = "err-msg";
    return strong;
}












