var crypto = require('crypto');
var hash = crypto.createHash('sha224');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);