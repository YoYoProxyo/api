var mongoose = require('mongoose');

var productSchema = require('./schemas/Product');
var tagSchema = require('./schemas/Tag');

var Product = mongoose.model("Product", productSchema);
var Tag = mongoose.model("Tag", tagSchema);

exports.Category = require('./schemas/Category');
exports.Product = Product;
exports.Tag = Tag;

mongoose.connect(process.env.DB_HOST);
