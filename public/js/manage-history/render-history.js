//*modal
const modal = document.getElementById("modal");
const article = document.getElementById("parent-cont");

//*history button
article.addEventListener("click", async (event) => {
    if (event.target.className === "history-btn") {
        modal.showModal();
    }
});

//*close button
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click", () => modal.close());


async function fetchHistory() {
    const request = await fetch("http://localhost:3000/api/history/retrieve-history");
    const data = await request.json();
    return data.history;
}

function renderHistory(histArr) {
    const emptyHistCont = document.getElementById("empty-history-cont");
    const histCont = document.getElementById("history-cont");
    const historyListElem = document.getElementById("history-list");
    if (histArr.length > 0) {
        emptyHistCont.classList.toggle("display-none"); //hide the "no history yet!" container
    } else {
        histCont.classList.toggle("display-none"); //show the container containing the history
    }


    //for each obj containing the data, turn it into an html element, and add it into the original html
    histArr.forEach((obj) => {
        const html = `
        <section>
            <p>${obj.discount}% off £${obj.original_price}, which is £${obj.new_price}</p>
            <button type="button">Delete</button>
        </section > `

        //update the list with the correct html element
        historyListElem.insertAdjacentHTML("beforeend", html);
    });
}

//runs when this file loads
let history = await fetchHistory();
renderHistory(history);

