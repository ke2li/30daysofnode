var http = require("http");
var fs = require('fs');
http.createServer((req, res)=>{
	console.log("port number: 3000");

	res.writeHead(200, {'Content-Type': 'video/mp4'});
	fs.exist('video.mp4', function(exists){
		if(exists){
			var rstream = fs.createReadStream('video.mp4');
			rstream.pipe(res);
		}
		else{
			res.send("404");
			res.end();
		}
	});
}).listen(3000);