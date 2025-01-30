//function that throws and handles an error when there's a bad get request (instead of the default error handler doing that itself)
export const notFound = (req, res, next) => {
    //? in here, we are not concerned with the res object

    //to handle an error, you need to do something with the error object (in this case, passing in an error message, and changing the status code)

    //throwing an error
    const error = new Error("404 not found");

    //handling the error
    error.status = 404;
    next(error);
}

