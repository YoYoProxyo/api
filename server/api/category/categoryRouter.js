var express = require("express");
categoryController = require("./categoryController");
categoryRouter = express.Router({mergeParams: true});

categoryRouter
  .get('/', categoryController.categories)
  .get('/:id', categoryController.category)
  .post('/', categoryController.insert)
  .put('/', categoryController.update)
  .put('/:id', categoryController.updateById)
  .delete('/:id', categoryController.remove);

module.exports = categoryRouter;