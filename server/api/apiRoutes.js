var express = require('express');
var router = express.Router();

//API Documentation
router.get('/', function (req, res) {
  res.render("api");
});

//category singular or plural
router.use(/\/categor(?:y|ies)/, require('./category/categoryRouter'));

//product/s
router.use(/\/products?/, require('./products/productsRouter'));

//tags/nearables
router.use(/\/tags?/, require('./tag/tagRouter'));

module.exports = router;
