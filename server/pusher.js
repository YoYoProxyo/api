var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '146512',
  key: '4b524aba332c3314b072',
  secret: 'a7fb53b25d7a05f7029d',
  encrypted: true
});

var channels = {
  user: {
    channelName: "my_channel",
    eventName: "new_message"
  },
  transactions: {
    channelName: "",
    eventName: ""
  }
};

pusher.port = 443;

module.exports = {
  pusher: pusher,
  channels: channels
};
