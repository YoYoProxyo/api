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
    getProductByIdentifier: function (identifier, callback) {
      Product.findOne({ number: identifier }).exec(callback);
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
