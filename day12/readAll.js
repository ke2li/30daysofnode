var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) =>{
	if(err) throw err;

	var dbo = db.db("mydb");

	dbo.collection("details").find({}).toArray( (err, collection) =>{
		if(err) throw err;

		console.log("record read successfully");
		console.log(collection);
		db.close();
	});
});