function hello(){
	console.log("this will not run at all");
}
console.log("it is supposed to print the data recursively after a delay of 2000ms");
var s_int = setInterval(hello, 2000);
clearInterval(s_int);