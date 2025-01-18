import express from "express";
const app = express();
const port = process.env.PORT || 3000;

//send back static files (e.g images or static html)
app.use(express.static('public'));

//render ejs files
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//entry point
app.get("/", (req, res) => {
    res.render("index");
});

//handles info sent in from the user 
app.post("/", (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    `App is listening on port ${port}`
});
