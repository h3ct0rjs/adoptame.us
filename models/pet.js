var mongo= require('mongoose');
//You will be able to create schemas instanting this object
var Schema = mongo.Schema;
//Create the schema, What cols~~keys we need 
//JavaScript Objects keys are cols, values are the datatypes 
//and the conditional to thezzz fields
var schema = new Schema({
        urlimg: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        description: {
            type: String,
            required: true
        },
        numbervacuns: {
            type: Number,
            required: true
        },
        vacunslist: {
            type: String
        },
        age: {
            type: Number
        },
        sex: {
            type: String,
            enum: ["Macho", "Hembra"]
        }
    })

//This export pet as library and Pet as constructor 
module.exports = mongo.model('Pet', schema);