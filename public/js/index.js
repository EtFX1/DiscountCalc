//... Module description: Entry point to the app
import { fetchDataFromServer } from "./manage-history/fetch-history.js";

import { checkIfThereIsHistoryToDisplay, renderListItems } from "./manage-history/render-history.js";

import { clearHistoryBtn } from "./manage-history/clear-history.js";


//runs when this file loads
export const serverHasHistory = { value: null };

//fetches and displays history from the server
export async function displayHistoryIfAny() {
    //get data from the server
    const historyFromServer = await fetchDataFromServer();

    checkIfThereIsHistoryToDisplay(historyFromServer);

    if (serverHasHistory.value) {
        renderListItems(historyFromServer);
    }
}

//history modal
const modal = document.getElementById("modal");
const article = document.getElementById("parent-cont");

//*displays modal with history (or none) when user clicks on "history" button
article.addEventListener("click", async (event) => {
    if (event.target.className === "history-btn") {
        await displayHistoryIfAny(); //renders list history if there's any 

        //hides the clear history button if there's no history to clear
        if (!serverHasHistory.value) {
            clearHistoryBtn.classList.add("display-none");
        } else {
            clearHistoryBtn.classList.remove("display-none");
        }

        modal.showModal();
    }
});

//close button for history modal
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => modal.close());
