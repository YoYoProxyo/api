var tagModel = require(__dirname + "/../../../db").Tag;
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

  tags: function (req, res) {

    tagModel.all()
      .then(function (tags) {
        res.json(tags || {});
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });

  },

  tag: function (req, res) {
    tagModel.one(req.params.id)
      .then(function (tag) {
        res.json(tag);
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  update: function (req, res) {
    tagModel.put(req.body)
      .then(function (result) {
        res.json(result);
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  updateById: function (req, res) {
    var tagObject = req.body;
    tagObject._id = tagObject._id || req.params.id;
    tagModel.put(tagObject)
      .then(function (result) {
        res.json(result);
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  remove: function (req, res) {
    tagModel.delete({ _id: req.params.id })
      .then(function (result) {
        res.json(result || {});
      })
      .then(null, function (error) {
        res.json({ error : error.message });
      });
  },

  insert: function (req, res) {
    tagModel.add(req.body)
      .then(function (tag) {
        res.json(tag || {});
      })
      .then(null, function (error) {
        res.json({ error : error.message });
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
