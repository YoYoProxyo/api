var express = require('express');
var router = express.Router();
var productController = require('./products/productsController');

//products
router.get('/products', productController.products);
router.get('/product/:id', productController.product);
router.get('/products/:id', productController.product);

router.post('/', productController.post);

router.put('/', productController.put);

module.exports = router;
