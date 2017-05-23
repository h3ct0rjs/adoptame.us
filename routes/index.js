var express = require('express');
var router = express.Router();
var Pet = require('../models/pet');
//please check csrf https://github.com/pillarjs/understanding-csrf
//This will enable csrf protection, because we want a secure application
var csrf = require('csurf');
var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */
router.get('/', function(req, res, next) {
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

router.get('/usuario/registro', function(req, res, next) {
    res.render('user/signup', {
        csrfToken: req.csrfToken()
    });
});

router.post('/usuario/registro', function(req, res, next){
    console.log('HeY Post Exitoso');
    console.log(req);

    res.redirect('/')
});

module.exports = router;