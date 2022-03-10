// Module Import
require('dotenv').config()
const express = require('express');
const {error404, globalErrorHandler} = require('./errorHandler')

// Initialize Our App
const app = express();

// Buildin Middlware
app.use(require("./buildinMiddlewares"));

// Routes
app.use(require("./routes"))

// Error Handler
app.use(error404)
app.use(globalErrorHandler)

// Export Module
module.exports = app;