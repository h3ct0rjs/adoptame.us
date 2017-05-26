//passport implement a global configuration for all the project
var passport = require('passport');
//Import the model of the user. 
var User = require('../models/user');
//Strategy means the form That I will handle the login page, 
// I mean there're tons of third party services that allows you 
// use authentication methods, eg facebook, twitter, etc. 
// most widely use is the  local session validator.
var LocalStrategy = require('passport-local').Strategy;

//How to store the user in the session.
passport.serializeUser(function(user, done) {
    //serialize by id.
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    //Search for the id user
    User.findById(id, function(err, user) {
        //return error , or the user if is in mongodb 
        done(err, user);
    });
});

// Create a new user in the site
//Create Local Strategy, Facade Javascript Object
//Create the user in the database too.
passport.use('local.signup', new LocalStrategy({
    //configuration :
    // username field is email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    //validate the pass callback parameters
    req.checkBody('email', 'Direccion de Correo Invalida').notEmpty().isEmail();
    req.checkBody('password', 'Tamaño de Password es inválido, debe ser superior a 8 caracteres').notEmpty().isLength({
        min: 8
    });
    req.checkBody('flastname', 'Debe ingresar un apellido válido').notEmpty().isLength({
        min: 3
    });
    req.checkBody('tel', 'Ingrese un Telefono Fijo ó Celular valido con indicativo').notEmpty().isLength({
        min: 7,
        max: 10
    });
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({
        'email': email
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {
                message: '¡Ya Existe una direccion de Correo, intenta con otro correo!.'
            });
        }

        var newUser = new User();
        //set the user credetials
        newUser.username = req.body.username;
        newUser.email = email;
        newUser.fname = req.body.pname;
        newUser.flastname = req.body.flastname;
        newUser.tel = req.body.tel;
        newUser.homeaddress = req.body.addr;
        newUser.password = newUser.encryptPassword(password);
        //Debug
        console.log(newUser);
        //try to save the info inserted by the user
        newUser.save(function(err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });
    });

}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Direccion de Correo Invalida').notEmpty().isEmail();
    req.checkBody('password', 'Tamaño de Password es inválido, debe ser superior a 8 caracteres').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
    }
    User.findOne({
        'email': email
    }, function(err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {
                message: '¡No Existe esa direccion de Correo en nuestra base de datos!.'
            });
        }
        if (!user.validPassword(password)) {
            return done(null, false, {
                message: '¡Contraseña Incorrecta, Verifique sus datos!.'
            });
        }
        return done(null, user);
    });
}));