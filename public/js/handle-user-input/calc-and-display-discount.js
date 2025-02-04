//... Module description: Calculates a discount and display the result. Also contains event handler for the calculate form. 

export const originalInputElem = document.getElementById("original-price");
export const discountInputElem = document.getElementById("discount-price");

//calculates the discount and cost savings
export const calculateAndDisplayDiscount = () => {

    // formula: original - ((discount / 100) * original)
    const original = parseInt(originalInputElem.value);
    const discount = parseInt(discountInputElem.value);

    const newPrice = original - ((discount / 100) * original);
    const savings = original - newPrice;

    displayCalculations(newPrice, savings);
};

const displayCalculations = (newPriceParam, savingsParam) => {
    const newPriceElem = document.getElementById("new-price");
    const savingsElem = document.getElementById("savings-price");

    newPriceElem.textContent = newPriceParam;
    savingsElem.textContent = savingsParam;

    hideDefaultView();

    function hideDefaultView() {
        const resultsElem = document.getElementById("results-cont");
        const noCalcsElem = document.getElementById("no-calcs-cont");

        noCalcsElem.classList.toggle("display-none"); //hides the default container
        resultsElem.classList.toggle("display-none"); //shows the savings container
    }
};













