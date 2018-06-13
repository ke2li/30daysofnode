var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', (req, res)=>{
	res.send('Simple ex of routes!');
});

app.get('/signup', (req, res) =>{
	var name = req.query.name;
	var email = req.query.email;
	var password = req.query.password;

	console.log(name + " " + email + " " + password);
	res.send("In signup module");
});

app.listen(3000, ()=>{
	console.log("server listening on 3000");
});