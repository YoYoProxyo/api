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
router.get('/product', productController.products);
router.get('/product/:id', productController.product);
router.get('/products/:id', productController.product);

router.post('/products', productController.insert);
router.post('/product', productController.insert);

//categories
router.get('/categories', categoryController.categories);
router.get('/category', categoryController.categories);
router.get('/category/:id', categoryController.category);
router.get('/categories/:id', categoryController.category);

router.post('/categories', categoryController.insert);
router.post('/category', categoryController.insert);

//devices
router.get('/tag/:id', nearableController.getTagById);
router.get('/tags/:id', nearableController.getTagById);
router.get('/tags', nearableController.getTags);
router.get('/tag', nearableController.getTags);

router.post('/tag', nearableController.insert);
router.post('/tags', nearableController.insert);

//Devices close to user
router.get('/nearable/?', nearableController.queryAll);
router.get('/nearable/*', nearableController.getAll);

module.exports = router;
