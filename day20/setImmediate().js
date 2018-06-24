function hello() {
	console.log("this will run immediately");
}
console.log("it will print the data immediately");
setImmediate(hello);