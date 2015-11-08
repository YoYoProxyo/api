var express = require('express');
var router = express.Router();
var productController = require('./products/productsController');
var categoryController = require('./category/categoryController');
var customerController = require('./customer/customerController');
var nearableController = require('./nearable/nearableController');

//API Documentation
router.get('/', function (req, res) {
  res.render("api");
});

//products
router.get('/products', productController.products);
router.get('/product/:id', productController.product);
router.get('/products/:id', productController.product);

router.post('/products', productController.insert);

//categories
router.get('/categories', categoryController.categories);
router.get('/categories/:id', categoryController.category);

//Devices close to user
router.get('/nearable/?', nearableController.queryAll);
router.get('/nearable/*', nearableController.getAll);

module.exports = router;
