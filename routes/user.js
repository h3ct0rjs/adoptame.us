var express = require('express');
var router = express.Router();
var passport = require('passport');
var Pet = require('../models/pet');
var User = require('../models/user');
var moment = require('moment')
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

// User profile route
router.get('/perfil', isLoggedIn, function(req, res, next) {
    var username = req.body.username;
    res.render('user/profile', {
        dia: moment().format('MMMM Do YYYY, h:mm:ss a'),
        nombre: 'Hector F. Probando de render'
    });
});

router.get('/logout', isLoggedIn, function(req, res, next) {
    //passport method
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next) {
    next();
});

// GET Signup Page
router.get('/registro', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    });
});

// Send post and validate the passport
router.post('/registro', passport.authenticate('local.signup', {
    successRedirect: '/usuario/perfil',
    failureRedirect: '/usuario/registro',
    failureFlash: true
}));

//When you got an account you will go to signin page
router.get('/login', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {
        csrfToken: req.csrfToken(),
        messages: messages,
        hasErrors: messages.length > 0
    });
});

router.post('/login', passport.authenticate('local.signin', {
    successRedirect: '/usuario/perfil',
    failureRedirect: '/usuario/login',
    failureFlash: true
}));



module.exports = router;


function isLoggedIn(req, res, next) {
    //boolean passport method to check auth
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}