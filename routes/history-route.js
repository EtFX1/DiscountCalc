import express from "express";
const router = express.Router();

import { createHistoryTable } from "../controllers/create-table.js";
import { retrieveHistory } from "../controllers/retrieve-history.js";
import { storeHistory } from "../controllers/store-history.js";
import { deleteSingleHistory } from "../controllers/delete-history.js";
import { deleteAllHistory } from "../controllers/delete-history.js";

//create sql table 
createHistoryTable();

//store a single piece of history in the database
router.post("/store-history", storeHistory);

//retrieve all the history from the database
router.get("/retrieve-history", retrieveHistory);

//delete single piece of history from the database based on the id 
router.delete("/delete-single-history/:id", deleteSingleHistory);

//delete all history from the database 
router.delete("/delete-all-history/", deleteAllHistory);


export default router;