var http = require("http");

var host = '127.0.0.1';
var port = 3000;

var server = http.createServer((req, res) =>{
	res.writeHead(200, {"Content-Type": "text/plain"} );
	console.log("server working");
	res.end("server working success");
});

server.listen(port,host, (err) => {
	if(err) {
		return console.log('Error occured: ', err);
	}

	console.log("server is listening on " + host + ':' + port);
});