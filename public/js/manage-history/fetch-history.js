//... Module description: Fetches data from the server
export async function returnDataFromServer() {
    try {
        const request = await fetch("http://localhost:3000/api/history/retrieve-history");
        const data = await request.json();

        const returnData = {}; //stores the data and a boolean for if there's any
        returnData["historyArr"] = data.history;

        if (data.history.length > 0) {
            returnData["userHasStoredHistory"] = true;
        } else {
            returnData["userHasStoredHistory"] = false;
        }

        return returnData;
    } catch (error) {
        console.log("There was an error in retrieving the history!")
        alert("There was an error in retrieving your history");
    }
}
