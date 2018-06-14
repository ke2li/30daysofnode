var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) =>{
	if(err) throw err;

	var dbo = db.db("mydb");

	dbo.collection("details").findOne({} ,(err, collection) =>{
		if(err) throw err;

		console.log("Record read successfully");
		console.log(collection);
		db.close();
	});
});