var http = require('http');

module.exports = {

  products: function(req, res) {
    console.log("products called");
    res.json([{ product: "underpants" }, { product: "shoes" }, { product: "tshirt" }, { product: "skirt" }]);
  },

  product: function(req, res) {
    res.json({ product: "underpants" });
  },

  post: function(req, res) {
    res.json({ product: "underpants" });
  },

  put: function (req, res) {
    res.json({ product: "underpants" });
  }

};