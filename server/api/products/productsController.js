"use strict";
var productModel = require(__dirname + "/../../../db").Product;

module.exports = {

  products: function(req, res) {

    productModel.all()
      .then(function (result) {
        res.json(result);
      })
      .then(null, function (error) {
        res.json({ error: error.message });
      });

  },

  product: function(req, res) {

    if (req.params.id) {

      productModel.one(req.params.id)
        .then(function (product) {
          res.json(product);
        })
        .then(null, function (error) {
          res.json({ error : error });
        });

    } else {
      res.json({});
    }

  },

  remove: function (req, res) {
    productModel.delete({ _id: req.params.id })
      .then(function (result) {
        res.json(result || {});
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  insert: function (req, res) {

    productModel.add(req.body)
      .then(function (product) {
        res.json(product);
      }).then(null, function (error) {
        res.json(error);
      });

  }

};
