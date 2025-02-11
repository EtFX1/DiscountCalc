//...Module description: Contains code for rendering the "history" sent from the backend (which is sent in the form of an array of objects)

import { returnDataFromServer } from "./fetch-history.js";

import { clearHistoryBtn } from "./clear-history.js"

export const historyList = document.getElementById("history-list");

const emptyHistCont = document.getElementById("empty-history-cont");
const histCont = document.getElementById("history-list-cont");


//renders user's history if they have any stored
export async function renderHistoryOrDefault() {

    const { historyArr, userHasStoredHistory } = await returnDataFromServer(); // gets data from the server

    if (userHasStoredHistory) {
        emptyHistCont.classList.add("display-none"); //hide the default display
        histCont.classList.remove("display-none"); //show the list of history
        clearHistoryBtn.classList.remove("display-none"); //show "clear history" button
        renderHistoryItemsAsHTML(historyArr);
    } else {
        histCont.classList.add("display-none"); //hide the list of history
        emptyHistCont.classList.remove("display-none"); //show the default display
        clearHistoryBtn.classList.add("display-none"); //hide "clear history" button

    }
}

//converts each history object to html
function renderHistoryItemsAsHTML(histArr) {

    historyList.innerHTML = ""; //?clearing the output (since the history list is rendered from the beginning every time)

    //for each obj containing the data, turn it into an html element, and add it into the original html
    //e.g of object: {"id": 1,"original_price": 100,"discount": 40,"new_price": 60}

    histArr.forEach((histObj) => {
        const html = `
        <li id="${histObj.id}" class="history-item">
            <p>${histObj.discount}% off £${histObj.original_price}, which is £${histObj.new_price}</p>
            <button type="button" class="delete-history-item-btn">Delete</button>
        </li>`

        //update the list with the correct html element
        historyList.insertAdjacentHTML("beforeend", html);
    });
}