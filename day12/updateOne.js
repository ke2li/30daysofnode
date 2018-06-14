var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) =>{
	if(err) throw err;

	var query = {name: "rishabhio"};
	var data = {$set: {name : "nodejsera", mobile : "1234567890"}};

	var dbo = db.db("mydb");

	dbo.collection("details").updateOne(query, data, (err, collection) => {
		if(err) throw err;
		console.log("record updated successfully");
		console.log(collection);
		db.close();
	});
});