"use strict";

var mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
  reference: String,
  name: String,
  icon: String,
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product"}
});

var Tag = mongoose.model("Tag", tagSchema);

Tag.all = function () {
  return Tag.find().exec();
};

Tag.one = function (tag) {
  return Tag.findOne(tag).exec();
};

Tag.add = function (tagObject) {

  var promise = new Promise(function (resolve, reject) {
    Tag
      .findOne(tagObject)
        .then(function (result) {
          if (!!result) {
            resolve(result);
          } else {
            Tag.create(tagObject)
              .then(function (result) {
                resolve(result);
              }).then(null, function (error) {
                reject(error);
              });
          }
        })
        .then(null, function (error) {
          reject(error);
        });

  }); //promise

  return promise;

};

Tag.put = function (tag) {
  if (tag._id) {
    return Tag.findByIdAndUpdate(tag._id, tag).exec();
  } else {
    return Tag.add(tag);
  }
};

Tag.updateById = function (tag) {
  return Tag.findByIdAndUpdate(tag._id, tag).exec();
};


Tag.delete = function (tag) {
  return Tag.findOne(tag).remove().exec();
};

Tag.assignProduct = function (tag, product) {
  
};

module.exports = Tag;
