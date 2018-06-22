var mysql = require('mysql');

var connect = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

var delete_R = 'DELETE FROM details WHERE name=?';

connect.connect((err) =>{
	if(err) throw err;
	connect.query(delete_R, ['regii'], (err,res) =>{
		if(err) throw err;
		console.log('a record is removed!');
	});
});