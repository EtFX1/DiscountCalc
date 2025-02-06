//... Module description: Calculates a discount and display the result to the user
export const originalInputElem = document.getElementById("original-price");
export const discountInputElem = document.getElementById("discount-price");
export const noCalcsCont = document.getElementById("no-calcs-cont");
export const resultsCont = document.getElementById("results-cont");

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
        resultsCont.classList.remove("display-none"); //shows the savings container
        noCalcsCont.classList.add("display-none"); //hides the default container
    }
};













