var products = require(__dirname + "/../../../db/products");

module.exports = {

  products: function(req, res) {
    res.json([products]);
  },

  product: function(req, res) {
    var id = req.params.id;
    var product = products[id] || {};
    res.json(product);
  }

};