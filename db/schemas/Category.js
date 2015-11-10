"use strict";

var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: String,
  icon: String
});

var Category = mongoose.model("Category", categorySchema);

/**
 * Get all categories
 * @return {promise} 
 */
Category.all = function () {
  return Category.find().exec();
};

/**
 * getCategoryById
 * @param  {string} id
 * @return {promise}
 */
Category.one = function (category) {
  return Category.findOne(category).exec();
};

Category.add = function (categoryObject) {

  var promise = new Promise(function (resolve, reject) {
    Category
      .findOne(categoryObject)
        .then(function (result) {
          if (!!result) {
            resolve(result);
          } else {
            Category.create(categoryObject)
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

Category.delete = function (category) {
  return Category.findOne(category).remove().exec();
};

module.exports = Category;
