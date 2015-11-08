module.exports = function(db) {

  var Category = db.Category;

  return {

    all: function (callback) {
      Category.find().exec(callback);
    },

    /**
     * getCategoryById
     * @param  {string} id
     * @return {}    [description]
     */
    getCategoryById: function (id) {
      Category.findOne({
        id: id
      })
      .exec(function (err, category){
        if (err){
          done(err);
        } else {
          done(null, category);
        }
      });
    },

    insert: function (category, callback) {
      Category.create(category, callback);
    }

  };

};
