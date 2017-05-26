var mongo = require('mongoose');
var Schema = mongo.Schema;
var schema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    comments: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});
//This export pet as library and Pet as constructor 
module.exports = mongo.model('Form', schema);