var mongo = require('mongodb');
var new_db = "mongodb://localhost:27017/demo_db"

mongo.connect(new_db, (err, db)=>{
	if(err) throw err;

	var query = {age : {$gt : "22" } };
	var data = {$set : {age: "above 22"} };
	var dbo = db.db("mydb");

	dbo.collection("details").updateMany(query, data, (err, res) =>{
		if(err) throw err;

		console.log(res.result.nModified + " records updated succesfully");
		//console.log(res);
		db.close();
	})
})