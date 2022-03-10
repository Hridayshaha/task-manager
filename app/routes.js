// Module Import
const route = require('express').Router()
const taskRoute = require('../routes/TaskRoute')

// Task Routes API
route.use("/api/v1/tasks", taskRoute)

// Health Route
route.get('/health', (req, res) => {
    res.status(200).json({status: 'Ok', msg:"Successful"});
})


// Module Export
module.exports = route;