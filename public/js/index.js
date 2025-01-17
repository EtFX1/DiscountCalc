const form = document.getElementById("form");
const originalInputElem = document.getElementById("original-price");
const discountInputElem = document.getElementById("discount-price");
const clearBtn = document.getElementById("clear-btn");

//calculates the discount and cost savings
const calculateAndDisplayDiscount = (event) => {
    event.preventDefault();

    // formula: original - ((discount / 100) * original)
    const original = parseInt(originalInputElem.value);
    const discount = parseInt(discountInputElem.value);

    const newPrice = original - ((discount / 100) * original);
    const savings = original - newPrice;

    displayCalculations(newPrice, savings);
}

const displayCalculations = (newPriceParam, savingsParam) => {
    const newPriceElem = document.getElementById("new-price");
    const savingsElem = document.getElementById("savings-price");

    newPriceElem.textContent = `£${newPriceParam}`;
    savingsElem.textContent = `£${savingsParam}`;
    hideDefaultView();


    function hideDefaultView() {
        const noCalcsElem = document.getElementById("no-calcs-cont");
        const resultsElem = document.getElementById("results-cont");

        noCalcsElem.classList.toggle("display-none"); //hides the default view
        resultsElem.classList.toggle("display-none"); //shows the savings
    }

}

const clearInput = () => {
    originalInputElem.value = "";
    discountInputElem.value = "";
}

form.addEventListener("submit", calculateAndDisplayDiscount);

clearBtn.addEventListener("click", clearInput);










