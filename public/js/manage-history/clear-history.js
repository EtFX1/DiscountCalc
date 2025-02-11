//...Module description: Clear history when user clicks on "clear" button

import { renderHistoryOrDefault } from "./render-history.js";

//confirm clearing history modal and buttons
export const clearHistoryBtn = document.getElementById("clear-history-btn");
const clearHistoryModal = document.getElementById("clear-history-modal");
const clearHistoryModalYesBtn = document.getElementById("clear-history-yes-btn");
const clearHistoryModalNoBtn = document.getElementById("clear-history-no-btn");

//"clear" button event handler which will open the modal for user to confirm the want to clear their history
clearHistoryBtn.addEventListener("click", () => {
    clearHistoryModal.showModal();
});


//"yes" button event handler which will clear the history from the backend and display the default container when clicked
clearHistoryModalYesBtn.addEventListener("click", async () => {
    await clearHistoryFromServer();
    await renderHistoryOrDefault();
    clearHistoryBtn.classList.add("display-none"); //hide the clear button 
    clearHistoryModal.close();
});

//"no" button event handler which will close the modal for when "no" button is clicked
clearHistoryModalNoBtn.addEventListener("click", () => {
    clearHistoryModal.close();
})

async function clearHistoryFromServer() {
    try {
        const request = await fetch("http://localhost:3000/api/history/delete-all-history/", {
            method: "DELETE"
        });
        console.log(request.status);

        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`); // Manually throw an error
        }

        console.log(`All history deleted successfully`);
    } catch (error) {
        console.error(error);
        alert("Error deleting all history");
    }
}