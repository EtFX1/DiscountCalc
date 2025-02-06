//...Module description: Delete a single piece of history
import { historyList } from "./render-history.js";

//adding event listeners to all li elements in the "historyList" ul element
historyList.addEventListener("click", function (event) {
    let li = event.target;
    if (li.className === "delete-history-item-btn") {
        console.log(li.id);
    }
});