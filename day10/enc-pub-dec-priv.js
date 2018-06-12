var crypto = require('crypto');
var fs = require('fs');

pubK = privK = fs.readFileSync('pub.key').toString();

var buf = Buffer.from('This is secret code', 'utf8');

secretData = crypto.publicEncrypt(pubK, buf);
console.log(secretData.toString('utf8'));

privK = {
	key: fs.readFileSync('priv.key').toString(),
	passphrase: 'nodejsera'
}

origData = crypto.privateDecrypt(privK, secretData);
console.log(origData.toString());