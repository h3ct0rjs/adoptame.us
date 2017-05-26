var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expresshbs = require('express-handlebars');
var mongoose = require('mongoose');


var index = require('./routes/index');
var userRoutes = require('./routes/user');
var ayuda = require('./routes/ayuda');


//user authentication, login and more
var session = require('express-session');
var passport = require('passport'); 
//notifications for errors 
var flash = require('connect-flash');
//all validations made in the app. 
var validator = require('express-validator');
//set time experition for logged user
var MongoStore = require('connect-mongo')(session);
//connect with the database and create the database adoptame.co
mongoose.connect('localhost:27017/adoptameco');
require('./config/passport');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(validator());
app.use(cookieParser());
app.use(session({
    secret: 'MySuperSecretTest',
    resave: false,
    saveUninitialized: false, 
    store: new MongoStore({ mongooseConnection: mongoose.connection}),
    //60 minutes for active logins 
    cookie: { maxAge: 60 * 60* 1000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());   
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});


//Lista de Rutas a proteger
app.use('/usuario', userRoutes);
app.use('/', index);
app.use('/ayuda', ayuda);


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