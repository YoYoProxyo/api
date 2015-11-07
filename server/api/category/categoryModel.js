module.exports = function(db) {

  var Category = db.Category;

  return {

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
    }

  };

};
