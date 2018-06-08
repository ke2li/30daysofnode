connection.on('error' (err) => {
	console.error(err);
});

var fs = require('fs');

fs.readFile('message.txt', (err, data) =>{
	if(err) return console.error(err);
	console.log("Content: " + data);
})