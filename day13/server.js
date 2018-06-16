var mongo = require("mongodb");
var express= require("express");
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');
var new_db = "mongodb://localhost:27017/database_name";
var app = express();

app.get('/', (req,res) =>{
	res.set({
		'Access-Control-Allow-Origin': '*'
	});
	return res.redirect('/public/index.html');
}).listen(3000);

console.log('server listening at 3000');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var getHash = (pass, phone) =>{
	var hmac = crypto.createHmac('sha512', phone);
	data = hmac.update(pass);
	gen_hmac = data.digest('hex');

	console.log("hmac : " +gen_hmac );
	return gen_hmac;
}

app.post('/sign_up', (req, res) =>{
	var name = req.body.name;
	var email = req.body.email;
	var pass = req.body.password;
	var phone = req.body.phone;
	var password = getHash(pass, phone);

	var data = {
		"name":name,
		"email":email,
		"password":password,
		"phone":phone
	}

	mongo.connect(new_db, (err, db)=>{
		if(err) throw err;

		var dbo = db.db("mydb");
		console.log("connected to database succesfully");
		dbo.collection("details").insertOne(data, (err, collection) =>{
			if(err) throw err;
			console.log("record inserted succesfully");
			console.log(collection);
		});
	});

	console.log("DATA is " + JSON.stringify(data) );
	res.set({
		'Access-Control-Allow-Origin' : '*'
	});
	return res.redirect('/public/success.html')
});