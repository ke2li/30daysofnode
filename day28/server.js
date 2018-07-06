var express = require('express');
var app = express();
var server = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');
var io = require('socket.io')(server);;
var Twitter = require('twitter');
var request = require('request');
var mysql = require('mysql');

var connect = mysql.createPool({
	host:'localhost',
	user : 'root',
	password : '',
	database : 'my_db'
});

var client = new Twitter({
	consumer_key : '',
	consumer_secret : '',
	access_token_key : '',
	access_token_secret : ''
});

server.listen(3000);
console.log("Server listening at : 3000");

app.get('/', (req,res) =>{
	res.set({
		'Access-Control-Allow-Origin':'*'
	});
	return res.redirect('/public/index.html');
});

app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

io.on('connection',(socket) =>{
	socket.emit('welcome', {data : 'welcome'});
	socket.on('keyword', (data) =>{
		console.log(data);
		var keyword = data.keyword;
		var stream = client.stream('statuses/filter', {track: keyword});

		stream.on('data', (event) =>{
			var tweet = event.text;
			var user = event.user.name;
			var insert_R = 'INSERT INTO tweet_repo(keyword,user,tweet) VALUE(?,?,?)';

			connect.getConnection((err,connection)=>{
				connection.query(insert_R, [keyword,user,tweet], (err,res)=>{
					if(err) throw err;
					else{
						var content = {
							keyword : keyword,
							user : user,
							tweet : tweet
						}
						console.log("Keyword is ::>> " + keyword);
						console.log("Tweeted by ::>> " + event.user.name);
						console.log("Tweet is ::>> " + event.text);
						console.log('Details added successfully');
						socket.emit('livetweets', {data:content});
					}
				});
			})
		})
	})
})
