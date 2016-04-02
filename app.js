var tmi = require('tmi.js'); //tmi = twitch messenger interface

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws", 
    reconnect: true
  },
  identity: {
    username: "aeonneobot",
    password: "oauth:c52qc4y89e38kva0x5g282k0uwcsxa"
  },
  channels: ["devcoffee_"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
  client.action("devcoffee_", user['display-name'] + "go away");
});

client.on('connected', function(address, port){
  //action is setting a message
  client.action("devcoffee_", "aeonneobot is here hello");
});
