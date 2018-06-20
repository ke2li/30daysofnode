var fs = require('fs');
var wdata = "I am working with stream for the first time";

var myWriteStream = fs.createWriteStream('aboutMe.txt');

myWriteStream.write(wdata);
myWriteStream.end();

myWriteStream.on('error', (err) =>{
	console.log(err);
});

myWriteStream.on('finish', () =>{
	console.log('data written successfully');
	console.log('now trying to read the same file using read streams');

	var myReadStream = fs.createReadStream('aboutMe.txt');

	var rContents = ''
	myReadStream.on('data', (chunk) =>{
		rContents += chunk;
	});

	myReadStream.on('error', (err) =>{
		console.log(err);
	})

	myReadStream.on('end', () =>{
		console.log('read ' + rContents);
	})
	console.log('performed read and write using streams');
});