const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//CREATE SCHEMA

const MessageSchema = new Schema({
    name:String,
    message:String,
    dataCreated:{
        type:Date,
        default:Date.now
    },
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;