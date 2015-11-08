module.exports = function(db) {

  var Tag = db.Tag;

  return {

    all: function (callback) {
      Tag.find().exec(callback);
    },

    /**
     * getTagById
     * @param  {string} id
     * @return {}    [description]
     */
    getTagById: function (id, callback) {
      Tag.findOne({
        _id: id
      })
      .exec(function (err, tag){
        if (err){
          callback(err);
        } else {
          callback(null, tag);
        }
      });
    },

    insert: function (tag, callback) {
      Tag.create(tag, callback);
    },

    assignProduct: function (tag, product) {
      
    }

  };

};