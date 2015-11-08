module.exports = function(db) {

  var Product = db.Product;

  return {

    all: function (callback) {
      Product.find().exec(callback);
    },

    /**
     * getProductByIdentifier
     * @param {number} identifier id number
     */
    getProductById: function (id, callback) {
      Product.findOne({ _id: id }).exec(callback);
    },

    /**
     * insert
     * @param {object} product
     */
    insert: function (product, callback) {
      Product.create(product, callback);
    }

  };

};
