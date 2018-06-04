var fs = require('fs');

var content = "this is content for the file";
fs.writeFile('message.txt', content, (err) => {
	if(err) throw err;
	console.log("Content saved");
});

var content = "file written synchronously";
fs.writeFileSync('content.txt', content);
console.log("Content synchronously saved");