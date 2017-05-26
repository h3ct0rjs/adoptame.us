var express = require('express');
var router = express.Router();
var passport = require('passport');
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

// Get for terminos and condiciones site.com/ayuda/terminos
router.get('/terminos', function(req, res, next) {
    res.render('docs/terminos');
});


// Get for terminos and condiciones site.com/ayuda/terminos
router.get('/acercade', function(req, res, next) {
    res.render('docs/acercade');
});

// Get for terminos and condiciones site.com/ayuda/terminos
router.get('/uso', function(req, res, next) {
    res.render('docs/uso');
});

// Get for terminos and condiciones site.com/ayuda/terminos
router.get('/contacto', function(req, res, next) {
    res.render('docs/contacto');
});


module.exports = router;