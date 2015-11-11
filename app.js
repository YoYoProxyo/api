require('dotenv').config({
  silent: true,
  path: ".env"
});

//include pusher
require("./server/pusher");

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var ejs = require('ejs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Pages
 */
app.use("/", require('./server'));

/**
 * API
 */
app.use('/api', require('./server/api/apiRoutes'));

/**
 * catch 404 and forward to error handler
 */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * development error handler, will print stacktrace
 */
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
  res.status(err.status || 500);
    res.render('error', {
        message: err.message,
      error: err
    });
  });
}

/**
 * production error handler - no stacktraces leaked to user
 */
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// startup our app
app.listen(process.env.PORT || 3000);
console.log("Listening on " + process.env.PORT);

module.exports = app;
