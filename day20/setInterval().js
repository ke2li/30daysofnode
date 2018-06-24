function hello() {
	console.log("this will run recursively");
}
console.log("it will print the data recursively after a delay of 2000ms");
setInterval(hello, 2000);