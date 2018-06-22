var fs = require('fs');
var date1 = new Date();
var time_start = date1.getTime();
console.log("starting at : " + time_start);
console.log("Lets start reading file");

var filename = 'output.txt';
fs.readFile('output.txt', (err,data) =>{
	if(err) throw err;
	console.log('Content: ' + data);
});

var date2 = new Date();
var time_end = date2.getTime();
console.log("finishing at : " + time_end);
var execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time);

console.log("another task to be executed");