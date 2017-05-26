var express = require('express');
var router = express.Router();
var passport = require('passport');
var Cart = require('../models/cart');
var Pet = require('../models/pet');
//please check csrf https://github.com/pillarjs/understanding-csrf
//This will enable csrf protection, because we want a secure application
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {});
});


router.get('/explorar', function(req, res, next) {
    var petlist = Pet.find(function(err, docs) {
        var petChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
            petChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', {
            title: 'Adoptame.co',
            pet: petChunks
        });
    });
});


router.get('/add-to-user/:id', function(req, res, next) {
    var petId = req.body.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {
        items: {}
    });

    Pet.findById(petId, function(err, pet) {
        if (err) {
            return res.redirect('/');
        }

        cart.add(pet, pet.id);
        res.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/explorar');
    });
});

router.get('/eventos', function(req, res, next) {
    res.render('eventos/events');
});
module.exports = router;