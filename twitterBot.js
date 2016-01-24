var TwitterBot = require("node-twitterbot").TwitterBot,
    request = require("request");


var Bot = new TwitterBot({
  "consumer_secret": "KEY_HERE",
  "consumer_key": "KEY_HERE",
  "access_token": "KEY_HERE",
  "access_token_secret": "KEY_HERE"
});

// Bot.tweet("I'm posting a tweet!");

var Tweet = function(tweetObj) {
  this.title = tweetObj.title;
  this.year = tweetObj.year;
  this.time = tweetObj.time;
  this.description = tweetObj.description;
  this.tweeted = false;
};
var TweetQueue = function(createdAt) {
  this.createdAt = Date.now();
  this.storage = [];
  this.tweeted = [];
  this.skippedTweets = [];
};
TweetQueue.prototype.enqueue = function(tweet) {
  this.storage.push(tweet);
};
TweetQueue.prototype.dequeue = function() {
  var tweet = this.storage.shift();
  return tweet;
};
TweetQueue.prototype.size = function() {
  return this.storage.length;
};
TweetQueue.prototype.peek = function() {
  return this.storage[0];
};
TweetQueue.prototype.post = function() {
  var tweet = this.dequeue();
  if (this.tweeted.indexOf(tweet) > -1 && this.skipped.indexOf(tweet) > -1) {
    return 'This title has already been tweeted or skipped';
  } else {
      var tweetText = '';
      for (var key in tweet) {
        if (tweet[key]) {
          if (key === 'description') {
            tweetText += tweet[key].slice(0, tweetText.length - 129) + '... #netflix';
          }
          else {
            tweetText += tweet[key] + ' '
          }
      }
    }
    // TODO write RegExp to verify proper tweet
  Bot.tweet(tweetText);
  console.log('Tweeted this: ', tweetText);
  }
};
TweetQueue.prototype.skip = function() {
  var skipped = this.dequeue();
  this.skippedTweets.push(skipped);
  console.log('Skipped this tweet: ', skipped.title + skipped.description);
};
// API OPTIONS:
var options = {
  url: "https://unogs-unogs-v1.p.mashape.com/api.cgi?q=get:new8:US&t=ns&st=adv",
  headers: {
    "Accept": "application/json",
    "X-Mashape-Key": "KEY_HERE"
  }
};
TweetQueue.prototype.getTweets = function() {
  var self = this;
  var data = null;
  var tweetObj = [];
  request(options, function(error, response, body) {
    data = JSON.parse(body).ITEMS;
      data.forEach(d => {
      var obj = {};
      obj.title =  d[1],
      obj.year =  d[7],
      obj.time =  d[8]
      obj.description =  d[3],
      tweetObj.push(obj);
      tweetObj.reverse();
    });
      tweetObj.forEach(t => {
        var newT = new Tweet(t);
        self.enqueue(newT);
      })
  });
};


module.exports = new TweetQueue();
  