var fs = require('fs');

new_data = "this data will be appended at the end of the file.";
fs.appendFile('message.txt', new_data, (err)=>{
	if(err) throw err;
	console.log('new content appended successfully');
});

var content = "appending file synchronously";
fs.appendFileSync('content.txt', content);
console.log("File appended synchronously");