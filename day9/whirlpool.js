var crypto = require('crypto');
var hash = crypto.createHash('whirlpool');
data = hash.update('nodejsera', 'utf-8');
gen_hash = data.digest('hex');
console.log("hash : " + gen_hash);