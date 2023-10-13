const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    taskName :{
        type: String,
        required: true,

    },
    completed :{
        type : Boolean,
        required : false,
        default : false
    }
});
const Task = mongoose.model("task",TaskSchema);
module.exports = Task;