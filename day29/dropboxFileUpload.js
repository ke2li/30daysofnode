var request = require('request');
var fs = require('fs');

var access_token = "mQDh4o7mU9AAAAAAAAAABXufPs65QqPZyflhH--6RpfHCYhlKnd57g0Lfn-R3-Fe";
var filename = 'package-lock.json';
var content = fs.readFileSync(filename);

options = {
	method: "POST",
	url: 'https://content.dropboxapi.com/2/files/upload',
	headers: {
		"Content-Type" : "application/octet-stream",
		"Authorization" : "Bearer " + access_token,
		"Dropbox-API-Arg" : "{\"path\": \"/30daysofnode/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
	},
	body:content
};

request(options,(err,res,body)=>{
	console.log("Err : " + err);
	console.log("res : " + res);
	console.log("body : " + body);
})