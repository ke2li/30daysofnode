function hello(){
	console.log("This will not run at all");
}
console.log("it is supposed to print the data once after a delay of 2000ms");
var tim = setTimeout(hello,2000);
clearTimeout(tim);