var mongo = require('mongoose');
var Schema = mongo.Schema;

var Schema = new Schema({
    imagePath:{ type: String, required: true},
    name:{ type: String, required: true},
    description:{ type: String, required: true},
    nvacunas:{type: Number, required: true}
});

//create and export your schema
module.exports = mongo.model('Pet',Schema);
