// Function: store a single piece of history in the database
//Route: "api/history/store-history"

import Database from "better-sqlite3";
const db = new Database('app.db');


const convertTo2DP = (str) => parseFloat(str).toFixed(2);


export const storeHistory = (req, res, next) => {
    //thanks to the error handler, if the code in try {} throws an error, it'll still be caught. We use catch to make the error message more specific

    try {
        const { originalInput, discountInput, result } = req.body;
        console.log(req.body);

        const preparedStmt = db.prepare("INSERT INTO user_input_data (original_price, discount, new_price) VALUES (?, ?, ?)");

        preparedStmt.run(
            convertTo2DP(originalInput),
            convertTo2DP(discountInput),
            convertTo2DP(result)
        );
        res.status(201).json({ Message: "Data input into database" });
    } catch (error) {
        error.status = 500;
        return next(error);
    }
}