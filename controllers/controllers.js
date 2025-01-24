import Database from "better-sqlite3";
const db = new Database('app.db');

//Function: create a table to store user's history
//Endpoint: api/history
export const createHistoryTable = () => {
    db.exec(`
    CREATE TABLE IF NOT EXISTS user_input_data(
        id INTEGER PRIMARY KEY,
        original_price REAL NOT NULL, 
        discount REAL NOT NULL,
        new_price REAL NOT NULL
    )`);
}




