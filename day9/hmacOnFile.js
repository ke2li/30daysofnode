var crypto = require('crypto');
var fs = require('fs');

var algorithm = 'md5';
var secret = 'secret';
var hmac = crypto.createHmac(algorithm, secret);

var filename = "data.txt";
var file_data = fs.ReadStream(filename);

file_data.on('data', (data) =>{
	hmac.update(data);
});

file_data.on('end', () =>{
	var gen_hmac = hmac.digest('hex');
	console.log("Hash generated using " + algorithm + '\nHashed output is : ' + gen_hmac + '\nFile name is : ' + filename);
	fs.writeFileSync(filename, gen_hmac); 
})