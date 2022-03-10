// Module Import


// Functions Here
// Get All Items 
const getAllItems = (req, res) => {
    res.json({
        msg: 'Get All Items'
    })
}

// Get Single Item 
const getSingleItem = (req, res) => {
    res.json({msg: "Get Single Item"})
}

// Create or Post Single Item
const postSingleItem = (req, res) => {
    const {id:TaskId} = req.params
    res.json({id: TaskId,msg: "Post Single Item"})
}

// Update Single Item
const updateSingleItem = (req, res) => {
    const {id:TaskId} = req.params
    res.json({id: TaskId,msg: "Update Single Item"})
}

// Delete Single Item
const deleteSingleItem = (req, res) => {
    const {id:TaskId} = req.params
    res.json({id: TaskId,msg: "Delete Single Item"})
}



// Module Export
module.exports = {getAllItems,getSingleItem,postSingleItem,updateSingleItem,deleteSingleItem}