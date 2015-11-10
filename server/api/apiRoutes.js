var express = require('express');
var router = express.Router();
var productController = require('./products/productsController');
var categoryController = require('./category/categoryController');
var customerController = require('./customer/customerController');
var tagController = require('./tag/tagController');

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

//tags/nearables
router.get('/tags', tagController.tags);
router.get('/tag', tagController.tags);
router.get('/tags/:id', tagController.tag);
router.get('/tag/:id', tagController.tag);

router.post('/tag', tagController.insert);
router.post('/tags', tagController.insert);

//Devices close to user
router.get('/tags?', tagController.queryAll);
router.get('/tag/*', tagController.tags);
router.get('/tags/*', tagController.tags);

module.exports = router;
