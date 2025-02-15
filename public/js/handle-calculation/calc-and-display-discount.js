//... Module description: Calculates a discount and display the result to the user
export const noCalcsCont = document.getElementById("no-calcs-cont");
export const resultsCont = document.getElementById("results-cont");

//calculates the discount and cost savings
export const calculateAndDisplayDiscount = (original, discount) => {

    // formula: original - ((discount / 100) * original)
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
        resultsCont.classList.remove("display-none"); //shows the savings container
        noCalcsCont.classList.add("display-none"); //hides the default container
    }
};













