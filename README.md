## A Twitter bot that tweets the latest additions to Netflix

>###### An instance of `new TweetQueue()` can do the following:
> 
> 1.   Query an external API to get the latest additions to Netflix (USA only, for now) 
> 2.   Clean that data, and parse it into 'new Tweet()' instances 
> 3.   The `Tweets` are then placed in a queue.
> 4.   You can take a `peek()` at the next tweet and either `post()` it or `skip()` it
> 
<br>
>
>
> >As of right now this app only runs through the terminal, in node.
you must have a Twitter application's auth/api keys and a way to get the 
list of new vids, I used this: 

http://unogs.com/

Its free for up to 100 calls a day. Just don't forget to 
gitignore that key and you (we) should be fine.

####Instructions:

##### Fork/clone this down, run `npm install`

    git clone https://github.com/omarjmh/Netflix-TwitterBot
    npm install
    node // control the bot in the terminal through node

##### Then in the terminal:
  ```js
      var TQ = new TweetQueue();
      TQ.getTweets();
      TQ.peek()
      TQ.post()
      TQ.skip();
  ```