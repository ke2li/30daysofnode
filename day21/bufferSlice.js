//buf.slice([start[, end]]);
var buff1 = Buffer.from('nodejsera');
var buff2 = buff1.slice(0,5);
console.log("content of buff2 : " + buff2.toString());