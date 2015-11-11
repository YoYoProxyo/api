var express = require("express");
categoryController = require("./categoryController");
categoryRouter = express.Router({mergeParams: true});

categoryRouter.get('/', categoryController.categories)
  .post('/', categoryController.insert)
  .put('/', categoryController.update);

categoryRouter.get('/:id', categoryController.category)
  .put('/:id', categoryController.updateById);

categoryRouter.get('/:id', categoryController.category)
  .put('/:id', categoryController.updateById);

module.exports = categoryRouter;