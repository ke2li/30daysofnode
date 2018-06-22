var mysql = require('mysql');

var connect = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: '',
	database: 'test'
});

var insert_R = "INSERT INFO details(name,age) VALUE(?,?)";
connect.connect((err) =>{
	if(err) throw err;
	connect.query(insert_R, ['rejii,24'], (err,res)=>{
		if(err) throw err;
		console.log('details added successfully');
	});
});