var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  image: String,
  manufacturer: String,
  colour: String,
  price: String,
  size: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"}
});
