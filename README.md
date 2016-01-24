## A Twitter bot that tweets the latest additions to Netflix

>###### An instance of `new TweetQueue()` can do the following:
> 
> 1.   Query an external API to get the latest additions to netflix (USA only, for now) 
> 2.   Clean that data, and parse it into 'new Tweet()' instances 
> 3.   The `Tweets` are then placed in a queue.
> 4.   You can take a `peek()` at the next tweet and either `post()` it or `skip()` it
> 
<br>
>
>
> >As of right now this app only runs through the terminal, in node.
you must have a twitter application's auth/api keys and a whay to get the 
list of new vids, I used this: its free for up to 100 calls a day. Just dont forget to 
gitignore that key and you (we) should be fine.

Instructions:

### Fork/clone this down, run `npm install`...then in the terminal:

    $node // get into the node terminal
  ```js
      var TQ = new TweetQueue();
      TQ.getTweets();
      TQ.peek()
      TQ.post()
      TQ.skip();
  ```