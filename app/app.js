// Module Import
require('dotenv').config()
const express = require('express');

// Initialize Our App
const app = express();

// Buildin Middlware
app.use(require("./buildinMiddlewares"));

// Routes
app.use(require("./routes"))

// Error Handler


// Export Module
module.exports = app;