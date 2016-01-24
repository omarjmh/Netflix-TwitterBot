var TwitterBot = require("node-twitterbot").TwitterBot;

// Include your access information below
var Bot = new TwitterBot();

Bot.tweet("I'm posting a tweet!");


/*
Notes:
var Bot = new TwitterBot("path-to-config.json");

 */