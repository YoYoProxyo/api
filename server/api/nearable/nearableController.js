var products = require(__dirname + "/../../../db/products");
var tagModel = require(__dirname + "/nearableModel")(require(__dirname + "/../../../db"));
var p = require(__dirname + '/../../pusher');

var getProductsFromIdList = function getProductsFromIdList (array) {
  var result = [];
  array.forEach(function (value, key) {
    var item = products[value];
    if (item) {
      result.push(item);
    }
  });
  return result;
};

var updatePusher = function (pusher, channel, event, message) {
  pusher.trigger(channel, event, {
    message: message
  });
};

module.exports = {

  insert: function (req, res) {
    tagModel.insert(req.body, function (error, tag) {
      if (error) {
        res.json(error);
      } else {
        res.json(tag);
      }
    });
  },

  getTagById: function (req, res) {
    tagModel.getTagById(req.params.id, function (error, tag) {
      if (error) {
        res.json(error);
      } else {
        res.json(tag);
      }
    });
  },

  getTags: function (req, res) {
    tagModel.all(function (error, tags) {
      if (error) {
        res.json(error);
      } else {
        res.json(tags);
      }
    });
  },

  /**
   * Get all products based on wearable ids. based on url path /id/id/id
   * @return {array} product array
   */
  getAll: function (req, res) {
    var wearables = req.params[0].split("/");
    updatePusher(p.pusher, p.channels.user.channelName, p.channels.user.eventName, "user is looking at these products: " + wearables.toString());
    res.json(getProductsFromIdList(wearables));
  },

  /**
   * Get all products based on wearable ids. based on url path ?id=1&id=2&id=3
   * @return {array} product array
   */
  queryAll: function (req, res) {
    updatePusher(p.pusher, p.channels.user.channelName, p.channels.user.eventName, "user is looking at these products: " + req.query.id.toString());
    res.json(getProductsFromIdList(req.query.id));
  }

};
