import express from "express";
const router = express.Router();

import Database from "better-sqlite3";
const db = new Database('app.db');

import { createHistoryTable } from "../controllers/controllers.js";


//create sql table 
createHistoryTable();

//store a single piece of history in the database
router.post("/store-history", (req, res, next) => {

    const convertTo2DP = (str) => parseFloat(str).toFixed(2);

    //extract the user data 
    /*
    [
        [ 'originalPrice', '100.65356' ],
        [ 'discountPrice', '30' ],
        [ 'result', '70' ]
    ]
    */

    const { originalInput, discountInput, result } = req.body;

    const preparedStmt = db.prepare("INSERT INTO user_input_data (original_price, discount, new_price) VALUES (?, ?, ?)");

    const stmt = preparedStmt.run(
        convertTo2DP(originalInput),
        convertTo2DP(discountInput),
        convertTo2DP(result)
    );
    res.sendStatus(201);
});

//retrieve all the history from the database
router.get("/retrieve-history", (req, res, next) => {
    const preparedStmt = db.prepare("SELECT * FROM user_input_data");
    const allHistory = preparedStmt.all();
    res.json({ history: allHistory }).sendStatus(200);
});



//delete single piece of history from the database based on the id 
router.delete("/delete-single-history/:id", (req, res) => {
    const preparedStmt = db.prepare("DELETE from user_input_data WHERE id = ?");
    const execution = preparedStmt.run(req.params.id);
    res.json({ msg: "Done" }).sendStatus(204); //? 204 means there's no content or no data to return
});


//delete all history from the database based on the id 
router.delete("/delete-all-history/", (req, res) => {
    const preparedStmt = db.prepare("DELETE from user_input_data");
    const execution = preparedStmt.run();
    res.json({ msg: "Done" }).sendStatus(204); //? 204 means there's no content or no data to return
});


export default router;