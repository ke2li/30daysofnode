var express = require('express');
var app = express();

app.get('/', (req,res) =>{
	res.send('Simple ex of routes!');
});

app.get('/signup', (req,res) =>{
	res.send('Demo route for sign up');
});

app.get('/signin' , (req, res) =>{
	res.send('Demo route for sign in');
});

app.get('/signin/dashboard' , (req,res)=>{
	res.send('Demo route for user who signed in and reaches their dashboard');
});

app.listen(3000, () =>{
	console.log('Server is listening on 3000');
});