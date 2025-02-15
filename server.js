import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import history from "./routes/history-route.js";
import { errorHandler } from "./middleware/error.js";
import { notFound } from "./middleware/notFound.js"


//send back static files (e.g images or static html)
app.use(express.static('public'));

//render ejs files
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public")); //serves the static HTML file

//routes
app.use("/api/history", history);

app.use(notFound);

//our own error handler middleware
app.use(errorHandler);

app.listen(port, () => {
    `App is listening on port ${port}`
});


