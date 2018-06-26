//buf.copy(target[, targetStart[, sourceStart[, sourceEnd]]]);

var buff = Buffer.from('Nodejsera');
var newBuff = Buffer.alloc(20);
buff.copy(newBuff);
console.log("content of newBuff : " + newBuff.toString());