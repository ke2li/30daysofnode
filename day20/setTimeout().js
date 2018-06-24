function hello(){
	console.log("this will run only once");
}
console.log("it will print the data once after a delay of 2000");
setTimeout(hello,2000);