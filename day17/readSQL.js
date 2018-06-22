var mysql = require('mysql');

var connect = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'test'
});

var read_R = 'SELECT * FROM details';
connect.connect((err) =>{
	if (err) throw err;

	connect.query(read_R, (err, data) =>{
		if(err) throw err;
		console.log(data);
	});
});