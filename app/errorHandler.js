// 404 Error Handler
const error404 = (_req, _res, next) => {
    const error = new Error("Resouce not found!")
    error.status = 404;
    next(error);
}

// Global Error Handler
const globalErrorHandler = (error, req, res, next) => {
    if(error.status === 404){
        return res.status(404).json({msg: error.message});
    }
    res.status(500).json({msg: "Some Happened In The Server!"})
}

// Module Export
module.exports = {
    error404, globalErrorHandler
}