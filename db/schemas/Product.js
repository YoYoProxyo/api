var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  number: Number,
  tag: String,
  name: String,
  image: String,
  manufacturer: String,
  colour: String,
  price: Number,
  size: "",
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category"}
});
