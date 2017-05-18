# twitterbot
Nodjs twitter bot

# Concept
This twitter bot will read lines from the tweets.txt and push status to the twitter account.
This is done on a specified interval.


#Pre Steps
There are some pre-steps before execution

You will also need to create an app account on https://dev.twitter.com/apps

- Sign in with your Twitter account
- Create a new app account
- Modify the settings for that app account to allow read & write
- Generate a new OAuth token with those permissions
- Following these steps will create 4 tokens that you will need to place in the configuration file discussed below.
- Copy config-dist.js to config.js
- Put your tokens in config.js
- Define the interval of tweets in the bot.js
- Put statuses in the tweets.txt

#Install the node packages
$ npm install


#Execute the program
$ node bot.js > stdout.txt 2> stderr.txt &
