var categories = require(__dirname + "/../../../db/categories");
var categoryModel = require(__dirname + "/categoryModel")(require(__dirname + "/../../../db"));

module.exports = {

  all: function (req, res) {
    res.json(categories);
  },

  id: function (req, res) {
    
  }

};
