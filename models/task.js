const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must provide name'],
        trim:true,
        maxlength:[20,'maximum length is only 20 character']
    },
    completed: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task',TaskSchema)