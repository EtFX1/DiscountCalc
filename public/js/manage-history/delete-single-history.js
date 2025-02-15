//...Module description: Has event handlers and functions for deleting a single piece of history

// import { displayHistoryIfAny } from "../runOnLoad.js";
import { historyList, renderHistoryOrDefault } from "./render-history.js";

//confirm single deletion modal and buttons
const confirmSingleDeletionModal = document.getElementById("confirm-single-deletion-modal");
const singleDeletionYesBtn = document.getElementById("single-deletion-yes-btn");
const singleDeletionNoBtn = document.getElementById("single-deletion-no-btn");

//the correct list item to delete
let liToDelete = null;

//adding event listeners to all li elements in the "historyList" ul element
historyList.addEventListener("click", (event) => {

    //selects the parent element of the clicked
    let deleteBtn = event.target;
    if (deleteBtn.className === "delete-history-item-btn") {
        liToDelete = deleteBtn.parentElement; // getting the correct history item to delete
        confirmSingleDeletionModal.showModal(); //shows the confirmation modal asking the user to confirm "yes" or "no" when they try to delete
    }
});

//deletes data wen the yes button is clicked
singleDeletionYesBtn.addEventListener("click", async () => {
    await deleteSingleHistoryFromServer(liToDelete.id);
    renderHistoryOrDefault(); //displays remaining history
    confirmSingleDeletionModal.close();
});

//closes modal when "no" button is clicked
singleDeletionNoBtn.addEventListener("click", () => {
    confirmSingleDeletionModal.close(); //shows the confirmation modal asking the user to confirm "yes" or "no" when they try to delete
});

async function deleteSingleHistoryFromServer(id) {
    try {
        const request = await fetch(`http://localhost:3000/api/history/delete-single-history/${id}`, {
            method: "DELETE"
        });

        if (!request.ok) {
            throw new Error(`HTTP error! Status: ${request.status}`); // Manually throw an error
        }

        console.log(`History item with an id of ${id} was deleted successfully`);
    } catch (error) {
        console.error(`Error deleting history item with an id of ${id}`);
        console.error(error);
    }
};




