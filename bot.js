console.log('The bot is starting');

var Twit = require('twit');
var config = require('./config');
var rl = require('readline-specific')
var fs = require('fs');

var T = new Twit(config);

lineNo = 1;
// interval is set for 1 min
// it will tweet again in 1 min, change it as per your requirement
setInterval(tweetIt, 1000 * 60)
tweetIt();

function tweetIt() {
	// read the line from the tweets.txt
	var getStatus = function getStatus(lineNo) {
		rl.oneline('./tweets.txt', lineNo, posttweet) 
		global.lineNo++; // increase the Line no , so that next status can be picked
	}
	getStatus(global.lineNo);

	function posttweet(err, res) {
		if (err)
			console.error(err) //handling error
		console.log(res) //print content
		T.post('statuses/update', {
			status : res
		}, tweeted);
	}

	function tweeted(err, data, response) {
		if (err) {
			console.log(err.stack + "Something went wrong!");
		} else {
			console.log(" tweeted");
		}
	}
}
