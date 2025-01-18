//-- Module description: Sends form to the server


import { form } from "./calc-and-display-discount.js";
export async function sendDataToServer() {

    const formData = new FormData(form);
    const originalInput = formData.get("original-input");
    const discountInput = formData.get("discount-input");
    const discountResult = document.getElementById("new-price").textContent;

    const requestObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ originalInput, discountInput, discountResult })
    }

    try {
        const req = await fetch("http://localhost:3000/", requestObj);

        if (!req.ok) {
            throw new Error("User data couldn't be sent to the server");
        }
    } catch (error) {
        console.log("Error sending data");
    }

}