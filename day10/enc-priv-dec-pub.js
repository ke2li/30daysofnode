var crypto = require('crypto');
var fs = require('fs');

privK = {
	key: fs.readFileSync('priv.key').toString(),
	passphrase: 'nodejsera'
}

var buf = Buffer.from('rishabh', 'utf8');

secretData = crypto.privateEncrypt(privK, buf);
console.log(secretData.toString('utf8'));

pubK = fs.readFileSync('pub.key').toString();

origData = crypto.publicDecrypt(pubK, secretData);

console.log(origData.toString());
