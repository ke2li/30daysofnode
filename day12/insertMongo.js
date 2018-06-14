var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) => {
	if(err) throw err;

	var data = {name: "rishabhio", age : "25", mobile:"1234567890"}

	var dbo = db.db("mydb");

	dbo.collection("details").insertOne(data, (error , res) => {
		if(error) throw error;
		console.log("Record inserted successfully");
		console.log(res);
		db.close();
	});
});