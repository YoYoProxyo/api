var categoryModel = require(__dirname + "/categoryModel")(require(__dirname + "/../../../db"));

module.exports = {

  categories: function(req, res) {
    categoryModel.all(function (err, result) {
      res.json(result);
    });
  },

  category: function (req, res) {
    if (req.params.id) {

      categoryModel.getCategoryById(req.params.id, function (err, category) {
        if (err) {
          res.json(err);
        } else {
          res.json(category);
        }
      });

    } else {
      res.json({});
    }
  },

  insert: function (req, res) {
    categoryModel.insert(req.body, function (error, category) {
      if (error) {
        res.json(error);
      } else {
        res.json(category);
      }
    });
  },

};
