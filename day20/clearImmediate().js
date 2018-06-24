function hello(){
	console.log("this will not run");
}
console.log("it is supposed to print the data immediately");
var imm = setImmediate(hello);
clearImmediate(imm);