//require libraries
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expresshbs = require('express-handlebars');

//Registered apps 
var admin = require('./routes/admin');
var users = require('./routes/users');
var index = require('./routes/index');
var se    = require('./routes/eventos');
var explora = require('./routes/shop');
var payment = require('./routes/payments');
var complaint = require('./routes/complaint');
var contact = require('./routes/contact');
var about = require('./routes/about');

//initilize your app.
var app = express();
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expresshbs({defaultLayout:'layout',extname:'.hbs'}));
//refers to the previous engin
app.set('view engine', '.hbs');     

//Favicon definition and cookie manager.
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Urls to resolve along with renders
app.use('/admin', admin);
app.use('/users', users);
app.use('/', index);
app.use('/eventos', se);
app.use('/explorar', explora);
app.use('/donaciones', payment);
app.use('/denuncia', complaint);
app.use('/contacto', contact);
app.use('/acerca', about);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
