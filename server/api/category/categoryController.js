var categoryModel = require(__dirname + "/../../../db").Category;

module.exports = {

  categories: function(req, res) {

    categoryModel.all()
      .then(function (result) {
        res.json(result || {});
      });

  },

  category: function (req, res) {

    if (req.params.id) {
      categoryModel.one({ _id: req.params.id })
        .then(function (category) {
          res.json(category || {});
        }).then(null, function (error) {
          res.json({ error: error.message });
        });
    } else {
      res.json({});
    }

  },

  update: function (req, res) {
    categoryModel.put(req.body)
      .then(function (result) {
        res.json(result);
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  updateById: function (req, res) {
    var categoryObject = req.body;
    categoryObject._id = categoryObject._id || req.params.id;
    categoryModel.put(categoryObject)
      .then(function (result) {
        res.json(result);
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  remove: function (req, res) {
    categoryModel.delete({ _id: req.params.id })
      .then(function (result) {
        res.json(result || {});
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  insert: function (req, res) {

    categoryModel.add(req.body)
      .then(function (category) {
        res.json(category || {});
      }).then(null, function (error) {
        res.json({ error : error.message });
      });

  }

};
