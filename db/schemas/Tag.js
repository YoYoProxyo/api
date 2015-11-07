var mongoose = require('mongoose');

module.exports = mongoose.Schema({
  reference: String,
  name: String,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product"}
});
