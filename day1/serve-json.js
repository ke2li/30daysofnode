var http = require("http");
var fs = require("fs");

console.log('Server will listen at : 127.0.0.1:3000');

http.createServer((req, res) =>{
	console.log("Port Number : 3000");
	res.writeHead(200, {'Content-Type': 'application/json'});
	let json_response = {
		status : 200,
		message : 'successful',
		result : ['sunday', 'monday', 'tuesday', 'wednesday'],
		code: 2000
	}
	console.log('Server running');
	res.end(JSON.stringify(json_response));
}).listen(3000);