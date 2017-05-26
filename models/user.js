var mongoose = require('mongoose');
//Want to validate the correctness of the email address
require('mongoose-type-email');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');


var userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
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
        type: String
    },
    homeaddress: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 8,
    }
});

//Encrypt and salt the password to get hash using 6 rounds
userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(6), null);
};
//validation of the password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);