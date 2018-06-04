var fs = require('fs');

fs.rename('data.txt', 'new_data.txt', (err) =>{
	if (err) throw err;
	console.log("File renamed successfully");
});

console.log("method is async");

fs.renameSync('data.txt', 'newData.txt');
console.log('File renamed sync');

console.log("method is sync");