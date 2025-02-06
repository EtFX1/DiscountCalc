//... Module description: Entry point to the
import { fetchDataFromServer } from "./manage-history/fetch-history.js";

import { checkIfThereIsHistoryToDisplay, renderListItems } from "./manage-history/render-history.js";


//runs when this file loads
export const serverHasHistory = { value: null };

async function displayHistoryIfAny() {
    //get data from the server
    const historyFromServer = await fetchDataFromServer();

    checkIfThereIsHistoryToDisplay(historyFromServer);

    if (serverHasHistory.value === true) {
        renderListItems(historyFromServer);
    }
}

//*modal
const modal = document.getElementById("modal");
const article = document.getElementById("parent-cont");

//*displays modal with history (or none) when user clicks on "history" button
article.addEventListener("click", async (event) => {
    if (event.target.className === "history-btn") {
        await displayHistoryIfAny();
        modal.showModal();
    }
});

//*close button
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => modal.close());
