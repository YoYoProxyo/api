var express = require('express');
var pageRouter = express.Router();

pageRouter
  .get('/', function (req, res) {
    res.render('home');
  })
  .get('/admin', function (req, res) {
    res.render('admin');
  });

module.exports = pageRouter;