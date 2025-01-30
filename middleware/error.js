export function errorHandler(err, req, res, next) {
    if (!err.status || err.status === 500) {
        console.log(err);
        res.status(500).json({ Message: err.message || "There's an error on the server" });
    } else {
        res.status(err.status).json({ Message: err.message });
    }
}