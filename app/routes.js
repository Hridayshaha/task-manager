// Module Import
const route = require('express').Router()

// Task Routes API

// Health Route
route.get('/health', (req, res) => {
    res.status(200).json({status: 'Ok', msg:"Successful"});
})


// Module Export
module.exports = route;