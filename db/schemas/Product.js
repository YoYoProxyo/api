var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
  image: String,
  manufacturer: String,
  colour: String,
  price: String,
  size: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"}
});

var Product = mongoose.model("Product", productSchema);

Product.all = function () {
  return Product.find();
};

Product.one = function (product) {
  return Product.findOne(product).exec();
};

Product.add = function (productObject) {
  var promise = new Promise(function (resolve, reject) {
    Product
      .findOne(productObject)
        .then(function (result) {
          if (!!result) {
            resolve(result);
          } else {
            Product.create(productObject)
              .then(function (result) {
                resolve(result);
              }).then(null, function (error) {
                reject(error);
              });
          }
        })
        .then(null, function (error) {
          reject(error);
        });

  }); //promise

  return promise;
};

module.exports = Product;