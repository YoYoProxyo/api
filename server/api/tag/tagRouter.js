var express = require("express");
var tagController = require("./tagController");
var tagRouter = express.Router({ mergeParams: true });

tagRouter
  .get('/', tagController.tags)
  .get('/:id', tagController.tag)
  .get('/?', tagController.queryAll) //Devices close to user
  .post('/', tagController.insert)
  .put('/', tagController.update)
  .put('/:id', tagController.updateById)
  .delete('/:id', tagController.remove);

module.exports = tagRouter;