var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db) => {
	if(err) throw err;
	console.log("Database demo_db created successfully");
	db.close;
});