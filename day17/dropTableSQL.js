var mysql = require('mysql');

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

var drop_T = 'DROP table details';

connect.connect((err)=>{
	if(err) throw err;

	connect.query(drop_T, (err,res)=>{
		if(err) throw err;
		console.log('details table is removed successfully');
	});
});