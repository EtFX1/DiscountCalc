import Database from "better-sqlite3";
const db = new Database('app.db');


// Function: retrieve all the history from the database
//Route: "api/history/retrieve-history"
export const retrieveHistory = (req, res, next) => {

    try {
        const preparedStmt = db.prepare("SELECT * FROM user_input_data");
        const allHistory = preparedStmt.all(); //e.g [{ id: 1, original_price: 90, discount: 30, new_price: 60 }, etc]

        res.status(200).json({ history: allHistory }); //returns all the history to the user
    } catch (error) {
        error.status = 500;
        //below is the error message
        return next(error);
    }
}



