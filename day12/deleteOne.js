var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) =>{
	if(err){
		throw err;
	}

	var query = {age : "above 22"};

	var dbo = db.db("mydb");

	dbo.collection("details").deleteOne(query, (err, collection) =>{
		if(err) throw err;
		console.log(collection.result.n + " records deleted succesfully");

		db.close();
	})
})