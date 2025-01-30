import Database from "better-sqlite3";
const db = new Database('app.db');

//Function: delete single piece of history from the database based on the id 
//Route: "api/posts/delete-single-history/:id"
export const deleteSingleHistory = (req, res, next) => {

    const id = req.params.id; //id parameter sent by user
    const preparedStmt = db.prepare("DELETE from user_input_data WHERE id = ?");
    const execution = preparedStmt.run(id);

    // > 0 means that data was inserted successfully
    if (execution.changes > 0) {
        res.status(204) //? 204 is a successful request with no data to return. Therefore, no json will be sent if we call ".json()"
    } else {
        const error = new Error(`Error deleting message with an id of ${id}`)
        error.status = 500; //sets the status the error handler will use (which is already caught by )
        return next(error);
    }

}

//Function: delete all history from the database
//Route: "api/posts/delete-all-history/"
export const deleteAllHistory = (req, res, next) => {
    const preparedStmt = db.prepare("DELETE from user_input_data");
    preparedStmt.run();
    res.status(204) //? 204 is a successful request with no data to return. Therefore, no json will be sent if we call ".json()"
}