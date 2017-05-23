var mongo = require('mongoose');
require('mongoose-type-email');

var Schema = mongo.Schema;
var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50,
    },
    email: {
        work: {
            type: mongoose.SchemaTypes.Email,
            allowBlank: true,
            required: true,
            unique: true
        },
        home: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    }
    fname: {
        type: String,
        required: true
    },
    flastname: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    tel: {
        type: String,
    },
    homeaddress: {
        type: String
    }
    password:{
        type:String, 
        required: true,
        minlength:[8,"Contraseña menor de 8 caracteres"]
    }
});

module.exports = mongo.model('User', userSchema);