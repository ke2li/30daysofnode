var fs = require('fs');

var filename = 'content.txt';

fs.unlink(filename, (err) => {
	if(err) throw err;
	console.log('File renamed successfully');
});

var fs = require('fs');
var filename = 'data.txt';
fs.unlinkSync(filename);
console.log('File deleted successfully');