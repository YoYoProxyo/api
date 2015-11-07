var mongoose = require('mongoose');

var categorySchema = require('./schemas/Category');
var productSchema = require('./schemas/Product');
var tagSchema = require('./schemas/Tag');

var Category = mongoose.model("Category", categorySchema);
var Product = mongoose.model("Product", productSchema);
var Tag = mongoose.model("Tag", tagSchema);

exports.Category = Category;
exports.Product = Product;
exports.Tag = Tag;

mongoose.connect(process.env.DB_HOST);
