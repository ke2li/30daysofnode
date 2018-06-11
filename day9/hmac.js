var crypto = require('crypto');
var hmac = crypto.createHmac('sha256', 'secretkey');
data = hmac.update('nodejsera');
gen_hmac = data.digest('hex');
console.log("hmac : " + gen_hmac);