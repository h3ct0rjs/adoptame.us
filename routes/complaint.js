var express = require('express');
var router = express.Router();

/* GET Complaint app listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Denuncia al Maltratador',title2:'Denuncia' });
});

module.exports = router;