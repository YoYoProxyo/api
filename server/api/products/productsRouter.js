var express = require("express");
var productController = require("./productsController");
var productsRouter = express.Router({ mergeParams: true});

productsRouter
  .get('/', productController.products)
  .get('/:id', productController.product)
  .post('/', productController.insert)
  .put('/', productController.update)
  .put('/:id', productController.updateById)
  .delete('/:id', productController.remove);

module.exports = productsRouter;