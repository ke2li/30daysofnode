const express = require('express');
const request = require('request');
const app = express();

var config = {
   client_id: process.env.github_client_id,
   client_secret: process.env.github_client_secret,
   redirect_url: 'http://localhost:3000/github/callback',
   authorize_url:'https://github.com/login/oauth/authorize',
   token_url: 'https://github.com/login/oauth/access_token',
   user_url: 'https://api.github.com/user',
   scope: 'user'
 };

 app.get('/github/auth', (req,res)=>{
 	return res.redirect(config.authorize_url);
 });

 app.get('/github/callback',(req,res)=>{
 	var code = req.query.code;
 	options=  {
 		method:'POST',
 		uri:config.token_url,
 		formData:{
 			client_id : config.client_id,
 			client_secret : config.client_secret,
 			code: code
 		},
 		headers: {
 			accept: 'application/json'
 		}
 	};

 	request(options, (e,r,b)=>{
 		if(b){
 			jb = JSON.parse(b);
 			options_user = {
 				method:'GET',
 				url: config.user_url+'?access_token=' + jb.access_token,
 				headers:{
 					accept: 'application/json',
 					'User-Agent': 'custom'
 				}
 			}
 			request(options_user, (ee,rr,bb)=>{
 				if(bb){
 					var bo = JSON.parse(bb);
 					var resp = {
 						name: bo.name,
 						url: bo.url,
 						id: bo.id,
 						bio: bo.bio
 					}
 					return res.json(resp)
 				}
 				else{
 					console.log(er);
 					return res.json(er);
 				}
 			});
 		}
 	});
 });

 app.listen(3000, () =>{
 	console.log("30daysof node github-api app listening on port 3000");
 })