//...Module description: Contains code for rendering the "history" sent from the backend (which is sent in the form of an array of objects)

import { serverHasHistory } from "../index.js";

export const historyList = document.getElementById("history-list");

export function checkIfThereIsHistoryToDisplay(histArr) {
    const emptyHistCont = document.getElementById("empty-history-cont");
    const histCont = document.getElementById("history-list-cont");

    //check if the data from the server is populated with any history
    if (histArr.length > 0) {
        histCont.classList.remove("display-none"); //show the list of history
        emptyHistCont.classList.add("display-none"); //remove the default container
        serverHasHistory.value = true;
    }
}

export function renderListItems(histArr) {
    historyList.innerHTML = "";
    //for each obj containing the data, turn it into an html element, and add it into the original html
    //e.g of object: {"id": 1,"original_price": 100,"discount": 40,"new_price": 60}

    histArr.forEach((obj) => {
        const html = `
        <li id="${obj.id}" class="history-item">
            <p>${obj.discount}% off £${obj.original_price}, which is £${obj.new_price}</p>
            <button type="button" class="delete-history-item-btn">Delete</button>
        </li>`

        //update the list with the correct html element
        historyList.insertAdjacentHTML("beforeend", html);
    });
}