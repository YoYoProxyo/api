"use strict";
var productModel = require(__dirname + "/productModel")(require(__dirname + "/../../../db"));

module.exports = {

  products: function(req, res) {
    productModel.all(function (err, result) {
      res.json(result);
    });
  },

  product: function(req, res) {

    if (req.params.id) {

      productModel.getProductByIdentifier(req.params.id, function (err, product) {
        if (err) {
          res.json(err);
        } else {
          res.json(product);
        }
      });

    } else {
      res.json({});
    }
  },

  insert: function (req, res) {

    productModel.getProductByIdentifier(req.body.number, function (err, result) {
      console.log(result);
      if (!!!result) {
        productModel.insert(req.body, function (err, result) {
          if (err) {
            res.json(err);
          } else {
            res.json(result);
          }
        });
      } else {
        res.json(result);
      }

    });

  }

};
