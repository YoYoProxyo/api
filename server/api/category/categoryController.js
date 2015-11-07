var categories = require(__dirname + "/../../../db/categories");

module.exports = {

  all: function (req, res) {
    res.json(categories);
  }

};
