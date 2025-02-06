//... Module description: Fetches data from the server
export async function fetchDataFromServer() {
    try {
        const request = await fetch("http://localhost:3000/api/history/retrieve-history");
        const data = await request.json();
        return data.history;
    } catch (error) {
        console.log("There was an error in retrieving the history!")
        alert("There was an error in retrieving your history");
    }
}
