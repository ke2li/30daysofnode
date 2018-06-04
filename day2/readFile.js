var fs = require('fs');

fs.readFile('message.txt', (err,data) => {
	if(err) throw err;
	console.log("Content: " + data);
});

var filename = 'content.txt';
var content = fs.readFileSync(filename);
console.log("Sync content: " + content);