//... Module description: Entry point to the app

import { renderHistoryOrDefault } from "./manage-history/render-history.js";


const body = document.getElementsByTagName("body")[0];
const historyModal = document.getElementById("modal");

// await renderHistory(); //renders list history if there's any


//*displays modal with history (or none) when user clicks on "history" button
body.addEventListener("click", async (event) => {
    if (event.target.className === "history-btn") {
        await renderHistoryOrDefault(); //renders list history if there's any
        historyModal.showModal();
    }
});


//close button for history modal
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => historyModal.close());
