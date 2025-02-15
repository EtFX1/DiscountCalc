//... Module description: Contains functions that send form data (input and the result) to the server

import { form } from "../index.js";

import { originalInputElem, discountInputElem } from "../index.js";


export async function sendDataToServer() {

    const originalInput = originalInputElem.value;
    const discountInput = discountInputElem.value;
    const result = document.getElementById("new-price").textContent;

    const requestObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalInput, discountInput, result })
    }

    try {
        const req = await fetch("http://localhost:3000/api/history/store-history", requestObj);

        if (!req.ok) {
            throw new Error(`There's an HTTP error of ${req.status}`);
        }
    } catch (error) {
        console.error("Error sending data");
        console.error(error);
    }

}