// Module Import
const route = require('express').Router();
const {getAllItems,getSingleItem,postSingleItem,updateSingleItem,deleteSingleItem} = require('../controller/taskRouteControllers')

// Get All Items
route.get('/' , getAllItems);

// Read Single Item
route.get('/:id' , getSingleItem);

// Single Create Item 
route.post('/' , postSingleItem);

// Single Update Item 
route.patch('/:id' , updateSingleItem);

// Single Delete Item
route.delete('/:id' , deleteSingleItem);

// Module Export
module.exports = route;