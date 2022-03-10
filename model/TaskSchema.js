// Module Import
const {Schema, model} = require('mongoose');

const TaskManagerSchema = new Schema({
    name:{
        type:String,
        required: [true, "Must Provide Your Name"],
        trim:true,
        maxLength: [100, "Must Provide Under 100 characters"]
    }, 
    completed : {
        type:Boolean,
        default:false,
    }

});


// Module Export 
module.exports = model("Task", TaskManagerSchema);
