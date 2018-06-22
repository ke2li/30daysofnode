var fs = require('fs');
var date1 = new Date();
var time_start = date1.getTime();
console.log("starting at : " + time_start);
console.log("Lets start reading file");

var filename = 'output.txt';
var content = fs.readFileSync(filename);
console.log('Content : ' + content);

var date2 = new Date();
var time_end = date2.getTime();
console.log("finishing at : " + time_end);
var execution_time = time_end - time_start;
console.log("Time for execution: " + execution_time);

console.log("another task to be executed");