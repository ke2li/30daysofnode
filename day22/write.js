var stringDecoder = require('string_decoder').StringDecoder;
var sd = new stringDecoder('utf-8');
var buff = Buffer('data to be buffered');
console.log(buff);
console.log(sd.write(buff));

//stringDecoder.end([buffer])
