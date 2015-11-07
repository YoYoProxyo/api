var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '152797',
  key: 'b3f1f71161822941f884',
  secret: '8896a0335a7f53b55be9',
  encrypted: true
});

var channels = {
  user: {
    channelName: "user-activity",
    eventName: "user-nearable"
  },
  transactions: {
    channelName: "",
    eventName: ""
  }
};

pusher.port = 443;

var count = 0;

var test = setInterval(function () {
  if (count === 10) {
    clearInterval(test);
    return;
  }
  count++;
  pusher.trigger(channels.user.channelName, channels.user.eventName, {
    "message": "hello " + count + " times"
  });

}, 1000);

module.exports = {
  pusher: pusher,
  channels: channels
};
