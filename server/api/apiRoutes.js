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

router.put('/product', productController.update);
router.put('/products', productController.update);
router.put('/product/:id', productController.updateById);
router.put('/products/:id', productController.updateById);

router.delete('/product/:id', productController.remove);
router.delete('/products/:id', productController.remove);

//categories
router.get('/categories', categoryController.categories);
router.get('/category', categoryController.categories);
router.get('/category/:id', categoryController.category);
router.get('/categories/:id', categoryController.category);

router.put('/category', categoryController.update);
router.put('/categories', categoryController.update);
router.put('/category/:id', categoryController.updateById);
router.put('/categories/:id', categoryController.updateById);

router.post('/categories', categoryController.insert);
router.post('/category', categoryController.insert);

//tags/nearables
router.get('/tags', tagController.tags);
router.get('/tag', tagController.tags);
router.get('/tags/:id', tagController.tag);
router.get('/tag/:id', tagController.tag);

router.put('/tags', tagController.update);
router.put('/tag', tagController.update);
router.put('/tag/:id', tagController.updateById);
router.put('/tag/:id', tagController.updateById);

router.post('/tag', tagController.insert);
router.post('/tags', tagController.insert);

router.delete('/tag/:id', tagController.remove);
router.delete('/tags/:id', tagController.remove);

//Devices close to user
router.get('/tags?', tagController.queryAll);
router.get('/tag/*', tagController.tags);
router.get('/tags/*', tagController.tags);

module.exports = router;
